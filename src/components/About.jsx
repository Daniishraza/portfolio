import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

import profileImage from '../assets/images/Untitled design.png';

const About = () => {

  const [activeTab, setActiveTab] = useState('story');

  
  const tabContent = {
    story: (
      <div className="tab-pane animate-fade-in-up">
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '15px' }}>
          {portfolioData.personalInfo.summary}
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          My journey in tech is fueled by a passion for solving real-world problems. Whether it's crafting a pixel-perfect UI or architecting a robust backend logic, I bring dedication and a detail-oriented mindset to every project. I thrive in environments that challenge me to learn and innovate.
        </p>
      </div>
    ),
    education: (
      <div className="tab-pane animate-fade-in-up" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ padding: '15px', background: 'rgba(0, 255, 204, 0.05)', borderRadius: '8px', borderLeft: '3px solid var(--primary-neon)', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ position: 'absolute', top: 0, right: 0, width: '50px', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(0,255,204,0.1))' }}></div>
          <h4 style={{ color: 'var(--text-main)', marginBottom: '5px' }}>Bachelor of Computer Applications (BCA)</h4>
          <p style={{ color: 'var(--primary-neon)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '8px' }}>Galgotias University | 2021 – 2024</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Graduated with a CGPA of 8.08/10. Active participant in Web & Mobile Research Group.</p>
        </div>
        
        <div style={{ padding: '15px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', borderLeft: '3px solid var(--text-muted)' }}>
          <h4 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>Certifications & Bootcamps</h4>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', paddingLeft: '5px', lineHeight: '1.8', listStyleType: 'none' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary-neon)' }}>&gt;</span> Full Stack Developer Bootcamp
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary-neon)' }}>&gt;</span> Mastering Generative AI & ChatGPT
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary-neon)' }}>&gt;</span> MongoDB Developer’s Toolkit (NoSQL)
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary-neon)' }}>&gt;</span> React JS Certification
            </li>
          </ul>
        </div>
      </div>
    ),
    details: (
      <div className="tab-pane animate-fade-in-up">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', fontFamily: 'var(--font-mono)' }}>
          <div className="neon-card-solid" style={{ padding: '15px' }}>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem', marginBottom: '5px', textTransform: 'uppercase' }}>Location</span>
            <span style={{ color: 'var(--primary-neon)', fontSize: '0.9rem' }}>{portfolioData.personalInfo.location}</span>
          </div>
          <div className="neon-card-solid" style={{ padding: '15px' }}>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem', marginBottom: '5px', textTransform: 'uppercase' }}>Email</span>
            <span style={{ color: 'var(--text-main)', fontSize: '0.85rem', wordBreak: 'break-all' }}>{portfolioData.personalInfo.email}</span>
          </div>
          <div className="neon-card-solid" style={{ padding: '15px' }}>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem', marginBottom: '5px', textTransform: 'uppercase' }}>Phone</span>
            <span style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{portfolioData.personalInfo.phone}</span>
          </div>
          <div className="neon-card-solid" style={{ padding: '15px' }}>
            <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.8rem', marginBottom: '5px', textTransform: 'uppercase' }}>Status</span>
            <span style={{ color: '#27c93f', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', background: '#27c93f', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #27c93f', animation: 'blink 2s infinite' }}></span>
              Open to Work
            </span>
          </div>
        </div>
      </div>
    )
  };

  return (
    <section id="about" className="neon-card" style={{ marginBottom: '40px', position: 'relative', overflow: 'hidden' }}>
      
      
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '300px', height: '300px', background: 'var(--primary-neon)', filter: 'blur(150px)', opacity: '0.08', zIndex: 0, pointerEvents: 'none' }}></div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
        
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <h2 style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: 'clamp(1.5rem, 4vw, 2rem)', margin: 0 }}>
            About <span className="text-gradient">Me</span>
          </h2>
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--primary-neon) 0%, transparent 100%)', opacity: 0.5 }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '50px', alignItems: 'start' }}>
          
         
          <div className="about-content" style={{ display: 'flex', flexDirection: 'column' }}>
            
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '15px', flexWrap: 'wrap' }}>
              {['story', 'education', 'details'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: activeTab === tab ? 'rgba(0, 255, 204, 0.1)' : 'transparent',
                    border: '1px solid',
                    borderColor: activeTab === tab ? 'rgba(0, 255, 204, 0.3)' : 'transparent',
                    color: activeTab === tab ? 'var(--primary-neon)' : 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseOver={(e) => {
                    if (activeTab !== tab) e.currentTarget.style.color = 'var(--text-main)';
                  }}
                  onMouseOut={(e) => {
                    if (activeTab !== tab) e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            
            <div style={{ minHeight: '220px' }}>
              {tabContent[activeTab]}
            </div>

            
            <div style={{ marginTop: '20px' }}>
              <a href="#contact" className="neon-btn neon-btn-secondary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Connect With Me
              </a>
            </div>

          </div>

          
          <div className="about-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div 
              className="hover-glitch"
              style={{ 
                position: 'relative', 
                width: 'clamp(250px, 80%, 320px)', 
                aspectRatio: '1/1', 
                borderRadius: '12px',
                padding: '12px',
                background: 'rgba(0, 255, 204, 0.03)',
                border: '1px solid rgba(0, 255, 204, 0.2)',
                boxShadow: 'inset 0 0 20px rgba(0, 255, 204, 0.05), 0 10px 30px rgba(0,0,0,0.5)',
                transition: 'transform var(--transition-normal)'
              }}
            >
              
              <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '25px', height: '25px', borderTop: '2px solid var(--primary-neon)', borderLeft: '2px solid var(--primary-neon)' }}></div>
              <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '25px', height: '25px', borderTop: '2px solid var(--primary-neon)', borderRight: '2px solid var(--primary-neon)' }}></div>
              <div style={{ position: 'absolute', bottom: '-2px', left: '-2px', width: '25px', height: '25px', borderBottom: '2px solid var(--primary-neon)', borderLeft: '2px solid var(--primary-neon)' }}></div>
              <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '25px', height: '25px', borderBottom: '2px solid var(--primary-neon)', borderRight: '2px solid var(--primary-neon)' }}></div>

              
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: 'var(--bg-surface)', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                
                <img 
                  src={profileImage} 
                  alt={portfolioData.personalInfo.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    filter: 'grayscale(15%) contrast(110%) brightness(95%)',
                    transition: 'filter 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%) contrast(100%) brightness(100%)'}
                  onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(15%) contrast(110%) brightness(95%)'}
                />
                
                
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(rgba(0, 255, 204, 0.1) 1px, transparent 1px)',
                  backgroundSize: '100% 4px',
                  pointerEvents: 'none',
                  opacity: 0.4
                }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;