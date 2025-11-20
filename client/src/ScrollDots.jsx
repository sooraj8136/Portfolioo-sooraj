import React, { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "skills", "contact"];

function ScrollDots() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const offset = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPos >= offset - height / 4 && scrollPos < offset + height - height / 4) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-dots">
      {sections.map((sec) => (
        <a
          key={sec}
          href={`#${sec}`}
          className={`dot ${active === sec ? "active" : ""}`}
        ></a>
      ))}
    </div>
  );
}

export default ScrollDots;
