function Stats({
  history = []
}) {

  const totalResumes =
    history.length;

  const averageScore =
    history.length > 0
      ? Math.round(
          history.reduce(
            (sum, item) =>
              sum + item.score,
            0
          ) / history.length
        )
      : 0;

  const highestScore =
    history.length > 0
      ? Math.max(
          ...history.map(
            (item) =>
              item.score
          )
        )
      : 0;

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-20 py-10">

      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 text-center">
        <h3 className="text-lg text-gray-400">
          Total Resumes
        </h3>

        <p className="text-4xl font-bold">
          {totalResumes}
        </p>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 text-center">
        <h3 className="text-lg text-gray-400">
          Average Score
        </h3>

        <p className="text-4xl font-bold text-blue-400">
          {averageScore}%
        </p>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 text-center">
        <h3 className="text-lg text-gray-400">
          Highest Score
        </h3>

        <p className="text-4xl font-bold text-green-400">
          {highestScore}%
        </p>
      </div>

    </div>

  );
}

export default Stats;