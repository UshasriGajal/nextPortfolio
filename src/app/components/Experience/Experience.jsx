'use client'
import React, { useState } from 'react';

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const experiences = [
    {
      id: 1,
      company: 'Megaleap.ai',
      role: 'Frontend Developer',
      period: 'November 2024–Present',
      description: 'Built end-to-end frontend modules for an enterprise ERP platform using Next.js, React, Redux Toolkit, Tailwind CSS, and integrated secure JWT-based authentication, role-based routing, and microservice API communication.Collaborated closely with backend and design teams, improving user experience, system security, and data workflows. Collaborating with backend developers and designers to implement interactive user interfaces.'
    },
    {
      id: 2,
      company: 'OASIS INFOBYTE ',
      role: 'Internship',
      period: '2023',
      description: 'Developed responsive websites and interactive web applications including a Temperature Converter and portfolio site. Implemented clean UI design, real-time conversion logic, and followed best practices in version control, responsive design, and deployment workflows using HTML, CSS, JavaScript, and Git.'
    }
  ];

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardInteraction = (index) => {
    if (isMobile) {
      // On mobile, toggle the card
      setHoveredIndex(hoveredIndex === index ? null : index);
    }
  };

  return (
    <div className="min-h-screen py-20 px-6" >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" style={{ backgroundColor: '#004643' }}></div>
        <div className="absolute top-60 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: '#F9BC60' }}></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" style={{ backgroundColor: '#ABD1C6' }}></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ 
            backgroundImage: 'linear-gradient(to right, #F9BC60, #ABD1C6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            Experience
          </h2>
          
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative group cursor-pointer"
              onClick={() => handleCardInteraction(index)}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            >
              <div 
                className="rounded-2xl p-8 transition-all duration-500 transform"
                style={{
                  background: hoveredIndex === index 
                    ? 'linear-gradient(135deg, rgba(0, 70, 67, 0.4), rgba(171, 209, 198, 0.2))'
                    : 'rgba(0, 70, 67, 0.2)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid',
                  borderColor: hoveredIndex === index ? '#ABD1C6' : 'rgba(171, 209, 198, 0.2)'
                }}
              >
                {/* Top Section - Always Visible */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: '#F9BC60' }}
                      ></div>
                      <span className="text-sm font-medium" style={{ color: '#F9BC60' }}>
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1" style={{ color: '#E8E4E6' }}>
                      {exp.company}
                    </h3>
                    <p className="text-lg" style={{ color: '#ABD1C6' }}>
                      {exp.role}
                    </p>
                  </div>
                  
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: hoveredIndex === index ? '#ABD1C6' : 'rgba(171, 209, 198, 0.2)',
                      transform: hoveredIndex === index ? 'rotate(90deg)' : 'rotate(0deg)'
                    }}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke={hoveredIndex === index ? '#001E1D' : '#ABD1C6'}
                      strokeWidth="2"
                    >
                      <path d="M9 5L16 12L9 19" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Divider */}
                <div 
                  className="h-px w-full my-6 transition-all duration-500"
                  style={{
                    background: hoveredIndex === index 
                      ? 'linear-gradient(to right, transparent, #ABD1C6, transparent)'
                      : 'linear-gradient(to right, transparent, rgba(171, 209, 198, 0.3), transparent)',
                    opacity: hoveredIndex === index ? 1 : 0.3
                  }}
                ></div>

                {/* Description - Appears on Hover/Click */}
                <div 
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: hoveredIndex === index ? '200px' : '0',
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                >
                  <p 
                    className="text-base leading-relaxed"
                    style={{ color: '#ABD1C6' }}
                  >
                    {exp.description}
                  </p>
                </div>

                {/* Decorative Corner Elements */}
                {hoveredIndex === index && (
                  <>
                    <div 
                      className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-2xl transition-all duration-300"
                      style={{ borderColor: '#F9BC60' }}
                    ></div>
                    <div 
                      className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-2xl transition-all duration-300"
                      style={{ borderColor: '#ABD1C6' }}
                    ></div>
                  </>
                )}
              </div>

              {/* Floating Decorative Elements */}
              {hoveredIndex === index && (
                <>
                  <div 
                    className="absolute -right-4 top-1/4 w-12 h-12 rounded-lg shadow-lg animate-float"
                    style={{ background: 'linear-gradient(to bottom right, #F9BC60, #ABD1C6)' }}
                  ></div>
                  <div 
                    className="absolute -left-4 bottom-1/4 w-8 h-8 rounded-full shadow-lg animate-float animation-delay-2000"
                    style={{ background: 'linear-gradient(to bottom right, #ABD1C6, #004643)' }}
                  ></div>
                </>
              )}
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

export default Experience;