const express = require('express');
const router = express.Router();
const { getTodayQuestion, createQuestion } = require('../controllers/questionController');

router.get('/today', getTodayQuestion);
router.post('/', createQuestion);

module.exports = router;