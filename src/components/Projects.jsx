import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Project Title',
      description: 'A brief description of the project, highlighting key features and technologies used.',
      tech: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Project Title',
      description: 'A brief description of the project, highlighting key features and technologies used.',
      tech: ['Python', 'Flask', 'PostgreSQL'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Project Title',
      description: 'A brief description of the project, highlighting key features and technologies used.',
      tech: ['JavaScript', 'CSS3', 'API'],
      demoLink: '#',
      githubLink: '#'
    }
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A selection of my recent work</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Project {index + 1}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

