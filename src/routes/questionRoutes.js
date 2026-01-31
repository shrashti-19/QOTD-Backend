const express = require('express');
const router = express.Router();
const { getTodayQuestion } = require('../controllers/questionController');

router.get('/today', getTodayQuestion);

module.exports = router;