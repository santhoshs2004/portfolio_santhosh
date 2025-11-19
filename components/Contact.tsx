
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" className="bg-white dark:bg-dark-bg">
      <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-dark-card rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Contact Info */}
        <div className="md:w-1/3 p-8 bg-primary-600 dark:bg-blue-800 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-blue-100 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-start space-x-4 hover:text-blue-200 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/50 transition-colors">
                    <i className="fas fa-envelope text-lg"></i>
                </div>
                <div>
                    <p className="text-sm text-blue-200 font-medium">Email Me</p>
                    <p className="font-medium break-all">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-start space-x-4 hover:text-blue-200 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/50 transition-colors">
                    <i className="fas fa-phone text-lg"></i>
                </div>
                <div>
                    <p className="text-sm text-blue-200 font-medium">Call Me</p>
                    <p className="font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-lg"></i>
                </div>
                <div>
                    <p className="text-sm text-blue-200 font-medium">Location</p>
                    <p className="font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
             <p className="text-sm text-blue-200 opacity-80">
                 &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}.
             </p>
          </div>
        </div>
        
        {/* Right Side - Social Links Grid */}
        <div className="md:w-2/3 p-8 md:p-12 flex items-center justify-center bg-white dark:bg-gray-800/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
             {/* LinkedIn */}
             <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
             >
                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-[#0077b5] mb-4 group-hover:scale-110 transition-transform">
                    <i className="fab fa-linkedin-in text-4xl"></i>
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-[#0077b5] transition-colors">LinkedIn</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Let's Connect</p>
             </a>

             {/* GitHub */}
             <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
             >
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-900 dark:text-white mb-4 group-hover:scale-110 transition-transform">
                    <i className="fab fa-github text-4xl"></i>
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">GitHub</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Check my Code</p>
             </a>

             {/* Twitter/X */}
             <a 
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
             >
                <div className="w-16 h-16 rounded-full bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center text-black dark:text-white mb-4 group-hover:scale-110 transition-transform">
                    <i className="fa-brands fa-x-twitter text-4xl"></i>
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-black dark:group-hover:text-gray-300 transition-colors">X (Twitter)</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Follow Me</p>
             </a>

             {/* Instagram */}
             <a 
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
             >
                <div className="w-16 h-16 rounded-full bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center text-[#E1306C] mb-4 group-hover:scale-110 transition-transform">
                    <i className="fab fa-instagram text-4xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent"></i>
                </div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-[#E1306C] transition-colors">Instagram</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Behind the Scenes</p>
             </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
