import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function PortfolioNavbar() {
  return (
    <Navbar fixed="top" className="custom-navbar">
      <Container className="justify-content-center">
        <Nav className="nav-links d-flex flex-row text-center">
          <Nav.Link href="#home" className="nav-item">Home</Nav.Link>
          <Nav.Link href="#about" className="nav-item">About</Nav.Link>
          <Nav.Link href="#projects" className="nav-item">Projects</Nav.Link>
          <Nav.Link href="#skills" className="nav-item">Skills</Nav.Link>
          <Nav.Link href="#contact" className="nav-item">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
