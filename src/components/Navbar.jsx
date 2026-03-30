import React, { useState, useEffect, useRef } from 'react';
import '../styles/global.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 1. Navbar visibility logic (Hide on scroll down, show on up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // 2. Glassmorphism trigger
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 3. Scroll Progress Logic
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // 4. Active Section Detection (Scroll Spy)
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav 
        className={`navbar-master ${isScrolled ? 'navbar-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: isVisible ? '0' : '-100px',
          left: 0,
          width: '100%',
          zIndex: 9999,
          transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
          background: isScrolled ? 'var(--bg-overlay)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(15px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(15px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(0, 255, 204, 0.15)' : '1px solid transparent',
          height: isScrolled ? '70px' : '90px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* TOP SCROLL PROGRESS BAR */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '2px',
          background: 'var(--primary-neon)',
          boxShadow: '0 0 10px var(--primary-neon)',
          transition: 'width 0.1s ease-out'
        }} />

        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          width: '100%'
        }}>
          
          {/* BRANDING / LOGO */}
          <div className="nav-logo" style={{ perspective: '1000px' }}>
            <a 
              href="#home" 
              onClick={(e) => handleScrollToSection(e, '#home')}
              style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '1.4rem', 
                fontWeight: '800', 
                color: 'var(--primary-neon)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>&lt;</span>
              <span className="logo-text">Danish_Raja</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>/&gt;</span>
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="desktop-menu-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <ul style={{ 
              display: 'flex', 
              listStyle: 'none', 
              gap: '30px', 
              alignItems: 'center',
              margin: 0,
              padding: 0
            }}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    style={{
                      color: activeSection === link.id ? 'var(--primary-neon)' : 'var(--text-main)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      padding: '5px 0'
                    }}
                    className="nav-item-link"
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <span style={{
                        position: 'absolute',
                        bottom: '-5px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'var(--primary-neon)',
                        boxShadow: '0 0 8px var(--primary-neon)',
                        borderRadius: '2px'
                      }} />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <button 
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="neon-btn"
              style={{ 
                padding: '10px 25px', 
                fontSize: '0.85rem',
                borderRadius: '4px',
                letterSpacing: '1px'
              }}
            >
              HIRE_ME
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ cursor: 'pointer', zIndex: 10001 }}
          >
            <div style={{
              width: '28px',
              height: '2px',
              background: 'var(--primary-neon)',
              margin: '6px 0',
              transition: '0.4s',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(-6px, 5px)' : 'none',
              boxShadow: '0 0 5px var(--primary-neon)'
            }} />
            <div style={{
              width: isMobileMenuOpen ? '0' : '20px',
              height: '2px',
              background: 'var(--primary-neon)',
              margin: '6px 0',
              transition: '0.4s',
              opacity: isMobileMenuOpen ? 0 : 1,
              boxShadow: '0 0 5px var(--primary-neon)'
            }} />
            <div style={{
              width: '28px',
              height: '2px',
              background: 'var(--primary-neon)',
              margin: '6px 0',
              transition: '0.4s',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(-6px, -5px)' : 'none',
              boxShadow: '0 0 5px var(--primary-neon)'
            }} />
          </div>
        </div>
      </nav>

      {/* OVERLAY FOR MOBILE MENU */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(13, 17, 23, 0.9)',
          backdropFilter: 'blur(10px)',
          zIndex: 9998,
          display: isMobileMenuOpen ? 'block' : 'none',
          opacity: isMobileMenuOpen ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* ADVANCED MOBILE DRAWER */}
      <div 
        className="mobile-drawer"
        style={{
          position: 'fixed',
          top: 0,
          right: isMobileMenuOpen ? '0' : '-100%',
          width: 'min(300px, 80vw)',
          height: '100vh',
          background: 'var(--bg-surface)',
          zIndex: 10000,
          transition: 'all 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '100px 40px',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
          borderLeft: '1px solid rgba(0, 255, 204, 0.2)'
        }}
      >
        <div style={{ marginBottom: '40px' }}>
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '0.7rem', 
            color: 'var(--primary-neon)', 
            display: 'block',
            marginBottom: '10px'
          }}>NAVIGATION_MENU</span>
          <div style={{ height: '1px', width: '40px', background: 'var(--primary-neon)' }} />
        </div>

        <ul style={{ listStyle: 'none', padding: 0 }}>
          {navLinks.map((link, index) => (
            <li 
              key={index} 
              style={{ 
                margin: '25px 0',
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(50px)',
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: `all 0.4s ease ${index * 0.1 + 0.2}s`
              }}
            >
              <a 
                href={link.href} 
                onClick={(e) => handleScrollToSection(e, link.href)}
                style={{
                  color: activeSection === link.id ? 'var(--primary-neon)' : 'var(--text-main)',
                  textDecoration: 'none',
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '700',
                  display: 'block'
                }}
              >
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.9rem', 
                  color: 'var(--primary-neon)',
                  marginRight: '15px'
                }}>0{index + 1}.</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto' }}>
          <button 
            className="neon-btn" 
            style={{ width: '100%', padding: '15px' }}
            onClick={(e) => handleScrollToSection(e, '#contact')}
          >
            START_PROJECT
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;