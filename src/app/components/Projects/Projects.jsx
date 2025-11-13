'use client'
import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      name: 'Country Search App',
      tools: 'React.js, JavaScript, Bootstrap, RestAPI',
      description: 'This website provides the data of countries that we search and it also has the filter option and dark mode with responsiveness.',
      links: 'https://country-search-jeeoic2go-ushasrigajals-projects.vercel.app/',
      color: '#ABD1C6'
    },
    {
      id: 2,
      name: 'Movie API',
      tools: 'JavaScript, Bootstrap, RestAPI, HTML, CSS',
      description: 'This website provides movie posters and information about the movie that we search for and also provides similar movie posters with a feature of adding favourite movies into a list with responsiveness.',
      links: 'https://ushasrigajal.github.io/MoviePosterApi/',
      color: '#F9BC60'
    },
    {
      id: 3,
      name: 'Typing Test',
      tools: 'JavaScript, HTML, CSS',
      description: 'This website provides the typing capacity of a person. It can be modified with time for 1min, 2mins or 5mins and it also has easy, medium and hard levels.',
      links: 'https://ushasrigajal.github.io/Typing_Test/',
      color: '#E16162'
    }
  ];

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen relative overflow-hidden" >
      
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full">
          <defs>
            <pattern id="mesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill={projects[selectedProject].color} opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Top Section - Project Selector */}
        <div className="flex-shrink-0 text-start md:text-center p-8 md:p-16">
          <h1 className="text-4xl md:text-4xl font-black mb-8" style={{ 
            color: projects[selectedProject].color,
            transition: 'color 0.5s ease'
          }}>
            PROJECTS
          </h1>
          
          {/* Project Navigation Tabs */}
          <div className="flex flex-wrap  gap-6">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className="group relative px-8 py-2 text-2xl md:text-3xl font-bold transition-all duration-500"
                style={{
                  color: selectedProject === index ? '#ffffff' : '#4a5568',
                  transform: selectedProject === index ? 'scale(1.1)' : 'scale(1)'
                }}
              >
                <span className="relative z-10">{project.name}</span>
                
                {/* Background bar */}
                <div 
                  className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                  style={{
                    width: selectedProject === index ? '100%' : '0%',
                    background: project.color
                  }}
                ></div>
                
                {/* Hover background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: project.color }}
                ></div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area - Fullscreen Display */}
        <div className="flex-1 flex  items-center justify-center p-4 md:py-0 md:px-10">
          <div className="w-full max-w-6xl">
            
            {/* Large Project Display */}
            <div className="relative">
              
              {/* Glowing Background Effect */}
              <div 
                className="absolute inset-0 blur-3xl opacity-20 rounded-full"
                style={{ 
                  background: projects[selectedProject].color,
                  transition: 'background 0.5s ease'
                }}
              ></div>

              {/* Content Container */}
              <div className="relative">
                
                {/* Project Description */}
                <div className="mb-10">
                  <p className="text-2xl md:text-2xl leading-relaxed text-gray-300 mb-8">
                    {projects[selectedProject].description}
                  </p>
                  
                  {/* Tech Stack Display */}
                  <div className="flex flex-wrap gap-4">
                    {projects[selectedProject].tools.split(',').map((tool, i) => (
                      <div 
                        key={i}
                        className="px-6 py-3 text-lg font-medium rounded-full transition-all duration-300"
                        style={{
                          background: `${projects[selectedProject].color}20`,
                          border: `2px solid ${projects[selectedProject].color}40`,
                          color: projects[selectedProject].color,
                          animation: `fadeInUp 0.5s ease ${i * 0.1}s both`
                        }}
                      >
                        {tool.trim()}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action Button */}
                <button
                  onClick={() => handleProjectClick(projects[selectedProject].links)}
                  className="group relative px-6 py-3 rounded-2xl text-xl font-bold overflow-hidden"
                  style={{
                    background: projects[selectedProject].color,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span className="relative z-10 flex items-center gap-4">
                    EXPLORE PROJECT
                    <svg 
                      className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  
                  {/* Button hover effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>

              </div>

              {/* Large Index Number */}
              <div 
                className="absolute -right-8 -bottom-8 text-[20rem] font-black leading-none opacity-5 pointer-events-none hidden lg:block"
                style={{ 
                  color: projects[selectedProject].color,
                  transition: 'color 0.5s ease'
                }}
              >
                0{selectedProject + 1}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Navigation - Project Indicators */}
        <div className="flex-shrink-0 p-5 md:py-2 px-16">
          <div className="flex items-center justify-between">
            
            {/* Progress Dots */}
            <div className="flex gap-4">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(index)}
                  className="relative transition-all duration-300"
                  style={{
                    width: selectedProject === index ? '60px' : '20px',
                    height: '15px',
                    borderRadius: '10px',
                    background: selectedProject === index ? project.color : '#2d3748',
                    boxShadow: selectedProject === index ? `0 0 20px ${project.color}80` : 'none'
                  }}
                >
                  <span className="sr-only">Project {index + 1}</span>
                </button>
              ))}
            </div>

            {/* Project Counter */}
            <div className="text-right">
              <div className="text-3xl font-black" style={{ color: projects[selectedProject].color }}>
                {String(selectedProject + 1).padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-500">
                / {String(projects.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;