import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  const getSkillIcon = (skillName) => {
    const iconStyle = { width: '24px', height: '24px', fill: 'var(--primary-neon)' };
    
    switch (skillName.toLowerCase()) {
      case 'javascript':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm11 13.5c0 1.5-1.1 2.5-2.5 2.5s-2.5-1-2.5-2.5h2c0 .4.3.7.6.7s.6-.3.6-.6c0-1.5-3-1-3-2.6 0-1.2 1-2 2.3-2s2.2.8 2.2 2h-1.9c0-.4-.3-.6-.5-.6s-.5.2-.5.5c0 1.4 3 1 3 2.6zM9.5 14v4.5H7.6V11h2.1v6c0 .5.3.8.7.8s.7-.3.7-.8v-3h1.9v3c0 1.5-1.1 2.5-2.5 2.5s-2.5-1-2.5-2.5V14h1.5z" />
          </svg>
        );
      case 'react.js':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2.22c3.55 0 6.64-2.14 7.63-5.28-.6-1.5-1.93-2.88-3.7-3.83 1.05-1.87 1.25-3.66.52-4.9-1.02-1.77-3.67-1.57-6.45-.16-2.78-1.4-5.43-1.6-6.45.16-.73 1.25-.53 3.03.52 4.9-1.77.95-3.1 2.33-3.7 3.83C3.36 17.64 6.45 19.78 12 19.78zm0-1.58c-2.48 0-4.66-1.14-5.74-2.83 2.05-.72 4.54-1.1 7.24-1.1s5.18.38 7.24 1.1c-1.08 1.69-3.26 2.83-5.74 2.83zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        );
      case 'node.js':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M11.83 2L2 7.64v8.72L11.83 22l9.83-5.64V7.64L11.83 2zm8.17 13.43l-8.17 4.69-8.17-4.69v-7.9l8.17-4.69 8.17 4.69v7.9zm-8.17-6.26l4.08-2.34-4.08-2.35-4.09 2.35 4.09 2.34zm0 1.68L7.74 13.2v2.85l4.09 2.34 4.08-2.34v-2.85l-4.08-2.35z" />
          </svg>
        );
      case 'python / django':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9.5c.83 0 1.5-.67 1.5-1.5S10.83 7.5 10 7.5 8.5 8.17 8.5 9 9.17 10.5 10 10.5zm4 0c.83 0 1.5-.67 1.5-1.5S14.83 7.5 14 7.5 12.5 8.17 12.5 9s.67 1.5 1.5 1.5zm-2 6c2.5 0 4.5-1.5 5.5-3.5h-11c1 2 3 3.5 5.5 3.5z" />
          </svg>
        );
      case 'sql / mongodb':
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 1.57-9 3.5v11C3 19.43 7.03 21 12 21s9-1.57 9-3.5v-11C21 4.57 16.97 3 12 3zm0 5c-3.87 0-7-1.12-7-2.5S8.13 3 12 3s7 1.12 7 2.5S15.87 8 12 8zm0 5c-3.87 0-7-1.12-7-2.5 0-.17.07-.34.19-.5.8.96 3.53 1.5 6.81 1.5s6.01-.54 6.81-1.5c.12.16.19.33.19.5 0 1.38-3.13 2.5-7 2.5zm0 5c-3.87 0-7-1.12-7-2.5 0-.17.07-.34.19-.5.8.96 3.53 1.5 6.81 1.5s6.01-.54 6.81-1.5c.12.16.19.33.19.5 0 1.38-3.13 2.5-7 2.5z" />
          </svg>
        );
      default:
        return (
          <svg style={iconStyle} viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
    }
  };

  return (
    <section id="skills" ref={skillsRef} className="neon-card" style={{ marginBottom: '40px', padding: '30px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(0, 255, 204, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 204, 0.02) 1px, transparent 1px)', backgroundSize: '20px 20px', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          <h2 style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1.5rem', color: 'var(--text-main)' }}>
            Tech Arsenal
          </h2>
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--primary-neon) 0%, transparent 100%)', opacity: 0.5 }}></div>
        </div>

        <div className="skills-container" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="skill-item" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 255, 204, 0.05)', padding: '6px', borderRadius: '6px', border: '1px solid rgba(0, 255, 204, 0.2)' }}>
                    {getSkillIcon(skill.name)}
                  </div>
                  <span style={{ color: 'var(--text-main)', fontWeight: '600', letterSpacing: '1px' }}>
                    {skill.name}
                  </span>
                </div>
                
                <span className="neon-text" style={{ opacity: isVisible ? 1 : 0, transition: `opacity 0.5s ease ${index * 0.2 + 0.5}s` }}>
                  [{skill.level}]
                </span>
              </div>

              <div style={{ background: '#1a202c', height: '8px', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)' }}>
                <div style={{ width: isVisible ? skill.level : '0%', background: 'var(--primary-neon)', height: '100%', borderRadius: '4px', boxShadow: '0 0 10px var(--primary-neon), 0 0 20px var(--primary-neon)', transition: `width 1.5s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.2}s`, position: 'relative' }}>
                  <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '4px', background: '#ffffff', boxShadow: '0 0 8px #ffffff', borderRadius: '50%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;