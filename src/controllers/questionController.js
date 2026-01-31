const Question = require('../models/Question');

exports.getTodayQuestion = async (req, res) => {
  try {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    const question = await Question.findOne({
      date: { $gte: start, $lte: end }
    });

    if (!question) {
      return res.status(404).json({ message: "No question found for today" });
    }

    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
exports.createQuestion = async (req, res) => {
  try {
    const { title, difficulty, problemStatement, sampleInput, sampleOutput, expectedOutput, date } = req.body;

    const question = new Question({
      title,
      difficulty,
      problemStatement,
      sampleInput,
      sampleOutput,
      expectedOutput,
      date
    });

    await question.save();
    res.status(201).json({ message: "Question created", question });

  } catch (error) {
    res.status(400).json({ message: "Error creating question", error: error.message });
  }
};


exports.getHints = async (req, res) => {
  try {
    const { questionId } = req.params;

    const question = await Question.findById(questionId).select('hints');

    if (!question) return res.status(404).json({ message: "Question not found" });

    res.status(200).json({ hints: question.hints });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};