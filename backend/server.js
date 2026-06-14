import dotenv from "dotenv";

dotenv.config();
import mongoose from "mongoose";
import PDFParser from "pdf2json";
import express from "express";
import cors from "cors";
import multer from "multer";
import ResumeAnalysis from "../models/ResumeAnalysis.js";
const app = express();
mongoose.connect(
  process.env.MONGO_URI
)
  .then(() =>
    console.log(
      "MongoDB Connected"
    )
  )
  .catch((err) =>
    console.log(err)
  );

app.use(cors());

const upload = multer({
  dest: "uploads/",
});

app.post(
  "/analyze",
  upload.single("resume"),
  async (req, res) => {

    console.log(req.file);

    const allSkills = [
      "React",
      "Node.js",
      "MongoDB",
      "Java",
      "Spring Boot",
      "SQL",
      "Python",
      "TensorFlow",
      "Pandas",
      "C++",
      "DSA",
      "OOP",
      "HTML",
      "CSS",
      "JavaScript"
    ];

    try {
      const pdfParser =
        new PDFParser();

      pdfParser.on(
  "pdfParser_dataReady",
  async () => {

          

const resumeText =
  JSON.stringify(pdfParser.data)
    .toLowerCase();
    

          const detectedSkills =

  allSkills.filter((skill) => {

    const lowerSkill =
      skill.toLowerCase();

    if (
      lowerSkill === "c++" ||
      lowerSkill === "node.js"
    ) {
      return resumeText.includes(
        lowerSkill
      );
    }

    const regex =
      new RegExp(
        `\\b${lowerSkill}\\b`
      );

    return regex.test(
      resumeText
    );
  });

  const missingSkills =
  allSkills.filter(
    (skill) =>
      !detectedSkills.includes(skill)
  );

          let score = 40;

score += detectedSkills.length * 10;

if (score > 100) {
  score = 100;
}

           const suggestions = [];

          if (
            !resumeText.includes(
              "project"
            )
          ) {
            suggestions.push(
              "Add a Projects section."
            );
          }

          if (
            !resumeText.includes(
              "education"
            )
          ) {
            suggestions.push(
              "Add an Education section."
            );
          }

          if (
            !resumeText.includes(
              "skill"
            )
          ) {
            suggestions.push(
              "Add a Skills section."
            );
          }

          if (
            detectedSkills.length < 5
          ) {
            suggestions.push(
              "Include more technical skills."
            );
          }

          await ResumeAnalysis.create({
  resumeName:
    req.file.originalname,

  score,

  skills:
    detectedSkills,

  missingSkills,

  suggestions,
});

  
          res.json({
  score,
  skills: detectedSkills,
  missingSkills,
  suggestions,
});
        }
      );

      pdfParser.on(
        "pdfParser_dataError",
        (err) => {
          console.log(err);

          res.status(500).json({
            error:
              "Failed to parse PDF",
          });
        }
      );

      pdfParser.loadPDF(
        req.file.path
      );

    } catch (error) {
      console.log(error);

      res.status(500).json({
        error:
          "Failed to analyze resume",
      });
    }
  }
);
app.get(
  "/history",
  async (req, res) => {

    try {

      const history =
        await ResumeAnalysis
          .find()
          .sort({
            createdAt: -1
          });

      res.json(history);

    } catch (error) {

      console.log(error);

      res.status(500).json({
        error:
          "Failed to fetch history"
      });

    }

  }
);
app.delete(
  "/history/:id",
  async (req, res) => {

    try {

      await ResumeAnalysis
        .findByIdAndDelete(
          req.params.id
        );

      res.json({
        message:
          "Analysis deleted"
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        error:
          "Failed to delete"
      });

    }

  }
);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});