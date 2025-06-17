const nodemailer = require('nodemailer');
const Contact = require('../models/contact');

const contaCtcontroller = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        if (phone.length < 10 || phone.length > 15) {
            return res.status(400).json({ error: "Enter a valid phone number" });
        }

        const phoneRegex = /^[+]?[\d\s\-()]{10,15}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ error: "Invalid phone number format" });
        }

        const newMessage = new Contact({ name, email, phone, message });
        await newMessage.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.SMTP_EMAIL,
            subject: `New Message from Contact Form - ${name}`,
            text: `
You have received a new message from your portfolio contact form:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: "Message sent successfully!" });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = contaCtcontroller;
