function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-bold mb-3">
              Inventory Management System
            </h3>

            <p className="text-gray-400 mb-4 leading-7">
              A web application for managing products and inventory
              efficiently and keeping business data organized.
            </p>

            {/* Technologies */}
            <p className="text-blue-400 text-sm mb-6">
              React.js • Tailwind CSS • REST API
            </p>

            <div className="flex gap-4">

              {/* Live project */}
              <a
                href="https://inventory-indol-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>

            </div>
          </div>


          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-bold mb-3">
              Local Business Operating System
            </h3>

            <p className="text-gray-400 mb-4 leading-7">
              A business management system for managing products,
              inventory and other business operations.
            </p>

            <p className="text-blue-400 text-sm mb-6">
              Next.js • TypeScript • Express • PostgreSQL • Prisma
            </p>

            {/* LBOS is confidential, so no public demo link */}
            <span className="text-gray-500 text-sm">
              Confidential Project
            </span>

          </div>


          {/* Project 3 */}
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:-translate-y-2 transition duration-300">

            <h3 className="text-2xl font-bold mb-3">
              Weather App
            </h3>

            <p className="text-gray-400 mb-4 leading-7">
              A responsive weather application that displays
              weather information based on the selected location.
            </p>

            <p className="text-blue-400 text-sm mb-6">
              React.js • JavaScript • API • CSS
            </p>

            <div className="flex gap-4">

              {/* Live project */}
              <a
                href="https://weather-app-ten-umber-25.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects