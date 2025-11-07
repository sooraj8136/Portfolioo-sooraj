import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
    return (
        <Container>
            <section id="about" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                {/* HEADER */}
                <div
                    className="d-flex justify-content-between align-items-center mb-5"
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
                                paddingBottom: "10px",
                            }}
                        >
                            ABOUT ME.
                            {/* Orange underline */}
                            <span
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0,
                                    width: "250px",
                                    height: "2px",
                                    backgroundColor: "#c8102e",
                                }}
                            ></span>
                        </h2>
                    </div>
                </div>

                {/* CONTENT */}
                <Container>
                    <h1 className="about-heading raleway">
                        A <span style={{ fontWeight: "200" }}>goal-oriented</span> MERN stack developer, passionate about transforming ideas into reality.
                    </h1>

                    <p
                        className="raleway"
                        style={{
                            color: "white",
                            wordSpacing: '1px',
                            fontWeight: "200",
                            marginTop: "30px",
                            letterSpacing: "1px",
                        }}
                    >
                        As a passionate MERN stack developer, UI/UX designer, and a lifelong artist, I bring ideas to life through a seamless fusion of clean code, compelling design, and visual storytelling. My expertise lies in crafting responsive, high-performance web applications using MongoDB, Express.js, React.js, and Node.js, while ensuring every interface is intuitive, aesthetic, and user-centric. I design thoughtful user experiences using tools like Figma, Sketch, and Adobe XD, focusing on wireframes, prototypes, and user flows. With a problem-solving mindset, I approach challenges with creativity and logic — building smart, scalable solutions that deliver both function and delight.
                    </p>
                </Container>
            </section>
        </Container>
    );
}

export default About;
