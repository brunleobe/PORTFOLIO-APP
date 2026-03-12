import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav ref={menuRef} className="fixed w-full top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gradient tracking-tight">
              {portfolioData.personalInfo.name.split(' ')[0]}
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-textMuted hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-textMuted hover:text-accent hover:bg-white/20 dark:hover:bg-slate-700/40 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {/* Animated hamburger / X icon */}
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current rounded transition-all duration-300 origin-center ${mobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                    }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                    }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current rounded transition-all duration-300 origin-center ${mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 border-t border-slate-900/10 dark:border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-textMuted hover:text-accent hover:bg-white/30 dark:hover:bg-slate-700/40 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
