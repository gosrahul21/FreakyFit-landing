"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppInstallCard from "@/components/AppInstallCard";
import MobileAppInstallPopup from "@/components/MobileAppInstallPopup";

export default function MacroTDEECalculator() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState<number>(26);
  const [weightKg, setWeightKg] = useState<number>(75);
  const [heightCm, setHeightCm] = useState<number>(178);
  const [activity, setActivity] = useState<number>(1.55); // Moderate (3-5 days gym)
  const [goal, setGoal] = useState<"cut" | "maintain" | "bulk">("maintain");

  // Mifflin-St Jeor formula
  // BMR = 10*weight + 6.25*height - 5*age + (male: +5, female: -161)
  const bmr = Math.round(
    10 * weightKg +
      6.25 * heightCm -
      5 * age +
      (gender === "male" ? 5 : -161)
  );
  const tdee = Math.round(bmr * activity);

  // Calorie adjustments based on goal
  let targetCalories = tdee;
  if (goal === "cut") targetCalories = Math.round(tdee * 0.8); // 20% deficit
  if (goal === "bulk") targetCalories = Math.round(tdee * 1.1); // 10% lean surplus

  // Macros: Protein 2.2g per kg, Fat 25% of calories, remainder Carbs
  const proteinGrams = Math.round(weightKg * 2.2);
  const proteinCals = proteinGrams * 4;

  const fatCals = targetCalories * 0.25;
  const fatGrams = Math.round(fatCals / 9);

  const carbCals = Math.max(0, targetCalories - (proteinCals + fatCals));
  const carbGrams = Math.round(carbCals / 4);

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
          <span className="text-slate-900 dark:text-white font-semibold">Macro &amp; TDEE Calculator</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E1A]/10 text-[#FF5E1A] text-xs font-bold uppercase mb-4">
                <span className="material-symbols-outlined text-[16px]">restaurant</span>
                Nutrition Science
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white mb-3">
                Macro &amp; TDEE Calculator
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 mb-8 leading-relaxed">
                Calculate your precise daily calorie burn and optimal macro breakdown (proteins, carbs, fats) tailored to your fitness objectives.
              </p>

              {/* Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-2">
                    Biological Sex
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setGender("male")}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-colors ${
                        gender === "male"
                          ? "bg-[#FF5E1A] text-white"
                          : "bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300"
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender("female")}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-colors ${
                        gender === "female"
                          ? "bg-[#FF5E1A] text-white"
                          : "bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300"
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-2">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    min="14"
                    max="90"
                    value={age || ""}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white font-bold text-sm focus:outline-none focus:border-[#FF5E1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    min="30"
                    max="250"
                    value={weightKg || ""}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white font-bold text-sm focus:outline-none focus:border-[#FF5E1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="230"
                    value={heightCm || ""}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white font-bold text-sm focus:outline-none focus:border-[#FF5E1A]"
                  />
                </div>
              </div>

              {/* Activity Level & Goal Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-2">
                    Weekly Activity Level
                  </label>
                  <select
                    value={activity}
                    onChange={(e) => setActivity(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-[#FF5E1A]"
                  >
                    <option value={1.2}>Sedentary (Desk Job, little exercise)</option>
                    <option value={1.375}>Lightly Active (1–3 training days/wk)</option>
                    <option value={1.55}>Moderately Active (3–5 training days/wk)</option>
                    <option value={1.725}>Very Active (6–7 heavy training days/wk)</option>
                    <option value={1.9}>Extreme Athlete (2x daily sessions)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-2">
                    Primary Goal
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setGoal("cut")}
                      className={`py-3 px-2 rounded-xl text-xs font-bold transition-all text-center ${
                        goal === "cut"
                          ? "bg-[#FF5E1A] text-white shadow-md shadow-[#FF5E1A]/20"
                          : "bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300"
                      }`}
                    >
                      Fat Loss (-20%)
                    </button>
                    <button
                      type="button"
                      onClick={() => setGoal("maintain")}
                      className={`py-3 px-2 rounded-xl text-xs font-bold transition-all text-center ${
                        goal === "maintain"
                          ? "bg-[#FF5E1A] text-white shadow-md shadow-[#FF5E1A]/20"
                          : "bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300"
                      }`}
                    >
                      Maintain
                    </button>
                    <button
                      type="button"
                      onClick={() => setGoal("bulk")}
                      className={`py-3 px-2 rounded-xl text-xs font-bold transition-all text-center ${
                        goal === "bulk"
                          ? "bg-[#FF5E1A] text-white shadow-md shadow-[#FF5E1A]/20"
                          : "bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-gray-300"
                      }`}
                    >
                      Lean Bulk (+10%)
                    </button>
                  </div>
                </div>
              </div>

              {/* Big Nutrition Dashboard */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FF5E1A]/10 via-[#FF5E1A]/5 to-transparent border border-[#FF5E1A]/30 mb-8">
                <div className="flex flex-col sm:flex-row items-baseline justify-between border-b border-slate-200/80 dark:border-white/10 pb-6 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E1A]">
                      Target Daily Intake
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-display font-black text-5xl sm:text-6xl text-slate-900 dark:text-white">
                        {targetCalories.toLocaleString()}
                      </span>
                      <span className="font-display font-bold text-xl text-slate-500 dark:text-gray-400">
                        kcal / day
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-0 text-left sm:text-right text-xs text-slate-500 dark:text-gray-400">
                    <div>BMR (Basal Rate): <strong>{bmr} kcal</strong></div>
                    <div>Maintenance TDEE: <strong>{tdee} kcal</strong></div>
                  </div>
                </div>

                {/* Macro Split Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-700 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-500 dark:text-gray-400">Protein</span>
                      <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                        {Math.round((proteinCals / targetCalories) * 100)}%
                      </span>
                    </div>
                    <div className="font-display font-black text-2xl text-slate-900 dark:text-white">
                      {proteinGrams}g
                    </div>
                    <span className="text-[11px] text-slate-400">{proteinCals} kcal</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-700 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-500 dark:text-gray-400">Fats</span>
                      <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                        25%
                      </span>
                    </div>
                    <div className="font-display font-black text-2xl text-slate-900 dark:text-white">
                      {fatGrams}g
                    </div>
                    <span className="text-[11px] text-slate-400">{Math.round(fatCals)} kcal</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-700 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-500 dark:text-gray-400">Carbohydrates</span>
                      <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                        {Math.round((carbCals / targetCalories) * 100)}%
                      </span>
                    </div>
                    <div className="font-display font-black text-2xl text-slate-900 dark:text-white">
                      {carbGrams}g
                    </div>
                    <span className="text-[11px] text-slate-400">{Math.round(carbCals)} kcal</span>
                  </div>
                </div>
              </div>
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

