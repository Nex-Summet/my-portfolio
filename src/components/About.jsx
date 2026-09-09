// About section ka React component
function About() {

  // Ye content browser par show hoga
  return (
    <section
      id="about" // Navbar ke About link se yahan aayenge
      className="min-h-screen flex items-center px-6 py-20"
    >

      {/* Main container - content ko center aur limited width mein rakhta hai */}
      <div className="max-w-4xl mx-auto">

        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-8">
          About Me
        </h2>

        {/* About paragraph */}
        <p className="text-gray-400 text-lg leading-8 text-center">
          I am a Full Stack Developer passionate about building
          modern and user-friendly web applications. I have experience
          working with React.js, Node.js, Express.js, PostgreSQL and Prisma.
          I enjoy learning new technologies and solving real-world problems
          through code.
        </p>

      </div>
    </section>
  )
}

// App.jsx mein component use karne ke liye export
export default About