import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check, Copy, Sparkles, FileText, ArrowRight, Cloud } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenCV: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCV }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-gradient-to-b from-[#e4f1fa] via-[#f1f8fd] to-[#d9ecf9] relative overflow-hidden">
      {/* Background Soft Dreamy Clouds Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-white/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#87c7e8]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#137db5] mb-2">
            <Cloud className="w-3.5 h-3.5 fill-sky-200 text-[#137db5]" />
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#173854] tracking-tight">
            CONTACT
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Interested in collaborating on international trade research, global supply chain initiatives, or academic exchange? Let’s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-white/95 backdrop-blur-xl border border-white shadow-xl shadow-sky-950/5 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#173854] font-serif">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Reach out directly via phone or academic/personal email channels.
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone Number */}
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-100 text-[#137db5]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#137db5] font-semibold">
                        Phone Number
                      </div>
                      <a
                        href={`tel:${PROFILE_DATA.phone}`}
                        className="text-base font-bold font-mono text-[#173854] hover:text-[#137db5] transition-colors"
                      >
                        {PROFILE_DATA.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PROFILE_DATA.phone, 'phone')}
                    className="p-2 rounded-xl text-slate-500 hover:text-[#137db5] hover:bg-white transition-colors cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* University Email */}
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-sky-100 text-[#137db5] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#137db5] font-semibold">
                        FTU Academic Email
                      </div>
                      <a
                        href={`mailto:${PROFILE_DATA.universityEmail}`}
                        className="text-sm font-semibold text-[#173854] hover:text-[#137db5] transition-colors truncate block"
                      >
                        {PROFILE_DATA.universityEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PROFILE_DATA.universityEmail, 'uniEmail')}
                    className="p-2 rounded-xl text-slate-500 hover:text-[#137db5] hover:bg-white transition-colors cursor-pointer shrink-0"
                    title="Copy Academic Email"
                  >
                    {copiedField === 'uniEmail' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Personal Email */}
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-sky-100 text-[#137db5] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#137db5] font-semibold">
                        Personal Email
                      </div>
                      <a
                        href={`mailto:${PROFILE_DATA.personalEmail}`}
                        className="text-sm font-semibold text-[#173854] hover:text-[#137db5] transition-colors truncate block"
                      >
                        {PROFILE_DATA.personalEmail}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PROFILE_DATA.personalEmail, 'personalEmail')}
                    className="p-2 rounded-xl text-slate-500 hover:text-[#137db5] hover:bg-white transition-colors cursor-pointer shrink-0"
                    title="Copy Personal Email"
                  >
                    {copiedField === 'personalEmail' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Campus Location */}
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-100 text-[#137db5]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-medium">
                      Location & Campus
                    </div>
                    <div className="text-sm font-semibold text-[#173854]">
                      Foreign Trade University, 91 Chua Lang, Dong Da, Hanoi, Vietnam
                    </div>
                  </div>
                </div>
              </div>

              {/* View CV Trigger */}
              <div className="pt-2">
                <button
                  onClick={onOpenCV}
                  className="w-full py-3.5 px-4 rounded-full border border-sky-200 text-[#137db5] bg-sky-50/80 hover:bg-sky-100 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <FileText className="w-4 h-4 text-[#137db5]" />
                  <span>Open Full Academic Resume / CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white/95 backdrop-blur-xl border border-white shadow-xl shadow-sky-950/5 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#173854] font-serif">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Have an academic inquiry, logistics internship opportunity, or question? Send a note below.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-semibold">Message dispatched successfully!</p>
                    <p className="text-xs text-emerald-700">
                      Thank you for reaching out to Nguyen Hai Yen. I will review your message and reply promptly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#173854] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tran Van An"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-sky-200 bg-sky-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#137db5]/20 focus:border-[#137db5] text-sm text-[#173854] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#173854] mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. an.tran@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-sky-200 bg-sky-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#137db5]/20 focus:border-[#137db5] text-sm text-[#173854] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#173854] mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. International Trade Collaboration / Inquiries"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sky-200 bg-sky-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#137db5]/20 focus:border-[#137db5] text-sm text-[#173854] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#173854] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message, project brief, or questions here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-sky-200 bg-sky-50/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#137db5]/20 focus:border-[#137db5] text-sm text-[#173854] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider bg-[#137db5] hover:bg-[#0f6897] disabled:opacity-50 text-white shadow-md shadow-sky-950/15 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
