'use client'
import React, { useState, useEffect } from 'react'
import Herosection from '../components/Herosection/Herosection'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Contact from '../components/Contact/Contact'
import Projects from '../components/Projects/Projects'
import Experience from '../components/Experience/Experience'
import Scrolling from '../components/Scrolling/Scrolling'

const LandingPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.landing-scroll-container');
    
    const handleScroll = () => {
      if (container.scrollTop > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const container = document.querySelector('.landing-scroll-container');
    container?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="landing-scroll-container"
      style={{ 
        background: 'linear-gradient(to bottom right, #0F2027, #203A43, #2C5364)',
        height: '100vh',
        overflowY: 'auto',
        scrollBehavior: 'smooth',
        position: 'relative'
      }}
    >
      <div id="home">
        <Herosection/>
      </div>
      
      <div id="about">
        <About/>
      </div>
      
      <Scrolling/>
      
      <div id="skills">
        <Skills/>
      </div>
      
      <div id="experience">
        <Experience/>
      </div>
      
      <div id="projects">
        <Projects/>
      </div>
      
      <div id="contact">
        <Contact/>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top-btn ${showScrollTop ? 'show' : ''}`}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ABD1C6 0%, #F9BC60 100%)',
          border: '2px solid rgba(171, 209, 198, 0.5)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(171, 209, 198, 0.4)',
          transition: 'all 0.3s ease',
          opacity: showScrollTop ? '1' : '0',
          visibility: showScrollTop ? 'visible' : 'hidden',
          transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)',
          zIndex: 1000
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}

export default LandingPage