import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [cvLeads, setCVLeads] = useState([]);
  const [activeTab, setActiveTab] = useState('messages');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  const ADMIN_PASSWORD = 'admin123'; // Change this to a secure password

  useEffect(() => {
    // Check if already authenticated in this session
    const sessionAuth = sessionStorage.getItem('admin_authenticated');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
      loadData();
    } else {
      // Ensure data is loaded even if not authenticated for display purposes
      loadData();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
      sessionStorage.setItem('admin_authenticated', 'true');
      loadData();
    } else {
      setAuthError('Invalid password');
    }
  };

  const loadData = () => {
    try {
      const storedMessages = JSON.parse(localStorage.getItem('messages') || '[]');
      const storedLeads = JSON.parse(localStorage.getItem('cv_leads') || '[]');
      setMessages(storedMessages);
      setCVLeads(storedLeads);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const deleteMessage = (index) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      const updatedMessages = messages.filter((_, i) => i !== index);
      setMessages(updatedMessages);
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
    }
  };

  const deleteLead = (index) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      const updatedLeads = cvLeads.filter((_, i) => i !== index);
      setCVLeads(updatedLeads);
      localStorage.setItem('cv_leads', JSON.stringify(updatedLeads));
    }
  };

  const exportAsJSON = (data, filename) => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2)));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear ALL data? This cannot be undone!')) {
      localStorage.removeItem('messages');
      localStorage.removeItem('cv_leads');
      setMessages([]);
      setCVLeads([]);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="page-container admin-login">
        <h1 data-aos="fade-up">Admin <span className="highlight">Panel</span></h1>
        <div className="auth-form" data-aos="fade-up" data-aos-delay="100">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {authError && <div className="form-status error">{authError}</div>}
            <button type="submit" className="btn">Login</button>
            <Link to="/" className="btn outline" style={{ marginTop: '10px', textAlign: 'center', display: 'block' }}>Back Home</Link>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container admin-panel" data-aos="fade-up">
      <div className="admin-header">
        <h1 data-aos="fade-up">Admin <span className="highlight">Panel</span></h1>
        <button onClick={handleLogout} className="btn outline">Logout</button>
      </div>

      <div className="admin-tabs" data-aos="fade-up" data-aos-delay="100">
        <button
          className={`tab-btn ${activeTab === 'messages' ? 'active' : ''}`}
          onClick={() => setActiveTab('messages')}
        >
          Messages ({messages.length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'cv_leads' ? 'active' : ''}`}
          onClick={() => setActiveTab('cv_leads')}
        >
          CV Downloads ({cvLeads.length})
        </button>
      </div>

      <div className="admin-content" data-aos="fade-up" data-aos-delay="150">
        {activeTab === 'messages' && (
          <div className="tab-content">
            <div className="admin-actions">
              <button 
                onClick={() => exportAsJSON(messages, 'messages.json')}
                className="btn"
                disabled={messages.length === 0}
              >
                <i className="fas fa-download"></i> Export as JSON
              </button>
              <button 
                onClick={clearAllData}
                className="btn outline"
                style={{ color: '#ff6b6b' }}
              >
                <i className="fas fa-trash"></i> Clear All
              </button>
            </div>

            {messages.length === 0 ? (
              <p className="empty-state">No messages yet.</p>
            ) : (
              <div className="records-table">
                {messages.map((msg, idx) => (
                  <div key={idx} className="record-item">
                    <div className="record-header">
                      <h4>{msg.name}</h4>
                      <small>{new Date(msg.createdAt).toLocaleString()}</small>
                    </div>
                    <p><strong>Email:</strong> {msg.email}</p>
                    <p><strong>Message:</strong> {msg.message}</p>
                    <button
                      onClick={() => deleteMessage(idx)}
                      className="btn outline"
                      style={{ color: '#ff6b6b', marginTop: '10px' }}
                    >
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'cv_leads' && (
          <div className="tab-content">
            <div className="admin-actions">
              <button 
                onClick={() => exportAsJSON(cvLeads, 'cv_leads.json')}
                className="btn"
                disabled={cvLeads.length === 0}
              >
                <i className="fas fa-download"></i> Export as JSON
              </button>
              <button 
                onClick={clearAllData}
                className="btn outline"
                style={{ color: '#ff6b6b' }}
              >
                <i className="fas fa-trash"></i> Clear All
              </button>
            </div>

            {cvLeads.length === 0 ? (
              <p className="empty-state">No CV downloads yet.</p>
            ) : (
              <div className="records-table">
                {cvLeads.map((lead, idx) => (
                  <div key={idx} className="record-item">
                    <div className="record-header">
                      <h4>{lead.name}</h4>
                      <small>{new Date(lead.createdAt).toLocaleString()}</small>
                    </div>
                    <p><strong>Email:</strong> {lead.email}</p>
                    <p><strong>Purpose:</strong> {lead.purpose}</p>
                    <button
                      onClick={() => deleteLead(idx)}
                      className="btn outline"
                      style={{ color: '#ff6b6b', marginTop: '10px' }}
                    >
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminMessages;
