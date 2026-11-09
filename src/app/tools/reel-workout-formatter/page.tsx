"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppInstallCard from "@/components/AppInstallCard";
import MobileAppInstallPopup from "@/components/MobileAppInstallPopup";

interface ParsedExercise {
  name: string;
  sets: string;
  reps: string;
  rest: string;
  muscle: string;
}

const PRESETS = [
  {
    label: "Chest & Triceps Reel",
    text: `Save this for your next push day! 🔥
1. Incline Dumbbell Bench Press - 4 sets of 8-10 reps (focus on slow 3s eccentric!) 90s rest
2. Flat Machine Chest Press - 3 sets x 10-12 reps
3. Low-to-High Cable Flyes - 3 sets x 15 reps (burnout, squeeze at peak) 60s rest
4. Overhead Cable Tricep Extension - 4 sets x 12 reps
Hit save so you don't forget! Comment 'WORKOUT' for the full PDF.`,
  },
  {
    label: "Back & Biceps Reel",
    text: `Lats on FIRE with this pull routine! 🦍
- Neutral Grip Lat Pulldown: 4 sets x 10 reps (rest 90s)
- Chest Supported T-Bar Row: 3 sets x 8-10 reps heavy!
- Single Arm Dumbbell Row: 3 sets x 12 reps each arm (60s rest)
- Incline Dumbbell Curl: 3 sets x 12 reps
- Hammer Cable Curls: 3 sets x 15 reps burnout`,
  },
  {
    label: "Leg Day Glute & Hamstring Reel",
    text: `Glute day routine you can actually complete in 45 mins:
1) Barbell Romanian Deadlift: 4x10 (feel the stretch in hammies, 2 min rest)
2) Kas Glute Bridge: 3x12 with 2 sec hold at the top!
3) Bulgarian Split Squat: 3x8 per leg (forward torso lean) 90s rest
4) Seated Hamstring Curl: 3x15 (pump out the last 5 reps)`,
  },
];

