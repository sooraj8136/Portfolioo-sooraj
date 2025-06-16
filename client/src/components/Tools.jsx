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
        <Container id = "skills" style={{ paddingTop: '120px', marginBottom: '90px' }}>
            <h1 className="text-center raleway" style={{ color: 'white', position: 'relative' }}>
                My Tools
                <div className="heading-underline mx-auto"></div>
            </h1>
            <Row className="justify-content-center" style={{ marginTop: '70px' }}>
                {skills.map((skill, index) => (
                    <Col xs={6} sm={4} md={3} lg={2} key={index} className="mb-2 d-flex justify-content-center">
                        <div className="skill-box d-flex justify-content-center align-items-center">
                            <span className="raleway fw-semibold">{skill}</span>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Tools;
