import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StickyNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const goToAdmin = () => {
    navigate('/admin/messages');
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Close mobile menu when window resizes to desktop size
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="sticky-navbar">
      <div className="sticky-nav-inner">
        <a href="#home" className="sticky-logo" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>
          Izhar Adrali
        </a>
        
        {/* Hamburger Menu Button */}
        <button
          className={`sticky-hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`sticky-nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>Home</a>
          <a href="#projects" onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}>Projects</a>
          <a href="#education" onClick={(e) => {
            e.preventDefault();
            scrollToSection('education');
          }}>Academia</a>
          <a href="#experience" onClick={(e) => {
            e.preventDefault();
            scrollToSection('experience');
          }}>Experience</a>
          <a href="#blog" onClick={(e) => {
            e.preventDefault();
            scrollToSection('blog');
          }}>Blog</a>
          <a href="#skills" onClick={(e) => {
            e.preventDefault();
            scrollToSection('skills');
          }}>Skills</a>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>Contact</a>
          <a href="/admin/messages" onClick={(e) => {
            e.preventDefault();
            goToAdmin();
          }} className="admin-link" title="Admin Panel">
            <i className="fas fa-lock"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;
