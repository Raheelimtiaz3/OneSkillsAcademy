'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  MessageSquare,
  MessageCircle,
  ExternalLink,
  Calendar,
  Zap
} from 'lucide-react';
import { COURSES } from '@/data/courses';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'web-development',
    message: ''
  });

  const [activeHoursTab, setActiveHoursTab] = useState<'current' | 'suggested'>('current');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSent(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: 'web-development',
      message: ''
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-[#09090d] overflow-hidden border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -left-48 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>ADMISSIONS & CONSULTING</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            LET&apos;S START{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              YOUR JOURNEY.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-xl mx-auto">
            Reach out to our campus team for curriculum roadmaps, batch schedules, or fee guidance.
          </p>
        </div>

        {/* Contact Grid: Form + Info Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Card (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 sm:p-10 backdrop-blur-xl shadow-2xl shadow-black/80">
              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-form-name"
                      type="text"
                      required
                      placeholder="e.g. Rachel Adams"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-form-email"
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="contact-form-phone"
                        type="tel"
                        required
                        placeholder="0317 6036127"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                      Course Selection *
                    </label>
                    <select
                      id="contact-form-course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.id} className="bg-zinc-900 text-white">
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                      Your Message or Questions
                    </label>
                    <textarea
                      id="contact-form-message"
                      rows={4}
                      placeholder="Tell us about your learning goals or any questions regarding schedule and payment..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
                    />
                  </div>

                  <button
                    id="contact-send-message-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 font-bold text-zinc-950 shadow-lg shadow-amber-500/20 transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-950 border-t-transparent" />
                        Sending Message...
                      </span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">Message Sent Successfully!</h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto">
                    Thank you, <strong className="text-zinc-200">{formData.name}</strong>. An admissions advisor has received your request and will get back to you shortly.
                  </p>
                  <button
                    id="contact-send-another-btn"
                    onClick={handleReset}
                    className="mt-4 rounded-xl border border-white/20 bg-white/10 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Details & Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Channel Cards */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-md space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-bold text-white">Campus Information</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Admissions Open
                </span>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">Phone & WhatsApp Hotline</span>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <a
                      href="tel:03176036127"
                      className="text-base font-bold text-white hover:text-amber-400 transition-colors font-mono"
                    >
                      0317 6036127
                    </a>
                    <a
                      href="https://wa.me/923176036127?text=Hi%20OneSkills%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions%20and%20class%20schedules."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/25 transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">Direct calls & WhatsApp support available</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">Official Admissions Email</span>
                  <a
                    href="mailto:oneskillspk@gmail.com"
                    className="text-sm font-bold text-white hover:text-amber-400 transition-colors break-all"
                  >
                    oneskillspk@gmail.com
                  </a>
                  <p className="text-xs text-zinc-400 mt-0.5">Direct responses within 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">Campus Address</span>
                  <p className="text-sm font-semibold text-zinc-200 mt-0.5 leading-relaxed">
                    Lahore - Sargodha Rd, opposite Mian Hospital, near KIPS College, Sheikhupura, 39350
                  </p>
                  <a
                    href="https://maps.google.com/?q=Lahore+-+Sargodha+Rd,+opposite+Mian+Hospital,+near+KIPS+College,+Sheikhupura,+39350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-amber-400 hover:text-amber-300 mt-2 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Open in Google Maps / Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Campus Operating Hours & Suggested Timings Card */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-white">Campus Hours</h4>
                    <span className="text-[11px] text-zinc-400">Sheikhupura Main Campus</span>
                  </div>
                </div>

                {/* Tab switcher */}
                <div className="flex items-center rounded-lg border border-white/10 bg-zinc-950 p-1">
                  <button
                    onClick={() => setActiveHoursTab('current')}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                      activeHoursTab === 'current'
                        ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Current Hours
                  </button>
                  <button
                    onClick={() => setActiveHoursTab('suggested')}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all flex items-center gap-1 ${
                      activeHoursTab === 'suggested'
                        ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
                        : 'text-zinc-400 hover:text-amber-400'
                    }`}
                  >
                    <Sparkles className="h-3 w-3" />
                    <span>Suggested Hours</span>
                  </button>
                </div>
              </div>

              {activeHoursTab === 'current' ? (
                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-2 py-1.5 border-b border-white/5">
                    <span className="text-zinc-300 font-medium">Monday</span>
                    <span className="text-right font-mono font-semibold text-white">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="grid grid-cols-2 py-1.5 border-b border-white/5">
                    <span className="text-zinc-300 font-medium">Tuesday</span>
                    <span className="text-right font-mono font-semibold text-white">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="grid grid-cols-2 py-1.5 border-b border-white/5">
                    <span className="text-zinc-300 font-medium">Wednesday</span>
                    <span className="text-right font-mono font-semibold text-white">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="grid grid-cols-2 py-1.5 border-b border-white/5">
                    <span className="text-zinc-300 font-medium">Thursday</span>
                    <span className="text-right font-mono font-semibold text-white">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="grid grid-cols-2 py-1.5 border-b border-white/5">
                    <div>
                      <span className="text-zinc-300 font-medium block">Friday</span>
                      <span className="text-[10px] text-amber-400/90 font-mono">Jummah Break: 1:00 PM – 2:30 PM</span>
                    </div>
                    <span className="text-right font-mono font-semibold text-white">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="grid grid-cols-2 py-1.5 border-b border-white/5">
                    <span className="text-zinc-300 font-medium">Saturday</span>
                    <span className="text-right font-mono font-semibold text-white">10:00 AM – 5:00 PM</span>
                  </div>
                  <div className="grid grid-cols-2 py-1.5">
                    <span className="text-zinc-400 font-medium">Sunday</span>
                    <span className="text-right font-mono font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded w-fit ml-auto">Closed</span>
                  </div>

                  <div className="mt-3 rounded-xl border border-white/5 bg-zinc-950/60 p-3 text-[11px] text-zinc-400 flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      Need evening or weekend classes? Click <strong className="text-amber-300 cursor-pointer" onClick={() => setActiveHoursTab('suggested')}>Suggested Hours</strong> above to explore proposed flexible shift options.
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-xs">
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs mb-1">
                      <Zap className="h-3.5 w-3.5" />
                      <span>Recommended Schedule for Institute Growth</span>
                    </div>
                    <p className="text-[11px] text-zinc-300 leading-relaxed">
                      To maximize enrollments from university students and working professionals across Sheikhupura and Lahore, here is our recommended operational timetable:
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-white/10 pt-2">
                    <div className="rounded-lg border border-white/5 bg-zinc-950/60 p-2.5">
                      <div className="flex items-center justify-between text-xs font-semibold text-white">
                        <span>🌅 Morning Regular Track</span>
                        <span className="font-mono text-amber-400">9:30 AM – 1:30 PM</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Ideal for intermediate graduates and full-time learners.</p>
                    </div>

                    <div className="rounded-lg border border-white/5 bg-zinc-950/60 p-2.5">
                      <div className="flex items-center justify-between text-xs font-semibold text-white">
                        <span>☀️ Afternoon Hands-on Lab</span>
                        <span className="font-mono text-amber-400">2:00 PM – 5:00 PM</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Project builds, client simulations, and mentor code reviews.</p>
                    </div>

                    <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-2.5">
                      <div className="flex items-center justify-between text-xs font-semibold text-amber-300">
                        <span>🌙 Evening Executive Shift (New)</span>
                        <span className="font-mono text-amber-400 font-bold">5:30 PM – 8:00 PM</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5">
                        Enables college students & 9-to-5 employees to study Web Dev, AI, and Freelancing.
                      </p>
                    </div>

                    <div className="rounded-lg border border-white/5 bg-zinc-950/60 p-2.5">
                      <div className="flex items-center justify-between text-xs font-semibold text-white">
                        <span>🚀 Weekend Intensive Track</span>
                        <span className="font-mono text-amber-400">Sat & Sun: 11:00 AM – 3:30 PM</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Designed for students commuting from outside Sheikhupura.</p>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/923176036127?text=Hi%20OneSkills%20Academy,%20I%20am%20interested%20in%20Evening%20or%20Weekend%20classes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/15 py-2 text-xs font-bold text-amber-400 hover:bg-amber-500/25 transition-colors"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>Inquire About Flexible Evening Batches</span>
                  </a>
                </div>
              )}
            </div>

            {/* Social Media & Community Box */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-md">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">Connect With Us</h4>
              <p className="text-xs text-zinc-400 mb-4">
                Follow our student showcases, coding bootcamps, and live workshop broadcasts.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="#social-linkedin"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-zinc-950/60 p-2.5 text-zinc-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                >
                  <span className="font-mono text-amber-400 font-bold">in</span>
                  <span>LinkedIn Page</span>
                </a>
                <a
                  href="#social-youtube"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-zinc-950/60 p-2.5 text-zinc-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                >
                  <span className="font-mono text-amber-400 font-bold">yt</span>
                  <span>YouTube Channel</span>
                </a>
                <a
                  href="#social-instagram"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-zinc-950/60 p-2.5 text-zinc-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                >
                  <span className="font-mono text-amber-400 font-bold">ig</span>
                  <span>Instagram Studio</span>
                </a>
                <a
                  href="#social-discord"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-zinc-950/60 p-2.5 text-zinc-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                >
                  <span className="font-mono text-amber-400 font-bold">dc</span>
                  <span>Discord Guild</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
