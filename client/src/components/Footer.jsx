import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer text-white py-4 mt-5" style={{ backgroundColor: "black" }}>
            <Container>
                <Row className="align-items-center text-center text-md-start">
                    <Col md={4} className="mb-3 mb-md-0">
                        <h5 className="mb-2 raleway">Sooraj C P</h5>
                        <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
                            MERN stack developer | UI UX Designer<br />
                            Based in Kerala, India.
                        </p>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0 d-flex justify-content-center gap-4">
                        <a href="https://github.com/sooraj8136" target="_blank" rel="noreferrer" className="glow-icon text-white">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/soorajcp/  " target="_blank" rel="noreferrer" className="glow-icon text-white">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="mailto:soorajcpchathanathparampil@gmail.com" className="glow-icon text-white">
                            <FaEnvelope size={24} />
                        </a>
                    </Col>
                    <Col md={4} className="text-md-end text-center mt-3 mt-md-0">
                        <small style={{ color: '#777' }}>
                            © 2025 Sooraj C P. All rights reserved.
                        </small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
