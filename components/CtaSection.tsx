'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface CtaSectionProps {
  onJoin: () => void;
  onExploreCourses: () => void;
}

export default function CtaSection({ onJoin, onExploreCourses }: CtaSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="cta"
      className="relative w-full py-28 sm:py-36 bg-black overflow-hidden border-t border-white/10"
    >
      {/* Background Cinematic Video */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        {/* Poster Fallback */}
        <Image
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80"
          alt="OneSkills Coding and Tech Acceleration"
          fill
          className={`object-cover scale-105 transition-opacity duration-700 ${videoError ? 'opacity-25' : 'opacity-0'}`}
          referrerPolicy="no-referrer"
        />

        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80"
            onError={() => setVideoError(true)}
            className="h-full w-full object-cover opacity-25 scale-105"
          >
            <source src="/videos/cta-coding.mp4" type="video/mp4" />
          </video>
        )}

        {/* Ambient Dark Overlays */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/85 to-black/75" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-black" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-300 backdrop-blur-md mb-6"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>JOIN THE NEXT ACCELERATION COHORT</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight"
        >
          YOUR FUTURE STARTS WITH{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
            ONE SKILL.
          </span>
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-lg sm:text-2xl text-zinc-300 max-w-2xl mx-auto font-medium"
        >
          Start learning today. Build practical skills. Create your future.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            id="cta-join-btn"
            onClick={onJoin}
            className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-9 py-4 text-sm font-extrabold tracking-wider text-zinc-950 shadow-2xl shadow-amber-500/30 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/50 active:scale-95"
          >
            <span>JOIN ONESKILLS</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            id="cta-explore-courses-btn"
            onClick={onExploreCourses}
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-amber-400/60 hover:text-amber-300"
          >
            <Compass className="h-4 w-4" />
            <span>EXPLORE COURSES</span>
          </button>
        </motion.div>

        {/* Reassurance */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <ShieldCheck className="h-4 w-4 text-amber-400" />
          <span>100% Practical Guaranteed • Mentorship & Portfolio Launchpad</span>
        </div>
      </div>
    </section>
  );
}