export default function ReelWorkoutFormatter() {
  const [inputText, setInputText] = useState(PRESETS[0].text);
  const [parsedResults, setParsedResults] = useState<ParsedExercise[]>([]);
  const [hasParsed, setHasParsed] = useState(false);
  const [copied, setCopied] = useState(false);

  const parseCaption = () => {
    const lines = inputText.split("\n");
    const exercises: ParsedExercise[] = [];

    lines.forEach((line) => {
      const clean = line.trim();
      if (!clean) return;

      // Check if line looks like an exercise (starts with number, dash, bullet)
      const isExerciseLine = /^(\d+[\.\)]|-|\*|•)/.test(clean);
      if (isExerciseLine || clean.toLowerCase().includes("sets") || clean.toLowerCase().includes("reps")) {
        // Strip leading number or bullets
        const withoutPrefix = clean.replace(/^(\d+[\.\)]|-|\*|•)\s*/, "");

        // Try extracting exercise name (usually before the dash or colon)
        let name = withoutPrefix;
        let details = "";
        if (withoutPrefix.includes(" - ")) {
          const parts = withoutPrefix.split(" - ");
          name = parts[0];
          details = parts.slice(1).join(" - ");
        } else if (withoutPrefix.includes(": ")) {
          const parts = withoutPrefix.split(": ");
          name = parts[0];
          details = parts.slice(1).join(": ");
        }

        // Extract sets & reps
        const setsMatch = details.match(/(\d+)\s*(sets|x)/i) || withoutPrefix.match(/(\d+)\s*x\s*(\d+)/i);
        const repsMatch = details.match(/(\d+[-–\d]*)\s*reps/i) || withoutPrefix.match(/x\s*(\d+[-–\d]*)/i);
        const restMatch = details.match(/(\d+s|\d+\s*min|\d+\s*sec|\d+s\s*rest)/i);

        // Infer target muscle
        const lowerName = name.toLowerCase();
        let muscle = "Full Body";
        if (lowerName.includes("bench") || lowerName.includes("chest") || lowerName.includes("fly")) muscle = "Chest";
        else if (lowerName.includes("row") || lowerName.includes("pulldown") || lowerName.includes("pullup") || lowerName.includes("lat")) muscle = "Back & Lats";
        else if (lowerName.includes("curl") || lowerName.includes("tricep") || lowerName.includes("bicep")) muscle = "Arms";
        else if (lowerName.includes("squat") || lowerName.includes("deadlift") || lowerName.includes("leg") || lowerName.includes("glute") || lowerName.includes("hamstring")) muscle = "Legs & Glutes";
        else if (lowerName.includes("press") || lowerName.includes("lateral") || lowerName.includes("shoulder") || lowerName.includes("delt")) muscle = "Shoulders";

        exercises.push({
          name: name.trim(),
          sets: setsMatch ? setsMatch[1] : "3",
          reps: repsMatch ? repsMatch[1] : "10-12",
          rest: restMatch ? restMatch[1] : "60s",
          muscle,
        });
      }
    });

    setParsedResults(exercises);
    setHasParsed(true);
  };

  const copyRoutine = () => {
    if (parsedResults.length === 0) return;
    const formatted = parsedResults
      .map(
        (ex, i) =>
          `${i + 1}. ${ex.name} — ${ex.sets} sets × ${ex.reps} reps (Rest: ${ex.rest}) [${ex.muscle}]`
      )
      .join("\n");
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <Navbar defaultTheme="light" />
      <MobileAppInstallPopup delayMs={10000} />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400 mb-6">
          <Link href="/" className="hover:text-[#FF5E1A]">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-[#FF5E1A]">Free Tools</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-semibold">Reel Workout Formatter</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Formatter Card */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E1A]/10 text-[#FF5E1A] text-xs font-bold uppercase mb-4">
                <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                AI Reel Parser Demo
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mb-3">
                Reel to Workout Formatter
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                Paste any unstructured workout reel caption, video transcript, or exercise notes below. Our engine instantly parses exercises, set counts, rep ranges, and rest intervals into a clean routine.
              </p>

              {/* Sample Preset Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-bold text-slate-500 dark:text-gray-400 mr-1">
                  Try sample:
                </span>
                {PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setInputText(p.text);
                      setHasParsed(false);
                    }}
                    className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-[#FF5E1A]/10 hover:text-[#FF5E1A] text-slate-700 dark:text-gray-300 font-medium transition-colors border border-slate-200 dark:border-zinc-700"
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              {/* Textarea Input */}
              <div className="mb-5">
                <textarea
                  rows={6}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste Instagram, TikTok or YouTube caption here..."
                  className="w-full p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#FF5E1A] font-mono leading-relaxed"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  type="button"
                  onClick={parseCaption}
                  className="px-6 py-3.5 rounded-full bg-[#FF5E1A] text-white font-display font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-[#FF5E1A]/25 transform active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                  <span>Parse &amp; Format Routine</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setInputText("");
                    setParsedResults([]);
                    setHasParsed(false);
                  }}
                  className="px-4 py-3 rounded-full text-xs font-semibold text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-white"
                >
                  Clear Input
                </button>
              </div>

              {/* Parsed Output */}
              {hasParsed && (
                <div className="pt-6 border-t border-slate-200 dark:border-white/10 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                        Formatted Structured Workout
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-gray-400">
                        {parsedResults.length} exercises detected with parsed rep targets
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={copyRoutine}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-gray-200 hover:bg-[#FF5E1A] hover:text-white transition-colors border border-slate-200 dark:border-zinc-700"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        {copied ? "check" : "content_copy"}
                      </span>
                      <span>{copied ? "Copied!" : "Copy Routine"}</span>
                    </button>
                  </div>

                  {parsedResults.length === 0 ? (
                    <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs">
                      No exercise lines detected in this text. Try one of the sample presets above.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {parsedResults.map((ex, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-white/95 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-700/80 flex items-center justify-between gap-4 shadow-sm"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-zinc-800 text-[#FF5E1A] font-display font-black text-sm flex items-center justify-center shrink-0 border border-orange-200 dark:border-zinc-700">
                              0{idx + 1}
                            </div>
                            <div>
                              <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                                {ex.name}
                              </div>
                              <div className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-2 mt-0.5">
                                <span className="px-1.5 py-0.2 rounded bg-slate-100 dark:bg-zinc-800 font-medium">
                                  {ex.muscle}
                                </span>
                                <span>•</span>
                                <span>Rest: {ex.rest}</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <div className="font-display font-extrabold text-sm text-[#FF5E1A]">
                              {ex.sets} sets × {ex.reps}
                            </div>
                            <span className="text-[10px] text-slate-400">Target Volume</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* App CTA integration */}
                  <div className="mt-8 p-5 rounded-2xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[28px] text-[#FF5E1A]">
                        install_mobile
                      </span>
                      <div className="text-left text-xs">
                        <strong className="block text-slate-900 dark:text-white font-bold">
                          Import with 1-Tap in FreakyFit App
                        </strong>
                        <span className="text-slate-600 dark:text-gray-400">
                          Simply share any reel link directly to the FreakyFit app from Instagram.
                        </span>
                      </div>
                    </div>
                    <a
                      href="https://apps.apple.com/us/app/freakyfit-workout-organizer/id6756478119"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#FF5E1A] text-white font-display font-bold text-xs hover:opacity-90 shrink-0"
                    >
                      Get FreakyFit Free
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar: Sticky App Installation Card */}
          <div className="lg:col-span-4  sticky top-20">
            <AppInstallCard
              headline="Stop losing the workouts you save"
              description="FreakyFit turns workout videos from TikTok, Instagram and YouTube into clear, step-by-step workouts — then helps you plan your week and track every session. Free to start, on iPhone, iPad and Android."
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

