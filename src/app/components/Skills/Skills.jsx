"use client";
import React, { useState, useEffect, useRef } from "react";
import html from "../../../assets/HTML5_Badge.png";
import next from "../../../assets/nextjs-white-icon.png";
import react from "../../../assets/React-icon.png";
import javaScript from "../../../assets/javascript-seeklogo.com.svg";
import tailwind from "../../../assets/Tailwind_CSS.png";
import css from "../../../assets/logo-css.png";
import bootstrap from "../../../assets/Bootstrap_logo.svg.png";
import github from "../../../assets/github.png";
import node from "../../../assets/node-icon.png";

import Image from "next/image";
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
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

  const skillsData = [
    { name: "Next.js", icon: next, color: "#F9BC60" },
    { name: "React.js", icon: react, color: "#ABD1C6" },
    { name: "JavaScript (ES6+)", icon: javaScript, color: "#F9BC60" },
    { name: "Node/Express", icon: node, color: "#ABD1C6" },
    { name: "Tailwind", icon: tailwind, color: "#F9BC60" },
    { name: "HTML", icon: html, color: "#ABD1C6" },
    { name: "CSS", icon: css, color: "#F9BC60" },
    { name: "Bootstrap", icon: bootstrap, color: "#ABD1C6" },
    { name: "Git", icon: github, color: "#ABD1C6" },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden py-20 px-6"
      
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          style={{ backgroundColor: "#004643" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
          style={{ backgroundColor: "#F9BC60" }}
        ></div>
        <div
          className="absolute bottom-20 left-40 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
          style={{ backgroundColor: "#ABD1C6" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              backgroundImage: "linear-gradient(to right, #F9BC60, #ABD1C6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Skills and Abilities
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={` transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative  rounded-xl p-6 transform transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4">
                  {/* Icon Placeholder */}
                  <Image
  src={skill.icon}
  alt={skill.name}
  width={56}
  height={56}
  className="rounded-lg flex items-center  justify-center text-2xl transition-all duration-300 "
  style={{ 
    
    transform: hoveredSkill === index ? 'rotate(10deg) scale(1.1)' : 'rotate(0deg) scale(1)',
  }}
/>

                  {/* Skill Name */}
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "#E8E4E6" }}
                    >
                      {skill.name}
                    </h3>
                    <div
                      className="h-1 mt-2 rounded-full transition-all duration-300 md:duration-500"
                      style={{
                        width: hoveredSkill === index ? "100%" : "60%",
                        background: `linear-gradient(to right, ${skill.color}, transparent)`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Decorative Elements */}
        <div
          className="absolute top-32 right-16 w-16 h-16 rounded-lg opacity-30 animate-float blur-sm"
          style={{
            background: "linear-gradient(to bottom right, #F9BC60, #ABD1C6)",
          }}
        ></div>
        <div
          className="absolute bottom-32 left-16 w-12 h-12 rounded-full opacity-30 animate-float animation-delay-2000 blur-sm"
          style={{
            background: "linear-gradient(to bottom right, #ABD1C6, #004643)",
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
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

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(232, 228, 230, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(232, 228, 230, 0.1) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default Skills;