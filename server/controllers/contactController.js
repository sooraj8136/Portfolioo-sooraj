const nodemailer = require('nodemailer');
const Contact = require('../models/contact')

const contacts = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newMessage = new Contact(req.body);
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
            subject: `New Message from a contact ${name}`,
            text: `You have received a new message from your portfolio:\n
Name: ${name}\n
Email: ${email}\n
Phone: ${phone}\n
Message: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(201).json({ message: "Message sent successfully!" });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};


module.exports = contacts;
