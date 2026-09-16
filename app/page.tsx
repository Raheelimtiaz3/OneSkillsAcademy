'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CoursesSection from '@/components/CoursesSection';
import FeaturedVideoSection from '@/components/FeaturedVideoSection';
import WhySection from '@/components/WhySection';
import LearningExperienceSection from '@/components/LearningExperienceSection';
import StudentSuccessSection from '@/components/StudentSuccessSection';
import ReviewsSection from '@/components/ReviewsSection';
import CtaSection from '@/components/CtaSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import EnrollModal from '@/components/EnrollModal';
import CourseDetailsModal from '@/components/CourseDetailsModal';
import { Course } from '@/data/courses';

export default function HomePage() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<string | undefined>(undefined);

  const [selectedCourseForDetails, setSelectedCourseForDetails] = useState<Course | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleOpenEnroll = (courseId?: string) => {
    setSelectedCourseForEnroll(courseId);
    setIsEnrollModalOpen(true);
  };

  const handleSelectCourseDetails = (course: Course) => {
    setSelectedCourseForDetails(course);
    setIsDetailsModalOpen(true);
  };

  const scrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Premium Navigation */}
      <Navbar onOpenEnroll={() => handleOpenEnroll()} />

      <main>
        {/* 1. Cinematic Hero */}
        <HeroSection
          onExploreCourses={scrollToCourses}
        />

        {/* 2. About OneSkills (Split-Screen + Animated Stats + Campus Visual) */}
        <AboutSection />

        {/* 3. Courses Section (Interactive Filter Tabs + Details Modal) */}
        <CoursesSection
          onSelectCourse={handleSelectCourseDetails}
          onEnroll={handleOpenEnroll}
        />

        {/* 4. Inside The Campus: Practical Studio Visual */}
        <FeaturedVideoSection />

        {/* 5. Why OneSkills (6-Card Grid) */}
        <WhySection />

        {/* 6. Learning Experience (Classroom to Career Immersion) */}
        <LearningExperienceSection />

        {/* 7. Student Success (Numbers + Animated Marquee) */}
        <StudentSuccessSection />

        {/* 8. Student Reviews (Horizontal Testimonial Cards) */}
        <ReviewsSection />

        {/* 9. Call to Action (Cinematic Dark Visual Background) */}
        <CtaSection
          onJoin={() => handleOpenEnroll()}
          onExploreCourses={scrollToCourses}
        />

        {/* 10. Contact Section (Inquiry Form + Details + Map) */}
        <ContactSection />
      </main>

      {/* 11. Footer with Newsletter Subscription */}
      <Footer />

      {/* Interactive Modals */}
      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        defaultCourseId={selectedCourseForEnroll}
      />

      <CourseDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        course={selectedCourseForDetails}
        onEnroll={(courseId) => handleOpenEnroll(courseId)}
      />
    </div>
  );
}
