"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQAccordionProps {
  title?: string;
  badge?: string;
  items: FAQItem[];
  defaultOpenIndex?: number | null;
  className?: string;
  hideHeader?: boolean;
}

export default function FAQAccordion({
  title = "Frequently asked questions",
  badge = "FAQ",
  items,
  defaultOpenIndex = 0,
  className = "",
  hideHeader = false,
}: FAQAccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    new Set(defaultOpenIndex !== null && defaultOpenIndex >= 0 ? [defaultOpenIndex] : [])
  );

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={`w-full ${className}`}>
      {!hideHeader && title && (
        <div className="flex items-center gap-3 mb-6">
          {badge && (
            <span className="flex items-center justify-center px-2.5 py-1 rounded-lg bg-[#FF5E1A]/10 text-[#FF5E1A] font-display font-bold text-xs uppercase tracking-wider border border-[#FF5E1A]/20">
              {badge}
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 dark:text-white m-0 tracking-tight">
            {title}
          </h2>
        </div>
      )}

      <div className="space-y-3.5">
        {items.map((item, idx) => {
          const isOpen = openIndices.has(idx);
          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                isOpen
                  ? "bg-white dark:bg-zinc-900/90 border-[#FF5E1A]/50 shadow-md shadow-[#FF5E1A]/5 dark:shadow-black/40"
                  : "bg-white/70 dark:bg-zinc-900/50 border-slate-200/80 dark:border-white/10 hover:border-[#FF5E1A]/40"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                className="w-full flex items-center justify-between text-left p-5 sm:p-6 cursor-pointer gap-4 group"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`font-display font-black text-sm sm:text-base mt-0.5 shrink-0 transition-colors ${
                      isOpen
                        ? "text-[#FF5E1A]"
                        : "text-slate-400 dark:text-gray-500 group-hover:text-[#FF5E1A]"
                    }`}
                  >
                    Q:
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug group-hover:text-[#FF5E1A] transition-colors">
                    {item.question}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-[#FF5E1A]/15 text-[#FF5E1A] rotate-180"
                      : "bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-gray-400 group-hover:bg-[#FF5E1A]/10 group-hover:text-[#FF5E1A]"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    keyboard_arrow_down
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-slate-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base border-t border-slate-100 dark:border-white/5 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="pl-6 pt-2">
                    {typeof item.answer === "string" ? (
                      <p className="whitespace-pre-line m-0 leading-relaxed">
                        {item.answer}
                      </p>
                    ) : (
                      item.answer
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

