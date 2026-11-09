import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PLAYSTORE_LINK } from "@/constants/links";

export const metadata: Metadata = {
  title: "iOS App Coming Soon - FreakyFit",
  description:
    "We are currently working on the FreakyFit iOS app for iPhone & iPad. It will be live on the Apple App Store very soon.",
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
            <div className="w-20 h-20 rounded-3xl bg-slate-900 dark:bg-zinc-800 text-white flex items-center justify-center shadow-xl mb-6 border border-slate-700/60 dark:border-white/10">
              <span className="material-symbols-outlined text-[42px] text-[#FF5E1A]">
                phone_iphone
              </span>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5E1A] animate-pulse"></span>
              <span className="font-display font-bold text-xs uppercase tracking-wider text-[#FF5E1A]">
                iOS App • In Final Review
              </span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              We&apos;re working on it!
              <span className="block text-[#FF5E1A]">Live on App Store soon.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
              The FreakyFit iOS app for iPhone &amp; iPad is currently in final review with Apple. We&apos;re putting the finishing touches to deliver a seamless workout extraction experience and will be published very shortly.
            </p>

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

            {/* Android Banner & Buttons */}
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-zinc-900/90 border border-slate-200 dark:border-white/10 w-full mb-8">
              <p className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-gray-400 mb-3">
                Have an Android device? FreakyFit is already available!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={PLAYSTORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-950 text-white dark:bg-white dark:text-slate-950 font-display font-bold text-sm hover:opacity-90 transition-all shadow-md transform hover:scale-[1.02]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/google-play.svg" alt="Google Play" className="h-6 w-auto" />
                  <span>Get it on Google Play</span>
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full glass-panel border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-display font-bold text-sm hover:border-[#FF5E1A] transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">home</span>
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>

            <p className="text-xs text-slate-400 dark:text-gray-500">
              Questions or want early test flight access? Reach us at{" "}
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

