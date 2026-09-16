'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Laptop, Users, MessageSquareCode, Rocket } from 'lucide-react';

interface LearningExperienceSectionProps {
  onOpenVideo: () => void;
}

export default function LearningExperienceSection({ onOpenVideo }: LearningExperienceSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    };

    playVideo();

    const handlePause = () => {
      if (video && video.paused) {
        playVideo();
      }
    };

    video.addEventListener('pause', handlePause);
    return () => {
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const pillars = [
    {
      icon: Laptop,
      title: 'Active Code & Design Sprints',
      desc: 'No passive slideshows. Every hour is paired with real code execution or Figma prototypes.'
    },
    {
      icon: MessageSquareCode,
      title: 'Direct Code & Portfolio Audits',
      desc: 'Industry veterans review your pull requests, branch structures, and visual compositions line-by-line.'
    },
    {
      icon: Users,
      title: 'Collaborative Squad Labs',
      desc: 'Build with designers, developers, and marketers in agile cross-functional teams matching real tech companies.'
    },
    {
      icon: Rocket,
      title: 'Upwork & Freelance Ship-Days',
      desc: 'Draft live bids, calibrate client proposals, and pitch real deliverables under direct instructor coaching.'
    }
  ];

  return (
    <section
      id="experience"
      className="relative w-full py-24 sm:py-32 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Background Full-Width Video */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
          className="h-full w-full object-cover opacity-35"
        >
          <source src="/videos/classroom.mp4" type="video/mp4" />
        </video>

        {/* Ambient Gradients */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/75 to-black/80" />
        <div className="absolute inset-0 pointer-events-none bg-radial-at-c from-transparent via-black/50 to-black/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cinematic Center Text Overlay */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-4"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>THE ONESKILLS IMMERSION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight"
          >
            FROM CLASSROOM{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              TO CAREER
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-xl text-zinc-300 font-medium"
          >
            &ldquo;Don&apos;t just learn the theory. Build the skills.&rdquo;
          </motion.p>
        </div>

        {/* Experience Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-amber-500/40 hover:bg-zinc-900/80 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-base font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Video Tour Cue */}
        <div className="mt-12 flex justify-center">
          <button
            id="experience-tour-btn"
            onClick={onOpenVideo}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span>SEE CLASSROOM LAB TOURS & STUDENT STUDIOS ▶</span>
          </button>
        </div>
      </div>
    </section>
  );
}
