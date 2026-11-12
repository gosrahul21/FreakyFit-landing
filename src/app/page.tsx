import type { Metadata } from "next";
import Link from "next/link";
import WebGLBackground from "@/components/WebGLBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import HeroConversionPreview from "@/components/HeroConversionPreview";
import { APPSTORE_LINK, PLAYSTORE_LINK } from "@/constants/links";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

const HOME_FAQS = [
  {
    question: "Is FreakyFit free to use?",
    answer:
      "Yes, FreakyFit is free to download and start organizing your favorite workouts with all essential import features.",
  },
  {
    question: "Where can I save workouts from?",
    answer:
      "You can import clips directly via share links from Instagram Reels, TikTok, and YouTube Shorts, or paste manual workout notes directly.",
  },
  {
    question: "Does FreakyFit replace a workout or coaching app?",
    answer:
      "FreakyFit is designed to bridge the gap between social media inspiration and execution by giving you a clear timer and routine manager for routines you actually want to do.",
  },
];

export default function Home() {
  const envTheme = (
    process.env.NEXT_PUBLIC_THEME ||
    process.env.THEME ||
    "light"
  ).toLowerCase();
  const defaultTheme = envTheme === "light" ? "light" : "dark";
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: `${SITE_URL}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar defaultTheme={defaultTheme} />

      <main className="relative pt-14 lg:pt-24 pb-24 overflow-hidden">
        <div className="absolute inset-0 w-full h-[1100px] pointer-events-none opacity-50 dark:opacity-45 z-0">
          <div className="absolute inset-0 w-full h-full">
            <WebGLBackground />
          </div>
        </div>

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#FF5E1A]/10 dark:bg-[#FF5E1A]/15 blur-[150px] pointer-events-none rounded-full z-0" />
        <div className="absolute top-[500px] right-[-100px] w-[500px] h-[500px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* 2-Column Hero Skeleton */}
          <section
            id="how-it-works"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
          >
            {/* Left Column: Headline, Copy, Store CTAs, QR */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] tracking-tight text-slate-900 dark:text-white leading-[1.06] mb-5">
                Turn saved workout reels into routines{" "}<br/>
                <span className="bg-gradient-to-r from-[#FF5E1A] via-[#FF7A00] to-[#FFA133] bg-clip-text text-transparent text-glow">
                  You can follow
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-md font-normal leading-relaxed mb-8">
                Share an Instagram or TikTok workout to FreakyFit. It pulls out
                the exercises, sets, reps and rest, so you can stop
                screenshotting and start lifting.
              </p>

              <div className="flex flex-row items-start gap-3.5 w-full sm:w-auto mb-8">
                <Link
                  className="group inline-flex items-center gap-3.5 px-7 py-3.5 rounded-full bg-[#FF5E1A] text-white hover:opacity-95 transition-all transform hover:scale-[1.02] shadow-[0_0_30px_rgba(255,94,26,0.3)]"
                  href={APPSTORE_LINK}
                  {...(APPSTORE_LINK.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.92.04-2.02.62-2.67 1.37-.58.66-1.09 1.74-.96 2.76 1.03.08 2.1-.53 2.71-1.28z" />
                  </svg>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">
                      Download on the
                    </span>
                    <span className="font-display font-extrabold text-base tracking-tight">
                      App Store
                    </span>
                  </div>
                </Link>

                <a
                  className="group inline-flex items-center gap-3.5 px-7 py-3.5 rounded-full glass-panel border border-slate-300/80 dark:border-white/10 hover:border-[#FF5E1A]/50 dark:hover:border-brand-borderLime text-slate-800 dark:text-white transition-all transform hover:scale-[1.02] shadow-md dark:shadow-lg"
                  href={PLAYSTORE_LINK}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    className="w-6 h-6 fill-current text-[#FF5E1A] dark:text-brand-lime"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.198-.182-.31-.44-.31-.72V2.534c0-.28.112-.538.31-.72zm11.235 11.238l2.25 2.25-11.458 6.55 9.208-8.8zm0-2.104l-9.208-8.8 11.458 6.55-2.25 2.25zm1.533 1.052l3.473-1.984c.646-.37.646-.97 0-1.34l-3.473-1.984-2.25 2.25 2.25 2.25z" />
                  </svg>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-gray-400">
                      Get it on
                    </span>
                    <span className="font-display font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>

              <div className="inline-flex items-center gap-3.5 px-4 py-3 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/10">
                <div
                  className="w-12 h-12 p-1.5 rounded-lg bg-white border border-slate-200 shrink-0 flex items-center justify-center"
                  aria-label="QR code to install FreakyFit"
                >
                  <svg
                    viewBox="0 0 29 29"
                    className="w-full h-full text-slate-900"
                    fill="currentColor"
                    shapeRendering="crispEdges"
                  >
                    <path d="M0 0h7v7H0V0zm1 1v5h5V1H1zm1 1h3v3H2V2z" />
                    <path d="M22 0h7v7h-7V0zm1 1v5h5V1h-5zm1 1h3v3h-3V2z" />
                    <path d="M0 22h7v7H0v-7zm1 1v5h5v-5H1zm1 1h3v3H2v-3z" />
                    <path d="M9 1h2v2H9V1zm4 0h3v2h-3V1zm5 0h2v3h-2V1zM10 4h2v2h-2V4zm4 1h2v2h-2V5zm4 1h3v2h-3V6zM1 9h2v2H1V9zm4 0h3v2H5V9zm5 0h2v3h-2V9zm4 1h2v2h-2v-2zm4-1h2v2h-2V9zm4 1h3v2h-3v-2zm4 0h3v3h-3v-3zM2 13h2v2H2v-2zm4 0h3v3H6v-3zm5 1h3v2h-3v-2zm5-1h2v3h-2v-3zm4 1h2v2h-2v-2zm4-1h2v2h-2v-2zM1 17h3v2H1v-2zm5 0h2v3H6v-3zm4 0h3v2h-3v-2zm5 1h2v2h-2v-2zm4-1h3v2h-3v-2zm5 0h3v3h-3v-3zM9 22h2v2H9v-2zm4 0h3v2h-3v-2zm5 1h2v2h-2v-2zm4-1h2v3h-2v-3zm4 0h3v2h-3v-2zM10 26h2v3h-2v-3zm4 0h2v2h-2v-2zm4 1h3v2h-3v-2zm5-1h2v3h-2v-3zm3 1h3v2h-3v-2z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-slate-600 dark:text-gray-300 leading-snug max-w-[210px]">
                  On a computer? Scan with your phone camera to install.
                </span>
              </div>
            </div>

            {/* Right Column: Reel -> Routine Conversion Preview */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <HeroConversionPreview />
            </div>
          </section>

          <section className="mt-28 lg:mt-36" id="features">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FF5E1A]">
                Everything you need
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">
                Turn Chaos into Structured Progress
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base mt-3">
                Stop losing workouts in your saved tabs. FreakyFit organizes
                notes, social videos, and training splits into clean daily
                habits.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 hover:border-[#FF5E1A]/50 transition-all group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 flex items-center justify-center text-[#FF5E1A] mb-5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">
                    ios_share
                  </span>
                </div>
                <div className="font-display font-bold text-xs uppercase text-[#FF5E1A] tracking-wider mb-1">
                  Import
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                  1-Tap Social Import
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                  Convert short videos from Instagram and TikTok into
                  step-by-step routines with parsed reps, sets, and notes.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 hover:border-[#FF5E1A]/50 transition-all group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 flex items-center justify-center text-[#FF5E1A] mb-5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">
                    timer
                  </span>
                </div>
                <div className="font-display font-bold text-xs uppercase text-[#FF5E1A] tracking-wider mb-1">
                  Workout Timer
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                  Guided Session Timer
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                  Automated rest intervals, rep counts, and audio chimes keep
                  you on track throughout your gym session.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 hover:border-[#FF5E1A]/50 transition-all group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 flex items-center justify-center text-[#FF5E1A] mb-5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">
                    calendar_month
                  </span>
                </div>
                <div className="font-display font-bold text-xs uppercase text-[#FF5E1A] tracking-wider mb-1">
                  Workout Planner
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                  Daily Schedule Splits
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                  Add imported workouts directly into your calendar. Organize
                  routines into custom catalog folders and splits.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 hover:border-[#FF5E1A]/50 transition-all group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 flex items-center justify-center text-[#FF5E1A] mb-5 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">
                    local_fire_department
                  </span>
                </div>
                <div className="font-display font-bold text-xs uppercase text-[#FF5E1A] tracking-wider mb-1">
                  Streaks
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                  Milestones &amp; Streaks
                </h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                  Track consistency, total workouts completed, and stay
                  motivated as you build genuine training habits.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-28 lg:mt-36" id="metrics">
            <div className="text-center max-w-xl mx-auto mb-14">
              <h2 className="font-display font-extrabold text-3xl text-slate-900 dark:text-white mt-1">
                Hear it from our users
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 flex flex-col justify-between">
                <p className="text-sm text-slate-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  “Between flights and hotels, my workouts always fell apart. I’d forget half of what I planned. I imported a few workouts into FreakyFit and it worked better than I expected. Now I finally have structure, even on the road.”
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-white/5">
                  <div className="w-9 h-9 rounded-full bg-[#FF5E1A]/20 border border-[#FF5E1A]/40 text-[#FF5E1A] font-display font-bold flex items-center justify-center text-xs">
                    J
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      Jack
                    </div>
                    <div className="text-xs text-slate-500 dark:text-gray-400">
                      Frequent Traveler &amp; Lifter
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-orange-500/30 dark:border-brand-borderLime/40 flex flex-col justify-between shadow-sm dark:shadow-[0_0_20px_rgba(196,248,42,0.1)]">
                <p className="text-sm text-slate-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  “I had dozens of workout reels saved and never followed a single one properly. FreakyFit turns them into workouts I can actually complete.”
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-white/5">
                  <div className="w-9 h-9 rounded-full bg-[#FF5E1A]/20 border border-[#FF5E1A]/40 text-[#FF5E1A] font-display font-bold flex items-center justify-center text-xs">
                    S
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      Steven
                    </div>
                    <div className="text-xs text-slate-500 dark:text-gray-400">
                      Fitness Enthusiast
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 flex flex-col justify-between">
                <p className="text-sm text-slate-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  “My workouts were scattered across notes, saved videos, and random screenshots. FreakyFit puts everything in one place: notes, social videos, and weekly plans.”
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-white/5">
                  <div className="w-9 h-9 rounded-full bg-slate-200 dark:bg-zinc-700 text-slate-800 dark:text-white font-display font-bold flex items-center justify-center text-xs">
                    O
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      Oliva
                    </div>
                    <div className="text-xs text-slate-500 dark:text-gray-400">
                      Regular Gym Goer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-28 max-w-3xl mx-auto" id="faq">
            <div className="text-center mb-10">
              <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FF5E1A]">
                Got Questions?
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
                Frequently asked questions
              </h2>
            </div>
            <FAQAccordion items={HOME_FAQS} hideHeader defaultOpenIndex={0} />
          </section>

          <section
            className="mt-28 rounded-3xl p-8 sm:p-12 glass-panel border border-[#FF5E1A]/30 dark:border-[#FF5E1A]/40 shadow-[0_0_40px_rgba(255,94,26,0.12)] dark:shadow-[0_0_40px_rgba(255,94,26,0.15)] text-center relative overflow-hidden"
            id="download"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5E1A]/10 to-orange-400/5 dark:to-brand-lime/10 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FF5E1A] mb-2">
                Download The App
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white mb-4">
                Stop using messy saved folders, FreakyFit helps you organize
                workouts into clean routines.
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                <Link
                  className="px-6 py-3.5 rounded-full font-display font-extrabold text-sm transition-all bg-[#FF5E1A] text-white hover:opacity-90 shadow-lg shadow-[#FF5E1A]/25"
                  href={APPSTORE_LINK}
                  {...(APPSTORE_LINK.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  Download on App Store
                </Link>
                <a
                  className="px-6 py-3.5 rounded-full glass-panel border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-display font-extrabold text-sm hover:border-[#FF5E1A] transition-all"
                  href={PLAYSTORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get it on Google Play
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
