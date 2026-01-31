const Question = require('../models/Question');

exports.getTodayQuestion = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const question = await Question.findOne({ date: today });

    if (!question) {
      return res.status(404).json({ message: "No question found for today" });
    }

    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};