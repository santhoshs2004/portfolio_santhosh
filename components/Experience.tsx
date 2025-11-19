
import React from 'react';
import Section from './Section';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" className="bg-gray-50 dark:bg-[#0b1120]">
      <div className="relative container mx-auto px-4 flex flex-col space-y-8">
        <div className="absolute z-0 w-1 h-full bg-gray-200 dark:bg-gray-700 left-4 md:left-1/2 transform -translate-x-1/2"></div>
        
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className={`relative z-10 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-dark-bg"></div>

            {/* Content */}
            <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
              <div className={`bg-white dark:bg-dark-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800`}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                   <span className="text-sm text-primary-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mt-2 md:mt-0">
                     {exp.period}
                   </span>
                </div>
                <h4 className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-4">{exp.company}</h4>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                      <span className="mr-2 mt-1.5 text-primary-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                
                {/* Links Section */}
                {(exp.githubLink || exp.certificateLink) && (
                  <div className="flex flex-wrap gap-3 mt-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                    {exp.githubLink && (
                      <a 
                        href={exp.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <i className="fab fa-github"></i>
                        <span>Source Code</span>
                      </a>
                    )}
                    {exp.certificateLink && (
                      <a 
                        href={exp.certificateLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <i className="fas fa-certificate"></i>
                        <span>View Certificate</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-1/2"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
