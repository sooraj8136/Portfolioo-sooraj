import React, { useRef } from 'react';

import {
  FaLinkedin,
  FaPinterest,
  FaInstagram,
  FaGithub,
  FaPhone
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { motion, useInView } from 'framer-motion';

function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const iconsRef = useRef(null);

  const titleInView = useInView(titleRef, { triggerOnce: false, margin: '-100px' });
  const subtitleInView = useInView(subtitleRef, { triggerOnce: false, margin: '-100px' });
  const iconsInView = useInView(iconsRef, { triggerOnce: false, margin: '-100px' });

  const socialLinks = [
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/soorajcp/' },
    { icon: <FaPinterest />, link: 'https://pin.it/5UyYjs6zJ' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/ssoorajhhh' },
    { icon: <SiGmail />, link: 'mailto:soorajcpchathanathparampil@mail@gmail.com' },
    { icon: <FaGithub />, link: 'https://github.com/sooraj8136' },
    { icon: <FaPhone />, link: 'tel:+918136951157' }
  ];

  return (
  <div
    id="home"
    className="home-section bebas-neue-regular"
    style={{
      position: "relative",
      overflow: "hidden",
      height: "100vh",
      background: "radial-gradient(circle at 20% 50%, #35383dff 0%, #000000ff 40%, #0f1113 100%)", 
      // ⭐ Glow is now on the left side
    }}
  >
    {/* Background Text */}
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: "0",
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          fontWeight: "400",
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(232, 232, 232, 1))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          whiteSpace: "nowrap",
          letterSpacing: "20px",
          pointerEvents: "none",
          margin: 0,
        }}
      >
        SOORAJ C P
      </h1>
    </div>

    {/* Centered Content */}
    <div
      className="home-content"
      style={{
        position: "relative",
        zIndex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
        marginTop: "150px",
      }}
    >
      <motion.p
        ref={subtitleRef}
        className="raleway hover-glow-subtitle"
        style={{
          wordSpacing: "3px",
          color: "white",
          fontSize: "1.5rem",
          marginBottom: "0px",
          letterSpacing: "2px",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={
          subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        MERN STACK DEVELOPER
      </motion.p>

      <motion.div
        ref={iconsRef}
        className="icon-container"
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexShrink: 0,
          overflowX: "auto",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={iconsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {socialLinks.map(({ icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              color: "white",
              fontSize: "1.8rem",
              minWidth: "1.8rem",
              textAlign: "center",
            }}
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </div>
  </div>
);

}

export default Home;
