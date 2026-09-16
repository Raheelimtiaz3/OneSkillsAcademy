'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Sparkles, Monitor, Users, Award, Laptop, Code2, Terminal } from 'lucide-react';

interface FeaturedVideoSectionProps {
  onOpenVideo?: () => void;
}

export default function FeaturedVideoSection({ onOpenVideo }: FeaturedVideoSectionProps) {
  return (
    <section
      id="featured-video"
      className="relative w-full py-24 sm:py-32 bg-black overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>INSIDE THE CAMPUS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            SEE HOW WE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              LEARN.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Step inside our immersive design studios and software development laboratories.
          </p>
        </div>

        {/* Premium Cinematic Visual Container (Static Image Replacement) */}
        <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl shadow-amber-500/10 group">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            {/* Cinematic High-Resolution Static Visual: Students Coding on Laptops in Modern Lab */}
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=85"
              alt="Students learning digital skills and coding in OneSkills modern lab"
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />

            {/* Subtle Dark Gradient Overlays */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/55 to-black/35" />
            <div className="absolute inset-0 pointer-events-none bg-radial-at-c from-transparent via-black/45 to-black/85" />

            {/* Gold Decorative Corner & Ambient Highlights */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-amber-500/20 via-transparent to-transparent pointer-events-none" />
            
            {/* Top Badges & Status Pill */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-10 pointer-events-none">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-black/60 px-3.5 py-1.5 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-amber-300">
                  Live Practical Studio
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
                <Terminal className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-[11px] font-mono text-zinc-300">
                  Lahore-Sargodha Rd Campus
                </span>
              </div>
            </div>

            {/* Center Content Typography */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-12 z-10 pointer-events-none">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-xs sm:text-sm tracking-[0.3em] font-bold text-amber-400 uppercase mb-3 drop-shadow-md"
              >
                ONE SKILL AT A TIME
              </motion.span>

              <motion.h3
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-xl max-w-2xl"
              >
                LEARN. PRACTICE.{' '}
                <span className="text-amber-400">CREATE.</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-3 text-xs sm:text-sm text-zinc-300 max-w-lg drop-shadow-md leading-relaxed"
              >
                Interactive hands-on workstations paired with real-world freelance and development sprints.
              </motion.p>

              {/* Gold Decorative Pill Tags */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md">
                  <Laptop className="h-3.5 w-3.5" />
                  Coding Labs
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md">
                  <Code2 className="h-3.5 w-3.5" />
                  Freelance Sprints
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md">
                  <Users className="h-3.5 w-3.5" />
                  1-on-1 Mentorship
                </span>
              </div>
            </div>

            {/* Bottom Floating Highlights */}
            <div className="absolute bottom-4 left-4 right-4 hidden sm:flex items-center justify-between rounded-xl border border-white/10 bg-black/70 px-5 py-3 text-xs text-zinc-300 backdrop-blur-md z-10 pointer-events-none">
              <div className="flex items-center gap-2">
                <Monitor className="h-4 w-4 text-amber-400" />
                <span>Modern Silicon-Grade Workstations</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-amber-400" />
                <span>Small 15-Student Studio Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-400" />
                <span>One-on-One Project Audits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
