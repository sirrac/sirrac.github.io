import React from 'react'
import './About.css'

const About = () => {
  const skills = [
    'JavaScript',
    'Python',
    'React',
    'Node.js',
    'HTML/CSS',
    'Git',
    'SQL',
    'TypeScript',
    'C/C++',
    'R', 
    'MongoDB',
    'PostgreSQL',
    'ReactJS', 
    
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              I'm a third year student at the University of Illinois at Urbana-Champaign, pursuing a degree in Computer Science and Statistics.
            </p>
            <p className="about-cta">
              Check below for a sample of some of my work!
            </p>
            <div className="skills">
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

