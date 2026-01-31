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


//submission statistics
exports.getQuestionStats = async (req, res) => {
  try {
    const { questionId } = req.params;

    const totalAttempts = await Submission.countDocuments({ question: questionId });
    const correctAttempts = await Submission.countDocuments({ question: questionId, result: "Correct" });

    const successRate = totalAttempts === 0 ? 0 : ((correctAttempts / totalAttempts) * 100).toFixed(2);

    res.status(200).json({
      totalAttempts,
      correctAttempts,
      successRate: `${successRate}%`
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


exports.getLeaderboard = async (req, res) => {
  try {
    const { questionId } = req.params;

    const leaderboard = await Submission.find({ question: questionId, result: "Correct" })
      .sort({ createdAt: 1 }) // earliest first
      .limit(10);

    res.status(200).json({
      message: "Top performers",
      leaderboard
    });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};