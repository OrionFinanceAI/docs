import React from 'react';
import StarryBackground from '@site/src/components/StarryBackground';
import { useLocation } from '@docusaurus/router';

export default function Root({children}) {
  const location = useLocation();
  const noStars = location.pathname === '/' || location.pathname.startsWith('/app');

  return (
    <>
      {!noStars && <StarryBackground />}
      {children}
    </>
  );
} 