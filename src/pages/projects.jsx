import React, { useState } from 'react';

const ProjectItem = ({ p, idx, isSelected, onSelect }) => {
  const handleContainerClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Toggle: if selected, deselect; if not selected, select
    onSelect(isSelected ? null : idx);
  };

  const handleButtonClick = (e) => {
    // Prevent container toggle when clicking buttons
    e.stopPropagation();
  };

  return (
    <article 
      className="project-card" 
      data-aos="fade-up" 
      data-aos-delay={0}
      onClick={handleContainerClick}
      style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
    >
      <h3>{p.title}</h3>

      {/* Video - Always Visible */}
      {p.video ? (
        <div className="project-video">
          <iframe src={p.video} title={`${p.title} demo`} frameBorder="0" allowFullScreen></iframe>
        </div>
      ) : null}

      {/* Description - Short Intro by default */}
      <div className="project-desc" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
        <p style={{ margin: 0 }}>
          {p.desc}
        </p>
      </div>

      {/* Expanded Details */}
      {isSelected && p.details && (
        <div className="project-details" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0, 217, 255, 0.2)' }}>
          <div className="detail-section">
            <h4 style={{ marginBottom: '0.5rem' }}>Full Description</h4>
            <p style={{ opacity: 0.9 }}>{p.details.fullDescription}</p>
          </div>

          <div className="detail-section" style={{ marginTop: '1rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Technologies & Frameworks</h4>
            <div className="detail-tags">
              {p.details.technologies.map((tech, i) => (
                <span key={i} className="detail-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="detail-section" style={{ marginTop: '1rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Tools & Languages</h4>
            <div className="detail-tags">
              {p.details.tools.map((tool, i) => (
                <span key={i} className="detail-tag">{tool}</span>
              ))}
            </div>
          </div>

          {p.details.keyFeatures && (
            <div className="detail-section" style={{ marginTop: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Key Features</h4>
              <ul className="achievement-list">
                {p.details.keyFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {p.details.results && (
            <div className="detail-section" style={{ marginTop: '1rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Results & Impact</h4>
              <ul className="achievement-list">
                {p.details.results.map((result, i) => (
                  <li key={i}>{result}</li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'rgba(0, 217, 255, 0.6)' }}>
            ▲ Click to collapse
          </div>
        </div>
      )}

      {!isSelected && (
        <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'rgba(0, 217, 255, 0.6)' }}>
          ▼ Click for full details
        </div>
      )}

      {/* Action Buttons - Always Visible */}
      <div className="project-actions" style={{ marginTop: '1.5rem' }} onClick={handleButtonClick}>
        {p.live && p.live !== '#' ? (
          <a className="btn outline" href={p.live} target="_blank" rel="noreferrer">Live Demo</a>
        ) : null}

        {p.repo ? (
          <a className="btn" href={p.repo} target="_blank" rel="noreferrer"><i className="fab fa-github"></i> View Repo</a>
        ) : null}
      </div>
    </article>
  );
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Cleaned up titles (removed technical terms like CNN, LSTM, NLP)
  const projects = [
    {
      title: 'Energy Load Forecasting',
      desc: 'A federated learning-based energy load forecasting system developed in collaboration with the National Centre for Physics (NCP). Built using TensorFlow, with Dockerized deployment and real-time data simulation.',
      repo: 'https://github.com/izharadrali/Energy-consumption-analysis-and-prediction-using-Federated-Learning', 
      live: '',
      video: '',
      details: {
        fullDescription: 'This project implements a privacy-preserving federated learning system for predicting short-term energy load consumption. The system allows multiple organizations to collaboratively train a shared machine learning model without sharing raw data, ensuring data privacy and compliance with regulations.',
        technologies: ['Federated Learning', 'TensorFlow', 'Python', 'Time-Series Analysis', 'Docker'],
        tools: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Docker Compose'],
        keyFeatures: [
          'Privacy-preserving federated learning architecture',
          'Real-time data simulation for multiple sites',
          'Model aggregation across distributed clients',
          'Dockerized deployment for scalability',
          'Comprehensive performance metrics'
        ],
        results: [
          'Achieved 92% forecast accuracy',
          'Reduced data transmission by 95%',
          'Successfully demonstrated federated learning in production',
          'Final Year Project - Distinction Grade'
        ]
      }
    },
    {
      title: 'Sports Video Classification',
      desc: 'A deep learning system that classifies sports actions from video frames using CNNs for feature extraction and LSTMs for temporal modeling. Developed during my internship at InterDev.',
      repo: 'https://github.com/izharadrali', 
      live: '',
      video: '',
      details: {
        fullDescription: 'Developed a comprehensive deep learning pipeline for classifying sports actions in video footage. The system uses Convolutional Neural Networks (CNNs) to extract spatial features from individual frames and Long Short-Term Memory (LSTM) networks to model temporal dependencies across consecutive frames.',
        technologies: ['Deep Learning', 'Computer Vision', 'CNN', 'LSTM', 'TensorFlow', 'OpenCV'],
        tools: ['Python', 'NumPy', 'Pandas', 'FFmpeg', 'Jupyter Notebooks'],
        keyFeatures: [
          'CNN-LSTM architecture for video understanding',
          'Multi-class sports action classification',
          'Real-time video processing',
          'Data augmentation for improved robustness',
          'Model optimization for inference speed'
        ],
        results: [
          'Achieved 88% classification accuracy',
          'Real-time inference on standard hardware',
          'Successfully classified 10+ sports actions',
          'Internship completion with distinction'
        ]
      }
    },
    {
      title: 'Next Word Predictor',
      desc: 'An NLP-based next-word prediction model trained on custom datasets using LSTM layers. Includes preprocessing, tokenization, and custom sequence generation.',
      repo: 'https://github.com/izharadrali', 
      live: '',
      video: '',
      details: {
        fullDescription: 'Built a sophisticated next-word prediction model using recurrent neural networks. The system preprocesses text data, builds vocabulary, trains an LSTM model to learn language patterns, and generates contextually relevant next word predictions.',
        technologies: ['NLP', 'LSTM', 'Sequence-to-Sequence', 'TensorFlow', 'Python'],
        tools: ['NLTK', 'Keras', 'Pandas', 'Numpy', 'Jupyter'],
        keyFeatures: [
          'Custom LSTM architecture for language modeling',
          'Advanced text preprocessing and tokenization',
          'Vocabulary management and embedding',
          'Beam search for better predictions',
          'Model persistence and inference'
        ],
        results: [
          'Achieved 85% prediction accuracy',
          'Supports multiple languages',
          'Fast inference with optimized model'
        ]
      }
    },
    {
  title: 'AI Text Humanizer (Streamlit)',
  desc: 'A Streamlit app that converts AI-generated text into more human-like text using POS-aware synonym replacement and similarity scoring.',
  repo: 'https://github.com/izharadrali/AI_text_humanizer',
  live: '', // add live URL if deployed (e.g., Streamlit Cloud)
  video: 'src/assets/AI_text_humanizer.mp4', // add demo video link if available
  details: {
    fullDescription: 'A web app built with Streamlit that humanizes AI-generated text by replacing adjectives and adverbs with synonyms (using NLTK WordNet and TextBlob POS tags), and computes a similarity score (difflib.SequenceMatcher) to show how much the text changed. The app includes on-demand NLTK/TextBlob corpora downloads, custom CSS for an improved UI, a sidebar “About” panel, and a footer with developer branding. Designed for quick interactive experimentation and local deployment.',
    technologies: [
      'Python 3',
      'Streamlit',
      'NLTK (WordNet, Punkt, POS taggers)',
      'TextBlob',
      'difflib (SequenceMatcher)',
      're (regex)'
    ],
    tools: [
      'Git / GitHub',
      'Visual Studio Code',
      'Streamlit (local or cloud)',
      'Chrome DevTools',
      'Python virtualenv / pip'
    ],
    keyFeatures: [
      'POS-aware synonym replacement (adjectives & adverbs)',
      'Interactive Streamlit UI with custom CSS styling',
      'On-demand NLTK & TextBlob corpora downloads',
      'Similarity percentage between original and humanized text',
      'Large text input support via text_area and clear UX',
      'Sidebar About panel and branded footer with image'
    ],
    results: [
      'Implemented an end-to-end interactive humanizer prototype using NLTK & TextBlob',
      'Provides immediate similarity feedback to quantify changes',
      'Works offline after initial corpora downloads',
      'Easy to extend: add more POS rules, custom synonym ranking, or export functionality'
    ]
  }
    },
    {
      title: 'Frontend UI Components',
      desc: 'Responsive, production-ready UI components built using HTML, CSS, JavaScript, and Bootstrap during my internship at Xtremesoft Peshawar.',
      repo: 'https://github.com/izharadrali', 
      live: '',
      video: '',
      details: {
        fullDescription: 'Created a comprehensive library of reusable, responsive UI components following modern web development best practices. These components serve as building blocks for scalable web applications.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
        tools: ['Git', 'VS Code', 'Chrome DevTools', 'Figma', 'Webpack'],
        keyFeatures: [
          'Mobile-first responsive design',
          'Accessibility compliance (WCAG)',
          'Cross-browser compatibility',
          'CSS Grid and Flexbox layouts',
          'Interactive JavaScript components',
          'Bootstrap framework integration'
        ],
        results: [
          'Created 15+ reusable components',
          'Improved page load speed by 35%',
          'Reduced CSS bundle size by 40%',
          '100% browser compatibility verified'
        ]
      }
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title" data-aos="fade-up">My <span className="highlight">Projects</span></h1>

      <p className="page-lead" data-aos="fade-up" data-aos-delay="80">
        A selection of my work in AI, deep learning, and software development. Click on any project to see full details.
      </p>

      <div className="projects-grid">
        {projects.map((p, idx) => (
          <ProjectItem 
            key={idx} 
            p={p} 
            idx={idx} 
            isSelected={selectedProject === idx}
            onSelect={setSelectedProject}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;