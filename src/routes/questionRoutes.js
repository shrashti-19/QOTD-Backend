const express = require('express');
const router = express.Router();
const { getTodayQuestion, createQuestion, getHints } = require('../controllers/questionController');

router.get('/today', getTodayQuestion);
router.post('/', createQuestion);
router.get('/hints/:questionId', getHints);

module.exports = router;