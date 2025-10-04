'use client'
import React, { useState, useEffect } from 'react';
import myimage from '../../../assets/myImage.jpeg'
import Image from 'next/image';
const Herosection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typedName, setTypedName] = useState('');
  const [showTagline, setShowTagline] = useState(false);
  const words = ['Web Development', 'Problem Solving', 'Innovation'];
  
  const greetingText = "Hey There!!";
  const nameText = "Ushasri Gajal";

  useEffect(() => {
    setIsVisible(true);
    
    // Typing effect for greeting
    let greetingIndex = 0;
    const greetingInterval = setInterval(() => {
      if (greetingIndex <= greetingText.length) {
        setTypedText(greetingText.slice(0, greetingIndex));
        greetingIndex++;
      } else {
        clearInterval(greetingInterval);
        // Start typing name after greeting is done
        setTimeout(() => {
          let nameIndex = 0;
          const nameInterval = setInterval(() => {
            if (nameIndex <= nameText.length) {
              setTypedName(nameText.slice(0, nameIndex));
              nameIndex++;
            } else {
              clearInterval(nameInterval);
              // Show tagline after name is done
              setTimeout(() => setShowTagline(true), 300);
            }
          }, 100);
        }, 300);
      }
    }, 100);

    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(greetingInterval);
      clearInterval(wordInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = ['ABOUT', 'SKILLS', 'RESUME', 'PROJECTS', 'CONTACT'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 bg-opacity-95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                Ushasri Gajal
              </h1>
              <p className="text-sm text-gray-400 italic">Full-Stack Developer</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white font-medium relative group transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white focus:outline-none"
            >
              <div className="space-y-2">
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-4 pb-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 rounded-lg px-4 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left side - Image placeholder */}
        <div className={`lg:w-1/3 mb-12 ml-3 lg:mb-0 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="relative">
            {/* Decorative elements around image */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-pink-500 rounded-tl-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-purple-500 rounded-br-3xl"></div>
            
            {/* Image placeholder with gradient */}
            <div className="relative w-80 h-90 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl overflow-hidden group">
              <div className="absolute inset-0  group-hover:opacity-0 transition-opacity duration-300"></div>
              <Image src={myimage} alt='myimage'></Image>
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-purple-500 transition-all duration-300"></div>
            </div>

            

            {/* Floating elements */}
            <div className="absolute -right-4 top-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg animate-float"></div>
            <div className="absolute -left-4 bottom-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-lg animate-float animation-delay-2000"></div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className={`lg:w-2/3 lg:pl-12 mt-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          {/* Greeting */}
          <div className="mb-3 overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient-x">
              {typedText}
              {typedText.length < greetingText.length && (
                <span className="animate-blink">|</span>
              )}
            </h2>
          </div>

          {/* Name introduction */}
          <div className="mb-2 space-y-2">
            {typedText.length === greetingText.length && (
              <>
                <p className="text-2xl text-pink-300 font-light italic animate-fade-in">I'm</p>
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {typedName}
                  {typedName.length < nameText.length && (
                    <span className="animate-blink">|</span>
                  )}
                </h1>
              </>
            )}
          </div>

          {/* Animated tagline */}
          {showTagline && (
            <div className="mb-8 h-20 flex items-center animate-fade-in">
              <p className="text-2xl md:text-3xl text-gray-200 font-light">
                I'm into{' '}
                <span className="inline-block min-w-[300px]">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">
                    {words[currentWord]}
                  </span>
                </span>
              </p>
            </div>
          )}

          {/* Description */}
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
            <p className="transform hover:translate-x-2 transition-transform duration-300">
              I am a{' '}
              <span className="font-bold text-white">Full-Stack developer</span>{' '}
              with knowledge in{' '}
              <span className="text-purple-400 font-semibold">HTML, CSS, JAVASCRIPT, Bootstrap, React js</span>{' '}
              from Tirupati, India.
            </p>
            {/* <p className="transform hover:translate-x-2 transition-transform duration-300">
              I am an{' '}
              <span className="font-bold text-white">Information Technology</span>{' '}
              undergraduate from{' '}
              <span className="text-pink-400 font-semibold">SVCE</span>. I am very passionate about improving my coding skills & developing applications & websites.
            </p> */}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-purple-700 hover:to-pink-700">
              View My Work
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>

          {/* Floating tech icons */}
          <div className="mt-12 flex gap-4 flex-wrap">
            {['HTML', 'CSS', 'JS', 'React', 'Bootstrap'].map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-opacity-20 transform hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
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
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-blink {
          animation: blink 2s infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default Herosection;