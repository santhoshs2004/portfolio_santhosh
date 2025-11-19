import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <span className="text-primary-600 dark:text-blue-400 font-semibold text-lg tracking-wider uppercase">
            Hi, I'm
          </span>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
            {PERSONAL_INFO.title}
          </h2>
          <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              View Work
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-8 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-primary-600 hover:text-primary-600 dark:hover:border-blue-400 dark:hover:text-blue-400 font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-10 flex justify-center md:justify-start space-x-6 items-center">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-2xl" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            {/* LeetCode Icon */}
            <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors w-6 h-6" aria-label="LeetCode">
               <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.156a6.3 6.3 0 0 0-2.568.278l-.025.007-.024.007zM22.17 5.55l-10.08-3.36a1.38 1.38 0 0 0-1.79 1.29c0 .09.01.18.03.27l3.36 10.08a1.38 1.38 0 0 0 2.61-.87l-3.36-10.08 10.08 3.36a1.38 1.38 0 0 0 .87-2.61l-.72-.27z"/>
               </svg>
            </a>
            <a href={PERSONAL_INFO.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors text-2xl" aria-label="X (Twitter)">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center relative mt-12 md:mt-0">
          {/* Abstract Background shapes */}
          <div className="absolute w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-0 -left-4"></div>
          <div className="absolute w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 bottom-0 -right-4"></div>
          <div className="absolute w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 -bottom-8 left-20"></div>
          
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
            alt="Coding Setup"
            className="relative w-full max-w-sm md:max-w-md rounded-2xl shadow-2xl object-cover border-4 border-white dark:border-gray-800 z-10 transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => scrollToSection(e, 'about')}
          className="flex flex-col items-center text-gray-400 hover:text-primary-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors"
        >
          <span className="text-xs font-medium mb-2 uppercase tracking-widest opacity-75">Scroll Down</span>
          <i className="fas fa-chevron-down text-xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;