import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppInstallCard from "@/components/AppInstallCard";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import TableOfContents, { TOCItem } from "@/components/TableOfContents";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import MobileAppInstallPopup from "@/components/MobileAppInstallPopup";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/sanity";

interface BlogPostPageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export const instant = false;

export function generateStaticParams() {
  return [
    { lang: "en", slug: "why-dumbbells-alone-are-sufficient" },
    { lang: "hi", slug: "why-dumbbells-alone-are-sufficient" },
    { lang: "en", slug: "turn-workout-reels-into-training-split" },
    { lang: "hi", slug: "turn-workout-reels-into-training-split" },
  ];
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const currentLang = (lang === "hi" ? "hi" : "en") as "en" | "hi";
  const post = await getBlogPostBySlug(slug, currentLang);

  if (!post) {
    return {
      title: "Article Not Found - FreakyFit",
    };
  }

  return {
    title: `${post.title} - FreakyFit`,
    description: post.excerpt,
    alternates: {
      canonical: `https://freakyfit.truemindlabs.com/blog/${currentLang}/${post.slug}`,
      languages: {
        en: `https://freakyfit.truemindlabs.com/blog/en/${post.slug}`,
        hi: `https://freakyfit.truemindlabs.com/blog/hi/${post.slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://freakyfit.truemindlabs.com/blog/${currentLang}/${post.slug}`,
      siteName: "FreakyFit",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { lang, slug } = await params;
  const currentLang = (lang === "hi" ? "hi" : "en") as "en" | "hi";
  const post = await getBlogPostBySlug(slug, currentLang);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts(currentLang);
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const envTheme = (
    process.env.NEXT_PUBLIC_THEME ||
    process.env.THEME ||
    "dark"
  ).toLowerCase();
  const defaultTheme = envTheme === "light" ? "light" : "dark";

  // Extract Table of Contents from rawContent or PortableText body
  const tocItems: TOCItem[] = [];
  if (post.rawContent) {
    const headingLines = post.rawContent.split("\n");
    headingLines.forEach((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("### ")) {
        const text = trimmed.replace("### ", "").trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
        tocItems.push({ id, text, level: 3 });
      } else if (trimmed.startsWith("## ")) {
        const text = trimmed.replace("## ", "").trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
        tocItems.push({ id, text, level: 2 });
      }
    });
  } else if (Array.isArray(post.body)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    post.body.forEach((block: any) => {
      if (block._type === "block" && (block.style === "h2" || block.style === "h3")) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const text = block.children?.map((c: any) => c.text || "").join("").trim();
        if (text) {
          const id = text
            .toString()
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-");
          tocItems.push({
            id,
            text,
            level: block.style === "h2" ? 2 : 3,
          });
        }
      }
    });
  }

  const isHindi = currentLang === "hi";

  return (
    <>
      <ReadingProgressBar />
      <Navbar currentLang={currentLang} slug={post.slug} defaultTheme={defaultTheme} />
      <MobileAppInstallPopup delayMs={10000} />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Breadcrumb & Language Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-gray-400 mb-8">
          <nav className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#FF5E1A]">Home</Link>
            <span>/</span>
            <Link href={`/blog/${currentLang}`} className="hover:text-[#FF5E1A]">
              {isHindi ? "ब्लॉग" : "Blog"}
            </Link>
            <span>/</span>
            <span className="text-[#FF5E1A] font-semibold">{post.category}</span>
          </nav>
        </div>

        {/* 2-Column Editorial Grid: Left content, Right sticky app install card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            {/* Fallback Notice if Hindi requested but only English available in Sanity */}
            {isHindi && post.lang === "en" && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#FF5E1A] shrink-0">
                  translate
                </span>
                <span>
                  यह लेख वर्तमान में केवल <strong>अंग्रेज़ी</strong> में उपलब्ध है। हिन्दी अनुवाद जल्द आ रहा है।
                </span>
              </div>
            )}

            {/* Key Takeaways Box (Matching User's Reference Screenshot) */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-zinc-900/80 border border-slate-200/90 dark:border-white/10 shadow-lg mb-10 relative overflow-hidden">
                <div className="flex items-center gap-2 font-display font-black text-xs uppercase tracking-widest text-[#FF5E1A] mb-4">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>{isHindi ? "मुख्य बिंदु और निष्कर्ष" : "Key Takeaways"}</span>
                </div>
                <ul className="space-y-4">
                  {post.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-gray-300">
                      {/* Stylized accent pink/orange dot matching reference image */}
                      <span className="w-2 h-2 rounded-full bg-[#FF5E1A] mt-2 shrink-0"></span>
                      <div>
                        <strong className="font-bold text-slate-900 dark:text-white">
                          {item.title}:
                        </strong>{" "}
                        <span>{item.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* High-Impact Article Title (Matching Reference Image typography) */}
            <header className="mb-8">
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6">
                {post.title}
              </h1>

              {/* Author & Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200/80 dark:border-white/10 text-xs text-slate-500 dark:text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF5E1A]/10 text-[#FF5E1A] font-bold text-xs flex items-center justify-center border border-[#FF5E1A]/30">
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block text-sm">
                      {post.author.name}
                    </span>
                    <span>{post.author.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span>{post.publishedAt}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </header>

            {/* Article Cover Image */}
            {post.coverImage && (
              <div className="relative w-full h-[300px] sm:h-[420px] mb-8 rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-white/10 group bg-slate-100 dark:bg-zinc-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            )}

            {/* Optional Video Embed */}
            {post.videoUrl && (
              <div className="mb-8 w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-white/10 bg-black">
                <iframe
                  src={
                    post.videoUrl.includes("shorts/")
                      ? post.videoUrl.replace("shorts/", "embed/")
                      : post.videoUrl.replace("watch?v=", "embed/")
                  }
                  title="Article Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Excerpt Lead In */}
            <p className="text-lg sm:text-xl text-slate-700 dark:text-gray-300 leading-relaxed font-normal mb-8">
              {post.excerpt}
            </p>

            {/* Mobile-only Collapsible Table of Contents */}
            {tocItems.length > 0 && (
              <div className="lg:hidden mb-8">
                <TableOfContents items={tocItems} isMobile />
              </div>
            )}

            {/* Body Content via PortableText */}
            <div className="article-body">
              <PortableTextRenderer
                value={post.body}
                rawContent={post.rawContent}
              />
            </div>

            {/* Author Bio Box */}
            <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#FF5E1A]/15 text-[#FF5E1A] flex items-center justify-center font-display font-black text-xl shrink-0 border border-[#FF5E1A]/30">
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  Written by {post.author.name}
                </h4>
                <p className="text-xs text-[#FF5E1A] font-semibold mb-2">
                  {post.author.role}
                </p>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                  Passionate about translating clinical biomechanics and hyper-specific training telemetry into practical, sustainable gym routines.
                </p>
              </div>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-10 border-t border-slate-200/80 dark:border-white/10">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-6">
                  {isHindi ? "संबंधित लेख" : "Related Articles"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedPosts.map((rel) => (
                    <Link
                      key={rel._id}
                      href={`/blog/${currentLang}/${rel.slug}`}
                      className="p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/10 hover:border-[#FF5E1A]/50 transition-all group"
                    >
                      <span className="text-[10px] font-bold text-[#FF5E1A] uppercase tracking-wider block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#FF5E1A] transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-gray-400 mt-2 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Right Sidebar: Sticky Column with App Installation Card + Table of Contents */}
          <aside className="lg:col-span-4 sticky top-24 space-y-4">
            {/* Desktop Sticky Table of Contents */}
            {tocItems.length > 0 && (
              <div className="hidden lg:block">
                <TableOfContents items={tocItems} />
              </div>
            )}

            <AppInstallCard
              headline="Turn saved videos into workouts"
              description="Import from TikTok, Instagram and YouTube. Free to start, on iPhone, iPad and Android."
            />
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
