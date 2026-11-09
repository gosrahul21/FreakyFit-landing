"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppInstallCard from "@/components/AppInstallCard";
import MobileAppInstallPopup from "@/components/MobileAppInstallPopup";
import { PLAYSTORE_LINK } from "@/constants/links";

export default function OneRepMaxCalculator() {
  const [weight, setWeight] = useState<number>(100);
  const [reps, setReps] = useState<number>(5);
  const [unit, setUnit] = useState<"kg" | "lbs">("kg");
  const [lift, setLift] = useState<string>("Bench Press");

  // Formulas
  // Epley: w * (1 + r / 30)
  // Brzycki: w * (36 / (37 - r))
  const epley = weight * (1 + reps / 30);
  const brzycki = reps < 37 ? weight * (36 / (37 - reps)) : weight;
  const estimated1RM = Math.round((epley + brzycki) / 2);

  const PERCENTAGES = [
    { pct: 100, reps: 1, tag: "True Max" },
    { pct: 95, reps: 2, tag: "Peak Strength" },
    { pct: 90, reps: 3, tag: "Power" },
    { pct: 85, reps: 5, tag: "Heavy Hypertrophy" },
    { pct: 80, reps: 7, tag: "Strength-Hypertrophy" },
    { pct: 75, reps: 10, tag: "Hypertrophy Sweetspot" },
    { pct: 70, reps: 12, tag: "Volume" },
    { pct: 65, reps: 15, tag: "Endurance" },
  ];

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
          <span className="text-slate-900 dark:text-white font-semibold">1RM Calculator</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Calculator */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E1A]/10 text-[#FF5E1A] text-xs font-bold uppercase mb-4">
                <span className="material-symbols-outlined text-[16px]">fitness_center</span>
                Strength Calculator
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mb-3">
                One Rep Max (1RM) Calculator
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 mb-8 leading-relaxed">
                Estimate your maximum single-rep strength safely without testing to failure under dangerous loads. Based on the Epley and Brzycki powerlifting models.
              </p>

              {/* Input Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                {/* Lift selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-2">
                    Exercise
                  </label>
                  <select
                    value={lift}
                    onChange={(e) => setLift(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:border-[#FF5E1A]"
                  >
                    <option value="Bench Press">Bench Press</option>
                    <option value="Barbell Squat">Barbell Squat</option>
                    <option value="Conventional Deadlift">Conventional Deadlift</option>
                    <option value="Overhead Press">Overhead Press</option>
                    <option value="Dumbbell Press">Dumbbell Press</option>
                    <option value="Barbell Row">Barbell Row</option>
                  </select>
                </div>

                {/* Lift Weight */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300">
                      Weight Lifted
                    </label>
                    <div className="flex items-center rounded-lg bg-slate-100 dark:bg-zinc-800 p-0.5 border border-slate-200 dark:border-zinc-700">
                      <button
                        type="button"
                        onClick={() => setUnit("kg")}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                          unit === "kg" ? "bg-[#FF5E1A] text-white" : "text-slate-600 dark:text-gray-400"
                        }`}
                      >
                        kg
                      </button>
                      <button
                        type="button"
                        onClick={() => setUnit("lbs")}
                        className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                          unit === "lbs" ? "bg-[#FF5E1A] text-white" : "text-slate-600 dark:text-gray-400"
                        }`}
                      >
                        lbs
                      </button>
                    </div>
                  </div>
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={weight || ""}
                    onChange={(e) => setWeight(Math.max(1, Number(e.target.value)))}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white font-display font-bold text-lg focus:outline-none focus:border-[#FF5E1A]"
                  />
                </div>

                {/* Reps */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-2">
                    Reps Completed (1–15)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={reps || ""}
                    onChange={(e) => setReps(Math.min(20, Math.max(1, Number(e.target.value))))}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white font-display font-bold text-lg focus:outline-none focus:border-[#FF5E1A]"
                  />
                </div>
              </div>

              {/* Big Result Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FF5E1A]/10 via-[#FF5E1A]/5 to-transparent border border-[#FF5E1A]/30 flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5E1A]">
                    Estimated 1RM for {lift}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display font-black text-5xl sm:text-6xl text-slate-900 dark:text-white">
                      {estimated1RM}
                    </span>
                    <span className="font-display font-bold text-xl text-slate-500 dark:text-gray-400">
                      {unit}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-gray-400 mt-2">
                    Calculated from {weight} {unit} × {reps} reps to near concentric failure.
                  </p>
                </div>

                <a
                  href={PLAYSTORE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-[#FF5E1A] text-white font-display font-bold text-sm hover:opacity-90 transition-all shrink-0 shadow-lg shadow-[#FF5E1A]/25"
                >
                  Save to FreakyFit
                </a>
              </div>

              {/* Percentage breakdown table */}
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-4">
                Working Weight Percentage Table
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/10 text-xs uppercase tracking-wider text-slate-500 dark:text-gray-400">
                      <th className="pb-3 font-bold">% of 1RM</th>
                      <th className="pb-3 font-bold">Weight ({unit})</th>
                      <th className="pb-3 font-bold">Rep Capacity</th>
                      <th className="pb-3 font-bold">Training Focus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {PERCENTAGES.map((row) => {
                      const rowWeight = Math.round((estimated1RM * row.pct) / 100);
                      return (
                        <tr key={row.pct} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                          <td className="py-3.5 font-display font-bold text-slate-900 dark:text-white">
                            {row.pct}%
                          </td>
                          <td className="py-3.5 font-bold text-[#FF5E1A]">
                            {rowWeight} {unit}
                          </td>
                          <td className="py-3.5 text-slate-700 dark:text-gray-300">
                            ~{row.reps} {row.reps === 1 ? "rep" : "reps"}
                          </td>
                          <td className="py-3.5 text-xs text-slate-500 dark:text-gray-400">
                            {row.tag}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Educational notes */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10">
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                How is 1RM Calculated?
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-3">
                Our calculator computes an aggregate of the two most validated exercise physiology formulas: the <strong>Epley Formula</strong> (<code className="text-xs bg-slate-100 dark:bg-zinc-800 px-1 py-0.5 rounded">Weight × (1 + Reps / 30)</code>) and the <strong>Brzycki Formula</strong> (<code className="text-xs bg-slate-100 dark:bg-zinc-800 px-1 py-0.5 rounded">Weight × (36 / (37 - Reps))</code>).
              </p>
              <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                Calculations are most accurate when input reps fall between 2 and 8 reps. Beyond 10 reps, individual muscle fiber endurance and cardiovascular conditioning can skew maximal predictions.
              </p>
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

