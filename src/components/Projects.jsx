// Projects ka React component
function Projects() {
  return (
    // id="projects" → Navbar ke Projects link se yahan aayenge
    <section id="projects" className="px-6 py-20">

      {/* Content ko center aur limited width mein rakhta hai */}
      <div className="max-w-6xl mx-auto">

        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        {/* Projects ko grid mein arrange kar rahe hain */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* -------- PROJECT 1 -------- */}
          <div className="bg-gray-900 p-6 rounded-xl">

            {/* Project name */}
            <h3 className="text-2xl font-bold mb-3">
              Inventory Management System
            </h3>

            {/* Project description */}
            <p className="text-gray-400 mb-4">
              A web application for managing products and inventory
              efficiently and keeping business data organized.
            </p>

            {/* Technologies used */}
            <p className="text-blue-400 mb-5">
              React.js • Tailwind CSS • REST API
            </p>

            {/* Project links */}
            <div className="flex gap-4">

              {/* Baad mein # ko actual GitHub URL se replace karenge */}
              <a
                href="#"
                className="bg-blue-600 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

              {/* Baad mein actual live URL add karenge */}
              <a
                href="#"
                className="border border-gray-600 px-4 py-2 rounded-lg"
              >
                Live Demo
              </a>

            </div>
          </div>


          {/* -------- PROJECT 2 -------- */}
          <div className="bg-gray-900 p-6 rounded-xl">

            <h3 className="text-2xl font-bold mb-3">
              Local Business Operating System
            </h3>

            <p className="text-gray-400 mb-4">
              A business management system for managing products,
              inventory and other business operations.
            </p>

            <p className="text-blue-400 mb-5">
              Next.js • TypeScript • Express • PostgreSQL • Prisma
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-blue-600 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

              <a
                href="#"
                className="border border-gray-600 px-4 py-2 rounded-lg"
              >
                Live Demo
              </a>

            </div>
          </div>


          {/* -------- PROJECT 3 -------- */}
          <div className="bg-gray-900 p-6 rounded-xl">

            <h3 className="text-2xl font-bold mb-3">
              Weather App
            </h3>

            <p className="text-gray-400 mb-4">
              A responsive weather application that displays
              weather information based on the selected location.
            </p>

            <p className="text-blue-400 mb-5">
              React.js • JavaScript • API • CSS
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-blue-600 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

              <a
                href="#"
                className="border border-gray-600 px-4 py-2 rounded-lg"
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

// Component ko App.jsx mein use karne ke liye export
export default Projects