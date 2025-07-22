import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import "./Home.css";

const ANIMATED_TEXT = "Welcome to AllStag";

const Splash = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Wait for the animated text to finish before calling onComplete
      const totalAnim = ANIMATED_TEXT.length * 80 + 1000; // ms
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, totalAnim);
      setShowContent(true);
      return () => clearTimeout(timer);
    }
  }, [loading, onComplete]);

  return (
    <div className="splash-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(275deg, #0D1A29, #173A53, #235E7C)' }}>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div className="splash-content">
          <h1 className="animated-title">
            {ANIMATED_TEXT.split("").map((char, idx) => (
              <span
                key={idx}
                className="animated-letter"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p style={{ fontSize: '1.5rem', marginTop: '1rem', textAlign: 'center' }}><i>Shop the best shirts and t-shirts</i></p>
        </div>
      )}
    </div>
  );
};

export default Splash; 