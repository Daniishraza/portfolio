import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


import './styles/global.css'; 

const showConsoleGreeting = () => {

  const headingStyle = 'font-size: 22px; font-weight: bold; color: #00ffcc; text-shadow: 0 0 10px rgba(0, 255, 204, 0.5); font-family: monospace; padding: 10px 0;';
  const textStyle = 'font-size: 14px; color: #c9d1d9; font-family: monospace; line-height: 1.6;';
  const highlightStyle = 'font-size: 14px; color: #ffbd2e; font-family: monospace; font-weight: bold;';

  console.log('%c<Hello_World /> 👋', headingStyle);
  console.log(
    '%cWelcome to the source code!\nI see you are a person of culture who checks the console.\n\nThis portfolio was meticulously built from scratch using %cReact 18%c, featuring custom CSS algorithms for the Glassmorphism UI, 3D Mouse Parallax, and Neon glow effects without relying on heavy external libraries.\n\nLooking for a passionate developer who understands both the code and the user experience?\nLet\'s build something awesome together!\n\n%c📧 Email: danishhaqqani785@gmail.com\n🔗 GitHub: https://github.com/Daniishraza',
    textStyle, highlightStyle, textStyle, highlightStyle
  );
};


showConsoleGreeting();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);