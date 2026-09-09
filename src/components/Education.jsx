function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Education
        </h2>

        {/* MCA */}
        <div className="bg-gray-900 p-6 rounded-xl mb-6 border border-gray-800 hover:-translate-y-1 transition">

          <h3 className="text-2xl font-bold">
            Master of Computer Applications (MCA)
          </h3>

          <p className="text-blue-500 mt-2">
            Graphic Era Hill University, Dehradun
          </p>

          <p className="text-gray-500 mt-1">
            2023 – 2025
          </p>

          <p className="text-gray-400 mt-4">
            Completed MCA with a focus on computer applications,
            software development and modern web technologies.
          </p>

        </div>


        {/* BSc IT */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:-translate-y-1 transition">

          <h3 className="text-2xl font-bold">
            Bachelor of Science in Information Technology (BSc IT)
          </h3>

          <p className="text-blue-500 mt-2">
            D.A.V. (PG) College, Dehradun
          </p>

          <p className="text-gray-500 mt-1">
            2020 – 2023
          </p>

          <p className="text-gray-400 mt-4">
            Studied programming, databases, web development and
            fundamental concepts of information technology.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Education