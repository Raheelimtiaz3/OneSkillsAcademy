'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnroll: () => void;
}

export default function Navbar({ onOpenEnroll }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['hero', 'about', 'courses', 'why', 'success', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId === 'hero' ? 'home' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'COURSES', href: '#courses', id: 'courses' },
    { label: 'WHY ONESKILLS', href: '#why', id: 'why' },
    { label: 'STUDENTS', href: '#success', id: 'success' },
    { label: 'REVIEWS', href: '#reviews', id: 'reviews' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-black/30 backdrop-blur-md border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2.5 focus:outline-none"
          id="brand-logo-link"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-zinc-950 font-heading font-black text-amber-400 text-base">
              1S
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-extrabold tracking-wider text-white group-hover:text-amber-400 transition-colors">
              ONESKILLS
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 -mt-1 font-mono">
              ACADEMY
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-zinc-950/60 p-1.5 backdrop-blur-lg shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wider transition-all duration-250 rounded-full ${
                  isActive
                    ? 'text-white bg-amber-500/15 border border-amber-400/40 shadow-sm shadow-amber-500/10'
                    : 'text-zinc-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-join-now-btn"
            onClick={onOpenEnroll}
            className="relative group overflow-hidden rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-5 py-2 text-xs font-extrabold tracking-wider text-zinc-950 shadow-md shadow-amber-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>JOIN NOW</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-join-button"
            onClick={onOpenEnroll}
            className="rounded-full bg-amber-500 px-3 py-1.5 text-[11px] font-bold text-zinc-950"
          >
            JOIN NOW
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 transition-colors hover:bg-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-white/10 bg-zinc-950/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                    activeSection === link.id
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <button
                  id="mobile-drawer-join-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnroll();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-sm font-bold text-zinc-950 shadow-lg shadow-amber-500/20"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>JOIN ONESKILLS ACADEMY</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
