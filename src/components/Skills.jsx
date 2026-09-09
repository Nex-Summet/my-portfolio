// Skills ka React component
function Skills() {
  return (
    // id="skills" → Navbar ke Skills link se yahan aayenge
    <section id="skills" className="min-h-screen px-6 py-20">

      {/* Content ko center aur limited width mein rakhta hai */}
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        {/* Skills ko ek row/ grid mein arrange karta hai */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* Har div ek skill card hai */}
          <div className="bg-gray-900 p-6 rounded-xl text-center">
            HTML
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            CSS
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            JavaScript
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            React.js
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            Next.js
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            Tailwind CSS
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            Node.js
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            Express.js
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            PostgreSQL
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            Prisma
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            Git & GitHub
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            REST API
          </div>

        </div>
      </div>
    </section>
  )
}

// App.jsx mein use karne ke liye export
export default Skills