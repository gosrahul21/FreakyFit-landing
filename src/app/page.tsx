import WebGLBackground from "@/components/WebGLBackground";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 transition-all">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="/"><div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-borderLime flex items-center justify-center p-1 shadow-[0_0_15px_rgba(255,94,26,0.25)] group-hover:border-brand-lime transition-colors">
<img src="/logo.svg" alt="FreakyFit Logo" className="w-full h-auto object-contain" />
</div>
<span className="font-display font-black text-2xl tracking-tight text-white">Freaky<span className="text-[#FF5E1A]">Fit</span></span></a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#interactive-preview">Interactive Demo</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#metrics">Community</a>
<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5E1A] text-white font-display font-bold text-sm hover:opacity-90 transition-all transform hover:scale-[1.03] shadow-lg shadow-[#FF5E1A]/20" href="#download">
<span className="material-symbols-outlined text-[18px]">download</span>
<span className="">Get FreakyFit Free</span>
</a>
</div>
</div>
</header>

<main className="relative pt-28 lg:pt-36 pb-24 overflow-hidden">

<div className="absolute inset-0 w-full h-[1100px] pointer-events-none opacity-45 z-0">

<div className="absolute inset-0 w-full h-full"><WebGLBackground /></div>

</div>

<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#FF5E1A]/15 blur-[150px] pointer-events-none rounded-full z-0"></div>
<div className="absolute top-[500px] right-[-100px] w-[500px] h-[500px] bg-amber-500/10 blur-[140px] pointer-events-none rounded-full z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">

<div className="text-center max-w-4xl mx-auto flex flex-col items-center">

<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FF5E1A]/10 border border-[#FF5E1A]/40 mb-6 shadow-sm">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5E1A] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5E1A]"></span>
</span>
<span className="font-display font-bold text-xs uppercase tracking-wider text-[#FF5E1A]">
AI Reel to Workout Engine • Now Live
</span>
</div>

<h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-6">
          Importing Workouts, <br className="hidden sm:inline" />
<span className="bg-gradient-to-r from-[#FF5E1A] via-[#FF7A00] to-[#FFA133] bg-clip-text text-transparent text-glow">
            Made Easy
          </span>
</h1>

<p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          All your saved workouts, in one place. Turn Instagram &amp; TikTok workout reels into routines you can actually follow. Stop screenshotting workouts.
        </p>

<div className="flex flex-wrap items-center justify-center gap-4 w-full mb-12">

<a className="group inline-flex items-center gap-3.5 px-7 py-4 rounded-full bg-[#FF5E1A] text-white hover:opacity-95 transition-all transform hover:scale-[1.03] shadow-[0_0_35px_rgba(255,94,26,0.35)]" href="https://apps.apple.com/us/app/freakyfit-workout-organizer/id6756478119" rel="noopener noreferrer" target="_blank">
<svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.92.04-2.02.62-2.67 1.37-.58.66-1.09 1.74-.96 2.76 1.03.08 2.1-.53 2.71-1.28z"></path>
</svg>
<div className="flex flex-col text-left leading-tight">
<span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Download on the</span>
<span className="font-display font-extrabold text-base tracking-tight">App Store</span>
</div>
</a>

<a className="group inline-flex items-center gap-3.5 px-7 py-4 rounded-full glass-panel border border-white/10 hover:border-brand-borderLime text-white transition-all transform hover:scale-[1.03] shadow-lg" href="https://play.google.com/store/apps/details?id=com.freakyfit.app" rel="noopener noreferrer" target="_blank">
<svg className="w-6 h-6 fill-current text-brand-lime" viewBox="0 0 24 24">
<path d="M3.609 1.814L13.792 12 3.61 22.186c-.198-.182-.31-.44-.31-.72V2.534c0-.28.112-.538.31-.72zm11.235 11.238l2.25 2.25-11.458 6.55 9.208-8.8zm0-2.104l-9.208-8.8 11.458 6.55-2.25 2.25zm1.533 1.052l3.473-1.984c.646-.37.646-.97 0-1.34l-3.473-1.984-2.25 2.25 2.25 2.25z"></path>
</svg>
<div className="flex flex-col text-left leading-tight">
<span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Get it on</span>
<span className="font-display font-extrabold text-base tracking-tight text-white">Google Play</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-3 px-4 py-3 rounded-full glass-panel border border-white/10 text-gray-400">
<span className="material-symbols-outlined text-brand-lime text-[22px]">qr_code_scanner</span>
<span className="font-display text-xs font-semibold text-gray-300">Scan to auto-install</span>
</div>
</div>

<div className="inline-flex flex-wrap items-center justify-center gap-4 py-3 px-6 rounded-full glass-panel border border-white/5 shadow-inner">
<div className="flex items-center -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-brand-dark bg-brand-surface flex items-center justify-center text-xs font-bold text-brand-lime">JB</div>
<div className="w-8 h-8 rounded-full border-2 border-brand-dark bg-emerald-950 flex items-center justify-center text-xs font-bold text-emerald-300">NJ</div>
<div className="w-8 h-8 rounded-full border-2 border-brand-dark bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">MJ</div>
</div>
<div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium">
<div className="flex text-brand-lime">
<span className="material-symbols-outlined text-[16px]">star</span>
<span className="material-symbols-outlined text-[16px]">star</span>
<span className="material-symbols-outlined text-[16px]">star</span>
<span className="material-symbols-outlined text-[16px]">star</span>
<span className="material-symbols-outlined text-[16px]">star</span>
</div>
<span className=""><strong>250+ Athletes</strong> in 90+ Countries • <strong>1,000+</strong> Reels Converted</span>
</div>
</div>
</div>

<div className="mt-16 lg:mt-24 relative max-w-5xl mx-auto" id="interactive-preview">

<div className="absolute -inset-4 bg-gradient-to-r from-brand-lime/25 via-amber-500/15 to-brand-lime/25 rounded-[40px] blur-3xl opacity-50 -z-10"></div>

<div className="hidden md:flex absolute -top-8 -left-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel border border-[#FF5E1A]/40 animate-float-slow shadow-xl"><div className="w-8 h-8 rounded-xl bg-[#FF5E1A]/10 flex items-center justify-center text-[#FF5E1A]"><span className="material-symbols-outlined text-[20px]">bolt</span></div><div className="text-left"><div className="text-[11px] font-bold text-[#FF5E1A] uppercase tracking-wider">AI Instant Parsing</div><div className="text-xs font-semibold text-white">Instagram Reel → Routine in 1.4s</div></div></div>

<div className="hidden md:flex absolute -top-6 -right-6 z-20 items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel border border-[#FF5E1A]/40 animate-float-delayed shadow-xl"><div className="w-8 h-8 rounded-xl bg-[#FF5E1A]/20 flex items-center justify-center text-[#FF5E1A]"><span className="material-symbols-outlined text-[20px]">local_fire_department</span></div><div className="text-left"><div className="text-[11px] font-bold text-[#FF5E1A] uppercase tracking-wider">Consistency Streak</div><div className="text-xs font-semibold text-white">14 Days Clean &amp; Active</div></div></div>

<div className="hidden lg:flex absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 items-center gap-3 px-5 py-2.5 rounded-full glass-lime border border-brand-borderLime shadow-2xl">
<span className="material-symbols-outlined text-[#FF5E1A] text-[18px]">verified</span>
<span className="text-xs font-display font-semibold text-white">Stop taking useless screenshots. Build actual muscle memory.</span>
</div>

<div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C4F82A_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

<div className="lg:col-span-5 flex flex-col">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-display font-bold uppercase tracking-wider text-gray-400">Saved Social Reel</span>
</div>
<span className="text-xs font-medium text-brand-lime bg-brand-lime/10 px-2 py-0.5 rounded-full">Instagram / TikTok</span>
</div>

<div className="relative w-full aspect-[9/13] max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl group">

<div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/60 to-zinc-950 flex flex-col justify-between p-5">

<div className="flex items-center justify-between z-10">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-400 to-pink-600 p-[1.5px]">
<div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-bold text-white">CF</div>
</div>
<span className="text-xs font-bold text-white drop-shadow">@coach_fitness</span>
</div>
<span className="material-symbols-outlined text-white/80 text-[20px]">more_vert</span>
</div>

<div className="my-auto flex flex-col items-center justify-center text-center py-6">
<div className="w-20 h-20 rounded-full bg-[#FF5E1A]/10 border border-[#FF5E1A]/40 flex items-center justify-center mb-3 text-[#FF5E1A] group-hover:scale-110 transition-transform"><span className="material-symbols-outlined text-[42px]">fitness_center</span></div>
<div className="inline-block px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-white font-display font-bold text-sm">
                      Dumbbell Chest &amp; Core Blast 🔥
                    </div>
<div className="text-[11px] text-gray-300 mt-2 max-w-[200px]">
                      "Save this reel for chest day! 4 sets of 10, then 20 leg raises to burnout..."
                    </div>
</div>

<div className="z-10 flex items-end justify-between">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-xs text-white">
<span className="material-symbols-outlined text-[16px] text-brand-lime animate-spin-slow">music_note</span>
<span className="truncate max-w-[140px] text-[11px] text-gray-300">Original Workout Audio</span>
</div>
<div className="flex items-center gap-3 text-xs text-gray-300 mt-1">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-red-500 text-[14px]">favorite</span> 48.2k</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-brand-lime text-[14px]">bookmark</span> Saved</span>
</div>
</div>

<button className="px-3.5 py-2 rounded-xl bg-[#FF5E1A] text-white font-display font-bold text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,94,26,0.4)] hover:bg-white hover:text-black transition-all transform active:scale-95" id="import-btn"><span className="material-symbols-outlined text-[16px]">auto_awesome</span><span className="">Convert</span></button>
</div>
</div>

<div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-lime to-transparent shadow-[0_0_15px_#FF5E1A] animate-scan pointer-events-none z-20"></div>
<div className="absolute top-3 right-3 z-30 flex items-center gap-1 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#FF5E1A]/40 text-[10px] text-[#FF5E1A] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#FF5E1A] animate-ping"></span>AI DETECTING</div>
</div>
</div>

<div className="lg:col-span-2 flex flex-col items-center justify-center text-center my-4 lg:my-0">
<div className="w-14 h-14 rounded-2xl bg-brand-surface border border-[#FF5E1A]/50 flex items-center justify-center text-[#FF5E1A] shadow-[0_0_25px_rgba(255,94,26,0.25)] relative group cursor-pointer hover:border-[#FF5E1A] transition-all">
<span className="material-symbols-outlined text-[28px] animate-pulse">sync_alt</span>
<div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FF5E1A] flex items-center justify-center">
<span className="material-symbols-outlined text-white text-[10px] font-black">check</span>
</div>
</div>
<div className="font-display font-bold text-xs text-brand-lime uppercase tracking-wider mt-3">FreakyFit Engine</div>
<div className="text-[11px] text-gray-400 mt-0.5">Extracts Reps, Sets, Timing &amp; Rest</div>
</div>

<div className="lg:col-span-5 flex flex-col">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-brand-lime"></span>
<span className="text-xs font-display font-bold uppercase tracking-wider text-white">Generated Routine</span>
</div>
<span className="text-xs font-bold text-brand-lime flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span> 45 Min Session
                </span>
</div>

<div className="rounded-2xl p-5 bg-brand-surface/90 border border-brand-borderLime/40 shadow-2xl flex flex-col gap-3 relative overflow-hidden">

<div className="flex items-center justify-between pb-3 border-b border-white/5">
<div>
<h3 className="font-display font-bold text-lg text-white">Back &amp; Biceps Workout</h3>
<p className="text-xs text-gray-400">Imported from Instagram reel • 4 Exercises</p>
</div>
<div className="w-10 h-10 rounded-xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 flex items-center justify-center text-[#FF5E1A]"><span className="material-symbols-outlined text-[22px]">directions_run</span></div>
</div>

<div className="space-y-2.5">

<div className="p-3 rounded-xl bg-brand-dark border border-brand-lime/40 flex items-center justify-between group hover:border-brand-lime transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center font-display font-black text-brand-lime text-sm border border-white/5">
                        01
                      </div>
<div>
<div className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                          Alternating Leg Raise
                          <span className="text-[9px] bg-[#FF5E1A] text-white font-extrabold px-1.5 py-0.2 rounded uppercase">Current</span>
</div>
<div className="text-xs text-gray-400">20 reps • Core stability</div>
</div>
</div>

<div className="relative w-9 h-9 flex items-center justify-center"><svg className="w-9 h-9 transform -rotate-90">
<circle cx="18" cy="18" fill="none" r="14" stroke="#27272a" strokeWidth="3"></circle>
<circle cx="18" cy="18" fill="none" r="14" stroke="#FF5E1A" strokeDasharray="88" strokeDashoffset="24" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<span className="absolute font-display font-bold text-[10px] text-white">18s</span></div>
</div>

<div className="p-3 rounded-xl bg-brand-card/40 border border-white/5 flex items-center justify-between hover:border-white/15 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center font-display font-bold text-gray-400 text-sm">
                        02
                      </div>
<div>
<div className="font-display font-semibold text-sm text-white">Incline Dumbbell Curl</div>
<div className="text-xs text-gray-400">4 sets × 12 reps • 60s Rest</div>
</div>
</div>
<span className="material-symbols-outlined text-[#FF5E1A] text-[18px]">check_circle</span>
</div>

<div className="p-3 rounded-xl bg-brand-card/40 border border-white/5 flex items-center justify-between hover:border-white/15 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center font-display font-bold text-gray-400 text-sm">
                        03
                      </div>
<div>
<div className="font-display font-semibold text-sm text-white">Lat Pulldowns</div>
<div className="text-xs text-gray-400">3 sets × 10 reps • Progressive load</div>
</div>
</div>
<span className="material-symbols-outlined text-gray-500 text-[18px]">schedule</span>
</div>
</div>

<button className="mt-2 w-full py-3 rounded-xl bg-[#FF5E1A] text-white font-display font-extrabold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-[0_0_20px_rgba(255,94,26,0.3)]">
<span className="material-symbols-outlined text-[18px]">play_arrow</span>
<span className="">Start Workout Timer</span>
</button>
</div>
</div>
</div>
</div>
</div>

<section className="mt-28 lg:mt-36" id="features">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="font-display font-bold text-xs uppercase tracking-widest text-[#FF5E1A]">Everything you need</span>
<h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2">
            Turn Chaos into Structured Progress
          </h2>
<p className="text-gray-400 text-sm sm:text-base mt-3">
            Stop losing workouts in your saved tabs. FreakyFit organizes notes, social videos, and training splits into clean daily habits.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#FF5E1A]/50 transition-all group hover:-translate-y-1"><div className="w-12 h-12 rounded-xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 flex items-center justify-center text-[#FF5E1A] mb-5 group-hover:scale-110 transition-transform"><span className="material-symbols-outlined text-[24px]">ios_share</span></div><div className="font-display font-bold text-xs uppercase text-[#FF5E1A] tracking-wider mb-1">Import</div><h3 className="font-display font-bold text-lg text-white mb-2">1-Tap Social Import</h3><p className="text-xs text-gray-400 leading-relaxed">Convert short videos from Instagram and TikTok into step-by-step routines with parsed reps, sets, and notes.</p></div><div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#FF5E1A]/50 transition-all group hover:-translate-y-1"><div className="w-12 h-12 rounded-xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 flex items-center justify-center text-[#FF5E1A] mb-5 group-hover:scale-110 transition-transform"><span className="material-symbols-outlined text-[24px]">timer</span></div><div className="font-display font-bold text-xs uppercase text-[#FF5E1A] tracking-wider mb-1">Workout Timer</div><h3 className="font-display font-bold text-lg text-white mb-2">Guided Session Timer</h3><p className="text-xs text-gray-400 leading-relaxed">Automated rest intervals, rep counts, and audio chimes keep you on track throughout your gym session.</p></div><div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#FF5E1A]/50 transition-all group hover:-translate-y-1"><div className="w-12 h-12 rounded-xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 flex items-center justify-center text-[#FF5E1A] mb-5 group-hover:scale-110 transition-transform"><span className="material-symbols-outlined text-[24px]">calendar_month</span></div><div className="font-display font-bold text-xs uppercase text-[#FF5E1A] tracking-wider mb-1">Workout Planner</div><h3 className="font-display font-bold text-lg text-white mb-2">Daily Schedule Splits</h3><p className="text-xs text-gray-400 leading-relaxed">Add imported workouts directly into your calendar. Organize routines into custom catalog folders and splits.</p></div><div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#FF5E1A]/50 transition-all group hover:-translate-y-1"><div className="w-12 h-12 rounded-xl bg-[#FF5E1A]/10 border border-[#FF5E1A]/30 flex items-center justify-center text-[#FF5E1A] mb-5 group-hover:scale-110 transition-transform"><span className="material-symbols-outlined text-[24px]">local_fire_department</span></div><div className="font-display font-bold text-xs uppercase text-[#FF5E1A] tracking-wider mb-1">Streaks</div><h3 className="font-display font-bold text-lg text-white mb-2">Milestones &amp; Streaks</h3><p className="text-xs text-gray-400 leading-relaxed">Track consistency, total workouts completed, and stay motivated as you build genuine training habits.</p></div></div>
</section>

<section className="mt-28 lg:mt-36" id="metrics">
<div className="text-center max-w-xl mx-auto mb-14">
<span className="font-display font-bold text-xs uppercase tracking-widest text-[#FF5E1A]">Social Proof</span>
<h2 className="font-display font-extrabold text-3xl text-white mt-1">Hear it from our users</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
<p className="text-sm text-gray-300 italic mb-6 leading-relaxed">
              “I tried importing a few workouts and it worked better than I expected. I’m traveling a lot and this finally gives structure to workouts I usually forget about.”
            </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-9 h-9 rounded-full bg-[#FF5E1A]/20 border border-[#FF5E1A]/40 text-[#FF5E1A] font-display font-bold flex items-center justify-center text-xs">JB</div>
<div>
<div className="font-display font-bold text-sm text-white">James Bearman</div>
<div className="text-xs text-gray-400">Frequent Traveler &amp; Lifter</div>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl border border-brand-borderLime/40 flex flex-col justify-between shadow-[0_0_20px_rgba(196,248,42,0.1)]">
<p className="text-sm text-gray-300 italic mb-6 leading-relaxed">
              “I had dozens of workout reels saved but never followed them properly. This turns them into something I can actually complete.”
            </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-9 h-9 rounded-full bg-[#FF5E1A]/20 border border-[#FF5E1A]/40 text-[#FF5E1A] font-display font-bold flex items-center justify-center text-xs">NJ</div>
<div>
<div className="font-display font-bold text-sm text-white">Natasha Jackson</div>
<div className="text-xs text-gray-400">Fitness Enthusiast</div>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between">
<p className="text-sm text-gray-300 italic mb-6 leading-relaxed">
              “FreakyFit helps me organize all my workout in one place. Notes, social videos, week plans etc.”
            </p>
<div className="flex items-center gap-3 pt-4 border-t border-white/5">
<div className="w-9 h-9 rounded-full bg-zinc-700 text-white font-display font-bold flex items-center justify-center text-xs">
                MJ
              </div>
<div>
<div className="font-display font-bold text-sm text-white">Matt J</div>
<div className="text-xs text-gray-400">Regular Gym Goer</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-28 max-w-3xl mx-auto" id="faq">
<div className="text-center mb-10">
<span className="font-display font-bold text-xs uppercase tracking-widest text-[#FF5E1A]">Got Questions?</span>
<h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">Frequently asked questions</h2>
</div>
<div className="space-y-4">
<div className="glass-panel p-5 rounded-2xl border border-white/5">
<div className="flex items-center justify-between cursor-pointer">
<span className="font-display font-bold text-sm sm:text-base text-white">Is FreakyFit free to use?</span>
<span className="material-symbols-outlined text-brand-lime">expand_more</span>
</div>
<p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Yes, FreakyFit is free to download and start organizing your favorite workouts with all essential import features.
            </p>
</div>
<div className="glass-panel p-5 rounded-2xl border border-white/5">
<div className="flex items-center justify-between cursor-pointer">
<span className="font-display font-bold text-sm sm:text-base text-white">Where can I save workouts from?</span>
<span className="material-symbols-outlined text-brand-lime">expand_more</span>
</div>
<p className="text-xs text-gray-400 mt-2 leading-relaxed">
              You can import clips directly via share links from Instagram Reels and TikTok, or paste manual workout notes directly.
            </p>
</div>
<div className="glass-panel p-5 rounded-2xl border border-white/5">
<div className="flex items-center justify-between cursor-pointer">
<span className="font-display font-bold text-sm sm:text-base text-white">Does FreakyFit replace a workout or coaching app?</span>
<span className="material-symbols-outlined text-brand-lime">expand_more</span>
</div>
<p className="text-xs text-gray-400 mt-2 leading-relaxed">
              FreakyFit is designed to bridge the gap between social media inspiration and execution by giving you a clear timer and routine manager for routines you actually want to do.
            </p>
</div>
</div>
</section>

<section className="mt-28 rounded-3xl p-8 sm:p-12 glass-panel border border-[#FF5E1A]/40 shadow-[0_0_40px_rgba(255,94,26,0.15)] text-center relative overflow-hidden" id="download"><div className="absolute inset-0 bg-gradient-to-r from-[#FF5E1A]/10 to-brand-lime/10 pointer-events-none"></div><div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center"><span className="font-display font-bold text-xs uppercase tracking-widest text-[#FF5E1A] mb-2">Download The App</span><h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-4">Stop using messy saved folders, FreakyFit helps you organize workouts into clean routines.</h2><div className="flex flex-wrap items-center justify-center gap-4 mt-4"><a className="px-6 py-3.5 rounded-full font-display font-extrabold text-sm transition-all bg-[#FF5E1A] text-white hover:opacity-90 shadow-lg shadow-[#FF5E1A]/25" href="https://apps.apple.com/us/app/freakyfit-workout-organizer/id6756478119" target="_blank">Download on App Store</a><a className="px-6 py-3.5 rounded-full glass-panel border border-white/20 text-white font-display font-extrabold text-sm hover:border-[#FF5E1A] transition-all" href="https://play.google.com/store/apps/details?id=com.freakyfit.app" target="_blank">Get it on Google Play</a></div></div></section>
</div>
</main>

<footer className="border-t border-white/5 py-12 glass-panel">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-borderLime flex items-center justify-center p-1"><img src="/logo.svg" alt="FreakyFit Logo" className="w-full h-auto object-contain" /></div>
<span className="font-display font-bold text-lg text-white">FreakyFit</span>
<span className="text-xs text-gray-500 ml-2">Turn saved workouts into trackable routines</span>
</div>
<div className="text-xs text-gray-500">
        © 2026 FreakyFit. All rights reserved. • <a className="hover:text-[#FF5E1A] transition-colors" href="/privacy">Privacy Policy</a>
</div>
</div>
</footer>
    </>
  );
}
