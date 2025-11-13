'use client'
import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
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

  const contactInfo = [
    {
      title: 'Phone',
      value: '9390986960',
      icon: '📱',
      color: '#F9BC60',
      link: 'tel:9390986960',
      label: 'CALL'
    },
    {
      title: 'Gmail',
      value: 'ushasrigajal@gmail.com',
      icon: '✉️',
      color: '#E16162',
      link: 'mailto:ushasrigajal@gmail.com',
      label: 'EMAIL'
    },
    {
      title: 'Location',
      value: 'Hyderabad',
      icon: '📍',
      color: '#ABD1C6',
      link: null,
      label: 'VISIT'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      username: 'github',
      icon: '💻',
      color: '#F9BC60',
      link: 'https://github.com/UshasriGajal'
    },
    {
      name: 'LinkedIn',
      username: 'linkedin',
      icon: '💼',
      color: '#ABD1C6',
      link: 'https://www.linkedin.com/in/ushasri-gajal-59b09324b/'
    },
    {
      name: 'HackerRank',
      username: 'hackerrank',
      icon: '🏆',
      color: '#E16162',
      link: 'https://www.hackerrank.com/profile/ushasrigajal'
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden py-12 px-4 sm:py-20 sm:px-6 flex items-center"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"
          style={{ backgroundColor: '#F9BC60' }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{ backgroundColor: '#E16162' }}
        ></div>
      </div>

      {/* Decorative circles */}
      

      <div className="relative z-10 container mx-auto max-w-6xl w-full">
        {/* Main Title */}
        <div className={`text-center mb-8 sm:mb-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-tight px-4"
            style={{ color: '#E8E4E6' }}
          >
            LET'S CONNECT
          </h2>
          
          <p 
            className="text-lg sm:text-xl md:text-2xl font-light px-4"
            style={{ color: '#ABD1C6' }}
          >
            I'm always excited to collaborate on new projects
          </p>
        </div>

        {/* Contact Information - List Style */}
        <div className="mb-8 sm:mb-10 max-w-4xl mx-auto px-2 sm:px-4">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 200} transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
            >
              {contact.link ? (
                <a href={contact.link} className="block">
                  <ContactItem contact={contact} isActive={activeItem === index} />
                </a>
              ) : (
                <div>
                  <ContactItem contact={contact} isActive={activeItem === index} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Links - Horizontal Bar */}
        <div className={`transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} px-4`}>
          <div className="text-center mb-6 sm:mb-8">
            <h3 
              className="text-2xl sm:text-3xl md:text-4xl font-black inline-block relative"
              style={{ color: '#E8E4E6' }}
            >
              FIND ME ON
              <div 
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{ backgroundColor: '#F9BC60' }}
              ></div>
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center"
                onMouseEnter={() => setActiveItem(`social-${index}`)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <div className="relative">
                  {/* Icon Circle */}
                  <div 
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-4xl sm:text-5xl transform transition-all duration-500 group-hover:scale-110 relative"
                    style={{ 
                      backgroundColor: activeItem === `social-${index}` ? social.color : 'transparent',
                      border: `3px solid ${social.color}`,
                      boxShadow: activeItem === `social-${index}` ? `0 0 40px ${social.color}80` : 'none'
                    }}
                  >
                    <span className="transform transition-transform duration-500 group-hover:rotate-12">
                      {social.icon}
                    </span>
                  </div>

                  {/* Animated ring */}
                  {activeItem === `social-${index}` && (
                    <div 
                      className="absolute inset-0 rounded-full animate-ping opacity-75"
                      style={{ 
                        border: `2px solid ${social.color}`,
                      }}
                    ></div>
                  )}
                </div>

                {/* Label */}
                <div className="mt-3 sm:mt-4 text-center">
                  <p 
                    className="font-black text-base sm:text-lg tracking-wider transition-colors duration-300"
                    style={{ 
                      color: activeItem === `social-${index}` ? social.color : '#ABD1C6'
                    }}
                  >
                    {social.name}
                  </p>
                  <p 
                    className="text-xs sm:text-sm mt-1 opacity-70"
                    style={{ color: '#E8E4E6' }}
                  >
                    @{social.username}
                  </p>
                </div>

                {/* Bottom line indicator */}
                <div 
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-300"
                  style={{ 
                    width: activeItem === `social-${index}` ? '80%' : '0%',
                    backgroundColor: social.color
                  }}
                ></div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }

        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        @media (max-width: 768px) {
          .delay-0 { transition-delay: 0ms; }
          .delay-200 { transition-delay: 200ms; }
          .delay-400 { transition-delay: 400ms; }
          .delay-600 { transition-delay: 600ms; }
        }
      `}</style>
    </div>
  );
};

const ContactItem = ({ contact, isActive }) => {
  return (
    <div 
      className="group relative py-4 border-b-2 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
      style={{ 
        borderColor: isActive ? contact.color : 'rgba(171, 209, 198, 0.3)'
      }}
    >
      {/* Left side - Icon and Label */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {/* Icon */}
        <div 
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative flex-shrink-0"
          style={{ 
            backgroundColor: isActive ? contact.color : 'transparent',
            border: `2px solid ${contact.color}`,
            boxShadow: isActive ? `0 0 30px ${contact.color}60` : 'none'
          }}
        >
          {contact.icon}
        </div>

        {/* Title and Value */}
        <div className="min-w-0 flex-1">
          <p 
            className="text-xs sm:text-sm font-bold tracking-widest mb-1 sm:mb-2"
            style={{ color: contact.color }}
          >
            {contact.label}
          </p>
          <h3 
            className="text-base sm:text-lg md:text-2xl lg:text-2xl font-black tracking-tight transition-colors duration-300"
            style={{ 
              color: isActive ? '#E8E4E6' : '#ABD1C6'
            }}
          >
            {contact.title}
          </h3>
        </div>
      </div>

      {/* Right side - Value */}
      <div className="text-left sm:text-right pl-14 sm:pl-0 min-w-0 flex-shrink-0 w-full sm:w-auto">
        <p 
          className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold transition-all duration-300 break-all sm:break-normal"
          style={{ 
            color: isActive ? contact.color : '#E8E4E6',
            opacity: isActive ? 1 : 0.7
          }}
        >
          {contact.value}
        </p>
      </div>

      {/* Hover line accent */}
      <div 
        className="absolute left-0 top-0 h-full w-1 rounded-full transition-all duration-500"
        style={{ 
          backgroundColor: contact.color,
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'scaleY(1)' : 'scaleY(0)',
          boxShadow: isActive ? `0 0 20px ${contact.color}80` : 'none'
        }}
      ></div>
    </div>
  );
};

export default Contact;