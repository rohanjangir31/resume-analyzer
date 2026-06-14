import mongoose from "mongoose";

const resumeAnalysisSchema =
  new mongoose.Schema({
    resumeName: String,
    score: Number,
    skills: [String],
    missingSkills: [String],
    suggestions: [String],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

export default mongoose.model(
  "ResumeAnalysis",
  resumeAnalysisSchema
);