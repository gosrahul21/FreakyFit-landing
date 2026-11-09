import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppInstallCard from "@/components/AppInstallCard";
import MobileAppInstallPopup from "@/components/MobileAppInstallPopup";
import { getBlogPosts } from "@/lib/sanity";
import { Language } from "@/constants/lang.enum";

interface BlogIndexProps {
  params: Promise<{
    lang: string;
  }>;
}

export const instant = false;

const VALID_LANG_CODES = new Set<string>(Object.values(Language));

export function generateStaticParams() {
  return Object.values(Language).map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: BlogIndexProps): Promise<Metadata> {
  const { lang } = await params;
  if (!VALID_LANG_CODES.has(lang)) {
    return {
      title: "FreakyFit Blog",
    };
  }

  const isHindi = lang === "hi";
  const isTurkish = lang === "tr";

  return {
    title: isTurkish
      ? "FreakyFit Blog - Hipertrofi, Egzersiz Bilimi ve Antrenman Rehberi"
      : isHindi
      ? "फ्रीकीफिट ब्लॉग - फिटनेस रूटीन और व्यायाम विज्ञान"
      : "FreakyFit Blog - Hypertrophy, Workout Organization & Fitness Science",
    description: isTurkish
      ? "Fitness videolarını yapılandırılmış antrenman rutinlerine dönüştürün, hipertrofi biyomekaniği ve egzersiz fizyolojisini keşfedin."
      : isHindi
      ? "फिटनेस रील्स को वास्तविक वर्कआउट में बदलें, व्यायाम विज्ञान और हाइपरट्रॉफी तकनीकों को समझें।"
      : "Evidence-based fitness guides, hypertrophy biomechanics, and guides on transforming social media workout reels into structured routines.",
    alternates: {
      canonical: `https://freakyfit.truemindlabs.com/blog/${lang}`,
      languages: Object.fromEntries(
        Object.values(Language).map((l) => [
          l,
          `https://freakyfit.truemindlabs.com/blog/${l}`,
        ])
      ),
    },
  };
}

export default async function BlogIndexPage({ params }: BlogIndexProps) {
  const { lang } = await params;

  // If a user navigates to /blog/[topic] directly, default to English post /blog/en/[topic]
  if (!VALID_LANG_CODES.has(lang)) {
    redirect(`/blog/en/${lang}`);
  }

  const currentLang = lang;
  const posts = await getBlogPosts(currentLang);

  const envTheme = (
    process.env.NEXT_PUBLIC_THEME ||
    process.env.THEME ||
    "light"
  ).toLowerCase();
  const defaultTheme = envTheme === "light" ? "light" : "dark";

  const isHindi = currentLang === "hi";
  const isTurkish = currentLang === "tr";

  return (
    <>
      <Navbar currentLang={currentLang} defaultTheme={defaultTheme} />
      <MobileAppInstallPopup delayMs={10000} />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 mb-4">
            <span className="material-symbols-outlined text-[16px] text-[#FF5E1A]">menu_book</span>
            <span className="font-display font-bold text-xs uppercase tracking-wider text-[#FF5E1A]">
              {isTurkish
                ? "FreakyFit Antrenman Günlüğü"
                : isHindi
                ? "फ्रीकीफिट व्यायाम ज्ञानकोष"
                : "FreakyFit Training Chronicles"}
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {isTurkish
              ? "Hipertrofi ve Antrenman Bilimi"
              : isHindi
              ? "साइंटिफिक फिटनेस और वर्कआउट गाइड"
              : "Hypertrophy & Training Science"}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
            {isTurkish
              ? "Pratik biyomekanik, egzersiz fizyolojisi ve kaydedilen dağınık fitness videolarını kalıcı gelişime dönüştürme rehberi."
              : isHindi
              ? "व्यायाम शरीर विज्ञान, सोशल मीडिया रील्स को व्यवस्थित करने की रणनीतियाँ और मांसपेशियों के विकास पर आधारित प्रामाणिक लेख।"
              : "Practical biomechanics, exercise physiology, and frameworks for turning chaotic saved workout folders into lifelong progress."}
          </p>
        </div>

        {/* Content Layout with Right-Side Sticky Install Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article List */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="group glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-[#FF5E1A]/60 transition-all duration-200 shadow-md hover:shadow-xl relative overflow-hidden"
                >
                  {post.coverImage && (
                    <Link
                      href={`/blog/${currentLang}/${post.slug}`}
                      className="block relative w-full h-48 sm:h-64 mb-6 rounded-2xl overflow-hidden bg-slate-100 dark:bg-zinc-800"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                  )}

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-gray-400 mb-3">
                    <span className="font-semibold text-[#FF5E1A] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                    <span>•</span>
                    <span>{post.publishedAt}</span>
                  </div>

                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3 group-hover:text-[#FF5E1A] transition-colors leading-snug">
                    <Link href={`/blog/${currentLang}/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed mb-6 font-normal">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FF5E1A]/10 text-[#FF5E1A] font-bold text-xs flex items-center justify-center border border-[#FF5E1A]/30">
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-slate-900 dark:text-white block">
                          {post.author.name}
                        </span>
                        <span className="text-slate-500 dark:text-gray-400">
                          {post.author.role}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${currentLang}/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5E1A] hover:underline"
                    >
                      <span>
                        {isTurkish
                          ? "Makaleyi Oku"
                          : isHindi
                          ? "पूरा लेख पढ़ें"
                          : "Read Article"}
                      </span>
                      <span className="material-symbols-outlined text-[16px] transform group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Sidebar: App Install Card matching user image */}
          <div className="lg:col-span-4 sticky top-20">
            <AppInstallCard
              headline="Stop losing the workouts you save"
              description="FreakyFit turns workout videos from TikTok, Instagram and YouTube into clear, step-by-step workouts — then helps you plan your week and track every session. Free to start, on iPhone, iPad and Android."
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
