import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { GoArrowUpRight } from 'react-icons/go';
import { VscGithubAlt } from 'react-icons/vsc';
import project1Image from '../assets/projects/Screenshot 2025-06-15 125909.png';

const projectData = [
    {
        title: 'Modern Shop',
        description: 'A responsive MERN stack e-commerce app with user auth, product listings, cart, and order features.',
        liveUrl: 'https://h-m-e-commerce-main-project-client.vercel.app/',
        codeUrl: 'https://github.com/sooraj8136/H-M-E-commerce-main-Project',
        image: project1Image,
    },
];

function Projects() {
    return (
        <Container style={{ marginTop: '100px', marginBottom:'60px' }}>
            <h1 className="text-center raleway" style={{ color: 'white', position: 'relative' }}>
                Featured Projects
                <div className="heading-underline mx-auto"></div>
            </h1>
            <Row className="mt-5 justify-content-center">
                {projectData.map((project, index) => (
                    <Col md={6} lg={4} className="mb-4 d-flex justify-content-center" key={index}>
                        <div className="project-card-container">
                            <Card className="project-card border-0" style={{ marginTop: '50px', width: '100%', maxWidth: '420px', backgroundColor: "black" }}>
                                <div className="image-wrapper position-relative">
                                    <Card.Img
                                        variant="top"
                                        src={project.image}
                                        alt={project.title}
                                        className="project-img"
                                    />
                                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center gap-3">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="icon-link text-white"
                                        >
                                            <GoArrowUpRight size={26} />
                                        </a>
                                        <a
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="icon-link text-white"
                                        >
                                            <VscGithubAlt size={26} />
                                        </a>
                                    </div>
                                </div>
                                <Card.Body className="text-start p-2" style={{ backgroundColor: "black", fontSize: "0.9rem" }}>
                                    <Card.Title className="raleway" style={{ color: 'white' }}>
                                        {project.title}
                                    </Card.Title>
                                    <Card.Text className="raleway" style={{ color: 'white' }}>
                                        {project.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Projects;
