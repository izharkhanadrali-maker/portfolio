import React, { useState } from 'react';
import cvPdf from '../assets/Muhammad Izhar CV.pdf';

function CVModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: ''
  });
  const [status, setStatus] = useState({ saving: false, success: null, error: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ saving: true, success: null, error: null });

    const doDownload = () => {
      const link = document.createElement('a');
      link.href = cvPdf;
      link.download = 'Muhammad Izhar CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setStatus({ saving: false, success: 'Download started. Thank you!', error: null });
      setTimeout(() => onClose(), 900);
    };

    // Save to localStorage
    try {
      const existingLeads = JSON.parse(localStorage.getItem('cv_leads') || '[]');
      const newLead = {
        name: formData.name,
        email: formData.email,
        purpose: formData.purpose,
        createdAt: new Date().toISOString(),
        origin: typeof window !== 'undefined' ? window.location.href : null,
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : null
      };
      existingLeads.push(newLead);
      localStorage.setItem('cv_leads', JSON.stringify(existingLeads));
      
      doDownload();
      setFormData({ name: '', email: '', purpose: '' });
    } catch (err) {
      console.error('Failed to save CV lead:', err);
      setStatus({ saving: false, success: null, error: 'Failed to record download. But CV will download.' });
      doDownload();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" data-aos="zoom-in">
        <h3>Download CV</h3>
        <p>Please provide your information to download the CV:</p>
        
        <form onSubmit={handleSubmit} className="cv-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <select
              value={formData.purpose}
              onChange={(e) => setFormData({...formData, purpose: e.target.value})}
              required
            >
              <option value="">Purpose of Download</option>
              <option value="recruitment">Recruitment</option>
              <option value="freelance">Freelance Opportunity</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          {status.error && <div className="form-status error">{status.error}</div>}
          {status.success && <div className="form-status success">{status.success}</div>}

          <div className="modal-actions">
            <button type="button" className="btn outline" onClick={onClose} disabled={status.saving}>Cancel</button>
            <button type="submit" className="btn" disabled={status.saving}>
              {status.saving ? (<><span className="btn-spinner" aria-hidden></span>Preparing...</>) : 'Download CV'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CVModal;