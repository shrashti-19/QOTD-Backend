# QOTD Backend API

Backend system for a **Question of the Day (QOTD)** feature designed for an edtech platform.  
This API handles daily coding questions, submissions, evaluation, statistics, leaderboard, and hints.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📌 Features Implemented

### Core Features
- Fetch today's question
- Submit answer for evaluation
- Automatic answer validation (Correct / Incorrect)

### Supporting Features
- Question statistics (attempts & success rate)
- Leaderboard (top correct submissions)
- Hints retrieval system

---

## 🧩 API Endpoints

| Method | Endpoint | Description |
|-------|----------|-------------|
| GET | `/api/questions/today` | Fetch today’s QOTD |
| POST | `/api/questions` | Create a new question (testing) |
| POST | `/api/submissions` | Submit answer for evaluation |
| GET | `/api/submissions/stats/:questionId` | Get question statistics |
| GET | `/api/submissions/leaderboard/:questionId` | Get leaderboard |
| GET | `/api/questions/hints/:questionId` | Get hints for question |

---

## 🗄️ Data Models

### Question Model
- Title
- Difficulty (Easy / Medium / Hard)
- Problem statement
- Sample input & output
- Expected output
- Date (unique QOTD)
- Hints (array)

### Submission Model
- Question reference
- User answer
- Evaluation result (Correct / Incorrect)
- Timestamps

---

## ▶️ Run Locally

```bash
npm install
npm run dev
```

## Create a .env file
```bash 
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Deployment
Backend deployed using Render (or any cloud platform).

## 🔮 Future Improvements

- User authentication

- Real code execution engine

- Caching for performance

- Advanced leaderboard scoring

- Rate limiting & security middleware

- Admin panel for QOTD management