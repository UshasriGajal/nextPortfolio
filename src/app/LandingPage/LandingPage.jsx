import React from 'react'
import Herosection from '../components/Herosection/Herosection'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Contact from '../components/Contact/Contact'
import Projects from '../components/Projects/Projects'
import Experience from '../components/Experience/Experience'
import Scrolling from '../components/Scrolling/Scrolling'

const LandingPage = () => {
  return (
    <div 
      className="landing-scroll-container"
      style={{ 
        background: 'linear-gradient(to bottom right, #0F2027, #203A43, #2C5364)',
        height: '100vh',
        overflowY: 'auto',
        scrollBehavior: 'smooth'
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
      
      
      <div id="contact">
        <Contact/>
      </div>
    </div>
  )
}

export default LandingPage