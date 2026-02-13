import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">I'm always open to discussing new opportunities and interesting projects.</p>
        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a
                href="mailto:srikargirijala1@gmail.com"
                className="contact-link"
              >
                srikargirijala1@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/sirrac"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                github.com/sirrac
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/srikar-girijala-9b70ba24a/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                linkedin.com/in/srikar-girijala-9b70ba24a
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

