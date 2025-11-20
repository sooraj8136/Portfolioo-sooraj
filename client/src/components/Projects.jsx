import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import project1Image from "../assets/projects/Screenshot 2025-11-07 103623.png";
import project2Image from "../assets/projects/Screenshot 2025-11-05 165915.png";

const projectData = [
    {
        title: "Modern Shop",
        description:
            "A full-stack MERN application with a modern and responsive design. It includes secure user authentication, dynamic product listings, cart and order management, and an intuitive checkout experience to ensure smooth online shopping.",
        liveUrl: "https://h-m-e-commerce-main-project-client.vercel.app/",
        codeUrl: "https://github.com/sooraj8136/H-M-E-commerce-main-Project",
        image: project1Image,
    },
    {
        title: "Car-Rental Website",
        description:
            "A full-stack MERN web application that allows users to browse, book, and manage car rentals in real time. Features include secure authentication, live availability checks, booking confirmation flow, and Stripe payment integration for seamless transactions.",
        liveUrl: "https://car-rental-client-lyart.vercel.app",
        codeUrl: "https://github.com/sooraj8136/car-rental",
        image: project2Image,
    },
];

function Projects() {
    return (
        <Container id="projects" style={{ paddingTop: "120px", marginBottom: "90px" }}>
            {/* HEADER */}
            <div
                className="d-flex justify-content-between align-items-center mb-5"
                style={{ flexWrap: "wrap" }}
            >
                <div style={{ position: "relative", display: "inline-block", paddingBottom: "10px" }}>
                    <h2
                        className="bebas-neue-regular"
                        style={{
                            color: "#ffffffc6",
                            fontWeight: "700",
                            fontSize: "4rem",
                            letterSpacing: "6px",
                            textTransform: "uppercase",
                            marginBottom: "0",
                        }}
                    >
                        Featured Projects.
                        {/* Orange underline */}
                        <span
                            style={{
                                position: "absolute",
                                left: 0,
                                bottom: 0,
                                width: "300px",
                                height: "2px",
                                backgroundColor: "#c8102e",
                            }}
                        ></span>
                    </h2>
                    <p
                        className="raleway"
                        style={{ color: "white", fontSize: "1rem", marginTop: "10px" }}
                    >
                        Each project reflects my passion for clean design, smooth performance, and real-world usability.
                    </p>
                </div>

            </div>

            {/* PROJECT GRID */}
            <Row className="g-4" style={{marginTop:"50px"}}> {/* Removed justify-content-center */}
                {projectData.map((project, index) => (
                    <Col md={6} lg={5} xl={4} key={index}>
                        <Card
                            className="border-0 project-card"
                            style={{
                                backgroundColor: "#0d0d0d",
                                borderRadius: "6px",
                                overflow: "hidden",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                marginTop:"40px"
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src={project.image}
                                alt={project.title}
                                style={{
                                    width: "100%",
                                    display: "block",
                                    transition: "transform 0.4s ease",
                                }}
                            />

                            <Card.Body style={{ backgroundColor: "#0d0d0d", padding: "18px" }}>
                                <Card.Title
                                    className="raleway"
                                    style={{
                                        color: "white",
                                        fontWeight: "700",
                                        fontSize: "1.1rem",
                                        marginBottom: "8px",
                                    }}
                                >
                                    {project.title}
                                </Card.Title>

                                <Card.Text
                                    className="raleway"
                                    style={{
                                        color: "gray",
                                        fontSize: "0.9rem",
                                        marginBottom: "14px",
                                    }}
                                >
                                    {project.description}
                                </Card.Text>

                                {/* Text Links */}
                                <div className="d-flex flex-column">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="raleway"
                                        style={{
                                            color: "#c8102e",
                                            fontWeight: "600",
                                            fontSize: "0.9rem",
                                            textDecoration: "none",
                                            marginBottom: "5px",
                                        }}
                                    >
                                        VIEW PROJECT →
                                    </a>
                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="raleway"
                                        style={{
                                            color: "#c8102e",
                                            fontWeight: "600",
                                            fontSize: "0.9rem",
                                            textDecoration: "none",
                                        }}
                                    >
                                        GITHUB CODE →
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Hover effects */}
            <style>
                {`
                    .project-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 8px 25px rgba(255, 77, 77, 0.2);
                    }

                    .project-card:hover img {
                        transform: scale(1.05);
                    }

                    a:hover {
                        text-decoration: underline;
                    }
                `}
            </style>
        </Container>
    );
}

export default Projects;
