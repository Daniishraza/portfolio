import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typingText, setTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const heroRef = useRef(null);

  const titles = portfolioData.personalInfo.titles;
  const period = 2000;

  useEffect(() => {
    let isMounted = true;
    let currentTitle = titles[typingIndex % titles.length];
    let isDeleting = false;
    let charIndex = 0;
    let timeout;

    const type = () => {
      if (!isMounted) return;
      
      let currentFullText = titles[typingIndex % titles.length];
      let updatedText = isDeleting 
        ? currentFullText.substring(0, charIndex - 1) 
        : currentFullText.substring(0, charIndex + 1);

      setTypingText(updatedText);

      if (!isDeleting && updatedText === currentFullText) {
        timeout = setTimeout(() => { isDeleting = true; type(); }, period);
        return;
      } else if (isDeleting && updatedText === '') {
        isDeleting = false;
        setTypingIndex((prev) => prev + 1);
        charIndex = 0;
        timeout = setTimeout(type, 500);
        return;
      }

      charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      timeout = setTimeout(type, isDeleting ? 60 : 120);
    };

    type();
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [typingIndex]);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30; 
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="hero-wrapper"
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(80px, 10vh, 120px) 0',
      }}
    >
      <div 
        className="hero-background-effects"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none'
        }}
      >
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0, 255, 204, 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
        }} />
        
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0, 255, 204, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 8s infinite ease-in-out'
        }} />
      </div>

      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        width: '100%'
      }}>
        
        <div 
          className="hero-content-left"
          style={{
            flex: '1 1 600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            zIndex: 10,
            transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'var(--primary-neon-dim)',
            padding: '8px 20px',
            borderRadius: 'var(--border-radius-full)',
            border: '1px solid rgba(0, 255, 204, 0.3)',
            marginBottom: '25px',
            boxShadow: '0 0 20px rgba(0, 255, 204, 0.1)'
          }}>
            <span className="animate-pulse" style={{ width: '10px', height: '10px', background: 'var(--accent-green)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-green)' }}></span>
            <span style={{ color: 'var(--primary-neon)', fontSize: '0.85rem', fontWeight: '600', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>
              SYSTEM_READY: DANISH_RAJA_v2.0
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 10vw, 5.5rem)',
            fontWeight: '900',
            lineHeight: '1',
            margin: '0',
            color: 'var(--text-bright)',
            textTransform: 'uppercase',
            letterSpacing: '-2px'
          }}>
            CODE. BUILD.<br />
            <span className="text-gradient" style={{ letterSpacing: '0' }}>INNOVATE.</span>
          </h1>

          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderLeft: '4px solid var(--primary-neon)',
            borderRadius: '0 12px 12px 0',
            maxWidth: '550px'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-mono)',
              marginBottom: '10px',
              fontWeight: '500'
            }}>
              <span style={{ color: 'var(--primary-neon)' }}>&gt;</span> {portfolioData.personalInfo.name}
            </h2>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
              color: 'var(--text-muted)',
              minHeight: '30px'
            }}>
              <span style={{ color: 'var(--accent-purple)', fontWeight: 'bold' }}>danish@developer:~$</span>
              <span style={{ marginLeft: '12px', color: 'var(--text-bright)' }}>{typingText}</span>
              <span className="cursor-blink" style={{ width: '10px', height: '1.4rem', background: 'var(--primary-neon)', marginLeft: '8px' }}></span>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: '20px',
            marginTop: '50px',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})}
              className="neon-btn"
              style={{ padding: '16px 45px', fontSize: '1rem' }}
            >
              EXECUTE_PROJECTS
            </button>
            <a 
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="neon-btn neon-btn-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 35px' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GET_SOURCE
            </a>
          </div>
        </div>

        <div 
          className="hero-content-right desktop-only"
          style={{
            flex: '1 1 400px',
            display: 'flex',
            justifyContent: 'flex-end',
            zIndex: 5,
            transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px) rotateY(${mousePos.x * 0.5}deg)`,
            transition: 'transform 0.15s ease-out',
            perspective: '1000px'
          }}
        >
          <div className="neon-card" style={{
            width: '100%',
            maxWidth: '450px',
            padding: '0',
            background: 'var(--bg-surface)',
            border: '1px solid rgba(0, 255, 204, 0.2)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 20px rgba(0,255,204,0.1)',
            overflow: 'hidden'
          }}>
            <div style={{
              background: '#21262d',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #30363d'
            }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
              </div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>danish_raja.tsx</span>
            </div>
            
            <div style={{ padding: '25px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: '1.7' }}>
              <p><span style={{ color: '#ff7b72' }}>import</span> {'{'} Developer {'}'} <span style={{ color: '#ff7b72' }}>from</span> <span style={{ color: '#a5d6ff' }}>'world'</span>;</p>
              <br />
              <p><span style={{ color: '#ff7b72' }}>const</span> <span style={{ color: '#d2a8ff' }}>Danish</span> = <span style={{ color: '#ff7b72' }}>new</span> Developer({'{'}</p>
              <p style={{ paddingLeft: '20px' }}>role: <span style={{ color: '#a5d6ff' }}>'Full Stack'</span>,</p>
              <p style={{ paddingLeft: '20px' }}>passion: <span style={{ color: '#a5d6ff' }}>'Data Analysis'</span>,</p>
              <p style={{ paddingLeft: '20px' }}>coffee: <span style={{ color: '#79c0ff' }}>Infinity</span></p>
              <p>{'}'});</p>
              <br />
              <p><span style={{ color: '#d2a8ff' }}>Danish</span>.<span style={{ color: '#79c0ff' }}>buildAwesomeStuff</span>();</p>
              <p><span style={{ color: '#8b949e' }}>// Initializing innovation...</span></p>
              <p><span style={{ color: 'var(--primary-neon)' }}>Success: Portfolio Loaded!</span></p>
            </div>

            <div style={{
              background: 'var(--primary-neon-dim)',
              padding: '10px 25px',
              fontSize: '0.75rem',
              color: 'var(--primary-neon)',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>UTF-8</span>
              <span>React 18.2.0</span>
            </div>
          </div>
        </div>

      </div>

      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        opacity: 0.5
      }}>
        <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>SCROLL_TO_EXPLORE</span>
        <div style={{
          width: '20px',
          height: '35px',
          border: '2px solid var(--text-muted)',
          borderRadius: '10px',
          position: 'relative'
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            background: 'var(--primary-neon)',
            borderRadius: '2px',
            position: 'absolute',
            left: '50%',
            top: '5px',
            transform: 'translateX(-50%)',
            animation: 'float 2s infinite'
          }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;