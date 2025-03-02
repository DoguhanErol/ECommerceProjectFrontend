import React, { useEffect, useState } from 'react';
import 'animate.css';

type Prop = {
  message: string; // Message prop
};

const SuccessAlert: React.FC<Prop> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true); // Visibility state

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (!isVisible) return null; // Don't render if not visible

  return (
    <div role="alert" className="alert alert-success max-w-96 h-auto fixed top-20 z-50 animate__animated animate__backInDown">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{message}</span>
    </div>
  );
};

export default SuccessAlert;
