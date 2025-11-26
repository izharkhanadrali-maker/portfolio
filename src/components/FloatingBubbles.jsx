import React, { useEffect, useState } from 'react';

const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  const terms = [
    'AI', 'Machine Learning', 'Deep Learning', 'NLP', 'Federated Learning', 
    'TensorFlow', 'Pandas', 'Matplotlib', 'Neural Networks', 'Computer Vision',
    'Python', 'Data Science', 'Classification', 'Clustering', 'Regression',
    'LSTM', 'CNN', 'RNN', 'Transformer', 'GPT', 'BERT', 'PyTorch',
    'Scikit-learn', 'Keras', 'OpenCV', 'Numpy', 'Supervised', 'Unsupervised',
    'Reinforcement', 'Transfer', 'Ensemble', 'Decision Trees', 'Random Forest',
    'SVM', 'K-Means', 'PCA', 'Optimization', 'Backprop', 'Attention',
    'Convolution', 'Pooling', 'Dropout', 'Activation', 'Gradient', 'Epoch', 'Batch'
  ];

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 35 }, (_, i) => {
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 150; // Start from above viewport
        
        // High variability in drift
        const driftX = (Math.random() - 0.5) * 600;
        const driftY = (Math.random() - 0.5) * 500;
        const driftZ = Math.random() * 200 - 100;
        
        return {
          id: i,
          text: terms[Math.floor(Math.random() * terms.length)],
          left: randomLeft,
          top: randomTop,
          delay: Math.random() * 12,
          duration: 15 + Math.random() * 40, // 15-55s durations
          size: 30 + Math.random() * 100,
          opacity: 0.1 + Math.random() * 0.45,
          driftX,
          driftY,
          driftZ,
          rotation: Math.random() * 720,
          direction: Math.random() > 0.4 ? 'up' : Math.random() > 0.5 ? 'down' : 'diagonal'
        };
      });
      setBubbles(newBubbles);
    };

    generateBubbles();
    const interval = setInterval(generateBubbles, 22000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-bubbles-container" aria-hidden="true">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`floating-bubble bubble-${bubble.direction}`}
          style={{
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
            '--size': `${bubble.size}px`,
            '--duration': `${bubble.duration}s`,
            '--delay': `${bubble.delay}s`,
            '--opacity': `${bubble.opacity}`,
            '--drift-x': `${bubble.driftX}px`,
            '--drift-y': `${bubble.driftY}px`,
            '--drift-z': `${bubble.driftZ}px`,
            '--rotation': `${bubble.rotation}deg`
          }}
        >
          <span className="bubble-text">{bubble.text}</span>
        </div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
