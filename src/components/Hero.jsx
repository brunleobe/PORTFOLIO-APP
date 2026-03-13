import React from 'react';
import { portfolioData } from '../data/portfolioData';
import profileImage from '../assets/images/bright.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-900/10 dark:border-white/10 glass text-sm text-accent mb-4">
            Available for hire
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-textMain mb-6">
            Hi, I'm <span className="text-gradient">{portfolioData.personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-textMuted font-medium mb-8">
            {portfolioData.personalInfo.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-0.5">
              Get in Touch
            </a>
            <a href="/Obende Bright CV.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 glass hover:bg-slate-900/10 dark:hover:bg-white/10 text-textMain rounded-xl font-medium transition-all">
              View Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-accent rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full object-cover border-4 border-slate-900/10 dark:border-white/10 shadow-2xl z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
