import Comparison from "./components/comparison";
import History from "./components/History";
import ResumePreview from "./components/ResumePreview";
import AnalysisCard from "./components/AnalysisCard";
import { useState, useEffect } from "react";
import Stats from "./components/Stats";

function App() {
  const [selectedResume1,
  setSelectedResume1] =
  useState(null);

const [selectedResume2,
  setSelectedResume2] =
  useState(null);
  const [history, setHistory] =
  useState([]);
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {

  fetch(
    "https://resume-analyzer-9300.onrender.com"
  )
    .then((res) =>
      res.json()
    )
    .then((data) =>
      setHistory(data)
    )
    .catch((error) =>
      console.log(error)
    );

}, []);
  const handleFileChange = async (event) => {
  const file = event.target.files[0];

  if (file) {
    if (file.type !== "application/pdf") {
  setError("Please upload a PDF resume");
  return;
}
  setIsLoading(true);

try {
const formData = new FormData();

formData.append(
  "resume",
  file
);

const response = await fetch(
  "https://resume-analyzer-9300.onrender.com",
  {
    method: "POST",
    body: formData,
  }
);

const data =
  await response.json();
  setAnalysis(data);
  setFileName(file.name);
  const historyResponse =
  await fetch(
    "https://resume-analyzer-9300.onrender.com"
  );

const historyData =
  await historyResponse.json();

setHistory(historyData);

} catch (error) {
  console.log(error);
}

setIsLoading(false);
}
};

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          AI Resume Analyzer
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
          Upload your resume and get instant ATS score analysis,
          skill insights, and AI-powered improvement suggestions.
        </p>

        <label className="mt-10 px-8 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-2xl text-lg font-semibold shadow-lg cursor-pointer">

  Upload Resume

  {error && (
  <p className="mt-4 text-red-400 text-lg">
    {error}
  </p>
)}

  {isLoading && (
  <p className="mt-4 text-blue-400 text-lg animate-pulse">
    Analyzing Resume...
  </p>
)}

 <input
  type="file"
  accept=".pdf"
  className="hidden"
  onChange={handleFileChange}
/>

</label>
{fileName && (
  <p className="mt-4 text-green-400 text-lg">
    Uploaded: {fileName}
  </p>
)}
{fileName && (<ResumePreview fileName={fileName} />)}
{analysis && (
  <AnalysisCard
  score={analysis.score}
  skills={analysis.skills}
  missingSkills={analysis.missingSkills}
  suggestions={analysis.suggestions}
/>
)}
      </section>
     <Stats history={history} />
     <Comparison
  resume1={selectedResume1}
  resume2={selectedResume2}
/>

<History
  history={history}
  setHistory={setHistory}
  setSelectedResume1={
    setSelectedResume1
  }
  setSelectedResume2={
    setSelectedResume2
  }
/>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20 py-16">
        
        <div className="bg-gray-900/70 border border-gray-700 rounded-3xl p-8 shadow-xl hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-4">ATS Score Analysis</h2>
          <p className="text-gray-300">
            Analyze how well your resume performs in Applicant Tracking Systems.
          </p>
        </div>

        <div className="bg-gray-900/70 border border-gray-700 rounded-3xl p-8 shadow-xl hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-4">Skill Detection</h2>
          <p className="text-gray-300">
            Detect technical and professional skills automatically from resumes.
          </p>
        </div>

        <div className="bg-gray-900/70 border border-gray-700 rounded-3xl p-8 shadow-xl hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-4">AI Suggestions</h2>
          <p className="text-gray-300">
            Receive smart suggestions to improve your resume and stand out.
          </p>
        </div>

      </section>

      {/* Footer */}
      
      <footer className="mt-auto text-center py-6 border-t border-gray-700 text-gray-400">
        Built with React, Tailwind CSS, and AI
      </footer>
    </div>
  );
}

export default App;