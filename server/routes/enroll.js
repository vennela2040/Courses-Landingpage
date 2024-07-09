const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');

// POST route for enrolling a student
router.post('/', async (req, res) => {
  const { name, email, phone, discount } = req.body;
  try {
    const newEnrollment = new Enrollment({
      name,
      email,
      phone,
      discount
    });
    await newEnrollment.save();
    res.status(201).json({ message: 'Enrollment successful' });
  } catch (err) {
    console.error('Error enrolling:', err);
    res.status(500).json({ error: 'Enrollment failed' });
  }
});

module.exports = router;
