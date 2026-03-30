import React, { useEffect, useRef, useState } from 'react';
import '../styles/global.css';

const CursorGlow = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        requestAnimationFrame(() => {
          cursorRef.current.style.left = `${clientX}px`;
          cursorRef.current.style.top = `${clientY}px`;
        });
      }

      if (dotRef.current) {
        requestAnimationFrame(() => {
          dotRef.current.style.left = `${clientX}px`;
          dotRef.current.style.top = `${clientY}px`;
        });
      }
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: '-10px',
          left: '-10px',
          width: '6px',
          height: '6px',
          backgroundColor: 'var(--primary-neon)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.2s ease',
          transform: `translate(-50%, -50%) scale(${isHovering ? 0 : 1})`,
        }}
      />

      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: '-100px',
          left: '-100px',
          width: isHovering ? '120px' : '400px',
          height: isHovering ? '120px' : '400px',
          background: `radial-gradient(circle, rgba(0, 255, 204, ${isHovering ? '0.3' : '0.08'}) 0%, rgba(0, 0, 0, 0) 60%)`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.3s ease, height 0.3s ease, background 0.3s ease',
        }}
      />
    </>
  );
};

export default CursorGlow;