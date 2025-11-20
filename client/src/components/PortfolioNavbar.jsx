import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function PortfolioNavbar() {
  return (
    <Navbar fixed="top" className="custom-navbar px-3">
      <Container fluid className="d-flex justify-content-between align-items-center flex-nowrap">
        <Navbar.Brand 
          href="#home" 
          className="fw-bold text-light brand-text"
          style={{textDecoration:"none"}}
        >
          portfolio.
        </Navbar.Brand>

        <Nav className="portfolio-navbar d-flex flex-row text-center gap-4 flex-nowrap">
          {/* <Nav.Link href="#home" className="nav-item" style={{letterSpacing:"2px"}}>Home</Nav.Link> */}
          <Nav.Link href="#about" className="nav-item" style={{letterSpacing:"4px"}}>ABOUT</Nav.Link>
          <Nav.Link href="#projects" className="nav-item" style={{letterSpacing:"4px"}}>PROJECTS</Nav.Link>
          <Nav.Link href="#skills" className="nav-item" style={{letterSpacing:"4px"}}>SKILLS</Nav.Link>
          <Nav.Link href="#contact" className="nav-item" style={{letterSpacing:"4px"}}>CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
