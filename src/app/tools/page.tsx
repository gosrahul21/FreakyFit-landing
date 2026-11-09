import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppInstallCard from "@/components/AppInstallCard";

export const metadata: Metadata = {
  title: "Free Fitness Tools & Calculators - FreakyFit",
  description:
    "Explore free interactive workout and nutrition tools: 1RM calculator, social reel caption formatter, TDEE macro calculator, and workout split planner.",
};

interface ToolItem {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  icon: string;
  badge?: string;
  description: string;
}

const TOOLS: ToolItem[] = [
  {
    slug: "1rm-calculator",
    title: "One Rep Max (1RM) Calculator",
    tagline: "Calculate your true lifting ceiling and percentage training zones",
    category: "Strength & Power",
    icon: "fitness_center",
    badge: "Popular",
    description:
      "Calculates your 1RM using scientific formulas (Epley & Brzycki) with full 50%–95% working weight tables and reps in reserve (RIR) projections.",
  },
  {
    slug: "reel-workout-formatter",
    title: "Reel to Workout Formatter",
    tagline: "Parse messy social media captions into clean, structured routines",
    category: "AI & Productivity",
    icon: "auto_awesome",
    badge: "FreakyFit AI",
    description:
      "Paste any Instagram, TikTok, or YouTube caption. Our formatter extracts exercises, sets, target reps, and rest intervals into a structured workout.",
  },
  {
    slug: "macro-tdee-calculator",
    title: "Macro & TDEE Nutrition Calculator",
    tagline: "Pinpoint your exact daily calories and protein for muscle growth or fat loss",
    category: "Nutrition",
    icon: "restaurant",
    description:
      "Calculates your basal metabolic rate (BMR), total daily energy expenditure (TDEE), and provides target macro splits optimized for athletic performance.",
  },
];

export default function ToolsDirectory() {
  const envTheme = (
    process.env.NEXT_PUBLIC_THEME ||
    process.env.THEME ||
    "light"
  ).toLowerCase();
  const defaultTheme = envTheme === "light" ? "light" : "dark";

  return (
    <>
      <Navbar defaultTheme={defaultTheme} />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 mb-4">
            <span className="material-symbols-outlined text-[16px] text-[#FF5E1A]">build</span>
            <span className="font-display font-bold text-xs uppercase tracking-wider text-[#FF5E1A]">
              100% Free • No Sign-Up Required
            </span>
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Free Fitness Tools &amp; Calculators
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
            Science-backed calculators and workout utilities to simplify your training, optimize recovery, and turn social inspiration into muscle memory.
          </p>
        </div>

        {/* Content Layout with Right-Side Sticky Install Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Tools Grid */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TOOLS.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-[#FF5E1A]/60 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 shadow-md hover:shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF5E1A]/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 text-[#FF5E1A] flex items-center justify-center group-hover:bg-[#FF5E1A] group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[24px]">
                          {tool.icon}
                        </span>
                      </div>
                      {tool.badge && (
                        <span className="text-[10px] font-display font-black uppercase px-2.5 py-1 rounded-full bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 text-[#FF5E1A]">
                          {tool.badge}
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5E1A] mb-1 block">
                      {tool.category}
                    </span>
                    <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-[#FF5E1A] transition-colors">
                      {tool.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                      {tool.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#FF5E1A]">
                    <span>Launch Free Tool</span>
                    <span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Informational Banner */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 mt-10 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FF5E1A]/10 text-[#FF5E1A] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[32px]">sync_saved_locally</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1">
                  Sync Your Calculations with FreakyFit App
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                  Every calculation from these tools can be saved directly to your FreakyFit profile to guide your real-time rest intervals and gym tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar: App Install Card matching user image */}
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

