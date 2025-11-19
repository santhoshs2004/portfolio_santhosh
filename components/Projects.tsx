
import React, { useEffect, useRef } from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          entry.target.classList.add('opacity-100', 'translate-y-0', 'animate-fadeInUp');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      observerRef.current?.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <Section id="projects" title="Featured Projects" className="bg-white dark:bg-dark-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card group bg-gray-50 dark:bg-dark-card rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col opacity-0 translate-y-8"
            style={{ transitionDelay: `${index % 2 * 150}ms` }}
          >
            <div className="relative overflow-hidden h-56">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Year Badge */}
              {project.year && (
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 shadow-lg">
                  {project.year}
                </div>
              )}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                {project.demoLink && (
                  <a href={project.demoLink} className="p-3 bg-white rounded-full text-gray-900 hover:text-primary-600 hover:scale-110 transition-all duration-300" title="View Demo" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
                {project.repoLink && (
                  <a href={project.repoLink} className="p-3 bg-white rounded-full text-gray-900 hover:text-primary-600 hover:scale-110 transition-all duration-300" title="View Code" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                )}
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-900/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
