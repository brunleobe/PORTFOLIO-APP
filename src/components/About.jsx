import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-textMain">About Me</h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full mb-10"></div>
        <p className="text-lg md:text-xl text-textMuted leading-relaxed max-w-3xl mx-auto">
          {portfolioData.about}
        </p>
      </div>
    </section>
  );
};

export default About;
