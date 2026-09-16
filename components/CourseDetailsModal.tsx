'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Layers, Star, Users, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Course } from '@/data/courses';

interface CourseDetailsModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export default function CourseDetailsModal({
  course,
  isOpen,
  onClose,
  onEnroll
}: CourseDetailsModalProps) {
  if (!course) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="course-details-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            id="course-details-modal-container"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl shadow-amber-500/10 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image with Gradient */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

              <button
                id="close-course-details-btn"
                onClick={onClose}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-block rounded-full bg-amber-500 px-3 py-0.5 text-xs font-bold text-zinc-950 uppercase tracking-wider">
                    {course.category}
                  </span>
                  {course.instructor && (
                    <span className="inline-block rounded-full bg-black/60 border border-white/15 px-3 py-0.5 text-xs font-medium text-amber-300 backdrop-blur-md">
                      Instructor: {course.instructor}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading">
                  {course.title}
                </h2>
                <p className="text-xs sm:text-sm text-amber-300/90 mt-1 font-mono">
                  {course.tagline}
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
              {/* Quick Specs Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3 text-center">
                  <div className="flex items-center justify-center text-amber-400 mb-1">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span className="block text-xs text-zinc-400">Duration</span>
                  <span className="font-semibold text-white text-sm">{course.duration}</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3 text-center">
                  <div className="flex items-center justify-center text-amber-400 mb-1">
                    <Layers className="h-4 w-4" />
                  </div>
                  <span className="block text-xs text-zinc-400">Projects</span>
                  <span className="font-semibold text-white text-sm">{course.projectsCount}</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3 text-center">
                  <div className="flex items-center justify-center text-amber-400 mb-1">
                    <Star className="h-4 w-4 fill-amber-400" />
                  </div>
                  <span className="block text-xs text-zinc-400">Rating</span>
                  <span className="font-semibold text-white text-sm">{course.rating} / 5.0</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-3 text-center">
                  <div className="flex items-center justify-center text-amber-400 mb-1">
                    <Users className="h-4 w-4" />
                  </div>
                  <span className="block text-xs text-zinc-400">Graduates</span>
                  <span className="font-semibold text-white text-sm">{course.studentsEnrolled}+ Enrolled</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-2">Program Overview</h4>
                <p className="text-sm leading-relaxed text-zinc-400">{course.description}</p>
              </div>

              {/* Tools & Tech Stack */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-3">Tools & Technologies Mastered</h4>
                <div className="flex flex-wrap gap-2">
                  {course.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Curriculum Breakdown */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-3">Structured Curriculum</h4>
                <div className="space-y-3">
                  {course.curriculum.map((item, idx) => (
                    <div key={idx} className="rounded-xl border border-white/10 bg-zinc-900/50 p-4">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-mono text-amber-400 font-semibold">{item.week}</span>
                        <span className="text-xs text-zinc-500">Live Mentorship</span>
                      </div>
                      <h5 className="text-sm font-bold text-white mb-2">{item.title}</h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-zinc-400">
                        {item.topics.map((topic, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="h-1 w-1 rounded-full bg-amber-400 shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Roles */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-2">Target Career Outcomes</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                  {course.careerRoles.map((role) => (
                    <div key={role} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-amber-400 shrink-0" />
                <p className="text-xs text-zinc-300">
                  Includes OneSkills Certification, live portfolio review, Upwork profile vetting, and lifetime alumni community access.
                </p>
              </div>
            </div>

            {/* Footer Action */}
            <div className="border-t border-white/10 bg-zinc-900/80 p-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-zinc-400 block">Next cohort begins soon</span>
                <span className="text-sm font-bold text-white">Enrollment Open • Limited Seats</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  id="modal-cancel-btn"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-white/10 text-xs font-semibold text-zinc-300 hover:bg-white/10 transition-colors"
                >
                  CLOSE
                </button>
                <button
                  id="modal-enroll-now-btn"
                  onClick={() => {
                    onClose();
                    onEnroll(course.id);
                  }}
                  className="w-1/2 sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-xs font-bold text-zinc-950 shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all"
                >
                  <span>APPLY FOR THIS COURSE</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
