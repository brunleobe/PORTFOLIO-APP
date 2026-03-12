import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-surface/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-textMain">Experience</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp) => (
            <div key={exp.id} className="glass-card relative pl-8 md:pl-0">
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-3 h-3 bg-accent rounded-full md:hidden"></div>

              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div className="pl-4 md:pl-6">
                  <h3 className="text-xl font-bold text-textMain mb-5">{exp.role}</h3>
                  <h4 className="text-primary-400 font-bold">{exp.company}</h4>
                </div>
                <div className="mt-2 md:mt-0 text-sm font-semibold text-textMuted bg-slate-900/5 dark:bg-white/5 px-3 py-1 rounded-full self-start">
                  {exp.period}
                </div>
              </div>
              <p className="text-textMuted leading-relaxed">
                <p className="pl-4 md:pl-6">
                  {exp.description}
                </p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
