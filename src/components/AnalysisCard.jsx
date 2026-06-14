function AnalysisCard({
  score,
  skills = [],
  missingSkills = [],
  suggestions = []
}){
  return (
    <div className="mt-8 bg-gray-900/80 border border-gray-700 rounded-3xl p-8 max-w-2xl shadow-xl">

      <h2 className="text-3xl font-bold mb-6">
        Resume Analysis
      </h2>

      <p className="text-xl mb-4">
        ATS Score:
        <span className="text-green-400 font-bold">
          {" "}{score}%
        </span>
      </p>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">
          Skills Found
        </h3>

        <div className="flex gap-3 flex-wrap">
          {skills.map((skill, index) => (
  <span
    key={index}
    className="bg-blue-600 px-4 py-2 rounded-xl"
  >
    {skill}
  </span>
))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          Suggestions
        </h3>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
<div>
  <h3 className="text-2xl font-semibold mb-3">
    Missing Skills
  </h3>
  <div className="flex gap-3 flex-wrap">
    {missingSkills.map((skill, index) => (
      <span
        key={index}
        className="bg-red-600 px-4 py-2 rounded-xl"
      >
        {skill}
      </span>
    ))}
  </div>
</div>
    </div>
  );
}

export default AnalysisCard;