const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Enrollment = require('./models/Enrollment'); // Import the Enrollment model
const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware
app.use(cors());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/techquixor'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// POST route for enrollment
app.post('/enroll', async (req, res) => {
  const { name, email, phone, discount } = req.body;

  // Validate input
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'Please fill in all required fields' });
  }

  try {
    const newEnrollment = new Enrollment({
      name,
      email,
      phone,
      discount
    });

    await newEnrollment.save();
    res.status(201).json({ message: 'Enrollment successful' });
  } catch (error) {
    console.error('Error saving enrollment:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
