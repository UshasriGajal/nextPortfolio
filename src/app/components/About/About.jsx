'use client'
import React, { useState, useEffect } from 'react';

const EducationTimeline = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    }; 
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const educationData = [
    {
      id: 1,
      year: '2020 - 2024',
      title: 'B.Tech',
      institution: 'Sri Venkateshwara College Of Engineering, Tirupati',
      location: 'TIRUPATI, ANDHRA PRADESH',
      cgpa: 'CGPA: 8.2',
      icon: '🎯'
    },
    {
      id: 2,
      year: '2018 - 2020',
      title: 'INTERMEDIATE',
      institution: 'Sri chaitanya junior college',
      location: 'TIRUPATI, ANDHRA PRADESH',
      cgpa: 'CGPA: 9.0',
      icon: '🎓'
    },
    {
      id: 3,
      year: '2018',
      title: 'SCHOOL',
      institution: 'Keshava Reddy School',
      location: 'TIRUPATI, ANDHRA PRADESH',
      cgpa: 'CGPA: 9.2',
      icon: '📚'
    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-20 px-4 md:px-6" >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 md:top-40 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" style={{ backgroundColor: '#004643' }}></div>
        <div className="absolute top-40 md:top-60 right-10 md:right-20 w-48 md:w-72 h-48 md:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: '#F9BC60' }}></div>
        <div className="absolute bottom-20 md:bottom-40 left-20 md:left-40 w-48 md:w-72 h-48 md:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" style={{ backgroundColor: '#ABD1C6' }}></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="inline-block px-4 md:px-6 py-2 rounded-full mb-4" style={{ 
            backgroundColor: 'rgba(249, 188, 96, 0.15)',
            backdropFilter: 'blur(4px)'
          }}>
            <span className="text-xs md:text-sm font-semibold" style={{ color: '#F9BC60' }}>Timeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ 
            backgroundImage: 'linear-gradient(to right, #F9BC60, #ABD1C6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="relative"
              onMouseEnter={() => !isMobile && setHoveredId(edu.id)}
              onMouseLeave={() => !isMobile && setHoveredId(null)}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-6 md:py-8" style={{ borderBottom: '1px solid rgba(171, 209, 198, 0.2)' }}>
                {/* Right side - Year and Institution (shows first on mobile) */}
                <div className="w-full md:flex-1 md:order-2 md:pl-8 cursor-pointer" onClick={() => isMobile && setHoveredId(hoveredId === edu.id ? null : edu.id)}>
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <div 
                      className="p-1.5 md:p-2 rounded"
                      style={{ backgroundColor: 'rgba(249, 188, 96, 0.2)' }}
                    >
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="#F9BC60" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm md:font-medium" style={{ color: '#F9BC60' }}>
                      {edu.year}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#E8E4E6' }}>
                    {edu.institution}
                  </h3>
                  <p className="text-base md:text-lg" style={{ color: '#ABD1C6' }}>
                    {edu.title}
                  </p>
                  
                  {/* Arrow indicator */}
                  <div 
                    className="mt-4 transition-transform duration-300"
                    style={{
                      transform: hoveredId === edu.id ? (isMobile ? 'rotate(90deg)' : 'translateX(8px)') : 'translateX(0)'
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="#ABD1C6" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Left side - Education Card (appears on hover on desktop, expands downward on mobile) */}
                <div className="w-full md:flex-1 md:order-1 md:flex md:justify-end md:pr-8">
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      hoveredId === edu.id
                        ? 'opacity-100 max-h-96 md:translate-x-0'
                        : 'opacity-0 max-h-0 md:max-h-96 md:-translate-x-8 md:pointer-events-none'
                    }`}
                  >
                    <div 
                      className="rounded-2xl p-4 md:p-6 w-full md:max-w-md relative mt-4 md:mt-0"
                    >
                      <div className="flex items-start gap-3 md:gap-4 mb-4">
                        <span className="text-2xl md:text-4xl">{edu.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: '#E8E4E6' }}>
                            {edu.title}
                          </h3>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <svg 
                                className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" 
                                fill="none" 
                                stroke="#ABD1C6" 
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <p className="text-xs md:text-sm" style={{ color: '#ABD1C6' }}>
                                {edu.location}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg 
                                className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" 
                                fill="none" 
                                stroke="#F9BC60" 
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                              <p className="text-xs md:text-sm font-bold" style={{ color: '#F9BC60' }}>
                                {edu.cgpa}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative Corner Elements */}
                      <div 
                        className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 rounded-tl-2xl"
                        style={{ borderColor: '#F9BC60' }}
                      ></div>
                      <div 
                        className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 rounded-br-2xl"
                        style={{ borderColor: '#ABD1C6' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(232, 228, 230, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(232, 228, 230, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default EducationTimeline;