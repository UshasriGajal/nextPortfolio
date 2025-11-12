'use client'
import React from 'react';

const Scrolling = () => {
  const skills = [
    'Web development',
    'Git & GitHub',
    'Responsiveness ',
    'Frontend Deployment (Vercel, Netlify)',
    'RESTful APIs',
    'Axios / Fetch API',
    
  ];

  return (
    <div className="w-full py-16 overflow-hidden" >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <h2 className="text-2xl md:text-4xl lg:text-4xl  text-center font-bold mb-12" style={{ color: 'white' }}>
          Core Skills
        </h2>

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of skills */}
            {skills.map((skill, index) => (
              <div key={`skill-1-${index}`} className="flex items-center flex-shrink-0 mx-4">
                <span className="text-xl md:text-2xl lg:text-2xl font-light whitespace-nowrap" style={{ color: 'white' }}>
                  {skill}
                </span>
                <span className="mx-6 text-2xl" style={{ color: '#F9BC60' }}>✦</span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {skills.map((skill, index) => (
              <div key={`skill-2-${index}`} className="flex items-center flex-shrink-0 mx-4">
                <span className="text-2xl md:text-3xl lg:text-4xl font-light whitespace-nowrap" style={{ color: '#1a1a1a' }}>
                  {skill}
                </span>
                <span className="mx-6 text-2xl" style={{ color: '#F9BC60' }}>✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Scrolling;