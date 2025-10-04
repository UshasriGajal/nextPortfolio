'use client'
import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const educationData = [
    {
      year: '2018',
      title: 'SCHOOL',
      institution: 'Keshava Reddy School',
      location: 'TIRUPATI, ANDHRA PRADESH',
      cgpa: 'CGPA: 9.2',
      color: 'from-pink-500 to-purple-500',
      icon: '📚'
    },
    {
      year: '2020',
      title: 'INTERMEDIATE',
      institution: 'Sri chaitanya junior college',
      location: 'TIRUPATI, ANDHRA PRADESH',
      cgpa: 'CGPA: 9.0',
      color: 'from-purple-500 to-blue-500',
      icon: '🎓'
    },
    {
      year: '2024',
      title: 'B.Tech',
      institution: 'Sri Venkateshwara College Of Engineering, Tirupati',
      location: 'Currently Studying',
      cgpa: 'CGPA: 8.2',
      color: 'from-blue-500 to-pink-500',
      icon: '🎯'
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-20 px-6"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-4 animate-gradient-x">
            MY EDUCATION
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 opacity-30"></div>

          {/* Education Cards */}
          <div className="space-y-12 md:space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 delay-${index * 200} transform ${
                  isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-20 opacity-0' : 'translate-x-20 opacity-0'
                }`}
              >
                {/* Desktop Layout */}
                <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Card */}
                  <div 
                    className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className={` backdrop-blur-lg rounded-2xl px-8  border-opacity-30 transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 ${
                      activeCard === index ? 'scale-105 shadow-purple-500/50' : ''
                    }`}>
                      {/* Year Badge */}
                      <div className={`inline-block px-6 py-0 bg-gradient-to-r ${edu.color} text-white font-bold rounded-full text-lg mb-4 shadow-lg`}>
                        {edu.year}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3 justify-end">
                        {index % 2 === 0 ? (
                          <>
                            {edu.title}
                            <span className="text-4xl">{edu.icon}</span>
                          </>
                        ) : (
                          <>
                            <span className="text-4xl">{edu.icon}</span>
                            {edu.title}
                          </>
                        )}
                      </h3>
                      
                      {/* Institution */}
                      <p className="text-xl text-gray-300 mb-2 font-medium">{edu.institution}</p>
                      
                      {/* Location */}
                      <p className="text-purple-400 italic mb-3">{edu.location}</p>
                      
                      {/* CGPA */}
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${edu.color} bg-opacity-20 rounded-lg border border-purple-400 border-opacity-30`}>
                        <p className="text-white font-semibold">{edu.cgpa}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} shadow-lg transform transition-all duration-300 ${
                      activeCard === index ? 'scale-150 shadow-purple-500/50' : ''
                    }`}>
                      <div className="w-full h-full rounded-full bg-white animate-ping opacity-75"></div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div 
                    className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-purple-500 border-opacity-30"
                    onTouchStart={() => setActiveCard(index)}
                  >
                    {/* Year Badge */}
                    <div className={`inline-block px-6 py-2 bg-gradient-to-r ${edu.color} text-white font-bold rounded-full text-lg mb-4 shadow-lg`}>
                      {edu.year}
                    </div>
                    
                    {/* Title with Icon */}
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                      <span className="text-3xl">{edu.icon}</span>
                      {edu.title}
                    </h3>
                    
                    {/* Institution */}
                    <p className="text-lg text-gray-300 mb-2 font-medium">{edu.institution}</p>
                    
                    {/* Location */}
                    <p className="text-purple-400 italic mb-3">{edu.location}</p>
                    
                    {/* CGPA */}
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${edu.color} bg-opacity-20 rounded-lg border border-purple-400 border-opacity-30`}>
                      <p className="text-white font-semibold">{edu.cgpa}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg opacity-20 animate-float blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-float animation-delay-2000 blur-sm"></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @media (max-width: 768px) {
          .delay-0 { transition-delay: 0ms; }
          .delay-200 { transition-delay: 200ms; }
          .delay-400 { transition-delay: 400ms; }
        }
      `}</style>
    </div>
  );
};

export default About;