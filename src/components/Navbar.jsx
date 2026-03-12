import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gradient tracking-tight">
              {portfolioData.personalInfo.name.split(' ')[0]}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              <a href="#hero" className="text-textMain hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-textMuted hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#skills" className="text-textMuted hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Skills</a>
              <a href="#projects" className="text-textMuted hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="#experience" className="text-textMuted hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Experience</a>
              <a href="#contact" className="text-textMuted hover:text-accent transition-colors px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
