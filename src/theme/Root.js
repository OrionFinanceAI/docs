import React from 'react';
import StarryBackground from '@site/src/components/StarryBackground';
import { useLocation } from '@docusaurus/router';

function MobileFooterBar() {
  const location = useLocation();
  const isDocs = location.pathname.startsWith('/docs');
  return isDocs ? (
    <div className="mobile-footer-bar">
      <a href="/docs/introduction/orion" className="active">Docs</a>
      <a href="https://discord.gg/8bAXxPSPdw" target="_blank" rel="noopener noreferrer">Discord</a>
      <a href="/dataroom.html" target="_blank" rel="noopener noreferrer">Data Room</a>
      <a href="/app.html" target="_blank" rel="noopener noreferrer" className="launch-app">Launch App</a>
    </div>
  ) : null;
}

export default function Root({children}) {
  const location = useLocation();
  const noStars = location.pathname === '/' || location.pathname.startsWith('/app');

  return (
    <>
      {!noStars && <StarryBackground />}
      {children}
      <MobileFooterBar />
    </>
  );
} 