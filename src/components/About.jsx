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
    'TypeScript'
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              I'm a passionate software developer with a love for creating elegant solutions to complex problems.
            </p>
            <p>
              With a strong foundation in software development, I enjoy building applications that are both functional and user-friendly. 
              I'm constantly learning new technologies and methodologies to stay at the forefront of the industry.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or working on personal projects that challenge my skills.
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

