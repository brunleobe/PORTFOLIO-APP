import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="glass-card group overflow-hidden flex flex-col h-full border border-textMain/10">
      <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
        <div className="absolute inset-0 bg-primary-900/50 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-textMain mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-textMuted text-sm mb-6 flex-grow">{project.description}</p>
        <div className="flex items-center gap-4 mt-auto">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-textMain bg-slate-900/5 dark:bg-white/10 hover:bg-primary-600 hover:text-white px-4 py-2 rounded-lg transition-colors">
            Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-textMuted hover:text-textMain transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
