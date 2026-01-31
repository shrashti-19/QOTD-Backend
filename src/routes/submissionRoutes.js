const express = require('express');
const router = express.Router();
const { submitAnswer } = require('../controllers/submissionController');

router.post('/', submitAnswer);

module.exports = router;