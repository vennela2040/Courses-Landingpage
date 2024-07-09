const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for enrollment
const EnrollmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensures email is unique
  },
  phone: {
    type: String,
    required: true
  },
  discount: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

// Create the model from the schema and export it
const Enrollment = mongoose.model('enrollments', EnrollmentSchema);
module.exports = Enrollment;
