const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// Register New Volunteer (Create)
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const { name, email, phone, skills } = req.body;
    const newVolunteer = new Volunteer({ name, email, phone, skills });
    await newVolunteer.save();
    res.redirect('/volunteers');
});

// View List of Volunteers (Read)
router.get('/', async (req, res) => {
    const volunteers = await Volunteer.find();
    res.render('index', { volunteers });
});

// Update Volunteer Information (Update)
router.get('/edit/:id', async (req, res) => {
    const volunteer = await Volunteer.findById(req.params.id);
    res.render('edit', { volunteer });
});

router.post('/edit/:id', async (req, res) => {
    const { name, email, phone, skills } = req.body;
    await Volunteer.findByIdAndUpdate(req.params.id, { name, email, phone, skills });
    res.redirect('/volunteers');
});

// Remove Volunteers from the List (Delete)
router.post('/delete/:id', async (req, res) => {
    await Volunteer.findByIdAndDelete(req.params.id);
    res.redirect('/volunteers');
});

module.exports = router;
