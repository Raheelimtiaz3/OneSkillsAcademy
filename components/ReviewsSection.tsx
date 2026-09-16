'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { REVIEWS } from '@/data/reviews';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  // Auto scroll every 6 seconds if not hovered
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="reviews"
      className="relative w-full py-24 sm:py-32 bg-[#08080a] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              <span>TESTIMONIALS & OUTCOMES</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              WHAT OUR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                STUDENTS SAY
              </span>
            </h2>

            <p className="mt-3 text-base text-zinc-300 max-w-xl">
              Honest stories from graduates who turned skills into freelancing retainers, tech jobs, and client agencies.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              id="prev-review-btn"
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-zinc-900 text-zinc-300 transition-all hover:border-amber-400 hover:bg-zinc-800 hover:text-white active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              id="next-review-btn"
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-zinc-900 text-zinc-300 transition-all hover:border-amber-400 hover:bg-zinc-800 hover:text-white active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="w-full flex-shrink-0 px-2 sm:px-4"
              >
                <div className="relative rounded-3xl border border-white/10 bg-zinc-900/60 p-8 sm:p-12 backdrop-blur-xl shadow-2xl shadow-black/80">
                  <Quote className="absolute right-8 top-8 h-16 w-16 text-white/5 pointer-events-none" />

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-xs font-mono font-bold text-amber-400">5.0 STAR REVIEW</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-base sm:text-xl lg:text-2xl font-medium text-zinc-200 leading-relaxed italic">
                    &ldquo;{review.review}&rdquo;
                  </p>

                  {/* Outcome Tag */}
                  <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 text-xs font-semibold text-emerald-400">
                    <span>Outcome:</span>
                    <strong className="text-white">{review.outcome}</strong>
                  </div>

                  {/* Author Meta */}
                  <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-amber-400/60 shadow-lg">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-white">
                        {review.name}
                      </h4>
                      <p className="text-xs text-amber-400 font-mono">
                        {review.role}
                      </p>
                      <span className="text-xs text-zinc-400">
                        Graduate of: {review.course}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carousel Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              id={`review-dot-${i}`}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentIndex === i ? 'w-8 bg-amber-400' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
