import React, { useEffect, useRef } from 'react';
import styles from './StarryBackground.module.css';

const StarryBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create orbital centers
    const orbitalCenters = [
      { x: 30, y: 30 },
      { x: 70, y: 70 },
      { x: 50, y: 50 }
    ];

    // Create stars
    for (let i = 0; i < 60; i++) {
      const star = document.createElement('div');
      star.className = styles.star;
      
      // Random size
      const size = Math.random() * 4;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      if (i < 30) {
        // Orbital stars
        star.classList.add(styles.orbital);
        const centerIndex = Math.floor(Math.random() * orbitalCenters.length);
        const center = orbitalCenters[centerIndex];
        
        // Position relative to center
        star.style.left = `${center.x}%`;
        star.style.top = `${center.y}%`;
        
        // Random orbit radius and speed
        const orbitRadius = 50 + Math.random() * 100;
        star.style.setProperty('--orbit-radius', `${orbitRadius}px`);
        star.style.animationDuration = `${15 + Math.random() * 10}s`;
      } else {
        // Fractal stars
        star.classList.add(styles.fractal);
        
        // Random starting position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Generate fractal path points
        const baseDistance = 100 + Math.random() * 150;
        const fractalPoints = [
          { x: baseDistance * Math.cos(Math.random() * Math.PI * 2), y: baseDistance * Math.sin(Math.random() * Math.PI * 2) },
          { x: baseDistance * 0.5 * Math.cos(Math.random() * Math.PI * 2), y: baseDistance * 0.5 * Math.sin(Math.random() * Math.PI * 2) },
          { x: baseDistance * 0.25 * Math.cos(Math.random() * Math.PI * 2), y: baseDistance * 0.25 * Math.sin(Math.random() * Math.PI * 2) }
        ];
        
        star.style.setProperty('--fractal-x1', `${fractalPoints[0].x}px`);
        star.style.setProperty('--fractal-y1', `${fractalPoints[0].y}px`);
        star.style.setProperty('--fractal-x2', `${fractalPoints[1].x}px`);
        star.style.setProperty('--fractal-y2', `${fractalPoints[1].y}px`);
        star.style.setProperty('--fractal-x3', `${fractalPoints[2].x}px`);
        star.style.setProperty('--fractal-y3', `${fractalPoints[2].y}px`);
        
        star.style.animationDuration = `${20 + Math.random() * 10}s`;
      }
      
      // Random animation delay
      star.style.animationDelay = `${Math.random() * 2}s`;
      
      container.appendChild(star);
    }
  }, []);

  return <div ref={containerRef} className={styles.starryBackground} />;
};

export default StarryBackground; 