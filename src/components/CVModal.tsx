import React from 'react';
import { X, Printer, Download, Award, CheckCircle, Mail, Phone, MapPin, Cloud } from 'lucide-react';
import { PROFILE_DATA, IELTS_CREDENTIALS } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-sky-200 flex flex-col">
        {/* Modal Controls Bar */}
        <div className="sticky top-0 z-20 bg-[#0e2a44] text-white px-6 py-4 flex items-center justify-between border-b border-sky-500/20">
          <div className="flex items-center gap-2.5">
            <span className="p-1 rounded-lg bg-sky-500/20 text-sky-300">
              <Cloud className="w-4 h-4 fill-sky-300/30 text-sky-200" />
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-sky-200 font-semibold">
              Curriculum Vitae Preview · {PROFILE_DATA.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-sky-300" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content Sheet */}
        <div className="p-6 sm:p-10 text-slate-800 space-y-8 print:p-0">
          {/* CV Header */}
          <div className="border-b-2 border-[#137db5] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#173854] font-serif">
                {PROFILE_DATA.name}
              </h1>
              <p className="text-sm font-semibold text-[#137db5] tracking-wide mt-1">
                {PROFILE_DATA.title} · Foreign Trade University (FTU K63)
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Specialization: Global Supply Chain, Maritime Logistics & International Trade
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-1 sm:text-right font-mono">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#137db5]" />
                <span>{PROFILE_DATA.phone}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#137db5]" />
                <span>{PROFILE_DATA.universityEmail}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#137db5]" />
                <span>Hanoi, Vietnam</span>
              </div>
            </div>
          </div>

          {/* Education & Academic Identity */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#137db5] font-mono border-b border-sky-100 pb-1">
              Education
            </h2>
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="font-bold text-[#173854] text-base">
                    Foreign Trade University (FTU Hanoi)
                  </h3>
                  <p className="text-xs text-[#137db5] font-semibold">
                    Bachelor of Science in International Business Economics · Class {PROFILE_DATA.classGroup}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-500">2024 - 2028</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Core coursework: International Trade Policy, Logistics & Freight Management, Multilateral Incoterms, Commercial Law, Macroeconomics, Export Marketing.
              </p>
            </div>
          </div>

          {/* Key Credentials: IELTS */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#137db5] font-mono border-b border-sky-100 pb-1">
              Linguistic Certification
            </h2>
            <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-bold text-[#173854] text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#137db5]" />
                  <span>IELTS Academic Band 8.0</span>
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  CEFR Level: C1 Advanced Proficient · Certified English for Global Academia
                </div>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#137db5] font-semibold">
                <span>Listening: <strong>{IELTS_CREDENTIALS.listening}</strong></span>
                <span>·</span>
                <span>Reading: <strong>{IELTS_CREDENTIALS.reading}</strong></span>
                <span>·</span>
                <span>Speaking: <strong>{IELTS_CREDENTIALS.speaking}</strong></span>
                <span>·</span>
                <span>Writing: <strong>{IELTS_CREDENTIALS.writing}</strong></span>
              </div>
            </div>
          </div>

          {/* Academic Focus & Trade Specialization */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#137db5] font-mono border-b border-sky-100 pb-1">
              Academic & Trade Specialization
            </h2>
            <div className="space-y-2 text-xs text-slate-700 leading-relaxed">
              <p>
                <strong>International Trade & Macroeconomics:</strong> Advanced coursework in multilateral trade agreements, Incoterms 2020 frameworks, customs valuation, tariff schedules, and global trade compliance.
              </p>
              <p>
                <strong>Logistics & Cold-Chain Management:</strong> Analysis of intermodal maritime container shipping lanes, port operations (Cai Mep - Thi Vai & Lach Huyen deep-water hubs), post-harvest temperature control, and agricultural export resilience.
              </p>
            </div>
          </div>

          {/* Skills, Tools & Character Traits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#137db5] font-mono border-b border-sky-100 pb-1">
                Technical & Core Skills
              </h2>
              <div className="text-xs text-slate-700 space-y-1">
                <p><strong>Technical:</strong> Microsoft Office 365 (Advanced Excel modeling, PowerPoint presentation design, Word), Google Workspace, Canva.</p>
                <p><strong>Trade Tools:</strong> Incoterms 2020 frameworks, tariff code search, bill of lading review, cold chain sensor monitoring.</p>
                <p><strong>Soft Skills:</strong> Adaptability, high-impact oral communication, cross-functional collaboration.</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#137db5] font-mono border-b border-sky-100 pb-1">
                Personal Assessment & Values
              </h2>
              <div className="text-xs text-slate-700 space-y-1">
                <p><strong>Self-Assessment:</strong> Accountable, honest, independent, and strategic.</p>
                <p><strong>Peer Assessment:</strong> Generous, sociable, and mentally supportive.</p>
                <p><strong>Attitude:</strong> Progressive spirit, respectful listener, lifelong learner.</p>
              </div>
            </div>
          </div>

          {/* Career Statement */}
          <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 text-xs text-slate-700 leading-relaxed">
            <span className="font-bold text-[#173854] block mb-1">Career Ambition:</span>
            Dedicated to working in Logistics and Global Supply Chain Management for 2-3 years post-FTU graduation, followed by international master's study abroad, with the long-term goal of elevating Vietnamese agricultural and seafood exports to global markets.
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="bg-sky-50/60 px-6 py-4 border-t border-sky-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#137db5] text-white hover:bg-[#0f6897] transition-colors cursor-pointer shadow-sm"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
