const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send('QOTD API Running 🚀');
});

const questionRoutes = require('./routes/questionRoutes');
app.use('/api/questions', questionRoutes);


const submissionRoutes = require('./routes/submissionRoutes');
app.use('/api/submissions', submissionRoutes);

module.exports = app;