import React from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      style={{ 
        background: 'rgba(13, 17, 23, 0.95)', 
        borderTop: '1px solid rgba(0, 255, 204, 0.1)',
        padding: '40px 20px 20px 20px',
        marginTop: '60px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'absolute', bottom: '-50px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '100px', background: 'var(--primary-neon)', filter: 'blur(100px)', opacity: '0.05', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '20px' }}>
          
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-main)' }}>
            <span style={{ color: 'var(--primary-neon)' }}>const</span> portfolio = <span style={{ color: 'var(--primary-neon)' }}>true</span>;
          </div>

          <button 
            onClick={scrollToTop}
            className="neon-btn"
            style={{ 
              padding: '8px 15px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '0.85rem',
              borderRadius: '20px'
            }}
            title="Back to Top"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            Top
          </button>
        </div>

        <div style={{ display: 'flex', gap: '25px', marginTop: '10px' }}>
          <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s, transform 0.3s' }} onMouseOver={(e) => {e.currentTarget.style.color = 'var(--primary-neon)'; e.currentTarget.style.transform = 'translateY(-3px)'}} onMouseOut={(e) => {e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)'}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          
          <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.3s, transform 0.3s' }} onMouseOver={(e) => {e.currentTarget.style.color = 'var(--primary-neon)'; e.currentTarget.style.transform = 'translateY(-3px)'}} onMouseOut={(e) => {e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)'}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          <a href={`mailto:${portfolioData.personalInfo.email}`} style={{ color: 'var(--text-muted)', transition: 'color 0.3s, transform 0.3s' }} onMouseOver={(e) => {e.currentTarget.style.color = 'var(--primary-neon)'; e.currentTarget.style.transform = 'translateY(-3px)'}} onMouseOut={(e) => {e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)'}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>

        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
            &copy; {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '5px' }}>
            Designed & Developed with <span style={{ color: '#ff5f56' }}>♥</span> in New Delhi
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;