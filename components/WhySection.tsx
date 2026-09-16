'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  UserCheck,
  Briefcase,
  TrendingUp,
  Sparkles,
  HeartHandshake,
  Check
} from 'lucide-react';
import { WHY_ITEMS } from '@/data/statistics';

export default function WhySection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="h-6 w-6 text-amber-400" />;
      case 'UserCheck':
        return <UserCheck className="h-6 w-6 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="h-6 w-6 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="h-6 w-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="h-6 w-6 text-amber-400" />;
      default:
        return <Sparkles className="h-6 w-6 text-amber-400" />;
    }
  };

  return (
    <section
      id="why"
      className="relative w-full py-24 sm:py-32 bg-[#09090d] overflow-hidden border-t border-white/5"
    >
      {/* Radial Gradient Accent */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>THE ONESKILLS ADVANTAGE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            WHY{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              ONESKILLS?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            Engineered from the ground up for ambitious creators, developers, and future digital agency leaders.
          </p>
        </div>

        {/* 6-Card Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-zinc-900/60 p-7 backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              {/* Top Icon Badge */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-zinc-900 shadow-inner group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Card Title */}
              <h3 className="mt-6 font-heading text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>

              {/* Direct Description */}
              <p className="mt-2 text-sm font-medium text-amber-200/90 leading-snug">
                {item.description}
              </p>

              {/* Extended Details */}
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                {item.extended}
              </p>

              <div className="mt-5 flex items-center gap-2 text-[11px] font-mono font-semibold text-zinc-400 group-hover:text-amber-400 transition-colors">
                <Check className="h-3.5 w-3.5 text-amber-400" />
                <span>Verified Career Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
