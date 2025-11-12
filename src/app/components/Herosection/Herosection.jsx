"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import myImage from "../../../assets/myImage.jpeg";

const Herosection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typedName, setTypedName] = useState("");
  const [showTagline, setShowTagline] = useState(false);
  const words = ["Web Development", "Problem Solving", "Innovation"];

  const greetingText = "Hey There!!";
  const nameText = "Ushasri Gajal";

  useEffect(() => {
    setIsVisible(true);

    let greetingIndex = 0;
    const greetingInterval = setInterval(() => {
      if (greetingIndex <= greetingText.length) {
        setTypedText(greetingText.slice(0, greetingIndex));
        greetingIndex++;
      } else {
        clearInterval(greetingInterval);
        setTimeout(() => {
          let nameIndex = 0;
          const nameInterval = setInterval(() => {
            if (nameIndex <= nameText.length) {
              setTypedName(nameText.slice(0, nameIndex));
              nameIndex++;
            } else {
              clearInterval(nameInterval);
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
      const scrollContainer = document.querySelector(
        ".landing-scroll-container"
      );
      if (scrollContainer) {
        setScrolled(scrollContainer.scrollTop > 20);
      }
    };

    const scrollContainer = document.querySelector(".landing-scroll-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      clearInterval(greetingInterval);
      clearInterval(wordInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(targetId);
    const scrollContainer = document.querySelector(".landing-scroll-container");

    if (element && scrollContainer) {
      const elementPosition = element.offsetTop;
      const navHeight = 80;

      scrollContainer.scrollTo({
        top: elementPosition - navHeight,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { name: "ABOUT", id: "about" },
    { name: "SKILLS", id: "skills" },
    {
      name: "RESUME",
      external: true,
      link: "https://drive.google.com/file/d/1mMHLzcxPSMrptPZAFG9tPHp7rTWtqi-5/view?usp=sharing",
    },
    { name: "PROJECTS", id: "experience" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden transition-opacity duration-300"
          style={{
            backgroundColor: "rgba(0, 30, 29, 0.95)",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen ? "shadow-lg" : "bg-transparent"
        }`}
        style={{
          backgroundColor: scrolled || mobileMenuOpen ? "rgba(0, 70, 67, 0.95)" : "transparent",
          backdropFilter: scrolled || mobileMenuOpen ? "blur(12px)" : "none",
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex flex-col cursor-pointer"
              onClick={(e) => handleNavClick(e, "home")}
            >
              <h1
                className="text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300"
                style={{ color: "#E8E4E6" }}
              >
                Ushasri Gajal
              </h1>
              <p className="text-sm italic" style={{ color: "#ABD1C6" }}>
                Full-Stack Developer
              </p>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    if (item.external) {
                      e.preventDefault();
                      window.open(item.link, "_blank");
                    } else {
                      handleNavClick(e, item.id);
                    }
                  }}
                  className="font-medium relative group transition-colors duration-300"
                  style={{
                    color: "#ABD1C6",
                    animationDelay: `${index * 100}ms`,
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#E8E4E6")}
                  onMouseLeave={(e) => (e.target.style.color = "#ABD1C6")}
                >
                  {item.name}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{
                      background: "linear-gradient(to right, #ABD1C6, #F9BC60)",
                    }}
                  ></span>
                </a>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden focus:outline-none"
              style={{ color: "#E8E4E6" }}
            >
              <div className="space-y-2">
                <span
                  className={`block w-8 h-0.5 transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                  style={{ backgroundColor: "#E8E4E6" }}
                ></span>
                <span
                  className={`block w-8 h-0.5 transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                  style={{ backgroundColor: "#E8E4E6" }}
                ></span>
                <span
                  className={`block w-8 h-0.5 transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                  style={{ backgroundColor: "#E8E4E6" }}
                ></span>
              </div>
            </button>
          </div>

          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              mobileMenuOpen ? "max-h-96 mt-6" : "max-h-0"
            }`}
          >
            <div className="flex flex-col space-y-4 pb-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    if (item.external) {
                      e.preventDefault();
                      window.open(item.link, "_blank");
                    } else {
                      handleNavClick(e, item.id);
                    }
                  }}
                  className="font-medium py-2 rounded-lg px-4 transition-all duration-300"
                  style={{ color: "#ABD1C6" }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#E8E4E6";
                    e.target.style.backgroundColor = "rgba(232, 228, 230, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ABD1C6";
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content - Added proper padding for mobile */}
      <div className="relative z-10 container mx-auto px-6 pt-32 md:pt-28 lg:pt-16 pb-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        <div
          className={`lg:w-1/3 mb-12 ml-3 lg:mb-0 transition-all duration-1000 transform ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 rounded-tl-3xl"
              style={{ borderColor: "#F9BC60" }}
            ></div>
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 rounded-br-3xl"
              style={{ borderColor: "#ABD1C6" }}
            ></div>

            <div className="relative w-80 h-90 rounded-3xl shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300">
                <Image src={myImage} alt="Ushasri Gajal" />
              </div>
              <div
                className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-opacity-100 transition-all duration-300"
                style={{ borderColor: "#004643" }}
              ></div>
            </div>

            <div
              className="absolute -right-4 top-1/4 w-16 h-16 rounded-lg shadow-lg animate-float"
              style={{
                background:
                  "linear-gradient(to bottom right, #F9BC60, #ABD1C6)",
              }}
            ></div>
            <div
              className="absolute -left-4 bottom-1/4 w-12 h-12 rounded-full shadow-lg animate-float animation-delay-2000"
              style={{
                background:
                  "linear-gradient(to bottom right, #ABD1C6, #004643)",
              }}
            ></div>
          </div>
        </div>

        <div
          className={`lg:w-2/3 lg:pl-12 mt-12 transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <div className="mb-3 overflow-hidden">
            <h2
              className="text-4xl md:text-5xl font-bold animate-gradient-x"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #F9BC60, #ABD1C6, #004643)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {typedText}
              {typedText.length < greetingText.length && (
                <span className="animate-blink">|</span>
              )}
            </h2>
          </div>

          <div className="mb-2 space-y-2">
            {typedText.length === greetingText.length && (
              <>
                <p
                  className="text-2xl font-light italic animate-fade-in"
                  style={{ color: "#F9BC60" }}
                >
                  I'm
                </p>
                <h1
                  className="text-3xl md:text-4xl font-bold tracking-tight"
                  style={{ color: "#E8E4E6" }}
                >
                  {typedName}
                  {typedName.length < nameText.length && (
                    <span className="animate-blink">|</span>
                  )}
                </h1>
              </>
            )}
          </div>

          {showTagline && (
            <div className="mb-8 h-20 flex items-center animate-fade-in">
              <p
                className="text-2xl md:text-3xl font-light"
                style={{ color: "#E8E4E6" }}
              >
                I'm into{" "}
                <span className="inline-block min-w-[300px]">
                  <span
                    className="font-bold animate-pulse"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #ABD1C6, #F9BC60)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {words[currentWord]}
                  </span>
                </span>
              </p>
            </div>
          )}

          <div
            className="space-y-4 text-lg leading-relaxed mb-8"
            style={{ color: "#ABD1C6" }}
          >
            <p className="transform hover:translate-x-2 transition-transform duration-300">
              I am a{" "}
              <span className="font-bold" style={{ color: "#E8E4E6" }}>
                Full-Stack developer
              </span>{" "}
              with knowledge in{" "}
              <span className="font-semibold" style={{ color: "#F9BC60" }}>
                HTML, CSS, JAVASCRIPT, Bootstrap, React js
              </span>{" "}
              from Hyderabad, India.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              className="px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{
                background: "linear-gradient(to right, #004643, #ABD1C6)",
                color: "#E8E4E6",
              }}
              onClick={(e) => handleNavClick(e, "experience")}
              onMouseEnter={(e) =>
                (e.target.style.background =
                  "linear-gradient(to right, #003632, #9BC1B5)")
              }
              onMouseLeave={(e) =>
                (e.target.style.background =
                  "linear-gradient(to right, #004643, #ABD1C6)")
              }
            >
              View My Work
            </button>
            <button
              className="px-8 py-4 bg-transparent border-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
              style={{
                borderColor: "#ABD1C6",
                color: "#ABD1C6",
              }}
              onClick={(e) => handleNavClick(e, "contact")}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#ABD1C6";
                e.target.style.color = "#001E1D";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#ABD1C6";
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

export default Herosection;