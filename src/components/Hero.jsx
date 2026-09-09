function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-20"
    >
      <div className="max-w-4xl">

         {/* Profile photo */}
  <img
    src="/profile.jpeg"
    alt="Sumeet Kannoji"
    className="w-40 h-40 rounded-full object-cover mx-auto mb-6 border-4 border-blue-500"
  />


        {/* Small introduction */}
        <p className="text-blue-500 text-lg mb-4">
          Hello, I'm
        </p>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Sumeet Kannoji
        </h1>

        {/* Job title */}
        <h2 className="text-2xl md:text-4xl text-gray-400 font-semibold mb-6">
          Full Stack Developer
        </h2>

        {/* Short professional introduction */}
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-8 mb-8">
          I build modern, responsive and user-friendly web applications
          using React, Node.js, Express.js and PostgreSQL.
        </p>

        {/* Main buttons */}
        <div className="flex justify-center gap-4 flex-wrap">

          {/* Projects section par le jayega */}
          <a
            href="#projects"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          {/* Contact section par le jayega */}
          <a
            href="#contact"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Contact Me
          </a>

          {/* Resume download */}
          <a
            href="/resume.pdf"
            download
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Download Resume
          </a>

        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-8">

          {/* Apna actual GitHub URL baad mein yahan add karna */}
          <a
            href="#"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>

          {/* Apna actual LinkedIn URL baad mein yahan add karna */}
          <a
            href="#"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  )
}

export default Hero