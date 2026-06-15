function Comparison({
  resume1,
  resume2
}) {

  if (!resume1 || !resume2) {
    return null;
  }

  const scoreDifference =
    resume2.score -
    resume1.score;

  const newSkills =
    resume2.skills.filter(
      (skill) =>
        !resume1.skills.includes(skill)
    );

  return (

   <div className="bg-gray-900 border border-gray-700 rounded-2xl p-4 md:p-6 mt-10 mx-4 md:mx-20">

      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Resume Comparison
      </h2>

      <p>
        Resume 1 Score:
        {" "}
        {resume1.score}%
      </p>

      <p>
        Resume 2 Score:
        {" "}
        {resume2.score}%
      </p>

      <p className="text-green-400 text-xl mt-4">
        Improvement:
        {" "}
        {scoreDifference}%
      </p>

      <h3 className="mt-6 font-bold">
        New Skills Added
      </h3>

      <div className="flex flex-wrap gap-2 mt-2">

        {newSkills.map((skill) => (

          <span
            key={skill}
            className="bg-green-600 px-3 py-1 rounded-lg"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>

  );
}

export default Comparison;