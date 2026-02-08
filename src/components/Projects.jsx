import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Paper Processor LLM',
      description: 'Leveraging NLP models to summarize academic papers and generate insights, knowledge graphs, and visualizations.',
      tech: ['NLP', 'scikit-learn', 'sentence-transformers', 'Python'],
      githubLink: 'https://github.com/sirrac/PaperProcessor'
    },
    {
      title: 'UIUC Amenity Ranker',
      description: 'Ranking the quality of amenities at the University of Illinois at Urbana-Champaign. Uses Python, React.js, PostgreSQL, FastAPI.',
      tech: ['Python', 'React.js', 'PostgreSQL', 'FastAPI'],
      githubLink: 'https://github.com/sirrac/PaperProcessor'
    },
    {
      title: 'Chip-8 Emulator',
      description: 'Emulating the Chip-8 architecture with C++.',
      tech: ['C++'],
      githubLink: 'https://github.com/sirrac/Chip8-Emulator'
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

