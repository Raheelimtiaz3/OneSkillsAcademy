'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Sparkles, Send, GraduationCap, Clock, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COURSES } from '@/data/courses';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

export default function EnrollModal({ isOpen, onClose, defaultCourseId }: EnrollModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: defaultCourseId || 'web-development',
    learningMode: 'on-campus',
    experience: 'beginner',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomId = 'OSC-' + Math.floor(100000 + Math.random() * 900000);
      setApplicationId(randomId);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#fbbf24', '#ffffff', '#d97706']
        });
      } catch {
        // Fallback gracefully if confetti unavailable
      }
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: defaultCourseId || 'web-development',
      learningMode: 'on-campus',
      experience: 'beginner',
      notes: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="enroll-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            id="enroll-modal-container"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-8 shadow-2xl shadow-amber-500/10 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

            <button
              id="close-enroll-modal-btn"
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-colors hover:bg-white/15 hover:text-white"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Admissions Open • 2026 Cohort</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl font-heading">
                    Join OneSkills Academy
                  </h2>
                  <p className="mt-1.5 text-sm text-zinc-400">
                    Reserve your seat in our practical learning cohort. Limited batch sizes for personalized mentorship.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="enroll-full-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="enroll-email"
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="enroll-phone"
                        type="tel"
                        required
                        placeholder="0317 6036127"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                      Select Program *
                    </label>
                    <select
                      id="enroll-course-select"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      {COURSES.map((course) => (
                        <option key={course.id} value={course.id} className="bg-zinc-900 text-white">
                          {course.title} ({course.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                        Learning Preference
                      </label>
                      <select
                        id="enroll-learning-mode"
                        value={formData.learningMode}
                        onChange={(e) => setFormData({ ...formData, learningMode: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="on-campus" className="bg-zinc-900 text-white">On-Campus Tech Lab</option>
                        <option value="live-online" className="bg-zinc-900 text-white">Live Online Studio</option>
                        <option value="hybrid" className="bg-zinc-900 text-white">Hybrid (Studio + Online)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-zinc-300 mb-1.5">
                        Experience Level
                      </label>
                      <select
                        id="enroll-experience-level"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white transition-colors focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="beginner" className="bg-zinc-900 text-white">Complete Beginner</option>
                        <option value="intermediate" className="bg-zinc-900 text-white">Some Self-Taught Knowledge</option>
                        <option value="working-pro" className="bg-zinc-900 text-white">Working Professional / Upskilling</option>
                      </select>
                    </div>
                  </div>

                  <button
                    id="submit-enroll-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 font-semibold text-zinc-950 shadow-lg shadow-amber-500/25 transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-950 border-t-transparent" />
                        Processing Application...
                      </span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>SUBMIT APPLICATION & RESERVE SEAT</span>
                      </>
                    )}
                  </button>

                  <div className="text-center space-y-1">
                    <p className="text-xs text-zinc-500">
                      No upfront commitment required. Our admissions mentor will contact you for program orientation.
                    </p>
                    <p className="text-[11px] text-zinc-400">
                      Direct Inquiries: <a href="tel:03176036127" className="text-amber-400 font-bold hover:underline font-mono">0317 6036127</a> • <a href="mailto:oneskillspk@gmail.com" className="text-amber-400 hover:underline">oneskillspk@gmail.com</a>
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle className="h-9 w-9" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white font-heading">Application Received!</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Welcome to the OneSkills community, <strong className="text-zinc-200">{formData.name}</strong>.
                </p>

                <div className="my-6 rounded-xl border border-white/10 bg-zinc-900/60 p-4 text-left">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs text-zinc-400">Application Reference</span>
                    <span className="font-mono text-sm font-bold text-amber-400">{applicationId}</span>
                  </div>
                  <div className="mt-3 space-y-2 text-xs text-zinc-300">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-amber-400" />
                      <span>Program: <strong>{COURSES.find(c => c.id === formData.course)?.title}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-amber-400" />
                      <span>Mode: <strong>{formData.learningMode === 'on-campus' ? 'On-Campus Lab' : 'Live Online Interactive'}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-amber-400" />
                      <span>Status: <strong>Priority Review (Orientation scheduled within 24h)</strong></span>
                    </div>
                  </div>
                </div>

                <button
                  id="done-enroll-btn"
                  onClick={handleReset}
                  className="w-full rounded-xl border border-white/20 bg-white/10 py-3 font-semibold text-white transition-colors hover:bg-white/20"
                >
                  DONE & RETURN TO HOMEPAGE
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
