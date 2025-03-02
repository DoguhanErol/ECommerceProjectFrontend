// src/components/FailedAlert.tsx
import React, { useEffect, useState } from 'react';

type Prop = {
  message: string; // Message prop
};

const FailedAlert: React.FC<Prop> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true); // Visibility state

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (!isVisible) return null; // Don't render if not visible

  return (
    <div role="alert" className="alert alert-error max-w-96 h-auto fixed top-20 z-50 animate__animated animate__backInDown">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{message}</span>
    </div>
  );
};

export default FailedAlert;
