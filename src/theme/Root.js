import React from 'react';
import StarryBackground from '@site/src/components/StarryBackground';

export default function Root({children}) {
  return (
    <>
      <StarryBackground />
      {children}
    </>
  );
} 