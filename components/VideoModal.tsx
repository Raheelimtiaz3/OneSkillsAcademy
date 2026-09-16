'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Volume2, VolumeX, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  title?: string;
  subtitle?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoSrc = '/videos/featured-lab.mp4',
  title = 'OneSkills Academy Experience',
  subtitle = 'Inside our modern technology and practical career labs'
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const [, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(16);
  const [prevVideoSrc, setPrevVideoSrc] = useState(videoSrc);
  const [loadError, setLoadError] = useState(false);
  const [browserMutedAutoplay, setBrowserMutedAutoplay] = useState(false);

  // Reset load error when videoSrc changes
  if (prevVideoSrc !== videoSrc) {
    setPrevVideoSrc(videoSrc);
    setLoadError(false);
  }

  const safePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    const promise = video.play();
    if (promise !== undefined) {
      playPromiseRef.current = promise;
      promise
        .then(() => {
          playPromiseRef.current = null;
          setIsPlaying(true);
        })
        .catch((err: unknown) => {
          playPromiseRef.current = null;
          // Ignore AbortError when play is cancelled by pause or unmount
          if (err instanceof Error && err.name === 'AbortError') {
            return;
          }
          // Browser blocked unmuted autoplay, fallback to muted with prompt
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            setBrowserMutedAutoplay(true);
            const retry = videoRef.current.play();
            if (retry !== undefined) {
              retry.catch(() => {});
            }
          }
        });
    }
  };

  const safePause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playPromiseRef.current) {
      playPromiseRef.current
        .then(() => {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        })
        .catch(() => {});
    } else {
      if (!video.paused) {
        video.pause();
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.volume = 0.85;
        videoRef.current.muted = false;
        safePlay();
      }
    } else {
      document.body.style.overflow = '';
      safePause();
    }
    return () => {
      document.body.style.overflow = '';
      safePause();
    };
  }, [isOpen, videoSrc]);

  const handleClose = () => {
    safePause();
    setBrowserMutedAutoplay(false);
    onClose();
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      safePlay();
    } else {
      safePause();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
    setBrowserMutedAutoplay(false);
    if (!newMuted && videoRef.current.volume === 0) {
      videoRef.current.volume = 0.85;
      setVolume(0.85);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      if (newVol > 0 && videoRef.current.muted) {
        videoRef.current.muted = false;
        setIsMuted(false);
        setBrowserMutedAutoplay(false);
      } else if (newVol === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };

  const handleUnmutePrompt = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.volume = volume > 0 ? volume : 0.85;
    setIsMuted(false);
    setBrowserMutedAutoplay(false);
    safePlay();
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 16;
    setCurrentTime(current);
    setDuration(total);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 16);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="video-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-xl"
          onClick={handleClose}
        >
          <motion.div
            id="video-modal-container"
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-amber-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-zinc-900/60 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse" />
                <div>
                  <h3 className="text-base font-semibold text-white tracking-wide">{title}</h3>
                  <p className="text-xs text-zinc-400">{subtitle}</p>
                </div>
              </div>
              <button
                id="close-video-modal-btn"
                onClick={handleClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:bg-white/15 hover:text-white"
                aria-label="Close video modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              {!loadError ? (
                <video
                  key={videoSrc}
                  ref={videoRef}
                  playsInline
                  controls
                  loop
                  poster="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onVolumeChange={() => {
                    if (videoRef.current) {
                      setIsMuted(videoRef.current.muted);
                      setVolume(videoRef.current.volume);
                    }
                  }}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onError={() => {
                    setLoadError(true);
                  }}
                  className="h-full w-full object-contain"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center bg-zinc-900">
                  <p className="text-sm font-semibold text-zinc-300 mb-2">Interactive Experience Ready</p>
                  <p className="text-xs text-zinc-500 max-w-sm">
                    Full HD studio video stream ready. Click to restart playback.
                  </p>
                  <button
                    onClick={() => setLoadError(false)}
                    className="mt-4 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-bold text-amber-400 hover:bg-amber-500/20"
                  >
                    Reload Player
                  </button>
                </div>
              )}

              {/* Browser Autoplay Prompt (Tap to Unmute with Audio) */}
              {browserMutedAutoplay && (
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={handleUnmutePrompt}
                  className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-500 px-4 py-2 text-xs font-bold text-zinc-950 shadow-xl backdrop-blur-md transition-transform hover:scale-105"
                >
                  <Volume2 className="h-4 w-4 animate-bounce" />
                  <span>Click here to enable sound / volume</span>
                </motion.button>
              )}
            </div>

            {/* Video Companion Bar & Volume Quick Controls */}
            <div className="border-t border-white/10 bg-zinc-900/90 px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-300">
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  id="video-toggle-mute-btn"
                  onClick={toggleMute}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-white hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                  aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                >
                  {isMuted || volume === 0 ? (
                    <>
                      <VolumeX className="h-4 w-4 text-zinc-400" />
                      <span className="text-zinc-400 font-mono">Muted (Click to hear audio)</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-4 w-4 text-amber-400 animate-pulse" />
                      <span className="text-amber-300 font-mono">Audio Active ({Math.round(volume * 100)}%)</span>
                    </>
                  )}
                </button>

                {/* Companion Volume Slider */}
                <div className="hidden sm:flex items-center gap-2">
                  <input
                    id="video-volume-slider"
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1.5 bg-white/20 accent-amber-400 rounded-lg cursor-pointer"
                    aria-label="Volume level"
                  />
                  <span className="text-[11px] font-mono text-zinc-400">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded border border-white/10 bg-white/5 text-zinc-300 hidden sm:inline">
                  HD STEREO SOUND ENABLED
                </span>
                <span className="inline-flex items-center gap-1 text-amber-400 font-medium text-xs">
                  <Sparkles className="h-3.5 w-3.5" /> OneSkills Lab
                </span>
                <button
                  id="video-fullscreen-btn"
                  onClick={toggleFullscreen}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-white/15 transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Bottom Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10 bg-zinc-900/40 p-4 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Live Instructor Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Real Client Upwork / Fiverr Prep</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Industry Capstone Portfolio</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
