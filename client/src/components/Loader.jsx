import React, { useEffect, useState } from "react";

function Loader({ onFinish }) {
  const cycleNames = ["SOORAJ", "CONSISTANCY", "DESCIPLINE", "DESIGNER", "MERN STACK"];
  const finalName = "PORTFOLIO.";

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
    <div className="loader-container">
      <p
        className="loading-text shuffle-text bebas-neue-regular"
        style={{
          color: "#ffffff58",
          fontWeight: "700",
          letterSpacing: "8px",
          fontSize: "3.5rem",
          transition: "color 0.3s ease",
        }}
      >
        {isFinal ? (
          <>
            PORTFOLIO
            <span style={{ color: "#ffffff" }}>.</span> {/* white dot */}
          </>
        ) : (
          cycleNames[index]
        )}
      </p>
    </div>
  );
}

export default Loader;
