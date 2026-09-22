'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Sparkles, Code, Compass, Zap, Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onWatchIntro?: () => void;
}

export default function HeroSection({ onExploreCourses, onWatchIntro }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setVideoLoaded(true);
            setIsPlaying(true);
          })
          .catch(() => {
            // If blocked, ensure muted and retry
            video.muted = true;
            setIsMuted(true);
            video.play()
              .then(() => {
                setVideoLoaded(true);
                setIsPlaying(true);
              })
              .catch(() => {});
          });
      }
    };

    playVideo();

    // Ensure continuous playback without stopping
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.25) {
        video.currentTime = 0;
        playVideo();
      }
    };

    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => {
      if (video && video.paused) {
        setIsPlaying(false);
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && video && video.paused) {
        playVideo();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('canplay', playVideo);
    video.addEventListener('loadeddata', () => {
      setVideoLoaded(true);
      playVideo();
    });
    document.addEventListener('visibilitychange', handleVisibility);

    const onUserInteraction = () => {
      if (video && video.paused) {
        playVideo();
      }
    };
    window.addEventListener('click', onUserInteraction, { once: true });
    window.addEventListener('touchstart', onUserInteraction, { once: true });

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('canplay', playVideo);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('click', onUserInteraction);
      window.removeEventListener('touchstart', onUserInteraction);
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
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#08080a] pt-20 pb-16"
    >
      {/* Background Video with Parallax Scaling */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 z-0 h-full w-full overflow-hidden"
      >
        {/* Fallback Poster Image */}
        <Image
          src="/hero-video-poster.jpg"
          alt="OneSkills Academy - Learn Skills. Build Your Future."
          fill
          priority
          className={`object-cover object-center transition-opacity duration-700 pointer-events-none ${
            videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
          }`}
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
            poster="/hero-video-poster.jpg"
            onLoadedData={() => {
              setVideoLoaded(true);
              setVideoError(false);
            }}
            onError={() => setVideoError(true)}
            onEnded={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(() => {});
              }
            }}
            tabIndex={-1}
            aria-hidden="true"
            className="h-full w-full object-cover object-center pointer-events-none"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/assets/videos/video-one-skills.mp4" type="video/mp4" />
            <source src="/videos/video-one-skills.mp4" type="video/mp4" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}

        {/* Clear, balanced cinematic overlays so the 3D student, glowing holograms, and OneSkills neon sign remain clearly visible */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#08080a]/90 via-[#08080a]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#08080a] via-[#08080a]/50 to-transparent pointer-events-none" />
      </motion.div>

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
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-black/60 px-4 py-1.5 backdrop-blur-md mb-6 shadow-lg shadow-black/40"
        >
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            PRACTICAL TECH &amp; CAREER ACADEMY
          </span>
          <span className="hidden sm:inline text-zinc-500">•</span>
          <span className="hidden sm:inline text-xs text-zinc-300">Cohort 2026</span>
        </motion.div>

        {/* Institution Title */}
        <motion.h2
          id="hero-institution-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.35em] text-zinc-300 mb-3 font-mono drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          ONESKILLS ACADEMY
        </motion.h2>

        {/* Core Headline */}
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] max-w-4xl drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]"
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
          className="mt-6 text-base sm:text-lg md:text-xl text-zinc-200 max-w-2xl font-normal leading-relaxed drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
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
            className="group relative flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-8 py-4 text-sm font-extrabold tracking-wider text-zinc-950 shadow-xl shadow-amber-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>EXPLORE COURSES</span>
            <Compass className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </button>

          <button
            id="hero-watch-intro-btn"
            onClick={() => {
              if (onWatchIntro) {
                onWatchIntro();
              } else {
                scrollToSection('about');
              }
            }}
            className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/20 bg-black/60 px-7 py-4 text-sm font-bold tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-amber-500/50 hover:text-amber-300 cursor-pointer shadow-lg shadow-black/40"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 group-hover:scale-110 transition-transform">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            </span>
            <span>CAMPUS LABS</span>
          </button>
        </motion.div>

        {/* Quick Micro-Pillars under Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 hidden md:flex items-center gap-8 text-xs text-zinc-300 border-t border-white/15 pt-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
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
            <span>Upwork &amp; Freelance Mentorship</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-6 inset-x-0 z-20 flex justify-center pointer-events-auto"
      >
        <button
          id="hero-scroll-indicator-btn"
          onClick={() => scrollToSection('about')}
          className="group flex flex-col items-center gap-1.5 text-zinc-300 hover:text-amber-400 transition-colors focus:outline-none cursor-pointer"
        >
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase">
            SCROLL TO EXPLORE &darr;
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-sm group-hover:border-amber-400/50"
          >
            <ArrowDown className="h-3.5 w-3.5 text-zinc-300 group-hover:text-amber-400" />
          </motion.div>
        </button>
      </motion.div>

      {/* Floating Video Audio & Playback Controls */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 pointer-events-auto">
        <button
          id="hero-video-mute-btn"
          onClick={toggleMute}
          title={isMuted ? 'Turn Sound On' : 'Turn Sound Off'}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3.5 py-1.5 text-xs font-mono font-medium text-white backdrop-blur-md hover:border-amber-400/60 hover:bg-black/90 transition-all cursor-pointer shadow-lg shadow-black/50"
        >
          {isMuted ? (
            <>
              <VolumeX className="h-3.5 w-3.5 text-zinc-400" />
              <span className="text-[11px] text-zinc-300">Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
              <span className="text-[11px] text-amber-300 font-semibold">Sound On</span>
            </>
          )}
        </button>

        <button
          id="hero-video-play-btn"
          onClick={togglePlay}
          title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md hover:border-amber-400/60 hover:bg-black/90 transition-all cursor-pointer shadow-lg shadow-black/50"
        >
          {isPlaying ? (
            <Pause className="h-3.5 w-3.5 text-zinc-300" />
          ) : (
            <Play className="h-3.5 w-3.5 text-amber-400 ml-0.5" />
          )}
        </button>
      </div>

      {/* Video Studio Indicator Pill */}
      <div className="absolute bottom-6 left-6 z-30 hidden md:flex items-center gap-2 pointer-events-none">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 backdrop-blur-md shadow-lg shadow-black/50">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider">
            OneSkills Studio Background
          </span>
        </div>
      </div>
    </section>
  );
}
