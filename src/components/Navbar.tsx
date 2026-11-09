"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface NavbarProps {
  currentLang?: string;
  slug?: string;
  defaultTheme?: "light" | "dark";
}

export default function Navbar({
  currentLang = "en",
  slug,
  defaultTheme = "light",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-slate-200/60 dark:border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link className="flex items-center gap-3 group shrink-0" href="/">
          <div className="w-10 h-10 rounded-xl bg-white dark:bg-brand-surface border border-orange-500/20 dark:border-brand-borderLime flex items-center justify-center p-1 shadow-[0_0_15px_rgba(255,94,26,0.15)] dark:shadow-[0_0_15px_rgba(255,94,26,0.25)] group-hover:border-[#FF5E1A] dark:group-hover:border-brand-lime transition-colors">
            <img src="/logo.svg" alt="FreakyFit Logo" className="w-full h-auto object-contain" />
          </div>
          <span className="font-display font-black text-2xl tracking-tight text-slate-900 dark:text-white">
            Freaky<span className="text-[#FF5E1A]">Fit</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            className="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            href="/#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            href="/#interactive-preview"
          >
            Interactive Demo
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            href="/#features"
          >
            All Features
          </Link>
          <Link
            className="text-sm font-semibold text-[#FF5E1A] dark:text-[#FF7A00] hover:text-[#FF5E1A] transition-colors flex items-center gap-1"
            href="/tools"
          >
            <span>Free Tools</span>
            <span className="text-[10px] uppercase font-extrabold px-1.5 py-0.2 rounded-full bg-[#FF5E1A]/10 border border-[#FF5E1A]/20">
              New
            </span>
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            href={`/blog/${currentLang}`}
          >
            Blog
          </Link>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLang={currentLang} slug={slug} />
          <ThemeToggle defaultTheme={defaultTheme} />

          <a
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5E1A] text-white font-display font-bold text-sm hover:opacity-90 transition-all transform hover:scale-[1.03] shadow-lg shadow-[#FF5E1A]/20"
            href="https://apps.apple.com/us/app/freakyfit-workout-organizer/id6756478119"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Get the app</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/80 dark:border-white/10 px-6 py-6 glass-panel space-y-4">
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 dark:text-gray-300 hover:text-[#FF5E1A]"
            href="/#how-it-works"
          >
            How It Works
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 dark:text-gray-300 hover:text-[#FF5E1A]"
            href="/#interactive-preview"
          >
            Interactive Demo
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 dark:text-gray-300 hover:text-[#FF5E1A]"
            href="/#features"
          >
            All Features
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#FF5E1A]"
            href="/tools"
          >
            Free Tools
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 dark:text-gray-300 hover:text-[#FF5E1A]"
            href={`/blog/${currentLang}`}
          >
            Blog
          </Link>
          <div className="pt-4 border-t border-slate-200/80 dark:border-white/10">
            <a
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FF5E1A] text-white font-display font-bold text-sm shadow-lg shadow-[#FF5E1A]/20"
              href="https://apps.apple.com/us/app/freakyfit-workout-organizer/id6756478119"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Get the app</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

