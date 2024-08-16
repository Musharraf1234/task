import React, { useEffect, useState } from 'react';


const ProgressBar = ({ duration = 2000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate the progress bar from 0 to 100% over the duration
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bare"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
