// Create app and add our vaults. References:
// https://app.gauntlet.xyz/
// https://www.re7labs.xyz/dashboard
// https://app.morpho.org/base/earn
// https://app.relend.network/dashboard
// https://app.enzyme.finance/discover/vaults
// https://alphaping.ch/
// https://yearn.fi/v3
// https://app.veda.tech/earn
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
        <meta name="description" content="Orion Finance - Permissionless vault infrastructure for intelligent, privacy-preserving portfolio management." />
        <meta property="og:title" content="Orion Finance - DeFi Asset Management" />
        <meta property="og:description" content="Permissionless vault infrastructure for intelligent, privacy-preserving portfolio management." />
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
          style={{ backgroundImage: 'url(/img/background_7.png)' }}
        >
          <source src="/img/video_bg_5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <nav className={styles.navbar}>
          <div className={styles.logoNav}>
            <a href="/">
              <img src="/img/OF_lockup_white.png" alt="Orion Finance Logo" className={styles.logo} />
            </a>
          </div>
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
        </div>

        {!isMenuOpen && (
          <main className={styles.heroSection}>
            <div className={styles.tableContainer}>
              <table className={styles.vaultTable}>
                <thead>
                  <tr>
                    <th>Vault Name</th>
                    <th>Chain</th>
                    <th>Vault Address</th>
                    <th>IPFS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Orion Vault One",
                      chain: "Ethereum",
                      address: "Stealth Address",
                      ipfs: "bafkreid7e2tjb6da2iyw6d6sounqsbcnarcdgl5b2q5bs6ywzy3mpvuyba",
                    },
                    {
                      name: "Orion Vault 10",
                      chain: "Optimism",
                      address: "Stealth Address",
                      ipfs: "bafkreihqytt7irscmlpiswrmcniayyem7aplw6qla35gxtwwe4iyubjodi",
                    },
                    {
                      name: "Orion Vault 137",
                      chain: "Polygon",
                      address: "Stealth Address",
                      ipfs: "bafkreid4f4tzm7qk5eghfc2pqzbx5ti6sgga2pcid4j25yqdncce2vuazu",
                    },
                    {
                      name: "Orion Vault 146",
                      chain: "Sonic",
                      address: "Stealth Address",
                      ipfs: "bafkreiaxsfhgfh2qcs6eqo3vgf6hvj65dmj7cpfdkjalw7u3ngrhsnmgq4",
                    },
                    {
                      name: "Orion Vault 8453",
                      chain: "Base",
                      address: "Stealth Address",
                      ipfs: "bafkreiealmbi2cja4axllcexg6tdh5efitbkgzx2vrciokqzwvryzoatoa",
                    },
                    {
                      name: "Orion Vault 42161",
                      chain: "Arbitrum",
                      address: "Stealth Address",
                      ipfs: "bafkreichoworee7cvmndopxrr3pmirnkiaowr2qm4b7ccpwvnss4ymawri",
                    },
                    {
                      name: "Orion Vault 137",
                      chain: "Base",
                      address: "Stealth Address",
                      ipfs: "bafkreid4f4tzm7qk5eghfc2pqzbx5ti6sgga2pcid4j25yqdncce2vuazu",
                    },
                  ].map((vault, idx) => (
                    <tr key={idx}>
                      <td>{vault.name}</td>
                      <td>{vault.chain}</td>
                      <td><code>{vault.address}</code></td>
                      <td>
                        <a href={`https://gateway.lighthouse.storage/ipfs/${vault.ipfs}`} target="_blank" rel="noopener noreferrer">
                          {vault.ipfs.slice(0,4) + '...' + vault.ipfs.slice(-4)}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>

        )}
      </div>
    </>
  );
}