
import React from 'react';
import Section from './Section';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
  return (
    <Section id="certificates" title="Certifications" className="bg-gray-50 dark:bg-[#0b1120]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {CERTIFICATES.map((cert) => (
          <a 
            key={cert.id} 
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start p-6 bg-white dark:bg-dark-card rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800 group"
          >
            <div className="flex-shrink-0 h-12 w-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 mr-4 mt-1 group-hover:scale-110 transition-transform">
              <i className="fas fa-certificate text-xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-blue-400 transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {cert.issuer} • {cert.date}
              </p>
              {cert.description && (
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {cert.description}
                </p>
              )}
            </div>
            <div className="ml-4 text-gray-400 group-hover:text-primary-500 mt-1">
                <i className="fas fa-external-link-alt text-sm"></i>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;