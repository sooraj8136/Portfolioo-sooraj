import React, { useState } from 'react';
import { axiosInstance } from '../config/axiosInstance';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaUser, FaEnvelope } from 'react-icons/fa';
import mapImage from '../assets/projects/b45753e2d4cf284bc4e1fa8dbdeb3d47.jpg';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState('');
    const [mouseX, setMouseX] = useState(0);

    const validateInputs = () => {
        const { name, email, phone, message } = formData;

        if (!name || !email || !phone || !message) {
            return "All fields are required.";
        }

        if (phone.length < 10 || phone.length > 15) {
            return "Enter a valid phone number.";
        }

        const phoneRegex = /^[+]?[\d\s\-()]{10,15}$/;
        if (!phoneRegex.test(phone)) {
            return "Phone number format is invalid.";
        }

        return null;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateInputs();
        if (validationError) {
            setStatus(validationError);
            setTimeout(() => setStatus(''), 3000);
            return;
        }

        const tempFormData = formData;
        setFormData({ name: '', email: '', phone: '', message: '' });
        setStatus('✔️ Message sent successfully!');
        setTimeout(() => setStatus(''), 3000);

        try {
            await axiosInstance.post('/contact/contact-message', tempFormData);
        } catch (error) {
            console.error(error);
            setStatus('Failed to send message. Try again.');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        setMouseX(x);
    };

    return (
        <Container id="contact" style={{ paddingTop: '120px', marginBottom: '90px' }}>
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
                GET IN TOUCH.
                <span
                    style={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: "280px",        // underline length
                        height: "2px",        // thickness
                        backgroundColor: "#c8102e", // orange underline color
                    }}
                ></span>
            </h2>


            <Row className="mt-5 text-white">
                <Col
                    md={6}
                    className="d-flex flex-column justify-content-center align-items-start text-start mb-4 mb-md-0"
                >
                    <h4 className="raleway" style={{ fontSize: "4rem", marginBottom: "50px" }}>
                        Contact me
                    </h4>

                    <div
                        className="map-overlay-container"
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "300px",
                            backgroundImage: `url(${mapImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "10px",
                            overflow: "hidden",
                            color: "white",
                        }}
                    >
                        {/* Orange-colored map pin with no blue shadow */}
                        <FaMapMarkerAlt
                            className="map-pin-icon"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -100%)",
                                color: "#c8102e",
                                fontSize: "2rem",
                                boxShadow: "none",
                                textShadow: "none",
                                outline: "none",
                            }}
                        />

                        <span
                            className="raleway"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                padding: "4px 8px",
                                fontSize: "0.9rem",
                                fontWeight: "600",
                            }}
                        >
                            I'm here
                        </span>

                        <div
                            className="contact-overlay-text"
                            style={{
                                position: "absolute",
                                top: "20px",
                                left: "0px",
                                padding: "10px 16px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px",
                            }}
                        >
                            <div className="d-flex align-items-center gap-2">
                                <FaUser /> <span>Sooraj</span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <FaMapMarkerAlt style={{ color: "#ffffffff", boxShadow: "none", textShadow: "none", outline: "none" }} />
                                <span>Malappuram, Kerala</span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <FaEnvelope /> <span>soorajcpchathanathparampil@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md={6}>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <p className="raleway mb-4 text-start">
                            Whether you have an exciting project to discuss, a collaboration idea, or just want to say hello — I’d love to hear from you. Let’s create something awesome together!
                        </p>
                        {['name', 'email', 'phone'].map((field) => (
                            <div className="mb-3" key={field}>
                                <input
                                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                    className="form-control custom-input"
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        ))}
                        <div className="mb-3">
                            <textarea
                                className="form-control custom-input"
                                placeholder="Message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button
                                type="submit"
                                className="about-me-btn"
                            >
                                CONTACT ME
                            </button>
                        </div>
                        {status && <p className="mt-3 text-center">{status}</p>}
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
