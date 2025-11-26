import React, { useState, useEffect } from 'react';

const StickyNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        <a href="#home" className="sticky-logo" onClick={() => {
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
          <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#education" onClick={() => scrollToSection('education')}>Academia</a>
          <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
          <a href="#blog" onClick={() => scrollToSection('blog')}>Blog</a>
          <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;
