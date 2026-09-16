'use client';

import React, { useState } from 'react';
import { ArrowUp, Phone, Mail, MapPin, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Why OneSkills', href: '#why' },
    { label: 'Students', href: '#success' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-black border-t border-white/10 pt-16 pb-12 overflow-hidden text-zinc-400">
      {/* Subtle Top Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-40 w-full max-w-5xl bg-amber-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Minimalist Newsletter Section */}
        <div className="mb-14 rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 p-6 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 mb-2">
                <Sparkles className="h-3 w-3" />
                <span>Stay Ahead in Tech</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-heading">
                Subscribe for Batch Announcements & Tech Resources
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-400">
                Receive upcoming cohort schedules, freelance proposal templates, and industry insights directly to your inbox. No spam.
              </p>
            </div>

            <div className="w-full lg:w-auto lg:min-w-[380px]">
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <input
                      id="newsletter-email-input"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-500 backdrop-blur-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                  <button
                    id="newsletter-subscribe-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-3 text-xs sm:text-sm font-bold text-zinc-950 shadow-md shadow-amber-500/20 hover:from-amber-400 hover:to-amber-300 disabled:opacity-50 transition-all shrink-0 active:scale-95"
                  >
                    {isSubmitting ? (
                      <span>Subscribing...</span>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs sm:text-sm text-emerald-400">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span>You&apos;re on the priority list! Watch your inbox for upcoming course drops.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Logo & Tagline (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-lg shadow-amber-500/20">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-zinc-950 font-heading font-black text-amber-400 text-lg">
                  1S
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-extrabold tracking-wider text-white">
                  ONESKILLS ACADEMY
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-mono">
                  ACADEMY OF DIGITAL EXCELLENCE
                </span>
              </div>
            </div>

            <p className="text-sm font-semibold text-amber-300/90 font-mono tracking-wide">
              Learn Skills. Build Your Future.
            </p>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Empowering students with industry-grade software engineering, freelancing, modern design, and AI automation.
            </p>
          </div>

          {/* Navigation Links (2 Cols) */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <div className="flex flex-col gap-1.5 text-xs">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-amber-400 transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Location (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Campus Contact</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-zinc-400 block uppercase tracking-wider">Phone / WhatsApp</span>
                  <a href="tel:03176036127" className="font-bold text-white hover:text-amber-400 transition-colors font-mono">
                    0317 6036127
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-zinc-400 block uppercase tracking-wider">Admissions Email</span>
                  <a href="mailto:oneskillspk@gmail.com" className="text-zinc-200 hover:text-amber-400 transition-colors break-all">
                    oneskillspk@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-zinc-400 block uppercase tracking-wider">Sheikhupura Campus</span>
                  <p className="text-zinc-300 leading-relaxed text-[11px]">
                    Lahore - Sargodha Rd, opposite Mian Hospital, near KIPS College, Sheikhupura, 39350
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Hours & Back to Top (3 Cols) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="w-full md:text-right">
              <div className="flex items-center md:justify-end gap-1.5 mb-2">
                <Clock className="h-3.5 w-3.5 text-amber-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Campus Hours</h4>
              </div>
              <div className="text-xs text-zinc-300 space-y-1">
                <p className="font-medium text-white">Mon – Sat: 10:00 AM – 5:00 PM</p>
                <p className="text-[11px] text-zinc-400">Friday Jummah Break: 1:00 – 2:30 PM</p>
                <p className="text-[11px] text-rose-400">Sunday: Closed</p>
                <p className="text-[10px] text-amber-400/90 pt-1 font-mono">
                  *Evening & weekend batches available on request
                </p>
              </div>
            </div>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-zinc-300 hover:border-amber-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 OneSkills Academy. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Sheikhupura, Pakistan</span>
            <span>•</span>
            <span>Accredited IT Training</span>
            <span>•</span>
            <a href="mailto:oneskillspk@gmail.com" className="hover:text-amber-400 transition-colors">
              oneskillspk@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
