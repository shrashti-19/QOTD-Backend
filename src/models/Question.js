const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  problemStatement: {
    type: String,
    required: true
  },
  sampleInput: String,
  sampleOutput: String,
  expectedOutput: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    unique: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);