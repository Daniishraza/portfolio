import React, { useEffect, useRef, useState } from 'react';
import '../styles/global.css';

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef, options]);

  return [elementRef, isVisible];
};

const Experience = () => {
  const timelineData = [
    {
      id: 1,
      type: 'work',
      title: 'Lead Dev & Product Development',
      organization: 'Freelance / Personal Projects',
      date: '2023 - Present',
      description: [
        'Built a front-end e-commerce platform using React 18 with an integrated AI chatbot.',
        'Developed React Notes Pro featuring rich-text editing, dark/light themes, and offline support.',
        'Designed mobile-first UIs focused on seamless navigation and real-time data filtering.'
      ],
      tech: ['React 18', 'Vite', 'AI Integration', 'CSS3']
    },
    {
      id: 2,
      type: 'education',
      title: 'Bachelor of Computer Applications (BCA)',
      organization: 'Galgotias University',
      date: '2021 - 2024',
      description: [
        'Graduated with an excellent CGPA of 8.08/10.',
        'Completed certifications in Full Stack Development, React JS, and MongoDB.',
        'Mastered Generative AI & ChatGPT integration for modern web applications.'
      ],
      tech: ['Data Structures', 'Web Development', 'DBMS', 'Generative AI']
    },
    {
      id: 3,
      type: 'award',
      title: '1st Place, Logo Design Competition',
      organization: 'Web & Mobile Research Group',
      date: '2022',
      description: [
        'Awarded for excellence in visual communication and branding.',
        'Demonstrated strong understanding of UI/UX principles and visual aesthetics.'
      ],
      tech: ['UI/UX', 'Branding', 'Visual Design']
    }
  ];

  const getIcon = (type) => {
    if (type === 'work') {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ffcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      );
    } else if (type === 'education') {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d2a8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      );
    } else {
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffbd2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
      );
    }
  };

  return (
    <section id="experience" style={{ padding: '60px 0', position: 'relative' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '50px' }}>
        <h2 style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1.8rem', color: 'var(--text-main)' }}>
          Journey & Milestones
        </h2>
        <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--primary-neon) 0%, transparent 100%)', opacity: 0.5 }}></div>
      </div>

      <div 
        className="timeline-container"
        style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '20px 0'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, var(--primary-neon), transparent)',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 10px var(--primary-neon)',
            opacity: 0.3,
            zIndex: 0
          }}
          className="timeline-line-mobile"
        ></div>

        {timelineData.map((item, index) => {
          const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
          const isEven = index % 2 === 0;

          return (
            <div 
              key={item.id}
              ref={ref}
              className={`timeline-item ${isEven ? 'left' : 'right'}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '40px',
                position: 'relative',
                zIndex: 1,
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? 'translateY(0) scale(1)' 
                  : `translateY(40px) ${isEven ? 'translateX(-30px)' : 'translateX(30px)'}`,
                transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              
              <div style={{ width: '45%', display: 'flex', justifyContent: isEven ? 'flex-end' : 'flex-start' }} className="timeline-content-wrapper">
                {isEven && (
                  <TimelineCard item={item} getIcon={getIcon} />
                )}
              </div>

              <div 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--card-bg)',
                  border: `2px solid ${item.type === 'education' ? '#d2a8ff' : item.type === 'award' ? '#ffbd2e' : 'var(--primary-neon)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 15px ${item.type === 'education' ? 'rgba(210,168,255,0.4)' : item.type === 'award' ? 'rgba(255,189,46,0.4)' : 'rgba(0,255,204,0.4)'}`,
                  zIndex: 2,
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
                className="timeline-dot"
              >
                {getIcon(item.type)}
              </div>

              <div style={{ width: '45%' }} className="timeline-content-wrapper">
                {!isEven && (
                  <TimelineCard item={item} getIcon={getIcon} />
                )}
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

const TimelineCard = ({ item, getIcon }) => {
  return (
    <div 
      className="neon-card hover-glitch"
      style={{
        padding: '25px',
        width: '100%',
        position: 'relative',
        textAlign: 'left',
        borderTop: `3px solid ${item.type === 'education' ? '#d2a8ff' : item.type === 'award' ? '#ffbd2e' : 'var(--primary-neon)'}`
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
        <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', margin: 0 }}>{item.title}</h3>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '15px' }}>
        <span style={{ color: 'var(--primary-neon)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
          @ {item.organization}
        </span>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          {item.date}
        </span>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '20px' }}>
        {item.description.map((desc, i) => (
          <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px', paddingLeft: '20px', position: 'relative', lineHeight: '1.6' }}>
            <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', background: 'var(--primary-neon)', borderRadius: '50%', opacity: 0.7 }}></span>
            {desc}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '15px' }}>
        {item.tech.map((tech, i) => (
          <span key={i} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;