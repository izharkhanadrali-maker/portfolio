import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fab fa-facebook-f', url: 'https://facebook.com', color: '#1877F2' },
    { icon: 'fab fa-twitter', url: 'https://twitter.com', color: '#1DA1F2' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com', color: '#E4405F' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/muhammadizhar-', color: '#0A66C2' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/923109986069', color: '#25D366', title: '+92 312 405 5780' },
    { icon: 'fab fa-github', url: 'https://github.com/izharadrali', color: '#000000ff' }
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Academia', path: '/education' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skills', path: '/skills' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="static-footer">
      {/* Main Footer Content */}
      <div className="footer-main-content">
        {/* Left Section - Name and Subtitle */}
        <div className="footer-left-section">
          <h2 className="footer-name">Muhammad Izhar Adrali</h2>
          <p className="footer-subtitle">AI Engineer • ML Engineer • AI Enthusiast</p>
        </div>

        {/* Center Section - Social Icons */}
        <div className="footer-center-section">
          <div className="footer-social-icons">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                style={{ '--social-color': link.color }}
                title={link.title || link.icon}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Quick Links */}
        <nav className="footer-quick-links">
          {quickLinks.map((link, idx) => (
            <Link key={idx} to={link.path} className="footer-quick-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright-section">
        <p className="copyright-text">Copyright ©{currentYear}; Designed by <span className="designer-name">Muhammad Izhar Adrali</span></p>
      </div>
    </footer>
  );
};

export default Footer;
