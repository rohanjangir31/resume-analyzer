import { useState } from "react";
function History({
  history = [],
  setHistory,
  setSelectedResume1,
  setSelectedResume2
}) {
  const [search, setSearch] =
  useState("");
  const handleDelete =
  async (id) => {

    try {

      await fetch(
        `https://resume-analyzer-9300.onrender.com/history/${id}`,
        {
          method: "DELETE",
        }
      );

      // Update the history state by filtering out the deleted item
      setHistory(history.filter((item) => item._id !== id));

    } catch (error) {

      console.log(error);

    }

  };
  return (
    <div className="px-8 md:px-20 py-10">

      <h2 className="text-4xl font-bold mb-8">
        Previous Analyses
      </h2>
      <input
  type="text"
  placeholder="Search Resume..."
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  className="w-full mb-6 p-3 rounded-xl bg-gray-800 border border-gray-700"
/>

      <div className="space-y-6">

      {history
  .filter((item) =>
    item.resumeName
      .toLowerCase()
      .includes(
        search.toLowerCase()
      )
  )
  .map((item) => (

          <div
            key={item._id}
            className="bg-gray-900/70 border border-gray-700 rounded-2xl p-6 shadow-lg"
          >

            <div className="flex justify-between items-center">

              <h3 className="text-xl font-bold">
                {item.resumeName}
              </h3>

              <span className="text-green-400 font-bold text-lg">
                {item.score}%
              </span>
              <button
  onClick={() =>
    handleDelete(item._id)
  }
  className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
>
  Delete
</button>
<div className="flex gap-2 mt-3">

  <button
    onClick={() =>
      setSelectedResume1(item)
    }
    className="bg-blue-600 px-3 py-2 rounded-lg"
  >
    Resume 1
  </button>

  <button
    onClick={() =>
      setSelectedResume2(item)
    }
    className="bg-green-600 px-3 py-2 rounded-lg"
  >
    Resume 2
  </button>

</div>

            </div>

            <p className="text-gray-400 mt-2">
              Uploaded:
              {" "}
              {new Date(
                item.createdAt
              ).toLocaleDateString()}
            </p>

            <h4 className="mt-4 font-semibold">
              Skills Found
            </h4>

            <div className="flex flex-wrap gap-2 mt-2">

              {item.skills.map((skill) => (

                <span
                  key={skill}
                  className="bg-blue-600 px-3 py-1 rounded-lg"
                >
                  {skill}
                </span>

              ))}

            </div>
            <h4 className="mt-4 font-semibold">
  Missing Skills
</h4>

<div className="flex flex-wrap gap-2 mt-2">

  {item.missingSkills.map((skill) => (

    <span
      key={skill}
      className="bg-red-600 px-3 py-1 rounded-lg"
    >
      {skill}
    </span>

  ))}

</div>

            <h4 className="mt-4 font-semibold">
              Suggestions
            </h4>

            <ul className="list-disc ml-6 mt-2 text-gray-300">

              {item.suggestions.map(
                (suggestion, index) => (

                  <li key={index}>
                    {suggestion}
                  </li>

                )
              )}

            </ul>

          </div>

        ))}

      </div>

    </div>
  );
}

export default History;