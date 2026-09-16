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
import VideoModal from '@/components/VideoModal';
import EnrollModal from '@/components/EnrollModal';
import CourseDetailsModal from '@/components/CourseDetailsModal';
import { Course } from '@/data/courses';

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoModalData, setVideoModalData] = useState({
    title: 'OneSkills Academy Experience',
    subtitle: 'Inside our modern technology and practical career labs',
    videoSrc: '/videos/featured-lab.mp4'
  });

  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<string | undefined>(undefined);

  const [selectedCourseForDetails, setSelectedCourseForDetails] = useState<Course | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleOpenIntroVideo = () => {
    setVideoModalData({
      title: 'OneSkills Academy Introduction',
      subtitle: 'Learn Skills. Build Your Future.',
      videoSrc: '/videos/hero.mp4'
    });
    setIsVideoModalOpen(true);
  };

  const handleOpenFeaturedVideo = () => {
    setVideoModalData({
      title: 'See How We Learn: Inside the Labs',
      subtitle: 'Hands-on programming, design sprints, and real client simulations',
      videoSrc: '/videos/featured-lab.mp4'
    });
    setIsVideoModalOpen(true);
  };

  const handleOpenLearningExperienceVideo = () => {
    setVideoModalData({
      title: 'From Classroom to Career',
      subtitle: 'From zero coding to real client contracts and production deployments',
      videoSrc: '/videos/classroom.mp4'
    });
    setIsVideoModalOpen(true);
  };

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
        {/* 1. Full-Screen Cinematic Video Hero */}
        <HeroSection
          onExploreCourses={scrollToCourses}
          onWatchIntro={handleOpenIntroVideo}
        />

        {/* 3. About OneSkills (Split-Screen + Animated Stats) */}
        <AboutSection onWatchVideo={handleOpenFeaturedVideo} />

        {/* 4. Courses Section (3D Tilt Cards) */}
        <CoursesSection
          onSelectCourse={handleSelectCourseDetails}
          onEnroll={handleOpenEnroll}
        />

        {/* 5. Featured Video Section (SEE HOW WE LEARN) */}
        <FeaturedVideoSection onOpenVideo={handleOpenFeaturedVideo} />

        {/* 6. Why OneSkills (6-Card Grid) */}
        <WhySection />

        {/* 7. Learning Experience (Full-Width Video Section) */}
        <LearningExperienceSection onOpenVideo={handleOpenLearningExperienceVideo} />

        {/* 8. Student Success (Numbers + Animated Marquee) */}
        <StudentSuccessSection />

        {/* 9. Student Reviews (Horizontal Testimonial Cards) */}
        <ReviewsSection />

        {/* 10. Call to Action (Cinematic Dark Video Background) */}
        <CtaSection
          onJoin={() => handleOpenEnroll()}
          onExploreCourses={scrollToCourses}
        />

        {/* 11. Contact Section (Inquiry Form + Details + Icons) */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc={videoModalData.videoSrc}
        title={videoModalData.title}
        subtitle={videoModalData.subtitle}
      />

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        defaultCourseId={selectedCourseForEnroll}
      />

      <CourseDetailsModal
        course={selectedCourseForDetails}
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        onEnroll={(courseId) => handleOpenEnroll(courseId)}
      />
    </div>
  );
}
