import Link from "next/link";
import { APPSTORE_LINK, PLAYSTORE_LINK } from "@/constants/links";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-white/5 py-14 glass-panel mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200/60 dark:border-white/5">
          {/* Brand info */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <Link className="flex items-center gap-3 group" href="/">
              <div className="w-8 h-8 rounded-lg bg-white dark:bg-brand-surface border border-orange-500/20 dark:border-brand-borderLime flex items-center justify-center p-1 shadow-sm">
                <img src="/logo.svg" alt="FreakyFit Logo" className="w-full h-auto object-contain" />
              </div>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                FreakyFit
              </span>
            </Link>
            <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
              Stop screenshotting workouts. Turn saved reels from Instagram &amp; TikTok into structured, trackable gym routines.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-gray-400">
              <li>
                <Link href="/#how-it-works" className="hover:text-[#FF5E1A] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#interactive-preview" className="hover:text-[#FF5E1A] transition-colors">
                  Interactive Demo
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-[#FF5E1A] transition-colors">
                  All Features
                </Link>
              </li>
              <li>
                <a
                  href={APPSTORE_LINK}
                  className="hover:text-[#FF5E1A] transition-colors"
                >
                  iOS App
                </a>
              </li>
              <li>
                <a
                  href={PLAYSTORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5E1A] transition-colors"
                >
                  Android App
                </a>
              </li>
            </ul>
          </div>

          {/* Free Tools */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Free Tools
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-gray-400">
              <li>
                <Link href="/tools/1rm-calculator" className="hover:text-[#FF5E1A] transition-colors">
                  1RM Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/reel-workout-formatter" className="hover:text-[#FF5E1A] transition-colors">
                  Reel Workout Formatter
                </Link>
              </li>
              <li>
                <Link href="/tools/macro-tdee-calculator" className="hover:text-[#FF5E1A] transition-colors">
                  Macro &amp; TDEE Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-[#FF5E1A] font-semibold hover:underline">
                  Browse All Tools →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-gray-400">
              <li>
                <Link href="/blog/en" className="hover:text-[#FF5E1A] transition-colors">
                  Blog (English)
                </Link>
              </li>
              <li>
                <Link href="/blog/hi" className="hover:text-[#FF5E1A] transition-colors">
                  ब्लॉग (हिन्दी)
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#FF5E1A] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#FF5E1A] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-gray-500">
          <span>© 2026 FreakyFit by Truemind Labs. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link className="hover:text-[#FF5E1A] transition-colors" href="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link className="hover:text-[#FF5E1A] transition-colors" href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

