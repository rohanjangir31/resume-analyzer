function ResumePreview({ fileName }) {
  return (
    <div className="mt-8 bg-gray-900/80 border border-gray-700 rounded-3xl p-6 max-w-2xl shadow-xl">

      <h2 className="text-2xl font-bold mb-4">
        Uploaded Resume
      </h2>

      <div className="flex items-center gap-4">

        <div className="text-4xl">
          📄
        </div>

        <div>
          <p className="text-lg font-semibold">
            {fileName}
          </p>

          <p className="text-gray-400">
            PDF File
          </p>
        </div>

      </div>

    </div>
  );
}

export default ResumePreview;