# AI Resume Analyzer

A full-stack AI-powered Resume Analyzer that evaluates resumes, calculates ATS scores, detects technical skills, identifies missing skills, and provides actionable improvement suggestions. The application also stores resume history, displays analytics, and allows comparison between multiple resumes.

## Live Demo

Frontend: https://resume-analyzer-five-plum.vercel.app

Backend API: https://resume-analyzer-9300.onrender.com

## Features

* Upload and analyze PDF resumes
* ATS Score Calculation
* Automatic Skill Detection
* Missing Skills Identification
* Resume Improvement Suggestions
* Resume History Tracking
* Resume Comparison System
* Statistics Dashboard
* Cloud Database Storage with MongoDB Atlas
* Responsive UI for Desktop and Mobile

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* JavaScript
* Vite

### Backend

* Node.js
* Express.js
* Multer

### Database

* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

### Version Control

* Git
* GitHub

## Project Architecture

User Uploads Resume (PDF)
↓
React Frontend
↓
Express.js Backend
↓
Resume Analysis Engine
↓
MongoDB Atlas Database
↓
Results, History, Statistics & Comparison

## Installation

### Clone Repository

```bash
git clone https://github.com/rohanjangir31/resume-analyzer.git
cd resume-analyzer
```

### Install Frontend Dependencies

```bash
npm install
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Configure Environment Variables

Create a .env file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
```

### Start Backend

```bash
npm start
```

### Start Frontend

```bash
npm run dev
```

## Key Functionalities

### ATS Analysis

Calculates a resume score based on detected skills and content.

### Skill Detection

Extracts technical skills such as React, Node.js, MongoDB, JavaScript, Python, Java, and more.

### Missing Skill Analysis

Identifies important skills that are absent from the resume.

### Resume History

Stores all analyzed resumes in MongoDB and displays them in chronological order.

### Resume Comparison

Allows users to compare multiple resumes and evaluate their strengths.

### Statistics Dashboard

Displays resume analytics including average scores and total analyzed resumes.

## Future Improvements

* User Authentication
* AI-Powered Resume Analysis using Gemini/OpenAI
* Resume Export to PDF
* Resume Templates
* Job Description Matching
* Personalized Career Recommendations

## Author

Rohan Jangir

GitHub: https://github.com/rohanjangir31

## License

This project is open-source and available under the MIT License.
