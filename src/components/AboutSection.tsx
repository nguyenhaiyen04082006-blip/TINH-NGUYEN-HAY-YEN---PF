import React from 'react';
import { User, Sparkles, Award, GraduationCap, Quote, ArrowRight, CheckCircle2, HeartHandshake, Compass, Cloud } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onNextSection?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNextSection }) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-gradient-to-b from-[#e8f3fb] via-[#f3f9fd] to-[#e2f0fa] relative overflow-hidden">
      {/* Background Soft Dreamy Clouds Ambient Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-white/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#87c7e8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#137db5] mb-2">
            <Cloud className="w-3.5 h-3.5 fill-sky-200 text-[#137db5]" />
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span>Personal Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#173854] tracking-tight">
            ABOUT ME
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            An authentic glimpse into my academic trajectory, core character virtues, and the life philosophy that guides my daily aspirations.
          </p>
        </div>

        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Academic Identity Card (Cloud Style) */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-white/95 backdrop-blur-xl border border-white shadow-xl shadow-sky-950/5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-sky-100">
                <div className="p-3 rounded-2xl bg-sky-100 text-[#137db5] shadow-2xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#173854] font-serif">
                    Academic Identity
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">Foreign Trade University</p>
                </div>
              </div>

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-mono uppercase tracking-wider text-[#137db5] font-semibold">
                    Full Name
                  </dt>
                  <dd className="text-base font-bold text-[#173854] mt-0.5">
                    {PROFILE_DATA.name}
                  </dd>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-[#137db5] font-semibold">
                      Class Group
                    </dt>
                    <dd className="text-sm font-semibold text-slate-800 mt-0.5">
                      {PROFILE_DATA.classGroup}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-[#137db5] font-semibold">
                      Cohort
                    </dt>
                    <dd className="text-sm font-semibold text-slate-800 mt-0.5">
                      {PROFILE_DATA.cohort}
                    </dd>
                  </div>
                </div>

                <div>
                  <dt className="text-xs font-mono uppercase tracking-wider text-[#137db5] font-semibold">
                    Academic Major
                  </dt>
                  <dd className="text-sm font-semibold text-slate-800 mt-0.5">
                    {PROFILE_DATA.major}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-mono uppercase tracking-wider text-[#137db5] font-semibold">
                    Faculty
                  </dt>
                  <dd className="text-sm font-semibold text-slate-800 mt-0.5">
                    {PROFILE_DATA.faculty}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="pt-4 border-t border-sky-100 flex items-center justify-between text-xs text-slate-500">
              <span>Hanoi Campus · 91 Chua Lang</span>
              <span className="font-mono text-[#137db5] font-semibold">FTU · K63</span>
            </div>
          </div>

          {/* Right Column: Life Philosophy & Dual Assessment Deck */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* The Signature Quote Card (Lao Tzu) */}
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#137db5] to-[#1e3a5f] text-white shadow-xl shadow-sky-900/15 relative overflow-hidden flex flex-col justify-between">
              {/* Background Cloud Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-200">
                  <Quote className="w-4 h-4 text-sky-300" />
                  <span>Guiding Life Philosophy</span>
                </div>

                <blockquote className="text-xl sm:text-2xl font-serif italic text-white leading-relaxed">
                  “{PROFILE_DATA.favouriteQuote}”
                </blockquote>

                <div className="pt-2 text-xs font-mono text-sky-200 font-medium">
                  — {PROFILE_DATA.quoteAuthor}
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-white/20 text-xs text-sky-100/90 leading-relaxed">
                Reminding myself every morning that monumental achievements in international trade and sustainable agriculture are born from humble, diligent steps taken today.
              </div>
            </div>

            {/* Persona Perspectives: Self vs Others (Exact Canva Data) */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white/95 backdrop-blur-xl border border-white shadow-xl shadow-sky-950/5 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#173854] font-mono uppercase tracking-wider">
                  Character & Perception Blueprint
                </h3>
                <span className="text-xs text-slate-500 font-mono">FTU English 06</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Self-Assessment */}
                <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-[#137db5] font-semibold text-sm">
                    <User className="w-4 h-4 text-[#137db5]" />
                    <span>Self-Assessment</span>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    How I understand my internal engine:
                  </p>
                  <ul className="space-y-2 text-sm">
                    {PROFILE_DATA.selfAssessment.map((trait, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#137db5] shrink-0" />
                        <span className="font-medium">{trait}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 pt-2 border-t border-sky-200/60 leading-relaxed">
                    Committed to taking ownership of every project, analyzing bottlenecks strategically, and operating with transparent honesty.
                  </p>
                </div>

                {/* Others' Assessment */}
                <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-[#137db5] font-semibold text-sm">
                    <HeartHandshake className="w-4 h-4 text-[#137db5]" />
                    <span>Others’ Assessment</span>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    How mentors and team members view me:
                  </p>
                  <ul className="space-y-2 text-sm">
                    {PROFILE_DATA.peerAssessment.map((trait, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                        <span className="font-medium">{trait}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 pt-2 border-t border-sky-200/60 leading-relaxed">
                    Always ready to uplift teammates during high-pressure exam seasons, share academic resources, and foster calm collaboration.
                  </p>
                </div>
              </div>

              {/* Personal Synthesis Narrative */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 space-y-2 text-sm text-slate-700 leading-relaxed">
                <h4 className="font-semibold text-[#173854] flex items-center gap-2 text-sm">
                  <Compass className="w-4 h-4 text-[#137db5]" />
                  <span>My Journey & Worldview</span>
                </h4>
                <p>
                  Growing up in a dedicated military household taught me that discipline is freedom. At Foreign Trade University, I channel this ethic into analyzing how global supply chains can become more inclusive and sustainable.
                </p>
                <p className="text-xs text-slate-500">
                  Whether leading academic debate sessions, researching global trade corridors, or studying cargo shipping lanes, I strive to embody the timeless wisdom that every grand milestone is constructed through consistent daily effort.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation CTA */}
        {onNextSection && (
          <div className="flex justify-end pt-2">
            <button
              onClick={onNextSection}
              className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#137db5] hover:bg-[#0f6897] shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Next: Skills & 8.0 IELTS Credentials</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
