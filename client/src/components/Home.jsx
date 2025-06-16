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
    <div id="home" className="home-section">
      <div className="home-content" style={{ marginTop: '10px' }}>
        <motion.h1
          ref={titleRef}
          className="raleway hover-glow-title"
          style={{ fontSize: '4rem', letterSpacing: '4px', fontWeight: '300' }}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          SOORAJ C P
        </motion.h1>

        <motion.p
          ref={subtitleRef}
          className="raleway hover-glow-subtitle"
          style={{ wordSpacing: '3px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={subtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          MERN stack developer | UI UX Designer
        </motion.p>

        <motion.div
          ref={iconsRef}
          className="icon-container"
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
              transition={{ type: 'spring', stiffness: 300 }}
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
