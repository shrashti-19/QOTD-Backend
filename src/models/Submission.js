const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  userAnswer: {
    type: String,
    required: true
  },
  result: {
    type: String,
    enum: ['Correct', 'Incorrect'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);