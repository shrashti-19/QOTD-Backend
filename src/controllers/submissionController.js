const Submission = require('../models/Submission');
const Question = require('../models/Question');

exports.submitAnswer = async (req, res) => {
  try {
    const { questionId, userAnswer } = req.body;

    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    const result = userAnswer.trim() === question.expectedOutput.trim()
      ? "Correct"
      : "Incorrect";

    const submission = await Submission.create({
      question: questionId,
      userAnswer,
      result
    });

    res.status(201).json({
      message: "Submission evaluated",
      result,
      submission
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};