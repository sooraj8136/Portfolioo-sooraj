import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const words = ["goal-oriented", "visionary", "dedicated", "versatile"];

function About() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
            <Container>
                <h1 className="about-heading raleway">
                    A <span className="animated-word" style={{ fontWeight: "200" }}>{words[index]}</span> MERN stack developer and UI/UX Designer, passionate about transforming ideas into reality.
                </h1>
                <p
                    className='raleway'
                    style={{
                        color: "white",
                        wordSpacing: '1px',
                        fontWeight: "200",
                        marginTop: "30px",
                        letterSpacing: "1px"
                    }}
                >
                    As a passionate MERN stack developer, UI/UX designer, and a lifelong artist, I bring ideas to life through a seamless fusion of clean code, compelling design, and visual storytelling. My expertise lies in crafting responsive, high-performance web applications using MongoDB, Express.js, React.js, and Node.js, while ensuring every interface is intuitive, aesthetic, and user-centric. I design thoughtful user experiences using tools like Figma, Sketch, and Adobe XD, focusing on wireframes, prototypes, and user flows. With a problem-solving mindset, I approach challenges with creativity and logic — building smart, scalable solutions that deliver both function and delight.
                </p>
            </Container>
        </section>
    );
}

export default About;
