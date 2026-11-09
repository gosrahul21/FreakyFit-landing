"use client";

import { useEffect, useState } from "react";

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  isMobile?: boolean;
}

export default function TableOfContents({
  items,
  isMobile = false,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const headingEls = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-90px 0px -65% 0px",
        threshold: 0,
      }
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const activeIndex = items.findIndex((h) => h.id === activeId);
  const progress =
    items.length > 0
      ? Math.max(
          5,
          Math.round(((Math.max(0, activeIndex) + 1) / items.length) * 100)
        )
      : 0;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  // Mobile Collapsible Accordion Version
  if (isMobile) {
    return (
      <details className="group rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 p-4 transition-all shadow-sm">
        <summary className="flex cursor-pointer items-center justify-between font-display font-bold text-sm text-slate-900 dark:text-white list-none select-none">
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-[#FF5E1A]">
              format_list_bulleted
            </span>
            <span>Table of Contents ({items.length} sections)</span>
          </span>
          <span className="material-symbols-outlined text-slate-400 text-[18px] group-open:rotate-180 transition-transform">
            expand_more
          </span>
        </summary>
        <ul className="mt-3 pt-3 border-t border-slate-100 dark:border-zinc-800 space-y-2 text-sm">
          {items.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={idx}
                style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`block py-1 text-xs sm:text-sm transition-colors ${
                    isActive
                      ? "text-[#FF5E1A] font-bold"
                      : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </details>
    );
  }

  // Desktop Right Sidebar Sticky Card
  return (
    <nav
      aria-label="Table of contents"
      className="p-5 rounded-3xl glass-panel border border-slate-200/90 dark:border-white/10 shadow-sm max-h-[calc(100vh-28rem)] overflow-y-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80 dark:border-white/10">
        <div className="flex items-center gap-2 font-display font-black text-xs uppercase tracking-widest text-slate-900 dark:text-white">
          <span className="material-symbols-outlined text-[16px] text-[#FF5E1A]">
            format_list_bulleted
          </span>
          <span>On this page</span>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FF5E1A]/10 text-[#FF5E1A]">
          {items.length} sections
        </span>
      </div>

      {/* Item List */}
      <ul className="space-y-1">
        {items.map((item, index) => {
          const isActive = activeId === item.id;
          const isH3 = item.level === 3;

          return (
            <li
              key={`${item.id}-${index}`}
              className={isH3 ? "pl-3" : "pl-0"}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`flex items-start gap-2.5 px-2.5 py-1.5 rounded-xl text-xs leading-snug transition-all group ${
                  isActive
                    ? "bg-[#FF5E1A]/10 text-[#FF5E1A] font-bold border-l-2 border-[#FF5E1A]"
                    : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-zinc-800/40"
                }`}
              >
                {/* Tiny bullet dot */}
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1 transition-colors ${
                    isActive
                      ? "bg-[#FF5E1A]"
                      : "bg-slate-300 dark:bg-zinc-600 group-hover:bg-slate-400 dark:group-hover:bg-zinc-400"
                  }`}
                />
                <span className="line-clamp-2">{item.text}</span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Progress Footer */}
      <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-white/10">
        <div className="h-1 w-full rounded-full bg-slate-200 dark:bg-zinc-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FF5E1A] to-[#FF8C38] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-gray-500 mt-2 font-medium">
          <span>Reading progress</span>
          <span>
            {Math.max(1, activeIndex + 1)} of {items.length}
          </span>
        </div>
      </div>
    </nav>
  );
}
