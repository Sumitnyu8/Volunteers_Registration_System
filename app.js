const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const volunteerRoutes = require('./routes/volunteers');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect('mongodb+srv://sumitnyu9:lSkYWk97y6giRQio@cluster0.kxrqd.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/volunteers', volunteerRoutes);

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
