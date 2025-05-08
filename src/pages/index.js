import React, { useState, useEffect } from 'react';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <Head>
        <title>Orion Finance</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Orion Finance - Redistributing the value monopolized by crypto giants." />
        <meta property="og:title" content="Orion Finance - DeFi Asset Management" />
        <meta property="og:description" content="Redistributing the value monopolized by crypto giants." />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
      </Head>
      <div className={styles.landingBg}>
        <video
          className={styles.videoBg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/img/video_bg_5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <nav className={styles.navbar}>
          <div className={styles.logoNav}>
            <img src="/img/OF_lockup_white.png" alt="Orion Finance Logo" className={styles.logo} />
          </div>
          <ul className={styles.navLinks}>
            <li><a href="/docs/introduction/orion">Docs</a></li>
            <li><a href="https://discord.gg/8bAXxPSPdw">Discord</a></li>
            <li><a href="pitch.html">Pitch Deck</a></li>
            <li><a href="tearsheet.html">Tearsheets</a></li>
            <li><a href="tech.html">Tech Stack</a></li>
            <li><a href="cv.html">CEO CV</a></li>
          </ul>
          <button
            className={styles.hamburger}
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* Overlay and Menu */}
        <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.active : ''}`} onClick={() => setIsMenuOpen(false)} />
        <div className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
          <button
            className={styles.closeButton}
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <ul>
            <li><a href="/docs/introduction/orion" onClick={() => setIsMenuOpen(false)}>Docs</a></li>
            <li><a href="https://discord.gg/8bAXxPSPdw" onClick={() => setIsMenuOpen(false)}>Discord</a></li>
            <li><a href="pitch.html" onClick={() => setIsMenuOpen(false)}>Pitch Deck</a></li>
            <li><a href="tearsheet.html" onClick={() => setIsMenuOpen(false)}>Tearsheets</a></li>
            <li><a href="tech.html" onClick={() => setIsMenuOpen(false)}>Tech Stack</a></li>
            <li><a href="cv.html" onClick={() => setIsMenuOpen(false)}>CEO CV</a></li>
          </ul>
        </div>

        {/* Hide hero section when menu is open */}
        {!isMenuOpen && (
          <main className={styles.heroSection}>
            <h1 className={styles.heroTitle}>
              Institutional-grade<br />Portfolio <br /> Management <br />in DeFi
            </h1>
            <p className={styles.heroSubtitle}>
              Permissionless vault infrastructure for<br /> intelligent, privacy-preserving portfolio management.
            </p>
          </main>
        )}
      </div>
    </>
  );
}