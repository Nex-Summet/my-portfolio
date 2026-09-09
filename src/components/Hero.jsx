// Ye Hero naam ka React component hai
function Hero() {

  // return ke andar jo JSX hai,
  // wahi browser par screen mein dikhega
  return (

    // <section> = website ka ek section
    // id="home" = Navbar ke Home link (#home) se yahan aayega
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        text-center
        px-6
      "
    >

      {/* Ye div Hero ke saare content ko ek group mein rakhta hai */}
      <div>

        {/* Chhota introduction text */}
        <p className="text-blue-500 text-lg mb-4">
          Hello, I'm
        </p>

        {/* Main heading / naam */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Sumeet Kannoji
        </h1>

        {/* Job title */}
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
          Full Stack Developer
        </h2>

        {/* Short description */}
        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
          I build modern, responsive and user-friendly web applications
          using React, Node.js, Express.js and PostgreSQL.
        </p>

        {/* Buttons ko ek row mein rakhne ke liye flex */}
        <div className="flex justify-center gap-4">

          {/* Click karne par Projects section par jayega */}
          <a
            href="#projects"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          {/* Click karne par Contact section par jayega */}
          <a
            href="#contact"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  )
}

// Is component ko App.jsx mein use karne ke liye export
export default Hero