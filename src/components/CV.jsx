import React from 'react'
import './CV.css'

const CV = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}Srikar_Girijala_Resume_2026.pdf`

  return (
    <section id="cv" className="section cv">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="cv-content">
          <div className="cv-card">
            <div className="cv-card-icon">📄</div>
            <h3 className="cv-card-title">Download My Resume</h3>
            <p className="cv-card-description">View my professional experience and qualifications</p>
            <a
              href={resumeUrl}
              className="btn btn-primary"
              download="Srikar_Girijala_Resume_2026.pdf"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV

