import React, { useState } from 'react';
import { Menu, X, FileText, Send, Cloud, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
  onOpenCV: () => void;
  viewMode: 'pages' | 'scroll';
  onToggleViewMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenCV,
  viewMode,
  onToggleViewMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'career', label: 'Career Vision' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-sky-200/50 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark in display face with dreamy cloud icon */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-xl sm:text-2xl font-bold tracking-tight text-[#173854] hover:text-[#137db5] transition-colors flex items-center gap-2.5 text-left cursor-pointer group"
        >
          <span className="p-1.5 rounded-xl bg-sky-100 text-[#137db5] group-hover:bg-sky-200 transition-colors shadow-2xs">
            <Cloud className="w-5 h-5 fill-sky-200 text-[#137db5]" />
          </span>
          <span className="font-serif tracking-normal text-[#173854] group-hover:text-[#137db5] transition-colors flex items-center gap-1.5">
            <span>{PROFILE_DATA.name}</span>
            <Sparkles className="w-3.5 h-3.5 text-sky-400 opacity-80" />
          </span>
        </button>

        {/* Zone 2: 5 clean navigation links with soft cloud pill indicators */}
        <nav className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600 p-1 bg-sky-50/70 border border-sky-200/60 rounded-full shadow-inner">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all whitespace-nowrap cursor-pointer px-4 py-1.5 rounded-full text-xs font-semibold ${
                  isActive
                    ? 'bg-white text-[#137db5] shadow-xs'
                    : 'text-slate-600 hover:text-[#137db5] hover:bg-white/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions in dreamy sky blue cloud pills */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onToggleViewMode}
            title="Toggle between presentation slides mode and scrollable page mode"
            className="px-3.5 py-1.5 text-xs font-semibold text-[#137db5] bg-sky-100/70 hover:bg-sky-200/70 rounded-full transition-colors border border-sky-200/80 cursor-pointer whitespace-nowrap"
          >
            {viewMode === 'pages' ? 'Full Page View' : 'Slide Mode'}
          </button>

          <button
            onClick={onOpenCV}
            className="px-4 py-2 text-xs font-semibold text-[#173854] bg-white hover:bg-sky-50 border border-sky-200 rounded-full transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-xs hover:border-sky-300"
          >
            <FileText className="w-3.5 h-3.5 text-[#137db5]" />
            <span>View CV</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="px-4.5 py-2 text-xs font-semibold text-white bg-[#137db5] hover:bg-[#0f6897] rounded-full shadow-sm shadow-sky-500/25 hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenCV}
            className="p-2 text-xs font-medium text-[#137db5] bg-sky-100 rounded-full"
            title="View CV"
          >
            <FileText className="w-4 h-4 text-[#137db5]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#137db5] hover:bg-sky-50 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-sky-200/70 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#137db5] text-white shadow-xs'
                      : 'text-slate-700 hover:bg-sky-50 hover:text-[#137db5]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-sky-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  onToggleViewMode();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-xs font-semibold text-[#137db5] bg-sky-50 rounded-full"
              >
                Switch to {viewMode === 'pages' ? 'Full Page View' : 'Slide Mode'}
              </button>
              <button
                onClick={() => {
                  onOpenCV();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-100 rounded-full flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#137db5]" />
                View Detailed Resume / CV
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
