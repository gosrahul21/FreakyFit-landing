"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  if (typeof document === "undefined") return () => {};
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

interface ThemeToggleProps {
  defaultTheme?: "light" | "dark";
}

export default function ThemeToggle({ defaultTheme = "dark" }: ThemeToggleProps) {
  const currentTheme = useSyncExternalStore(
    subscribe,
    () => (document.documentElement.classList.contains("light") ? "light" : "dark"),
    () => defaultTheme
  );

  const toggleTheme = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(nextTheme);
    root.setAttribute("data-theme", nextTheme);
    root.style.colorScheme = nextTheme;

    try {
      localStorage.setItem("ff_theme", nextTheme);
    } catch {
      // localStorage may fail in restricted iframes or private browsing
    }
  };

  const isLight = currentTheme === "light";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      title={`Switch to ${isLight ? "dark" : "light"} theme (configured default: ${defaultTheme})`}
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
      className="relative w-9 h-9 rounded-full glass-panel border border-slate-200/80 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-[#FF5E1A] dark:hover:text-[#FF5E1A] hover:border-[#FF5E1A]/40 transition-all transform hover:scale-105 active:scale-95 shadow-sm"
    >
      <span className="material-symbols-outlined text-[19px]">
        {isLight ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
}
