import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioNavbar from './components/PortfolioNavbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollDots from './ScrollDots';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <PortfolioNavbar />
      <ScrollDots />
      <Home />
      <hr style={{ color: "white", width: "90%", margin: "0 auto" }} />
      <About />
      <hr style={{ color: "white", width: "90%", margin: "0 auto" }} />
      <Projects />
      <hr style={{ color: "white", width: "90%", margin: "0 auto" }} />
      <Tools />
      <hr style={{ color: "white", width: "90%", margin: "0 auto" }} />
      <Contact />
      <hr style={{ color: "white", width: "90%", margin: "0 auto" }} />
      <Footer />

      {/* 🔥 Add social icons here */}
      <div className="social-icons-fixed">
        <a href="https://github.com/sooraj8136" target="_blank" rel="noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/soorajcp/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="mailto:soorajcpchathanathparampil@mail@gmail.com" target="_blank" rel="noreferrer">
          <i class="bi bi-envelope"></i>
        </a>
      </div>
    </>
  );
}

export default App;
