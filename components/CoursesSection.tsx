'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Clock, Star, Layers, UserCheck } from 'lucide-react';
import Image from 'next/image';
import { COURSES, Course, COURSE_CATEGORIES } from '@/data/courses';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
  onEnroll: (courseId: string) => void;
}

interface CourseCardProps {
  course: Course;
  onSelectCourse: (course: Course) => void;
  onEnroll: (courseId: string) => void;
}

function CourseCard({ course, onSelectCourse, onEnroll }: CourseCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="group relative flex flex-col rounded-2xl border border-white/10 bg-zinc-900/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 hover:bg-zinc-900/90 hover:shadow-2xl hover:shadow-amber-500/10"
    >
      {/* Top Media Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/5 bg-zinc-950">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

        {/* Badge */}
        {course.badge && (
          <div className="absolute top-3 left-3 rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-zinc-950 shadow-md">
            {course.badge}
          </div>
        )}

        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-0.5 text-[11px] font-semibold text-amber-300 backdrop-blur-md">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span>{course.rating}</span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-300 font-mono">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-amber-400" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Layers className="h-3 w-3 text-amber-400" />
            {course.projectsCount}
          </span>
        </div>
      </div>

      {/* Course Info */}
      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            {course.category}
          </span>
          <span className="text-[10px] font-mono text-zinc-400">
            {course.studentsEnrolled}+ enrolled
          </span>
        </div>

        <h3 className="mt-1 text-lg sm:text-xl font-bold tracking-tight text-white font-heading group-hover:text-amber-300 transition-colors">
          {course.title}
        </h3>

        <p className="mt-1 text-xs font-mono text-zinc-400">
          {course.tagline}
        </p>

        {course.instructor && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-300">
            <UserCheck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
            <span className="truncate">{course.instructor}</span>
          </div>
        )}

        <p className="mt-2.5 text-xs text-zinc-400 leading-relaxed line-clamp-3">
          {course.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {course.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
          {course.technologies.length > 4 && (
            <span className="rounded-md border border-white/5 bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-amber-400">
              +{course.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            id={`learn-more-${course.id}-btn`}
            onClick={() => onSelectCourse(course)}
            className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 transition-colors hover:text-amber-400"
          >
            <span>Curriculum & Details</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            id={`enroll-course-${course.id}-btn`}
            onClick={() => onEnroll(course.id)}
            className="rounded-xl bg-amber-500/15 border border-amber-500/40 px-3.5 py-1.5 text-xs font-bold text-amber-300 transition-all hover:bg-amber-500 hover:text-zinc-950 active:scale-95"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function CoursesSection({ onSelectCourse, onEnroll }: CoursesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Courses');

  const filteredCourses = selectedCategory === 'All Courses'
    ? COURSES
    : COURSES.filter((c) => c.category.toLowerCase() === selectedCategory.toLowerCase() || (selectedCategory === 'Trading & Creative' && (c.category === 'Trading & Creative' || c.category === 'Creative Arts')));

  return (
    <section
      id="courses"
      className="relative w-full py-24 sm:py-32 bg-[#08080a] border-t border-white/5"
    >
      {/* Background Decorative Gradient */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-96 w-full max-w-7xl bg-radial from-amber-500/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-amber-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>ONESKILLS OFFICIAL PROGRAMS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            LEARN WHAT THE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              FUTURE DEMANDS.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            Practical, career-focused courses engineered for immediate workplace application and high-earning international freelancing.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {COURSE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-zinc-950 font-bold shadow-lg shadow-amber-500/20'
                  : 'border border-white/10 bg-zinc-900/60 text-zinc-400 hover:border-amber-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onSelectCourse={onSelectCourse}
              onEnroll={onEnroll}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-zinc-900/80 via-zinc-900/40 to-zinc-900/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white font-heading">
              Need advice choosing the right career track?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Speak directly with Nisar Mehar and our senior mentors. We evaluate your goals and recommend the optimal program.
            </p>
          </div>
          <button
            id="talk-to-counselor-btn"
            onClick={() => onEnroll('web-development')}
            className="shrink-0 rounded-full border border-amber-400/50 bg-amber-400/10 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-amber-300 hover:bg-amber-400 hover:text-zinc-950 transition-all shadow-md active:scale-95"
          >
            Schedule Free Career Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
