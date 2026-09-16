'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, TrendingUp, DollarSign, Globe, Award } from 'lucide-react';
import { SUCCESS_METRICS, MARQUEE_SKILLS } from '@/data/statistics';

export default function StudentSuccessSection() {
  const highlights = [
    { label: 'Top Freelancer Platforms', detail: 'Upwork Top-Rated, Fiverr Pro, Behance Curated' },
    { label: 'Average Graduate Time-to-Client', detail: 'Under 45 Days Post-Curriculum' },
    { label: 'Global Remote Client Reach', detail: 'US, UK, Canada, UAE, Europe & Australia' }
  ];

  return (
    <section
      id="success"
      className="relative w-full py-24 sm:py-32 bg-[#060608] overflow-hidden border-t border-white/5"
    >
      {/* Background Subtle Ambience */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>MEASURABLE CAREER IMPACT</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            FROM LEARNING{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              TO DOING.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Real outcomes from students who turned focused practical training into independent careers.
          </p>
        </div>

        {/* 4 Animated Metric Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SUCCESS_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-md group hover:border-amber-500/40 hover:bg-zinc-900/80 transition-all duration-300"
            >
              <div className="font-heading text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 group-hover:scale-105 transition-transform duration-300 origin-left">
                {metric.value}
              </div>

              <h3 className="mt-3 text-sm sm:text-base font-bold text-white tracking-wide">
                {metric.label}
              </h3>

              <p className="mt-1 text-xs text-zinc-400">
                {metric.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Outcome Badges Row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-950/60 p-4 text-xs"
            >
              <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-white block">{item.label}</span>
                <span className="text-zinc-400">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Animated Marquee Effect */}
      <div className="mt-16 border-y border-white/10 bg-zinc-950/80 py-5 overflow-hidden backdrop-blur-md">
        <div className="flex w-max animate-marquee space-x-8">
          {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm font-semibold tracking-wider text-zinc-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="whitespace-nowrap uppercase font-mono">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
