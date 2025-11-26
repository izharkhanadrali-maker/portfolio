import React, { useState } from 'react';

function Skills() {
  const skills = [
    {
      id: 'ai-ml',
      category: "AI & Machine Learning",
      icon: "fas fa-brain",
      description: "Comprehensive expertise in machine learning and artificial intelligence, including deep learning frameworks and advanced neural networks.",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Federated Learning",
        "NLP (Natural Language Processing)",
        "Time-Series Forecasting",
        "Computer Vision",
        "Data Mining",
        "Big Data Concepts",
        "Model Optimization",
        "Model Evaluation"
      ]
    },
    {
      id: 'tools-frameworks',
      category: "AI Tools & Frameworks",
      icon: "fas fa-toolbox",
      description: "Proficient with industry-standard machine learning and data processing frameworks for building and deploying AI models.",
      items: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
        "NumPy",
        "Pandas",
        "Google Colab",
        "Jupyter Notebook",
        "Kaggle (Notebooks & Competitions)"
      ]
    },
    {
      id: 'programming',
      category: "Programming",
      icon: "fas fa-code",
      description: "Strong programming foundation across multiple languages with experience in backend development and modern web technologies.",
      items: [
        "Python",
        "C++",
        "JavaScript",
        "Node.js",
        "Express.js"
      ]
    },
    {
      id: 'devops',
      category: "DevOps, Deployment & Data Tools",
      icon: "fas fa-server",
      description: "Experience with deployment pipelines, containerization, version control, and data engineering practices.",
      items: [
        "Docker",
        "Git",
        "GitHub",
        "REST APIs",
        "Linux",
        "Data Pipelines",
        "Version Control"
      ]
    },
    {
      id: 'cs-fundamentals',
      category: "Computer Science Fundamentals",
      icon: "fas fa-database",
      description: "Strong foundation in core computer science concepts essential for building robust and efficient systems.",
      items: [
        "Computer Networking",
        "Operating Systems",
        "Data Structures & Algorithms",
        "OOP"
      ]
    },
    {
      id: 'frontend',
      category: "Frontend (Previous Experience)",
      icon: "fas fa-paint-brush",
      description: "Solid frontend development skills with modern React and responsive design principles.",
      items: [
        "React",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Responsive Design"
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(0);
  const selected = skills[selectedCategory];

  return (
    <div className="page-container">
      <h1 data-aos="fade-up">My <span className="highlight">Skills</span></h1>
      <p className="page-lead" data-aos="fade-up" data-aos-delay="60">My core technical skill set across AI/ML engineering, deep learning, data processing, data analysis, model deployment, and modern software development.</p>
      
      <div className="skills-layout" data-aos="fade-up" data-aos-delay="120">
        {/* Sidebar with categories */}
        <div className="skills-sidebar">
          <div className="skills-categories">
            {skills.map((skill, index) => (
              <button
                key={skill.id}
                className={`category-btn ${selectedCategory === index ? 'active' : ''}`}
                onClick={() => setSelectedCategory(index)}
                data-aos="fade-right"
                data-aos-delay={index * 50}
              >
                <i className={skill.icon}></i>
                <span>{skill.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main content area */}
        <div className="skills-content">
          <div className="category-header">
            <div className="category-icon">
              <i className={selected.icon}></i>
            </div>
            <h2>{selected.category}</h2>
          </div>
          
          <p className="category-description">{selected.description}</p>
          
          <div className="skills-tags-grid">
            {selected.items.map((item, i) => (
              <div key={i} className="skill-tag" data-aos="zoom-in" data-aos-delay={i * 30}>
                <i className="fas fa-check-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;