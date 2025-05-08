import React from 'react';
import StarryBackground from '@site/src/components/StarryBackground';
import { useLocation } from '@docusaurus/router';

export default function Root({children}) {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <>
      {!isLanding && <StarryBackground />}
      {children}
    </>
  );
} 