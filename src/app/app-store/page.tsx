import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PLAYSTORE_LINK } from "@/constants/links";

export const metadata: Metadata = {
  title: "Apple App Store - Coming Soon | FreakyFit",
  description:
    "FreakyFit is currently available on Android. The iOS app for iPhone & iPad is coming soon to the Apple App Store.",
};

export default function AppStoreComingSoonPage() {
  const envTheme = (
    process.env.NEXT_PUBLIC_THEME ||
    process.env.THEME ||
    "light"
  ).toLowerCase();
  const defaultTheme = envTheme === "light" ? "light" : "dark";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-dark text-slate-700 dark:text-gray-300 font-sans selection:bg-[#FF5E1A] selection:text-white">
      <Navbar defaultTheme={defaultTheme} />

      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-2xl relative overflow-hidden text-center">
          {/* Subtle gradient aura */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF5E1A]/15 dark:bg-[#FF5E1A]/20 blur-3xl pointer-events-none rounded-full"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Apple / App Store Badge */}
            <div className="w-20 h-20 rounded-3xl bg-slate-950 dark:bg-zinc-900 text-white flex items-center justify-center shadow-xl mb-6 border border-slate-800 dark:border-white/10 relative">
              <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.92.04-2.02.62-2.67 1.37-.58.66-1.09 1.74-.96 2.76 1.03.08 2.1-.53 2.71-1.28z"></path>
              </svg>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FF5E1A] animate-pulse"></span>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#FF5E1A]">
                Apple App Store • Coming Soon
              </span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              Coming Soon to the
              <span className="block text-[#FF5E1A]">Apple App Store</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
              FreakyFit is currently available exclusively on <strong className="text-slate-900 dark:text-white">Android</strong>. Our iOS app for iPhone &amp; iPad is in final review with Apple and will be available very soon.
            </p>

            {/* Android Callout Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-100 dark:bg-zinc-900/90 border border-slate-200 dark:border-white/10 w-full mb-8 text-center shadow-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-xs mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Currently Live on Android
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">
                Have an Android device?
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                FreakyFit is ready for you today. Turn workout reels into clean routines with rest timers and gym logging.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={PLAYSTORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#FF5E1A] text-white font-display font-extrabold text-sm hover:opacity-95 transition-all shadow-[0_0_30px_rgba(255,94,26,0.35)] transform hover:scale-[1.03]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/google-play.svg" alt="Google Play" className="h-6 w-auto" />
                  <span>Download on Google Play</span>
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full glass-panel border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white font-display font-bold text-sm hover:border-[#FF5E1A] transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>

            {/* Feature highlights preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-10 text-left">
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FF5E1A]/10 flex items-center justify-center text-[#FF5E1A] mb-2 font-bold">
                  ⚡
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-1">
                  Reel Import
                </h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                  Extract workouts from Instagram, TikTok &amp; YouTube Shorts.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FF5E1A]/10 flex items-center justify-center text-[#FF5E1A] mb-2 font-bold">
                  ⏱️
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-1">
                  Gym Logger
                </h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                  Track reps, weights, rest timers, and progressive overload.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FF5E1A]/10 flex items-center justify-center text-[#FF5E1A] mb-2 font-bold">
                  📱
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-1">
                  Offline Mode
                </h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                  Your saved workout routines available anytime at the gym.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 dark:text-gray-500">
              Want early TestFlight access or have questions? Reach us at{" "}
              <a href="mailto:support@freakyfit.xyz" className="text-[#FF5E1A] hover:underline font-semibold">
                support@freakyfit.xyz
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
