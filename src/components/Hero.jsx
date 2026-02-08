import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="name">Srikar Girijala</span>
        </h1>
        <p className="hero-subtitle">Computer Science student at UIUC</p>
        <div className="hero-buttons">
          <button onClick={scrollToProjects} className="btn btn-primary">View My Work</button>
          <button onClick={scrollToContact} className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero-social">
          <a href="https://www.linkedin.com/in/srikar-girijala-9b70ba24a/" target="_blank" rel="noopener noreferrer" className="btn btn-social">
            LinkedIn
          </a>
          <a href="https://github.com/sirrac" target="_blank" rel="noopener noreferrer" className="btn btn-social">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

