import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Bootstrap',
    'Git',
    'GitHub',
    'Redux',
    'REST API',
    'JWT',
    'Postman',
    'Tailwind',
    'Cloudinary',
    'Axios',
    'Figma',
    'Wireframing',
    'Prototyping',
    'User Research',
    'Sketch',
];

function Tools() {
    return (
        <Container id="skills" style={{ paddingTop: '120px', marginBottom: '90px' }}>
            {/* HEADER */}
            <div
                className="d-flex justify-content-between align-items-center mb-4"
                style={{ flexWrap: "wrap" }}
            >
                <div>
                    <h2
                        className="bebas-neue-regular"
                        style={{
                            color: "#ffffff80",
                            fontWeight: "700",
                            fontSize: "4rem",
                            letterSpacing: "6px",
                            textTransform: "uppercase",
                            position: "relative",
                            display: "inline-block",
                            paddingBottom: "8px",
                        }}
                    >
                        My Tools.
                        <span
                            style={{
                                content: '""',
                                position: "absolute",
                                left: 0,
                                bottom: 0,
                                width: "250px",
                                height: "2px",
                                backgroundColor: "#c8102e", // same orange shade
                            }}
                        ></span>
                    </h2>

                    <p
                        className="raleway"
                        style={{
                            color: "white",
                            fontSize: "1rem",
                            letterSpacing: "1px",
                            marginTop: "10px",
                            maxWidth: "600px",
                        }}
                    >
                        The technologies and tools I use to design, build, and deploy efficient,
                        modern web applications with precision and creativity.
                    </p>
                </div>
            </div>

            {/* TOOL GRID */}
            <Row className="g-3" style={{ marginTop: '60px' }}>
                {skills.map((skill, index) => (
                    <Col
                        xs={6}
                        sm={4}
                        md={3}
                        lg={2}
                        key={index}
                        className="d-flex justify-content-start"
                    >
                        <div
                            className="skill-box d-flex justify-content-center align-items-center"
                            style={{
                                width: "100%",
                                backgroundColor: "#000000ff",
                                color: "white",
                                padding: "10px 0",
                                borderRadius: "4px",
                                textAlign: "center",
                                transition: "transform 0.3s ease, background-color 0.3s ease",
                            }}
                        >
                            <span className="raleway fw-semibold" style={{ fontSize: "0.9rem" }}>
                                {skill}
                            </span>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* HOVER EFFECT */}
            <style>
                {`
                    .skill-box:hover {
                        background-color: #c8102e;
                        transform: translateY(-4px);
                    }
                `}
            </style>
        </Container>
    );
}

export default Tools;
