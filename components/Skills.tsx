
import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills" className="bg-gray-50 dark:bg-[#0b1120]">
      <div className="grid grid-cols-1 gap-8">
        {SKILLS.map((skillGroup) => (
          <div key={skillGroup.category} className="bg-white dark:bg-dark-card rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
              {skillGroup.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skillGroup.items.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-primary-200 dark:hover:border-primary-900 transition-all duration-300 group hover:shadow-md">
                  <div className="h-12 w-12 flex items-center justify-center mb-3 transition-transform group-hover:scale-110 duration-300">
                    {skill.type === 'image' ? (
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="max-h-full max-w-full object-contain drop-shadow-sm"
                        loading="lazy"
                      />
                    ) : (
                      <i className={`${skill.icon} text-3xl text-primary-600 dark:text-blue-400`}></i>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center group-hover:text-primary-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
