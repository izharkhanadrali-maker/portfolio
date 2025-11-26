import React, { useState } from 'react';

function EducationCertification() {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  const education = [
    {
      type: 'education',
      title: 'Bachelor of Science in Artificial Intelligence',
      institution: 'Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology (PAF-IAST)',
      year: '2021 – 2025',
      gpa: '3.19/4.0',
      description: 'Final Year Project: Short-Term Load Forecasting Using Federated Learning.',
      details: {
        location: 'Islamabad, Pakistan',
        coursework: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Federated Learning', 'Data Science'],
        finalProject: 'Short-Term Load Forecasting Using Federated Learning - A privacy-preserving machine learning approach for energy consumption prediction',
        highlights: ['CGPA: 3.19/4.0', 'Final Year Project: Distinction', 'Active in AI/ML research']
      }
    },
    {
      type: 'education',
      title: 'Higher Secondary School Certificate (HSSC)',
      institution: 'BISE Swat',
      year: '2018 – 2020',
      gpa: '85%',
      description: 'Completed pre-medical coursework with strong academic performance.',
      details: {
        location: 'Swat, Pakistan',
        subjects: ['Physics', 'Chemistry', 'Biology', 'English', 'Urdu', 'Islamic Studies'],
        highlights: ['Aggregate: 85%', 'Physics: 93', 'Chemistry: 88', 'Biology: 82']
      }
    }
  ];

  const certifications = [
    {
      type: 'certification',
      title: 'AI For Everyone',
      issuer: 'DeepLearning.AI — Coursera',
      year: '2025',
      credentialId: '',
      description: 'Completed with 86.50% grade. Gained strong understanding of AI/ML concepts, deep learning basics, AI strategy, data ethics, and how AI impacts modern organizations.',
      details: {
        duration: '4 weeks',
        skills: ['AI Fundamentals', 'Machine Learning Basics', 'Deep Learning Intro', 'AI Strategy', 'Data Ethics'],
        certificateLink: 'https://coursera.org'
      }
    },
    {
      type: 'certification',
      title: 'Programming for Everybody (Getting Started with Python)',
      issuer: 'University of Michigan — Coursera',
      year: '2023',
      credentialId: '',
      description: 'Completed with a 100% grade. Built solid foundations in Python programming, including variables, loops, functions, problem-solving, and computational thinking.',
      details: {
        duration: '8 weeks',
        skills: ['Python Basics', 'Variables & Data Types', 'Control Flow', 'Functions', 'File Handling'],
        certificateLink: 'https://coursera.org'
      }
    },
    {
      type: 'certification',
      title: 'Internship Completion Certificate — AI & Machine Learning',
      issuer: 'InterDev Pvt Ltd',
      year: '2024',
      credentialId: '',
      description: 'Completed a 2-month internship focused on building ML models, working with real datasets, and applying machine learning techniques to practical problems.',
      details: {
        duration: '2 months',
        skills: ['Model Development', 'Data Preprocessing', 'TensorFlow', 'Model Evaluation', 'Deployment'],
        projects: ['Sports Video Classification', 'Time Series Analysis']
      }
    },
    {
      type: 'certification',
      title: 'Internship Completion Certificate — Frontend Development',
      issuer: 'Xtremesoft Peshawar',
      year: '2022',
      credentialId: '',
      description: 'Completed a frontend development internship involving modern UI development using HTML, CSS, and Bootstrap while collaborating in an agile environment.',
      details: {
        duration: '2 months',
        skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Firebase', 'Responsive Design'],
        projects: ['Responsive UI Components', 'Firebase Integration']
      }
    }
  ];


  return (
    <div className="page-container">
      <h1 data-aos="fade-up">My <span className="highlight">Academia</span></h1>
      <p className="page-lead" data-aos="fade-up" data-aos-delay="60">
        My academic background and professional certifications in AI, Machine Learning, and Frontend Development.
      </p>

      <div className="education-cert-container">
        {/* Education Side */}
        <div className="education-side" data-aos="fade-right">
          <h2 className="section-title">
            <i className="fas fa-graduation-cap"></i> Education
          </h2>
          <div className="cert-timeline">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="cert-item education-item"
                data-aos="fade-up"
                onClick={() => setSelectedEducation(selectedEducation === idx ? null : idx)}
                style={{ cursor: 'pointer' }}
              >
                <div className="cert-marker"></div>
                <div className="cert-card" style={{ transition: 'all 0.3s ease' }}>
                  <div className="cert-badge">🎓</div>
                  <h3>{item.title}</h3>
                  <p className="cert-issuer">{item.institution}</p>
                  <p className="cert-year">{item.year}</p>
                  {item.gpa && <p className="cert-gpa">GPA: {item.gpa}</p>}
                  <p className="cert-description">{item.description}</p>

                  {selectedEducation === idx && item.details && (
                    <div className="expanded-details" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0, 217, 255, 0.2)' }}>
                      {item.details.location && <p className="detail-text"><strong>Location:</strong> {item.details.location}</p>}
                      
                      {item.details.coursework && (
                        <div className="detail-section">
                          <h4>Key Coursework</h4>
                          <div className="detail-tags">
                            {item.details.coursework.map((course, i) => (
                              <span key={i} className="detail-tag">{course}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.details.subjects && (
                        <div className="detail-section">
                          <h4>Subjects</h4>
                          <div className="detail-tags">
                            {item.details.subjects.map((subject, i) => (
                              <span key={i} className="detail-tag">{subject}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.details.finalProject && (
                        <div className="detail-section">
                          <h4>Final Year Project</h4>
                          <p className="detail-text">{item.details.finalProject}</p>
                        </div>
                      )}

                      {item.details.highlights && (
                        <div className="detail-section">
                          <h4>Highlights</h4>
                          <ul className="achievement-list">
                            {item.details.highlights.map((highlight, i) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  <div style={{ textAlign: 'center', marginTop: selectedEducation === idx ? '1rem' : '0', fontSize: '0.85rem', color: 'rgba(0, 217, 255, 0.6)' }}>
                    {selectedEducation === idx ? '▲ Click to collapse' : '▼ Click for details'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Side */}
        <div className="certifications-side" data-aos="fade-left">
          <h2 className="section-title">
            <i className="fas fa-certificate"></i> Certifications
          </h2>
          <div className="cert-timeline">
            {certifications.map((item, idx) => (
              <div
                key={idx}
                className="cert-item certification-item"
                data-aos="fade-up"
                onClick={() => setSelectedCert(selectedCert === idx ? null : idx)}
                style={{ cursor: 'pointer' }}
              >
                <div className="cert-marker"></div>
                <div className="cert-card" style={{ transition: 'all 0.3s ease' }}>
                  <div className="cert-badge">📜</div>
                  <h3>{item.title}</h3>
                  <p className="cert-issuer">{item.issuer}</p>
                  <p className="cert-year">{item.year}</p>
                  {item.credentialId && <p className="cert-id">ID: {item.credentialId}</p>}
                  <p className="cert-description">{item.description}</p>

                  {selectedCert === idx && item.details && (
                    <div className="expanded-details" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0, 217, 255, 0.2)' }}>
                      {item.details.duration && <p className="detail-text"><strong>Duration:</strong> {item.details.duration}</p>}
                      
                      {item.details.skills && (
                        <div className="detail-section">
                          <h4>Skills Gained</h4>
                          <div className="detail-tags">
                            {item.details.skills.map((skill, i) => (
                              <span key={i} className="detail-tag">{skill}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.details.projects && (
                        <div className="detail-section">
                          <h4>Projects</h4>
                          <ul className="achievement-list">
                            {item.details.projects.map((project, i) => (
                              <li key={i}>{project}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.details.certificateLink && (
                        <a href={item.details.certificateLink} target="_blank" rel="noreferrer" className="detail-link" style={{ display: 'inline-block', marginTop: '0.5rem', color: '#00d9ff' }}>
                          View Certificate →
                        </a>
                      )}
                    </div>
                  )}

                  <div style={{ textAlign: 'center', marginTop: selectedCert === idx ? '1rem' : '0', fontSize: '0.85rem', color: 'rgba(0, 217, 255, 0.6)' }}>
                    {selectedCert === idx ? '▲ Click to collapse' : '▼ Click for details'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationCertification;
