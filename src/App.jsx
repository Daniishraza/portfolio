import React, { useState, useEffect } from 'react';


import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';


import './styles/global.css';

function App() {
  
  const [isBooting, setIsBooting] = useState(true);
  const [bootText, setBootText] = useState('');
  
  
  useEffect(() => {
    
    const isMobile = window.innerWidth <= 768;
    const bootSequence = [
      "Initializing environment...",
      "Loading user profile: DANISH_RAJA...",
      "Mounting React components...",
      "Establishing secure connection...",
      "Access Granted. Welcome."
    ];
    
    let currentLine = 0;
    
    
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setBootText(prev => prev + bootSequence[currentLine] + '\n');
        currentLine++;
      } else {
        clearInterval(interval);
        
        setTimeout(() => setIsBooting(false), isMobile ? 500 : 800);
      }
    }, isMobile ? 300 : 500); 

    return () => clearInterval(interval);
  }, []);

  
  if (isBooting) {
    return (
      <div style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#0d1117',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'var(--font-mono)',
        color: 'var(--primary-neon)',
        zIndex: 9999
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
          <div style={{ marginBottom: '20px', display: 'flex', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
          </div>
          <pre style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>
            {bootText}
            <span className="cursor-blink">_</span>
          </pre>
          
          
          <div style={{ marginTop: '30px', height: '2px', width: '100%', background: '#1a202c', overflow: 'hidden' }}>
            <div style={{ 
              height: '100%', 
              background: 'var(--primary-neon)', 
              width: `${(bootText.split('\n').length - 1) * 20}%`,
              transition: 'width 0.4s ease',
              boxShadow: '0 0 10px var(--primary-neon)'
            }}></div>
          </div>
        </div>
      </div>
    );
  }

  
  return (
    <div className="app-wrapper">
      
      <CursorGlow />
      
      
      <Navbar />
      
      
      <main className="container" style={{ paddingTop: '100px' }}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      
      <Footer />
    </div>
  );
}

export default App;