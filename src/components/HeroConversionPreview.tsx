"use client";

import { useState, useEffect } from "react";

const EXERCISES = [
  { name: "Incline dumbbell press", detail: "4 sets × 10 reps · 60s rest" },
  { name: "Dumbbell fly", detail: "3 sets × 12 reps · 45s rest" },
  { name: "Push-ups", detail: "3 sets × 15 reps · 45s rest" },
  { name: "Leg raises", detail: "20 reps · to burnout" },
];

export default function HeroConversionPreview() {
  const [isConverting, setIsConverting] = useState(false);
  const [visibleCount, setVisibleCount] = useState(EXERCISES.length);
  const [timerActive, setTimerActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(45);

  useEffect(() => {
    if (!isConverting) return;

    const timers = EXERCISES.map((_, idx) =>
      setTimeout(() => {
        setVisibleCount(idx + 1);
        if (idx === EXERCISES.length - 1) {
          setIsConverting(false);
        }
      }, (idx + 1) * 260)
    );

    return () => timers.forEach(clearTimeout);
  }, [isConverting]);

  useEffect(() => {
    if (!timerActive) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 45));
    }, 1000);
    return () => clearInterval(interval);
  }, [timerActive]);

  const handleConvert = () => {
    setTimerActive(false);
    setSecondsLeft(45);
    setVisibleCount(0);
    setIsConverting(true);
  };

  return (
    <div
      id="interactive-preview"
      className="relative flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-5 w-full"
    >
      {/* Subtle FreakyFit ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/15 via-amber-400/10 to-orange-400/15 dark:from-brand-lime/15 dark:via-amber-500/10 dark:to-brand-lime/15 rounded-[36px] blur-3xl opacity-70 pointer-events-none -z-10" />

      {/* Left Card: Saved Social Reel */}
      <div className="w-full max-w-[248px] rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-white p-5 border border-slate-700/40 dark:border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[348px]">
        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF5E1A] dark:via-brand-lime to-transparent opacity-70 animate-scan pointer-events-none" />

        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FF5E1A] to-amber-400 p-[1.5px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-bold text-white">
                CF
              </div>
            </div>
            <span className="text-xs font-bold text-white">@coach_fitness</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5E1A] bg-[#FF5E1A]/10 px-2 py-0.5 rounded-full border border-[#FF5E1A]/30">
            Reel
          </span>
        </div>

        <div className="my-auto py-6 space-y-2.5 z-10">
          <div className="w-11 h-11 rounded-xl bg-[#FF5E1A]/15 border border-[#FF5E1A]/40 flex items-center justify-center text-[#FF5E1A]">
            <span className="material-symbols-outlined text-[24px]">
              fitness_center
            </span>
          </div>
          <h2 className="font-display font-bold text-base leading-snug text-white">
            Dumbbell Chest &amp; Core Blast
          </h2>
          <p className="text-xs leading-relaxed text-gray-300">
            &ldquo;Chest day: 4 sets of 10 incline press, 3 sets of 12 flyes,
            push-ups, then 20 leg raises to burnout.&rdquo;
          </p>
        </div>

        <button
          type="button"
          onClick={handleConvert}
          className="z-10 w-full py-2.5 px-4 rounded-xl bg-[#FF5E1A] hover:opacity-95 active:scale-[0.98] text-white font-display font-bold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(255,94,26,0.35)] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">
            auto_awesome
          </span>
          <span>{isConverting ? "Converting..." : "Convert to routine"}</span>
        </button>
      </div>

      {/* Arrow Connector */}
      <div
        className="w-10 h-10 rounded-2xl bg-white dark:bg-brand-surface border border-[#FF5E1A]/40 text-[#FF5E1A] flex items-center justify-center shrink-0 shadow-md rotate-90 sm:rotate-0"
        aria-hidden="true"
      >
        <span className="material-symbols-outlined text-[20px]">
          arrow_forward
        </span>
      </div>

      {/* Right Card: Generated Routine */}
      <div className="w-full max-w-[340px] rounded-2xl glass-panel p-5 sm:p-6 border border-slate-200/80 dark:border-brand-borderLime/40 shadow-xl dark:shadow-2xl">
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-200/60 dark:border-white/10">
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-tight">
              Dumbbell Chest &amp; Core
            </h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">
              Imported from Instagram · 4 exercises · ~35 min
            </p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 flex items-center justify-center text-[#FF5E1A] shrink-0">
            <span className="material-symbols-outlined text-[20px]">
              directions_run
            </span>
          </div>
        </div>

        <p className="text-xs font-semibold text-emerald-600 dark:text-brand-lime mt-3 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[15px]">bolt</span>
          <span>
            {isConverting
              ? `Extracting exercises (${visibleCount}/4)...`
              : "Done in 1.4s · 4 of 4 exercises found"}
          </span>
        </p>

        <div className="mt-3 space-y-2">
          {EXERCISES.map((exercise, idx) => {
            const isFound = idx < visibleCount;
            const isActiveRow = timerActive && idx === 0;
            return (
              <div
                key={exercise.name}
                className={`p-3 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                  isActiveRow
                    ? "bg-orange-50/70 dark:bg-brand-dark border-orange-500/40 dark:border-brand-lime/50"
                    : "bg-slate-50/70 dark:bg-brand-card/40 border-slate-200/60 dark:border-white/5"
                } ${
                  isFound
                    ? "opacity-100 translate-y-0"
                    : "opacity-35 translate-y-0.5"
                }`}
              >
                <div className="min-w-0">
                  <div className="font-display font-semibold text-sm text-slate-900 dark:text-white truncate">
                    {exercise.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-gray-400">
                    {isActiveRow
                      ? `Rest timer · ${secondsLeft}s remaining`
                      : exercise.detail}
                  </div>
                </div>

                {isFound ? (
                  <span className="material-symbols-outlined text-[#FF5E1A] dark:text-brand-lime text-[18px] shrink-0">
                    check_circle
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-slate-400 dark:text-gray-600 text-[18px] shrink-0">
                    schedule
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setTimerActive((prev) => !prev)}
          className="mt-4 w-full py-3 px-4 rounded-xl bg-[#FF5E1A] hover:opacity-90 active:scale-[0.98] text-white font-display font-extrabold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,94,26,0.3)] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">
            {timerActive ? "pause" : "play_arrow"}
          </span>
          <span>
            {timerActive
              ? `Pause timer (${secondsLeft}s)`
              : "Start workout timer"}
          </span>
        </button>
      </div>
    </div>
  );
}
