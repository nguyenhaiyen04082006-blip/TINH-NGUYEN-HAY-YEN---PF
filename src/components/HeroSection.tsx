import React from 'react';
import { ArrowRight, Compass, Award, Anchor, Sparkles, Quote, GraduationCap, Cloud } from 'lucide-react';
import { PROFILE_DATA, IELTS_CREDENTIALS } from '../data/portfolioData';

// Background inspired by Canva template EAGoDbccYHA: Sky Blue Dreamy Clouds
import dreamyCloudsBg from '../assets/images/dreamy_sky_blue_clouds_1791204037579.jpg';

interface HeroSectionProps {
  onExploreClick: () => void;
  onCareerClick: () => void;
  onOpenCV: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onCareerClick,
  onOpenCV,
}) => {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center overflow-hidden py-14 lg:py-20">
      {/* Background: Canva EAGoDbccYHA Inspo — Sky Blue Dreamy Clouds */}
      <div className="absolute inset-0 z-0">
        <img
          src={dreamyCloudsBg}
          alt="Dreamy sky blue clouds backdrop"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-100"
        />
        {/* Soft Dreamy Sky Blue & Cloud Mist Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/60 via-sky-900/40 to-[#0e2c48]/70 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-radial from-transparent via-sky-800/15 to-sky-950/60 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Decorative Header Row with Art Deco Knot & Dreamy Badges */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/20">
          <div className="flex items-center gap-3">
            {/* Custom SVG Four-Petal Art Deco Knot as seen in Canva page 1 */}
            <div className="w-10 h-10 rounded-2xl bg-white/20 border border-white/40 flex items-center justify-center text-sky-100 shadow-sm backdrop-blur-md">
              <svg viewBox="0 0 40 40" className="w-6 h-6 stroke-white fill-none" strokeWidth="1.75">
                <circle cx="20" cy="20" r="14" strokeDasharray="3 3" opacity="0.6" />
                <path d="M20 6 C20 15, 15 20, 6 20 C15 20, 20 25, 20 34 C20 25, 25 20, 34 20 C25 20, 20 15, 20 6 Z" fill="rgba(255, 255, 255, 0.3)" />
                <circle cx="20" cy="20" r="3" fill="#ffffff" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-sky-200 font-semibold font-mono flex items-center gap-1.5">
                <span>FTU Cohort 63 · English 06</span>
                <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
              </p>
              <p className="text-xs text-white/90 font-medium">
                Foreign Trade University Hanoi
              </p>
            </div>
          </div>

          {/* Dreamy Cloud Tag Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs text-sky-100 font-medium">
            <Cloud className="w-3.5 h-3.5 fill-sky-200/50 text-white" />
            <span>Faculty of Int. Economics</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>IELTS 8.0</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>Global Supply Chain</span>
          </div>
        </div>

        {/* Expansive Hero Content Without Portrait */}
        <div className="space-y-9">
          <div className="max-w-4xl space-y-5 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs text-sky-100 font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-200" />
              <span>Personal Portfolio · Academic & Professional Roadmap</span>
            </div>

            {/* High-Impact Display Name: NGUYEN HAI YEN */}
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-white leading-none font-sans drop-shadow-md">
              NGUYEN <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-cyan-200">
                HAI YEN
              </span>
            </h1>

            {/* Intro Quote in Crisp Cloud-White Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl text-[#173854] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#137db5] font-semibold">
                <Quote className="w-4 h-4 text-[#137db5]" />
                <span>Introduction</span>
              </div>
              <p className="text-xl sm:text-2xl font-light text-[#173854] leading-relaxed font-serif italic">
                “Hello, I’m Nguyen Hai Yen — A third-year student at Foreign Trade University, majoring in International Business Economics.”
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans pt-1">
                Driven by a deep sense of patriotism, I am dedicated to mastering international logistics and global supply chain strategies to elevate Vietnamese agricultural and seafood exports to the global stage.
              </p>
            </div>
          </div>

          {/* 4-Card Dreamy Bento Deck (No Portrait) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: IELTS Credentials */}
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-white hover:border-sky-300 transition-all text-[#173854] shadow-lg shadow-sky-950/5 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#137db5] font-semibold flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#137db5]" />
                  <span>IELTS Certified</span>
                </span>
                <span className="text-[10px] font-mono font-semibold text-[#137db5] bg-sky-100 px-2.5 py-0.5 rounded-full">
                  CEFR C1
                </span>
              </div>
              <div>
                <div className="text-3xl font-extrabold font-mono tabular-nums text-[#173854]">
                  {IELTS_CREDENTIALS.overall.toFixed(1)}
                  <span className="text-sm font-normal text-slate-500 ml-1 font-mono">/ 9.0</span>
                </div>
                <div className="text-xs text-[#137db5] font-semibold mt-1 font-mono">
                  L: 8.5 · R: 9.0 · W: 7.5 · S: 6.5
                </div>
              </div>
              <p className="text-[11px] text-slate-600 leading-tight pt-2 border-t border-sky-100">
                Flawless academic comprehension and cross-border commercial communication.
              </p>
            </div>

            {/* Card 2: Academic Program */}
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-white hover:border-sky-300 transition-all text-[#173854] shadow-lg shadow-sky-950/5 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#137db5] font-semibold flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#137db5]" />
                  <span>University</span>
                </span>
                <span className="text-[10px] font-mono font-semibold text-[#137db5] bg-sky-100 px-2.5 py-0.5 rounded-full">
                  Class Eng 06
                </span>
              </div>
              <div>
                <div className="text-xl font-bold font-serif text-[#173854]">
                  FTU Hanoi
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Int. Business Economics
                </div>
              </div>
              <p className="text-[11px] text-slate-600 leading-tight pt-2 border-t border-sky-100">
                Faculty of International Economics, studying multilateral tariffs & global trade policies.
              </p>
            </div>

            {/* Card 3: Strategic Career Goal */}
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-white hover:border-sky-300 transition-all text-[#173854] shadow-lg shadow-sky-950/5 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#137db5] font-semibold flex items-center gap-1.5">
                  <Anchor className="w-4 h-4 text-[#137db5]" />
                  <span>Career Ambition</span>
                </span>
                <span className="text-[10px] font-mono font-semibold text-[#137db5] bg-sky-100 px-2.5 py-0.5 rounded-full">
                  Agri-Trade
                </span>
              </div>
              <div>
                <div className="text-xl font-bold font-serif text-[#173854]">
                  Global Supply Chain
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Empowering VN Farmers
                </div>
              </div>
              <p className="text-[11px] text-slate-600 leading-tight pt-2 border-t border-sky-100">
                Expanding worldwide corridors for premium Vietnamese rice, coffee, and seafood.
              </p>
            </div>

            {/* Card 4: Life Philosophy */}
            <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-xl border border-white hover:border-sky-300 transition-all text-[#173854] shadow-lg shadow-sky-950/5 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#137db5] font-semibold flex items-center gap-1.5">
                  <Quote className="w-4 h-4 text-[#137db5]" />
                  <span>Motto</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  Lao Tzu
                </span>
              </div>
              <div>
                <blockquote className="text-sm font-serif italic text-[#173854] leading-snug">
                  “A journey of a thousand miles begins with a single step.”
                </blockquote>
              </div>
              <p className="text-[11px] text-slate-600 leading-tight pt-2 border-t border-sky-100">
                Steered by accountability, honesty, strategic vision, and progressive learning.
              </p>
            </div>
          </div>

          {/* Interactive Primary CTAs in Dreamy Pill Style */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={onExploreClick}
              className="px-7 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider bg-[#137db5] hover:bg-[#0f6897] text-white shadow-lg shadow-sky-950/20 hover:shadow-sky-500/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Profile & Persona</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onCareerClick}
              className="px-6 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider bg-white/90 hover:bg-white text-[#173854] border border-white/80 backdrop-blur-sm transition-all cursor-pointer flex items-center gap-2 shadow-sm hover:shadow"
            >
              <Compass className="w-4 h-4 text-[#137db5]" />
              <span>Career Ambition & Vietnam Export</span>
            </button>

            <button
              onClick={onOpenCV}
              className="px-5 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider text-white hover:text-sky-200 hover:bg-white/10 transition-colors cursor-pointer"
            >
              Review Full Curriculum Vitae →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
