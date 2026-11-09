"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { APPSTORE_LINK, PLAYSTORE_LINK } from "@/constants/links";

interface MobileAppInstallPopupProps {
  delayMs?: number;
  headline?: string;
  description?: string;
}

export default function MobileAppInstallPopup({
  delayMs = 10000,
  headline = "Stop losing the workouts you save",
  description = "Turn Instagram & TikTok reels into clean step-by-step routines you can actually follow in the gym.",
}: MobileAppInstallPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if dismissed in this browsing session
    try {
      if (sessionStorage.getItem("ff_mobile_popup_dismissed") === "true") {
        return;
      }
    } catch {
      // In case sessionStorage is blocked by security policy
    }

    const timer = setTimeout(() => {
      // Only show on mobile / tablet viewports (< 1024px)
      if (typeof window !== "undefined" && window.innerWidth < 1024) {
        setIsOpen(true);
      }
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("ff_mobile_popup_dismissed", "true");
    } catch {
      // Ignore
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="w-full max-w-sm glass-panel bg-white/95 dark:bg-zinc-950/95 p-6 sm:p-7 rounded-3xl border border-slate-200/90 dark:border-white/15 shadow-2xl relative animate-in zoom-in-95 duration-200 overflow-hidden text-center flex flex-col items-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-popup-title"
      >
        {/* Top vibrant brand bar */}
        <div className="w-12 h-1 bg-gradient-to-r from-[#FF5E1A] to-amber-500 rounded-full mb-4"></div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close download popup"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        {/* Header brand tag */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-lg bg-white dark:bg-brand-surface border border-orange-500/20 dark:border-brand-borderLime flex items-center justify-center p-0.5 shadow-sm">
            <img src="/logo.svg" alt="FreakyFit" className="w-full h-full object-contain" />
          </div>
          <span className="font-display font-black text-sm tracking-tight text-slate-900 dark:text-white">
            Freaky<span className="text-[#FF5E1A]">Fit</span>
          </span>
        </div>

        <h3
          id="mobile-popup-title"
          className="font-display font-black text-xl text-slate-900 dark:text-white tracking-tight leading-tight mb-2 px-2"
        >
          {headline}
        </h3>

        <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed mb-5 font-normal px-2">
          {description}
        </p>

        {/* App Store & Google Play SVG Badges */}
        <div className="flex flex-wrap items-center gap-2.5 justify-center">
          <Link
            href={APPSTORE_LINK}
            className="inline-block transition-transform active:scale-95 shadow-sm rounded-lg"
            {...(APPSTORE_LINK.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <img
              src="/app-store.svg"
              alt="Download on the App Store"
              className="h-9 w-auto object-contain rounded-lg"
            />
          </Link>

          <a
            href={PLAYSTORE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform active:scale-95 shadow-sm rounded-lg"
          >
            <img
              src="/google-play.svg"
              alt="Get it on Google Play"
              className="h-9 w-auto object-contain rounded-lg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
