import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete && onComplete(), 300);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loader-container">
      <div className="loader-bar-wrapper" style={{ width: '100vw' }}>
        <div className="loader-bar" style={{ width: `${progress}%` }} />
        <div className="loader-text">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader; 