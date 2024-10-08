const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    skills: { type: String, required: true }
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
