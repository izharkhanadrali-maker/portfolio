import React, { useState, useEffect } from 'react';

const AnimatedTitles = () => {
  const titles = [
    'AI Engineer',
    'ML Engineer',
    'AI Graduate',
    'Problem Solver'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-titles">
      <div className="titles-container">
        {titles.map((title, idx) => (
          <div
            key={idx}
            className={`animated-title ${idx === currentTitleIndex ? 'active' : ''}`}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTitles;
