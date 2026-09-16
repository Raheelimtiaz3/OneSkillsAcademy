'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, ArrowDown, Sparkles, Code, Compass, Zap } from 'lucide-react';
import ThreeCanvas from './ThreeCanvas';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onWatchIntro: () => void;
}

export default function HeroSection({ onExploreCourses, onWatchIntro }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = true;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy fallback
      });
    }

    const handlePause = () => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    };

    video.addEventListener('pause', handlePause);
    return () => {
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-20 pb-16"
    >
      {/* Background Video with Parallax/Zoom Effect */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      >
        {/* Fallback Poster Image */}
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
          alt="OneSkills College Technology Academy"
          fill
          priority
          className={`object-cover transition-opacity duration-700 ${videoError ? 'opacity-50' : 'opacity-0'}`}
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
            poster="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
            onError={() => setVideoError(true)}
            className="h-full w-full object-cover opacity-50"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}

        {/* Cinematic Multi-layered Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/65 to-[#08080a]/80" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#08080a]/50 to-[#08080a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </motion.div>

      {/* 3D Three.js Ambient Particle Grid Overlay */}
      <ThreeCanvas opacity={0.5} className="z-10" />

      {/* Hero Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center"
      >
        {/* Modern Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            PRACTICAL TECH & CAREER ACADEMY
          </span>
          <span className="hidden sm:inline text-zinc-500">•</span>
          <span className="hidden sm:inline text-xs text-zinc-300">Cohort 2026</span>
        </motion.div>

        {/* Institution Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.35em] text-zinc-400 mb-3 font-mono"
        >
          ONESKILLS ACADEMY
        </motion.h2>

        {/* Core Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] max-w-4xl"
        >
          <span className="text-white">Learn Skills. </span>
          <span className="text-amber-400">
            Build Your Future.
          </span>
        </motion.h1>

        {/* Description Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed"
        >
          Practical education that helps you turn knowledge into real-world skills and career opportunities.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-explore-courses-btn"
            onClick={onExploreCourses}
            className="group relative flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-8 py-4 text-sm font-extrabold tracking-wider text-zinc-950 shadow-xl shadow-amber-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105 active:scale-95"
          >
            <span>EXPLORE COURSES</span>
            <Compass className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </button>

          <button
            id="hero-watch-intro-btn"
            onClick={onWatchIntro}
            className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-amber-500/50 hover:text-amber-300"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 group-hover:scale-110 transition-transform">
              <Play className="h-3.5 w-3.5 fill-current translate-x-0.5" />
            </span>
            <span>WATCH INTRO ▶</span>
          </button>
        </motion.div>

        {/* Quick Micro-Pillars under Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 hidden md:flex items-center gap-8 text-xs text-zinc-400 border-t border-white/10 pt-6"
        >
          <div className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            <span>Real-World Client Briefs</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="h-3.5 w-3.5 text-amber-400" />
            <span>Production Tech Stacks</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Upwork & Freelance Mentorship</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-6 inset-x-0 z-20 flex justify-center pointer-events-auto"
      >
        <button
          id="hero-scroll-indicator-btn"
          onClick={() => scrollToSection('about')}
          className="group flex flex-col items-center gap-1.5 text-zinc-400 hover:text-amber-400 transition-colors focus:outline-none cursor-pointer"
        >
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase">
            SCROLL TO EXPLORE ↓
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm group-hover:border-amber-400/50"
          >
            <ArrowDown className="h-3.5 w-3.5 text-zinc-300 group-hover:text-amber-400" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
