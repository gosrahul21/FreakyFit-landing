"use client";

import { useState } from "react";
import { APPSTORE_LINK, PLAYSTORE_LINK } from "@/constants/links";

interface AppInstallCardProps {
  headline?: string;
  description?: string;
  compact?: boolean;
}

export default function AppInstallCard({
  headline = "Stop losing the workouts you save",
  description = "Turn workout reels from Instagram & TikTok into structured routines you can track in the gym. Free on iOS & Android.",
  compact = true,
}: AppInstallCardProps) {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="w-full sticky top-0">
      <div className={`glass-panel rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-xl overflow-hidden relative group ${
        compact ? "p-4 sm:p-5" : "p-6 sm:p-7 rounded-3xl"
      }`}>
        {/* Top vibrant brand bar */}
        <div className="w-8 h-1 bg-gradient-to-r from-[#FF5E1A] to-amber-500 rounded-full mb-3"></div>

        <h3 className={`font-display font-black text-slate-900 dark:text-white tracking-tight ${
          compact ? "text-base sm:text-2xl leading-tight mb-2" : "text-xl sm:text-4xl leading-snug mb-3"
        }`}>
          {headline}
        </h3>

        <p className={`text-slate-600 dark:text-gray-300 leading-relaxed ${
          compact ? "text-xs mb-3.5" : "text-sm mb-5"
        }`}>
          {description}
        </p>

        {/* Official Store SVG Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <a
            href="https://apps.apple.com/us/app/freakyfit-workout-organizer/id6756478119"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105 active:scale-95 shadow-sm rounded-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/app-store.svg"
              alt="Download on the App Store"
              className={compact ? "h-8 sm:h-8.5 w-auto object-contain rounded-lg" : "h-9 w-auto object-contain rounded-lg"}
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.freakyfit.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105 active:scale-95 shadow-sm rounded-lg"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/google-play.svg"
              alt="Get it on Google Play"
              className={compact ? "h-8 sm:h-8.5 w-auto object-contain rounded-lg" : "h-9 w-auto object-contain rounded-lg"}
            />
          </a>
        </div>

        {/* QR Code Toggle for Desktop Readers */}
        <div className="pt-2.5 border-t border-slate-200/70 dark:border-white/10">
          <button
            type="button"
            onClick={() => setShowQR(!showQR)}
            className="w-full flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-gray-400 hover:text-[#FF5E1A] dark:hover:text-[#FF5E1A] transition-colors py-0.5"
          >
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px]">qr_code_scanner</span>
              <span>Scan to install on mobile</span>
            </span>
            <span className="material-symbols-outlined text-[15px]">
              {showQR ? "expand_less" : "expand_more"}
            </span>
          </button>

          {showQR && (
            <div className="mt-2.5 p-3 rounded-xl bg-white dark:bg-black/90 border border-slate-200 dark:border-white/10 flex flex-col items-center text-center animate-in fade-in duration-150">
              <div className="w-24 h-24 bg-slate-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center p-1.5 mb-1.5 border border-slate-200 dark:border-zinc-700">
                <div className="w-full h-full flex flex-col items-center justify-center text-[#FF5E1A]">
                  <span className="material-symbols-outlined text-[36px]">qr_code_2</span>
                  <span className="text-[9px] font-bold text-slate-800 dark:text-gray-200">freakyfit.app</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-gray-400">
                Scan with phone camera to install
              </p>
            </div>
          )}
        </div>

        {/* Social trust metric */}
        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-gray-400">
          <span className="flex text-amber-500">
            <span className="material-symbols-outlined text-[12px]">star</span>
            <span className="material-symbols-outlined text-[12px]">star</span>
            <span className="material-symbols-outlined text-[12px]">star</span>
            <span className="material-symbols-outlined text-[12px]">star</span>
            <span className="material-symbols-outlined text-[12px]">star</span>
          </span>
          <span className="font-medium text-[10.5px]">4.9 • 250+ active athletes</span>
        </div>
      </div>
    </div>
  );
}
