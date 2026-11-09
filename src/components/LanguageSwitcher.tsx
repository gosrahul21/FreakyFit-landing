"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Language } from "@/constants/lang.enum";

interface LanguageSwitcherProps {
  currentLang?: string;
  slug?: string;
}

export interface LanguageOption {
  code: string;
  label: string;
  flag?: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: Language.ENGLISH, label: "English", flag: "🇺🇸" },
  { code: Language.HINDI, label: "हिन्दी (Hindi)", flag: "🇮🇳" },
  { code: Language.TURKISH, label: "Türkçe (Turkish)", flag: "🇹🇷" },
  { code: Language.SPANISH, label: "Español (Spanish)", flag: "🇪🇸" },
  { code: Language.FRENCH, label: "Français (French)", flag: "🇫🇷" },
  { code: Language.GERMAN, label: "Deutsch (German)", flag: "🇩🇪" },
  { code: Language.ITALIAN, label: "Italiano (Italian)", flag: "🇮🇹" },
  { code: Language.PORTUGUESE, label: "Português (Portuguese)", flag: "🇵🇹" },
  { code: Language.DUTCH, label: "Nederlands (Dutch)", flag: "🇳🇱" },
  { code: Language.RUSSIAN, label: "Русский (Russian)", flag: "🇷🇺" },
  { code: Language.ARABIC, label: "العربية (Arabic)", flag: "🇸🇦" },
  { code: Language.CHINESE, label: "中文 (Chinese)", flag: "🇨🇳" },
  { code: Language.JAPANESE, label: "日本語 (Japanese)", flag: "🇯🇵" },
  { code: Language.KOREAN, label: "한국어 (Korean)", flag: "🇰🇷" },
  { code: Language.POLISH, label: "Polski (Polish)", flag: "🇵🇱" },
  { code: Language.SWEDISH, label: "Svenska (Swedish)", flag: "🇸🇪" },
  { code: Language.FINNISH, label: "Suomi (Finnish)", flag: "🇫🇮" },
  { code: Language.NORWEGIAN, label: "Norsk (Norwegian)", flag: "🇳🇴" },
  { code: Language.GREEK, label: "Ελληνικά (Greek)", flag: "🇬🇷" },
];

export default function LanguageSwitcher({
  currentLang = "en",
  slug,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getTargetUrl = (targetLang: string) => {
    if (slug) {
      return `/blog/${targetLang}/${slug}`;
    }
    if (pathname.startsWith("/blog")) {
      return `/blog/${targetLang}`;
    }
    return `/blog/${targetLang}`;
  };

  const currentMeta = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold glass-panel border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white hover:border-[#FF5E1A]/40 transition-all shadow-sm"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="material-symbols-outlined text-[16px] text-slate-500 dark:text-gray-400">
          language
        </span>
        <span className="uppercase font-bold tracking-wider">{currentMeta.code}</span>
        <span className="material-symbols-outlined text-[14px] text-slate-400">
          arrow_drop_down
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="sticky top-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-3.5 py-2 text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-gray-400 border-b border-slate-100 dark:border-white/5 z-10 flex items-center justify-between">
            <span>Select Language</span>
            <span className="text-[9px] font-semibold text-[#FF5E1A]">{LANGUAGES.length}</span>
          </div>
          {LANGUAGES.map((lang) => (
            <Link
              key={lang.code}
              href={getTargetUrl(lang.code)}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2 text-xs transition-colors ${
                currentLang === lang.code
                  ? "text-[#FF5E1A] font-bold bg-[#FF5E1A]/10"
                  : "text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <span className="flex items-center gap-2.5">
                {/* <span className="text-sm shrink-0">{lang.flag}</span> */}
                <span className="truncate">{lang.label}</span>
              </span>
              {currentLang === lang.code && (
                <span className="material-symbols-outlined text-[16px] text-[#FF5E1A] shrink-0">
                  check
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
