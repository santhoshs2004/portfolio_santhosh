
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" className="bg-white dark:bg-dark-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex justify-center">
            {/* 
               User Photo: 
               I have set a placeholder image from Unsplash so the app looks good immediately.
               To use your own photo:
               1. Place your 'profile.jpg' in the public/ folder.
               2. Change the src below to "/profile.jpg".
            */}
            <img 
                src="images\Screenshot 2025-09-03 224523.png" 
                alt="Santhosh S" 
                className="rounded-lg shadow-xl w-full max-w-md h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
            />
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Building Web Solutions with Passion
          </h3>
          <div className="space-y-4 mb-6">
            {PERSONAL_INFO.about.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <span className="block text-primary-600 dark:text-blue-400 font-bold text-xl mb-1">0</span>
                <span className="text-gray-600 dark:text-gray-400">Years Experience</span>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                <span className="block text-primary-600 dark:text-blue-400 font-bold text-xl mb-1">0</span>
                <span className="text-gray-600 dark:text-gray-400">Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
