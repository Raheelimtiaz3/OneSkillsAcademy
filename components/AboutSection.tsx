'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, CheckCircle2, Award, Terminal, Laptop, Code2 } from 'lucide-react';
import Image from 'next/image';
import { KEY_STATS } from '@/data/statistics';

interface AboutSectionProps {
  onWatchVideo?: () => void;
}

export default function AboutSection({ onWatchVideo }: AboutSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    students: 0,
    courses: 0,
    projects: 0,
    practical: 0
  });

  useEffect(() => {
    if (!isInView) return;

    const targets = {
      students: 500,
      courses: 10,
      projects: 20,
      practical: 90
    };

    const duration = 1800;
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      setCounts({
        students: Math.floor(easeProgress * targets.students),
        courses: Math.floor(easeProgress * targets.courses),
        projects: Math.floor(easeProgress * targets.projects),
        practical: Math.floor(easeProgress * targets.practical)
      });

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full py-24 sm:py-32 bg-[#0a0a0e] overflow-hidden border-t border-white/5"
    >
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 bottom-1/4 h-96 w-96 rounded-full bg-orange-600/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-amber-400 mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>ABOUT ONESKILLS</span>
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-6 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              BUILD SKILLS THAT{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                BUILD YOUR FUTURE.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed"
            >
              Founded by tech specialist <span className="text-amber-400 font-semibold">Nisar Mehar</span>, OneSkills Academy bridges the gap between traditional education and real-world digital monetization. Our curriculum centers around 90% hands-on laboratory time, individual mentorship, and client-proven skills.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-zinc-900/40 p-3.5">
                <Terminal className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">90% Lab Practice</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Build real client applications and live ad campaigns.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-zinc-900/40 p-3.5">
                <Award className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Freelance Mastery</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Direct Upwork & Fiverr proposal coaching with senior mentors.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-zinc-900/40 p-3.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">2-Week Guarantee</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Risk-free trial period with money-back student protection.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-zinc-900/40 p-3.5">
                <Sparkles className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Verified Certificate</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">QR-verifiable credential recognized by industry employers.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Media with Video Trigger */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative group rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl shadow-black/80"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                  alt="Students learning digital skills at OneSkills Academy"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute inset-0 pointer-events-none bg-radial-at-c from-transparent via-transparent to-black/60" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-zinc-950/80 px-3 py-1.5 text-xs font-mono font-medium text-amber-300 backdrop-blur-md shadow-lg">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                    <span>Hands-On Studio</span>
                  </div>
                </div>

                {/* Center Gold Decorative Graphic */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/50 bg-black/60 text-amber-400 backdrop-blur-md shadow-xl shadow-amber-500/10 mb-3 group-hover:border-amber-400 transition-colors">
                    <Laptop className="h-8 w-8 text-amber-400" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400 drop-shadow">
                    ONESKILLS TECH LABS
                  </span>
                  <span className="font-heading text-lg sm:text-xl font-bold text-white mt-1 drop-shadow-md">
                    Real Projects. Real Experience.
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-5 right-5 pointer-events-none flex items-center justify-between text-xs text-white z-10">
                  <div className="flex items-center gap-2 rounded-full bg-black/60 border border-white/10 px-3 py-1 backdrop-blur-md">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold tracking-wide text-zinc-200">Live Laboratory Sessions</span>
                  </div>
                  <span className="font-mono text-xs text-amber-300 bg-black/60 border border-amber-500/20 rounded-full px-2.5 py-1 backdrop-blur-md">
                    Classroom & Online
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {KEY_STATS.map((stat) => (
            <div
              key={stat.id}
              className="glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-amber-500/30 group"
            >
              <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  {counts[stat.id] || stat.value}
                </span>
                <span className="text-amber-400">{stat.suffix}</span>
              </div>

              <h3 className="mt-2 text-sm sm:text-base font-bold text-zinc-100 tracking-wide">
                {stat.label}
              </h3>

              <p className="mt-1 text-xs text-zinc-400 leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
