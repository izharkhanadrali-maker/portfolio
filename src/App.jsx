import Projects from "./pages/projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Experience from "./pages/Experience";
import EducationCertification from "./pages/EducationCertification";
import AdminMessages from "./pages/AdminMessages";
import { useEffect, useState } from "react";
import AOS from "aos/dist/aos";
import "aos/dist/aos.css";
import "./App.css";
import photo from './assets/photo.jpg';
import CVModal from './components/CVModal';
import FloatingBubbles from './components/FloatingBubbles';
import StickyNavbar from './components/StickyNavbar';
import AnimatedTitles from './components/AnimatedTitles';
import useAutoPageScroll from './hooks/useAutoPageScroll';
// Import only the components, not the Router wrapper
import { Routes, Route } from "react-router-dom"; 

function Home() {
  const [showCVModal, setShowCVModal] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="hero-shapes" aria-hidden="true">
        <span className="shape shape-1"></span>
        <span className="shape shape-2"></span>
        <span className="shape shape-3"></span>
      </div>

      <div className="hero-content hero-layout">
        <div className="hero-left" data-aos="fade-right">
          <img src={photo} alt="Profile" className="profile-photo" />
          <button onClick={() => setShowCVModal(true)} className="btn download-cv" data-aos="fade-up" data-aos-delay="300">
            <i className="fas fa-download"></i> Download CV
          </button>
        </div>

        <div className="hero-right" data-aos="fade-left">
          <h1 data-aos="fade-up">Hi, I'm <span className="highlight">Muhammad Izhar Adrali</span></h1>
          <AnimatedTitles />
          <p className="subtitle" data-aos="fade-up" data-aos-delay="120">
            I'm an AI graduate and AI/ML Engineer with experience in machine learning, deep learning, federated learning, NLP, computer vision, and real-world energy forecasting. I also have frontend development experience.
          </p>
          
          <div className="social-cta" data-aos="fade-up" data-aos-delay="180">
            <a className="social-cta-link" href="mailto:izharadrali@gmail.com">izharadrali@gmail.com</a>
            <a className="social-cta-link" href="https://github.com/izharadrali" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a className="social-cta-link" href="https://www.linkedin.com/in/muhammadizhar-" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>

          <a href="#projects">
            <button className="btn" data-aos="zoom-in" data-aos-delay="260">View My Work</button>
          </a>
        </div>
      </div>

      <CVModal isOpen={showCVModal} onClose={() => setShowCVModal(false)} />
    </section>
  );
}

function OnePagePortfolio() {
  // Enable auto-scroll between pages
  useAutoPageScroll();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'cubic-bezier(0.2, 0.9, 0.3, 1)'
    });
  }, []);

  // Theme toggle: keep a simple 'Nites' button that toggles a light-mode class on <body>
  const [isLight, setIsLight] = useState(() => {
    try {
      return localStorage.getItem('site-theme') === 'light';
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    if (isLight) document.body.classList.add('light-mode');
    else document.body.classList.remove('light-mode');
    try { localStorage.setItem('site-theme', isLight ? 'light' : 'dark'); } catch (e) {}
  }, [isLight]);

  return (
    <>
      <FloatingBubbles />
      <StickyNavbar />
      <main className="one-page-container">
        <Home />
        <section className="page-section projects-section" id="projects">
          <Projects />
        </section>
        <section className="page-section education-section" id="education">
          <EducationCertification />
        </section>
        <section className="page-section experience-section" id="experience">
          <Experience />
        </section>
        <section className="page-section blog-section" id="blog">
          <Blog />
        </section>
        <section className="page-section skills-section" id="skills">
          <Skills />
        </section>
        <section className="page-section contact-section" id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnePagePortfolio />} />
      <Route path="/admin/messages" element={<AdminMessages />} />
    </Routes>
  );
}

export default App;
