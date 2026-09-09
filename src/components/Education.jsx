function Education() {
  return (
    <section id="education" className="px-6 py-20">
      {/* max-w = content ki maximum width, mx-auto = center */}
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Education
        </h2>

        {/* Education card */}
        <div className="bg-gray-900 p-6 rounded-xl mb-6">
          <h3 className="text-2xl font-bold">
            Master of Computer Applications (MCA)
          </h3>

          <p className="text-blue-500 mt-2">
            Graphic Era Hill University
          </p>

          <p className="text-gray-500 mt-1">
            2023 – 2025
          </p>
        </div>

        {/* Second education card */}
        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-2xl font-bold">
            Bachelor of Science in Information Technology (BSc IT)
          </h3>

          <p className="text-blue-500 mt-2">
            DAV(PG)college
          </p>

          <p className="text-gray-500 mt-1">
            2020 – 2023
          </p>
        </div>

      </div>
    </section>
  )
}

export default Education