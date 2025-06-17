const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15,
        match: [/^[+]?[\d\s\-()]{10,15}$/, 'Please fill a valid phone number']
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
