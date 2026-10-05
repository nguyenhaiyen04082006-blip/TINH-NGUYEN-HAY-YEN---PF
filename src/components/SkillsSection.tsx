import React, { useState } from 'react';
import { Sparkles, Award, CheckCircle2, BookOpen, Layers, Laptop, MessageSquare, RefreshCw, Cloud } from 'lucide-react';
import { IELTS_CREDENTIALS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const ieltsBreakdown = [
    {
      skill: 'Listening',
      score: IELTS_CREDENTIALS.listening,
      description: 'Flawless comprehension of diverse international accents, rapid academic lectures, and nuance recognition.',
      keyStrengths: 'Note-taking speed, identifying implicit speaker stances, zero confusion on distractor cues.'
    },
    {
      skill: 'Reading',
      score: IELTS_CREDENTIALS.reading,
      description: 'Flawless 9.0 band mastery: swift scanning of scientific journals, international trade regulations, and dense economic reports.',
      keyStrengths: 'Dissecting complex argumentative structures, true/false/not given precision, advanced vocabulary synthesis.'
    },
    {
      skill: 'Writing',
      score: IELTS_CREDENTIALS.writing,
      description: 'Structured analysis of complex data graphs (Task 1) and balanced analytical argumentative essays (Task 2).',
      keyStrengths: 'Cohesion & coherence, rich academic collocations, clear thesis formulation, data accuracy.'
    },
    {
      skill: 'Speaking',
      score: IELTS_CREDENTIALS.speaking,
      description: 'Confident conversational fluency, spontaneous articulation on geopolitical and economic themes, and natural interactive flow.',
      keyStrengths: 'Idiomatic fluency, appropriate discourse markers, clear pronunciation with natural intonation.'
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-24 bg-gradient-to-b from-[#e2f0fa] via-[#eef6fc] to-[#e6f2fb] relative overflow-hidden">
      {/* Background Soft Dreamy Clouds Ambient Glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-white/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#87c7e8]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#137db5] mb-2">
            <Cloud className="w-3.5 h-3.5 fill-sky-200 text-[#137db5]" />
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#173854] tracking-tight">
            SKILLS AND ATTITUDES
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A balanced integration of linguistic mastery, analytical office competencies, and a humble, collaborative growth mindset.
          </p>
        </div>

        {/* Featured Lingual Mastery Card: 8.0 IELTS Certificate (Dreamy Sky Cobalt Style) */}
        <div className="mb-12 p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#137db5] via-[#1a5f8a] to-[#1e3a5f] text-white shadow-xl shadow-sky-900/15 border border-white/20 relative overflow-hidden">
          {/* Subtle water ripple & cloud glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/20">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-white/20 border border-white/40 text-white shadow-inner">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-sky-200 uppercase tracking-widest">
                    <span>Lingual Skill Credentials</span>
                    <span aria-hidden="true">·</span>
                    <span>Official Certification</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                    8.0 IELTS Academic Certificate
                  </h3>
                </div>
              </div>

              {/* CEFR Level Pill */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-sky-100">
                <span className="font-semibold text-white px-3 py-1 rounded-full bg-white/15 border border-white/25">
                  CEFR: C1 Advanced User
                </span>
                <span className="text-sky-200 hidden sm:inline">Certified for Global Academia & Trade</span>
              </div>
            </div>

            {/* Score Grid with Tabular Numerals */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
              {/* Overall Score Highlight */}
              <div className="col-span-2 lg:col-span-1 p-5 rounded-2xl bg-white/15 border border-white/30 flex flex-col justify-between shadow-inner">
                <span className="text-xs uppercase tracking-wider text-sky-200 font-mono font-semibold">
                  Overall Band
                </span>
                <div className="my-2">
                  <span className="text-5xl font-black font-mono tabular-nums text-white">
                    8.0
                  </span>
                  <span className="text-sky-200 text-sm ml-1 font-mono">/ 9.0</span>
                </div>
                <span className="text-[11px] text-sky-100 leading-tight">
                  Top 2% of global test-takers worldwide
                </span>
              </div>

              {/* Individual sub-skills */}
              {ieltsBreakdown.map((item) => (
                <div
                  key={item.skill}
                  className="p-5 rounded-2xl bg-white/10 border border-white/15 hover:border-white/40 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs text-sky-100">
                    <span className="font-semibold uppercase tracking-wider text-sky-200">{item.skill}</span>
                    <span className="text-lg font-black font-mono tabular-nums text-white">
                      {item.score.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-[11px] text-sky-100 mt-2 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3 w-full bg-black/20 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-sky-200 to-white h-full rounded-full"
                      style={{ width: `${(item.score / 9.0) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid: Soft Skills, Technical Skills, Attitude (Cloud White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Soft Skills */}
          <div className="p-7 rounded-3xl bg-white/95 backdrop-blur-xl border border-white hover:border-sky-300 transition-all shadow-xl shadow-sky-950/5 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-sky-100 text-[#137db5] flex items-center justify-center shadow-2xs">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#173854] tracking-tight">
                Soft Skills
              </h3>
              <p className="text-xs text-slate-500">
                Interpersonal and organizational capabilities honed through high-paced university projects.
              </p>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                <div className="font-semibold text-[#173854]">Adaptability Skill</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Swiftly navigating dynamic project scopes, changing deadlines, and multicultural teamwork.
                </div>
              </li>
              <li className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                <div className="font-semibold text-[#173854]">Communication Skill</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Articulating technical economic models and trade policies clearly to diverse audiences.
                </div>
              </li>
              <li className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                <div className="font-semibold text-[#173854]">Collaborative Skill</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Synthesizing distinct viewpoints into unified team consensus and shared ownership.
                </div>
              </li>
            </ul>

            <div className="text-[11px] text-[#137db5] font-semibold pt-1">
              Proactively tested across 10+ university team cases
            </div>
          </div>

          {/* Pillar 2: Technical Skills */}
          <div className="p-7 rounded-3xl bg-white/95 backdrop-blur-xl border border-white hover:border-sky-300 transition-all shadow-xl shadow-sky-950/5 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-sky-100 text-[#137db5] flex items-center justify-center shadow-2xs">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#173854] tracking-tight">
                Technical Skills
              </h3>
              <p className="text-xs text-slate-500">
                Essential office information tools, trade analysis software, and quantitative modeling.
              </p>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                <div className="font-semibold text-[#173854]">Basic Office Information Skills</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Advanced spreadsheet formulas (VLOOKUP, XLOOKUP, Pivot Tables) for trade tariff modeling.
                </div>
              </li>
              <li className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                <div className="font-semibold text-[#173854]">Professional Presentation Design</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Structuring executive slide decks in PowerPoint and Canva with crisp visual communication.
                </div>
              </li>
              <li className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                <div className="font-semibold text-[#173854]">Trade Documentation & Data</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Drafting commercial invoices, packing lists, bill of lading checks, and Incoterms contracts.
                </div>
              </li>
            </ul>

            <div className="text-[11px] text-[#137db5] font-semibold pt-1">
              Proficient in Microsoft Office 365, Google Workspace & Canva
            </div>
          </div>

          {/* Pillar 3: Attitude & Growth Mindset */}
          <div className="p-7 rounded-3xl bg-white/95 backdrop-blur-xl border border-white hover:border-sky-300 transition-all shadow-xl shadow-sky-950/5 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-sky-100 text-[#137db5] flex items-center justify-center shadow-2xs">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#173854] tracking-tight">
                Attitudes & Mindset
              </h3>
              <p className="text-xs text-slate-500">
                The non-negotiable mental tenets that guide my work ethics and interpersonal conduct.
              </p>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                <div className="font-semibold text-[#173854]">Progressive Spirit</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Continuously seeking self-improvement, constructive criticism, and expanding professional boundaries.
                </div>
              </li>
              <li className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                <div className="font-semibold text-[#173854]">Respect & Active Listening</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  “I respect and willingly listen as well as learn from others” — honoring diverse perspectives.
                </div>
              </li>
              <li className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100">
                <div className="font-semibold text-[#173854]">Humility & Lifelong Learning</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Treating every mentor, professor, and peer encounter as a masterclass in professional growth.
                </div>
              </li>
            </ul>

            <div className="text-[11px] text-[#137db5] font-semibold pt-1">
              Grounded in accountability and intellectual honesty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
