import React, { useState } from 'react';
import '../styles/global.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "ZARA-Inspired E-Commerce",
      category: "Full Stack",
      shortDesc: "Modern e-commerce platform with AI integration.",
      fullDesc: "Built a high-performance front-end platform using React 18 and modern CSS. Integrated an AI chatbot to automate FAQs and guide customer shopping, significantly increasing engagement. Designed a mobile-first UI focused on seamless navigation and real-time product filtering.",
      techStack: ["React 18", "CSS3", "JavaScript", "AI Integration"],
      githubLink: "https://github.com/Daniishraza",
      liveLink: "#",
      imageColor: "linear-gradient(135deg, rgba(0, 255, 204, 0.2), rgba(13, 17, 23, 1))"
    },
    {
      id: 2,
      title: "React Notes Pro",
      category: "Frontend",
      shortDesc: "Rich-text note-taking app with smart features.",
      fullDesc: "Created a robust note-taking application with React 18 and Vite. Features include categories/tags, pin, archive, and favorites functionality. Added a dark/light theme toggle and autosave with offline support. Implemented advanced search and smart filters, with an interactive stats dashboard.",
      techStack: ["React 18", "Vite", "Local Storage", "CSS"],
      githubLink: "https://github.com/Daniishraza",
      liveLink: "#",
      imageColor: "linear-gradient(135deg, rgba(39, 201, 63, 0.2), rgba(13, 17, 23, 1))"
    },
    {
      id: 3,
      title: "Portfolio Web Terminal",
      category: "Frontend",
      shortDesc: "VSCode themed personal portfolio website.",
      fullDesc: "Designed and developed a highly interactive, responsive personal portfolio. Implemented custom typewriter effects, 3D mouse parallax, and scroll-spy navigation. Styled using standard CSS with a focus on Glassmorphism and Neon UI design principles.",
      techStack: ["React.js", "HTML5", "CSS3", "UI/UX"],
      githubLink: "https://github.com/Daniishraza",
      liveLink: "#",
      imageColor: "linear-gradient(135deg, rgba(210, 168, 255, 0.2), rgba(13, 17, 23, 1))"
    }
  ];

  const categories = ['All', 'Frontend', 'Full Stack'];
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter);

  const closeModal = (e) => {
    if (e.target.id === 'modal-overlay') {
      setSelectedProject(null);
    }
  };

  return (
    <section id="projects" style={{ marginBottom: '60px', position: 'relative' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <h2 style={{ letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1.8rem', color: 'var(--text-main)' }}>
          Featured Projects
        </h2>
        <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--primary-neon) 0%, transparent 100%)', opacity: 0.5 }}></div>
      </div>

      <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="neon-btn"
            style={{
              padding: '6px 16px',
              fontSize: '0.9rem',
              background: filter === cat ? 'rgba(0, 255, 204, 0.1)' : 'transparent',
              boxShadow: filter === cat ? '0 0 10px rgba(0, 255, 204, 0.2)' : 'none',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '25px' 
        }}
      >
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="neon-card"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              transform: hoveredCard === index ? 'translateY(-5px)' : 'translateY(0)',
              transition: 'all 0.3s ease',
              padding: '0',
              overflow: 'hidden'
            }}
          >
            <div style={{ 
              height: '160px', 
              width: '100%', 
              background: project.imageColor,
              borderBottom: '1px solid rgba(0, 255, 204, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.2)', fontSize: '3rem', fontWeight: 'bold' }}>
                {`0${index + 1}`}
              </span>
              
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(0,0,0,0.5)',
                display: hoveredCard === index ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'fadeIn 0.2s ease forwards'
              }}>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="neon-btn"
                  style={{ padding: '8px 20px', fontSize: '0.9rem' }}
                >
                  View Details
                </button>
              </div>
            </div>

            <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', margin: 0 }}>{project.title}</h3>
                <a href={project.githubLink} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='var(--primary-neon)'} onMouseOut={(e) => e.target.style.color='var(--text-muted)'}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '15px', flexGrow: 1 }}>
                {project.shortDesc}
              </p>
              
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontFamily: 'var(--font-mono)' }}>
                {project.techStack.map((tech, i) => (
                  <span key={i} style={{ fontSize: '0.75rem', color: 'var(--primary-neon)', background: 'rgba(0, 255, 204, 0.05)', padding: '4px 8px', borderRadius: '4px', border: '1px solid rgba(0,255,204,0.1)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div 
          id="modal-overlay"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(13, 17, 23, 0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div 
            className="neon-card"
            style={{ 
              maxWidth: '600px', 
              width: '100%', 
              background: 'var(--card-bg)', 
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', color: 'var(--text-muted)', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              &times;
            </button>

            <h2 style={{ color: 'var(--primary-neon)', marginBottom: '10px', fontSize: '1.8rem' }}>{selectedProject.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
              &gt; {selectedProject.category} Project
            </p>
            
            <h4 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>About the Project</h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '25px' }}>
              {selectedProject.fullDesc}
            </p>

            <h4 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>Technologies Used</h4>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px', fontFamily: 'var(--font-mono)' }}>
              {selectedProject.techStack.map((tech, i) => (
                <span key={i} style={{ fontSize: '0.85rem', color: '#c9d1d9', background: '#21262d', padding: '6px 12px', borderRadius: '4px', border: '1px solid #30363d' }}>
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '15px' }}>
              <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="neon-btn" style={{ textDecoration: 'none', textAlign: 'center', flex: 1 }}>
                View Source Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;