import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-textMain">Skills & Expertise</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {portfolioData.skills.map((skill, index) => (
            <div 
              key={index} 
              className="glass px-6 py-3 rounded-full text-textMain font-medium hover:bg-slate-900/10 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 border border-textMain/10 shadow-lg"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
