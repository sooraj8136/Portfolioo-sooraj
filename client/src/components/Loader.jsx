import React, { useEffect, useState } from 'react';

function Loader({ onFinish }) {
  const cycleNames = ['SOORAJ', 'CONSISTANCY', 'DESCIPLINE', 'DESIGNER', 'MERN STACK', 'UI/UX LOVER'];
  const finalName = 'INNOVATOR';

  const [index, setIndex] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [isFinal, setIsFinal] = useState(false);

  useEffect(() => {
    let timer;

    if (cycleCount < 6) {
      timer = setTimeout(() => {
        setIndex((prev) => {
          const next = (prev + 1) % cycleNames.length;
          if (next === 0) setCycleCount((count) => count + 1);
          return next;
        });
      }, 100); 
    } else if (!isFinal) {
      setIsFinal(true);
      timer = setTimeout(() => {
        onFinish();
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [index, cycleCount, isFinal, onFinish]);

  return (
    <div className="loader-container bebas-neue-regular">
      <p className="loading-text shuffle-text">
        {isFinal ? finalName : cycleNames[index]}
      </p>
    </div>
  );
}

export default Loader;