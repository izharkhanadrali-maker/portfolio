import React, { useState } from 'react';

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      type: 'work',
      title: 'AI/ML Engineer',
      company: 'STEMETA AI, Islamabad',
      duration: 'Sep 2025 – Present',
      description:
        'Working as a full-time AI/ML Engineer, contributing to the development of intelligent systems and production-grade ML pipelines. Responsible for model development, optimization, evaluation, and deployment for real-world AI applications.',
      skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'Model Deployment'],
      details: {
        fullDescription: 'At STEMETA AI, I work on cutting-edge AI/ML solutions for enterprise clients. My responsibilities include developing machine learning models from scratch, optimizing existing models for production environments, and deploying scalable ML pipelines.',
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Docker', 'Kubernetes'],
        tools: ['Jupyter Notebooks', 'Git', 'MLflow', 'Weights & Biases'],
        achievements: ['Deployed 3+ production ML models', 'Improved model accuracy by 15%', 'Reduced inference time by 40%']
      }
    },
    {
      type: 'work',
      title: 'AI/ML Engineer (Project Collaboration)',
      company: 'National Centre of Physics (NCP), Islamabad',
      duration: 'Mar 2025 – May 2025',
      description:
        'Collaborated with NCP on an industrial project as part of Final Year Project. Developed a federated learning-based short-term energy load forecasting system. Performed model training, evaluation, real-time data simulation, and Dockerized deployment.',
      skills: ['Federated Learning', 'Python', 'TensorFlow', 'Docker', 'Time-Series Forecasting'],
      details: {
        fullDescription: 'Developed a federated learning system for energy load forecasting that maintains data privacy while achieving high prediction accuracy. The system processes real-time data from multiple sources and provides forecasts for grid management.',
        technologies: ['Python', 'TensorFlow', 'Federated Learning', 'Time-Series Analysis', 'Docker'],
        tools: ['Pandas', 'NumPy', 'Matplotlib', 'Git', 'Docker Compose'],
        achievements: ['Achieved 92% forecast accuracy', 'Implemented privacy-preserving ML', 'Reduced training time by 60%']
      }
    },
    {
      type: 'work',
      title: 'AI/ML Engineer (Intern)',
      company: 'InterDev Pvt Ltd, Pune (Remote)',
      duration: 'Aug 2024 – Sep 2024',
      description:
        'Worked on ML models for structured datasets and a deep learning system for video-based sports classification. Contributed to model optimization, evaluation, and collaborative development workflows.',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'OpenCV', 'TensorFlow'],
      details: {
        fullDescription: 'During this internship, I worked on diverse ML projects including structured data analysis and computer vision tasks. Built and optimized deep learning models for video classification achieving real-time inference.',
        technologies: ['Python', 'TensorFlow', 'OpenCV', 'Computer Vision', 'LSTM'],
        tools: ['Jupyter', 'Git', 'FFmpeg', 'Scikit-learn'],
        achievements: ['Built sports classification model with 88% accuracy', 'Optimized inference speed to real-time', 'Contributed to 2 production models']
      }
    },
    {
      type: 'work',
      title: 'Frontend Developer (Intern)',
      company: 'Xtremesoft, Peshawar',
      duration: 'Jul 2022 – Aug 2022',
      description:
        'Developed responsive user interfaces using HTML, CSS, and Bootstrap. Improved UI consistency, fixed bugs, and contributed to frontend–backend integration using Firebase.',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Firebase'],
      details: {
        fullDescription: 'Built responsive web interfaces following modern design principles. Collaborated with backend developers to integrate APIs and improve user experience. Maintained code quality through version control and peer reviews.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Firebase'],
        tools: ['Git', 'VS Code', 'Chrome DevTools', 'Figma'],
        achievements: ['Created 5+ responsive components', 'Improved page load time by 35%', 'Fixed 20+ UI bugs']
      }
    }
  ];

  return (
    <div className="page-container">
      <h1 data-aos="fade-up">Professional <span className="highlight">Experience</span></h1>
      <p className="page-lead" data-aos="fade-up" data-aos-delay="60">
        My journey in AI/ML and software development with a focus on building intelligent systems.
      </p>

      <div className="experience-cert-container">
        <div className="experience-side" data-aos="fade-right">
          <h2 className="section-title">
            <i className="fas fa-briefcase"></i> Work Experience
          </h2>
          <div className="cert-timeline">
            {experiences.map((item, idx) => (
              <div
                key={idx}
                className="cert-item experience-item"
                data-aos="fade-up"
                onClick={() => setSelectedExperience(selectedExperience === idx ? null : idx)}
                style={{ cursor: 'pointer' }}
              >
                <div className="cert-marker"></div>
                <div className="cert-card" style={{ transition: 'all 0.3s ease' }}>
                  <div className="cert-badge">💼</div>
                  <h3>{item.title}</h3>
                  <p className="cert-issuer">{item.company}</p>
                  <p className="cert-year">{item.duration}</p>
                  <p className="cert-description">{item.description}</p>
                  
                  {item.skills && (
                    <div className="cert-skills" style={{ marginTop: '1rem' }}>
                      {item.skills.map((skill, i) => (
                        <span key={i} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  )}

                  {selectedExperience === idx && item.details && (
                    <div className="expanded-details" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0, 217, 255, 0.2)' }}>
                      <p className="detail-text">{item.details.fullDescription}</p>
                      
                      <div className="detail-section">
                        <h4>Technologies</h4>
                        <div className="detail-tags">
                          {item.details.technologies.map((tech, i) => (
                            <span key={i} className="detail-tag">{tech}</span>
                          ))}
                        </div>
                      </div>

                      <div className="detail-section">
                        <h4>Tools</h4>
                        <div className="detail-tags">
                          {item.details.tools.map((tool, i) => (
                            <span key={i} className="detail-tag">{tool}</span>
                          ))}
                        </div>
                      </div>

                      <div className="detail-section">
                        <h4>Key Achievements</h4>
                        <ul className="achievement-list">
                          {item.details.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div style={{ textAlign: 'center', marginTop: selectedExperience === idx ? '1rem' : '0', fontSize: '0.85rem', color: 'rgba(0, 217, 255, 0.6)' }}>
                    {selectedExperience === idx ? '▲ Click to collapse' : '▼ Click for details'}
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

export default Experience;
