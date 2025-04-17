import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

export default function Home() {
  useEffect(() => {
    // Load the required scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const scripts = [
      '/assets/js/jquery.min.js',
      '/assets/js/jquery.dropotron.min.js',
      '/assets/js/jquery.scrolly.min.js',
      '/assets/js/jquery.scrollex.min.js',
      '/assets/js/browser.min.js',
      '/assets/js/breakpoints.min.js',
      '/assets/js/util.js',
      '/assets/js/main.js'
    ];

    Promise.all(scripts.map(loadScript)).catch(console.error);
  }, []);

  return (
    <>
      <Head>
        <title>Orion Finance</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Orion Finance - Leading DeFi asset management platform utilizing Financial Machine Learning for multi-strategy trading across EVM chains." />
        <meta property="og:title" content="Orion Finance - DeFi Asset Management" />
        <meta property="og:description" content="Financial Machine Learning Multi-Strategy Asset Management in DeFi" />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
        <noscript>{`
          <link rel="stylesheet" href="/assets/css/noscript.css" />
        `}</noscript>
      </Head>

      <div id="page-wrapper" className={styles.pageWrapper}>
        {/* Header */}
        <section id="header" className={styles.header}>
          <div className={styles.inner}>
            <div className={styles.logoContainer}>
              <img src="/img/OF_lockup_blue.png" alt="Orion Finance Logo" className={styles.headerLogo} />
            </div>
            <br />
            <br />
            <header className={styles.headerContent}>
              <h1>Financial Machine Learning<br />Multi-Strategy Asset Management<br />in DeFi</h1>
            </header>
          </div>
        </section>

        <div className={`${styles.wrapper} ${styles.style2}`}>
          <article id="main" className={`${styles.container} ${styles.special}`}>
            <header>
              <h2>The Hierarchy of Asset Management</h2>
              <p>
                Dozens of EVM Chains. Hundreds of Protocols. Tens of Thousands of Assets.
                <br />
                A call for a Financial Machine Learning revolution in DeFi.
              </p>
            </header>
            <span className={styles.imageFeatured}>
              <img src="/img/foodchain.png" alt="Hierarchy of Asset Management Illustration" />
            </span>
          </article>
        </div>

        <div className={styles.divider}></div>

        <div className={`${styles.wrapper} ${styles.style2}`}>
          <article id="main" className={`${styles.container} ${styles.special}`}>
            <header>
              <h2>Tokenizing the Multi-strategy Pod Shop Model</h2>
              <p>
                A yield-bearing tokenomics powered by a permissionless suite of DeFi products:
                <br />
                DeFi-native indexing and ML-optimized vaults.
              </p>
            </header>
            <span className={styles.imageFeatured}>
              <img src="/img/pods.png" alt="Multi-strategy Pod Shop Model Visualization" />
            </span>
          </article>
        </div>

        {/* Footer */}
        <div id="footer" className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.row}>
              <section className={styles.footerSection}>
                <ul className={styles.divided}>
                  <li>
                    <article className={styles.postStub}>
                      <header>
                        <h3><a href="/docs/introduction/orion">Documentation</a></h3>
                      </header>
                    </article>
                  </li>
                  <li>
                    <article className={styles.postStub}>
                      <header>
                        <h3>
                          <a href="/pitch.html" target="_blank">Pitch Deck</a>
                          <span className={styles.separator}>-</span>
                          <a href="/tearsheet.html">Tearsheets</a>
                          <span className={styles.separator}>-</span>
                          <a href="/tech.html">Tech Stack</a>
                          <span className={styles.separator}>-</span>
                          <a href="/cv.html">CEO CV</a>
                        </h3>
                      </header>
                    </article>
                  </li>
                </ul>
              </section>
            </div>

            <div className={styles.dividerWhite}></div>

            <div className={styles.logoContainer}>
              <a href="/">
                <img src="/img/Tagline_yellow.png" alt="Orion Finance Tagline" className={styles.footerLogo} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}