import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setStatus('submitting');
      
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => setStatus('idle'), 5000);
      }, 2000);
    }
  };

  return (
    <section id="contact" style={{ padding: '60px 0', marginBottom: '40px' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
        <h2 style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1.8rem', color: 'var(--text-main)' }}>
          Initiate Protocol: Contact
        </h2>
        <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--primary-neon) 0%, transparent 100%)', opacity: 0.5 }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        
        <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Looking to collaborate, have a question, or want to hire me? Drop a message and I'll get back to you as soon as possible.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div className="neon-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ background: 'rgba(0, 255, 204, 0.1)', padding: '12px', borderRadius: '50%' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-neon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '5px' }}>Email</p>
                <a href={`mailto:${portfolioData.personalInfo.email}`} style={{ color: 'var(--text-main)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '1rem' }}>
                  {portfolioData.personalInfo.email}
                </a>
              </div>
            </div>

            <div className="neon-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ background: 'rgba(0, 255, 204, 0.1)', padding: '12px', borderRadius: '50%' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-neon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '5px' }}>Phone</p>
                <span style={{ color: 'var(--text-main)', fontFamily: 'var(--font-mono)', fontSize: '1rem' }}>
                  {portfolioData.personalInfo.phone}
                </span>
              </div>
            </div>

            <div className="neon-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ background: 'rgba(0, 255, 204, 0.1)', padding: '12px', borderRadius: '50%' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-neon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '5px' }}>Location</p>
                <span style={{ color: 'var(--text-main)', fontFamily: 'var(--font-mono)', fontSize: '1rem' }}>
                  {portfolioData.personalInfo.location}
                </span>
              </div>
            </div>

          </div>
        </div>

        <div className="neon-card" style={{ padding: '30px', position: 'relative', overflow: 'hidden' }}>
          
          {status === 'success' ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '300px', textAlign: 'center' }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--primary-neon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '20px' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>Transmission Successful</h3>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>&gt; Thank you, {formData.name || 'User'}.<br/>&gt; I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '10px', fontSize: '1.4rem' }}>Send a Message</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>&gt; Name_</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  style={{ 
                    background: '#161b22', border: `1px solid ${errors.name ? '#ff5f56' : '#30363d'}`, 
                    color: 'var(--text-main)', padding: '12px 15px', borderRadius: '6px', 
                    fontFamily: 'var(--font-sans)', outline: 'none', transition: 'border 0.3s'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid var(--primary-neon)'}
                  onBlur={(e) => e.target.style.border = `1px solid ${errors.name ? '#ff5f56' : '#30363d'}`}
                />
                {errors.name && <span style={{ color: '#ff5f56', fontSize: '0.8rem' }}>{errors.name}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>&gt; Email_</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  style={{ 
                    background: '#161b22', border: `1px solid ${errors.email ? '#ff5f56' : '#30363d'}`, 
                    color: 'var(--text-main)', padding: '12px 15px', borderRadius: '6px', 
                    fontFamily: 'var(--font-sans)', outline: 'none', transition: 'border 0.3s'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid var(--primary-neon)'}
                  onBlur={(e) => e.target.style.border = `1px solid ${errors.email ? '#ff5f56' : '#30363d'}`}
                />
                {errors.email && <span style={{ color: '#ff5f56', fontSize: '0.8rem' }}>{errors.email}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>&gt; Message_</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  style={{ 
                    background: '#161b22', border: `1px solid ${errors.message ? '#ff5f56' : '#30363d'}`, 
                    color: 'var(--text-main)', padding: '12px 15px', borderRadius: '6px', 
                    fontFamily: 'var(--font-sans)', outline: 'none', transition: 'border 0.3s',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid var(--primary-neon)'}
                  onBlur={(e) => e.target.style.border = `1px solid ${errors.message ? '#ff5f56' : '#30363d'}`}
                ></textarea>
                {errors.message && <span style={{ color: '#ff5f56', fontSize: '0.8rem' }}>{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="neon-btn"
                style={{ 
                  marginTop: '10px', 
                  padding: '12px', 
                  fontSize: '1rem', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '10px',
                  opacity: status === 'submitting' ? 0.7 : 1,
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'submitting' ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                    Executing...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;