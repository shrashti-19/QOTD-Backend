const express = require('express');
const router = express.Router();
const { submitAnswer, getQuestionStats,getLeaderboard } = require('../controllers/submissionController');

router.post('/', submitAnswer);
router.get('/stats/:questionId', getQuestionStats);
router.get('/leaderboard/:questionId', getLeaderboard);

module.exports = router;