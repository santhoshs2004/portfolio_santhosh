
import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" className="bg-white dark:bg-dark-bg">
      <div className="max-w-3xl mx-auto">
        {EDUCATION.map((edu) => (
          <div 
            key={edu.id} 
            className="group relative flex flex-col md:flex-row justify-between items-center bg-gray-50 dark:bg-dark-card p-8 rounded-xl border-l-4 border-primary-500 mb-6 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white dark:hover:bg-gray-800"
          >
             {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="relative z-10 text-center md:text-left mb-4 md:mb-0 flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-blue-400 transition-colors">
                {edu.degree}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
                {edu.institution}
              </p>
              {edu.grade && (
                <div className="mt-3 inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-lg border border-green-200 dark:border-green-800 group-hover:scale-105 transition-transform">
                    {edu.grade}
                </div>
              )}
            </div>
            
            <div className="relative z-10 px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-primary-600 dark:text-blue-300 font-bold shadow-sm border border-gray-100 dark:border-gray-600 group-hover:bg-primary-600 group-hover:text-white dark:group-hover:bg-primary-500 dark:group-hover:text-white transition-colors duration-300 whitespace-nowrap mt-4 md:mt-0">
              {edu.year}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
