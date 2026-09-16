'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Monitor, Users, Award } from 'lucide-react';

interface FeaturedVideoSectionProps {
  onOpenVideo: () => void;
}

export default function FeaturedVideoSection({ onOpenVideo }: FeaturedVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Autoplay fallback
        });
      }
    };

    playVideo();

    // Auto-resume watchdog: if browser ever pauses the video, resume immediately
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

        {/* Cinematic Video Banner Container */}
        <div className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl shadow-amber-500/10 group">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            {/* Ambient looping 10-second video background - always muted and playing continuously */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            >
              <source src="/videos/featured-lab.mp4" type="video/mp4" />
            </video>

            {/* Dark Cinematic Gradients */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/40 to-black/30" />
            <div className="absolute inset-0 pointer-events-none bg-radial-at-c from-transparent via-black/40 to-black/80" />

            {/* Content Overlays */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-12">
              {/* Overlay Slogan */}
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-xs sm:text-sm tracking-[0.3em] font-bold text-amber-400 uppercase mb-4"
              >
                ONE SKILL AT A TIME
              </motion.span>

              <motion.h3
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg"
              >
                LEARN. PRACTICE. CREATE.
              </motion.h3>

              {/* Large Circular Play Button */}
              <motion.button
                id="featured-video-play-btn"
                onClick={onOpenVideo}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 border-amber-400 bg-amber-500/30 text-amber-300 backdrop-blur-xl shadow-2xl shadow-amber-500/40 transition-all duration-300 hover:bg-amber-500 hover:text-zinc-950 group-hover:shadow-amber-500/60"
                aria-label="Play full video"
              >
                <Play className="h-8 w-8 sm:h-10 sm:w-10 translate-x-1 fill-current" />
              </motion.button>

              <span className="mt-4 text-xs font-mono tracking-widest text-zinc-300">
                CLICK TO WATCH FULL EXPERIENCE (2:15)
              </span>
            </div>

            {/* Bottom Floating Highlights */}
            <div className="absolute bottom-4 left-4 right-4 hidden sm:flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-5 py-3 text-xs text-zinc-300 backdrop-blur-md">
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
