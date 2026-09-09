// Experience section ka React component
function Experience() {
  return (
    // id="experience" → Navbar ke Experience link se yahan aayega
    <section id="experience" className="px-6 py-20">

      {/* Content ko center aur limited width mein rakhta hai */}
      <div className="max-w-4xl mx-auto">

        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        {/* Experience card */}
        <div className="bg-gray-900 p-8 rounded-xl">

          {/* Job role */}
          <h3 className="text-2xl font-bold mb-2">
            Full Stack Developer Intern
          </h3>

          {/* Company */}
          <p className="text-blue-500 mb-2">
            Nexzem Technology
          </p>

          {/* Duration */}
          <p className="text-gray-500 mb-6">
            April 2026 – July 2026
          </p>

          {/* Internship mein kya kaam kiya */}
          <ul className="text-gray-400 space-y-3 list-disc list-inside">

            <li>
              Worked on real-world web applications using React.js,
              Node.js and PostgreSQL.
            </li>

            <li>
              Developed frontend pages and integrated backend APIs.
            </li>

            <li>
              Worked with Prisma ORM and database operations.
            </li>

            <li>
              Worked on Inventory Management System and LBOS project.
            </li>

          </ul>

        </div>
      </div>
    </section>
  )
}

// Component ko App.jsx mein use karne ke liye export
export default Experience