import React from 'react';
import { Cloud, Heart, ArrowUp, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (pageId: string) => void;
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e2a44] text-white border-t border-sky-800/40 relative overflow-hidden">
      {/* Background radial dreamy cloud glow */}
      <div className="absolute inset-0 bg-radial from-sky-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Personal Statement */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-xl bg-sky-500/20 text-sky-300">
                <Cloud className="w-5 h-5 fill-sky-300/30 text-sky-200" />
              </span>
              <span className="text-xl font-bold font-serif tracking-tight text-white flex items-center gap-1.5">
                <span>{PROFILE_DATA.name}</span>
                <Sparkles className="w-3.5 h-3.5 text-sky-400 opacity-80" />
              </span>
            </div>

            <p className="text-xs sm:text-sm text-sky-100 max-w-md leading-relaxed">
              Third-year student at Foreign Trade University (FTU Hanoi), majoring in International Business Economics. Aspiring to bridge Vietnamese agricultural excellence with global maritime supply chains.
            </p>

            <div className="pt-2 text-xs font-serif italic text-sky-200">
              “{PROFILE_DATA.favouriteQuote}” — {PROFILE_DATA.quoteAuthor}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-300 font-semibold">
              Portfolio Pages
            </h4>
            <ul className="space-y-2 text-xs text-sky-100">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  01. Home & Introduction
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  02. About Me & Persona
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('skills')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  03. Skills & Attitudes (IELTS 8.0)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('career')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  04. Career Goal & Vietnam Export
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  05. Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Meta */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sky-300 font-semibold">
              Get in Touch
            </h4>
            <div className="space-y-1.5 text-xs text-sky-100">
              <p>
                <span className="text-sky-300/80">Phone: </span>
                <a href={`tel:${PROFILE_DATA.phone}`} className="hover:text-white">
                  {PROFILE_DATA.phone}
                </a>
              </p>
              <p>
                <span className="text-sky-300/80">FTU: </span>
                <a href={`mailto:${PROFILE_DATA.universityEmail}`} className="hover:text-white">
                  {PROFILE_DATA.universityEmail}
                </a>
              </p>
              <p>
                <span className="text-sky-300/80">Personal: </span>
                <a href={`mailto:${PROFILE_DATA.personalEmail}`} className="hover:text-white">
                  {PROFILE_DATA.personalEmail}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCV}
                className="text-xs text-sky-300 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                View Full Curriculum Vitae →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom hairline divider & copyright */}
        <div className="pt-8 border-t border-sky-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-200/70">
          <div className="flex items-center gap-1.5">
            <span>Designed for {PROFILE_DATA.name}</span>
            <span aria-hidden="true">·</span>
            <span>Foreign Trade University K63</span>
            <span aria-hidden="true">·</span>
            <span>Sky Blue Dreamy Clouds Edition (Canva EAGoDbccYHA Inspo)</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-sky-200 hover:text-white transition-colors cursor-pointer p-1"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
