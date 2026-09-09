function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Sumeet Kannoji<span className="text-blue-500">.</span>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-blue-500 transition">
            Home
          </a>

          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>

          <a href="#skills" className="hover:text-blue-500 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-500 transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-blue-500 transition">
            Experience
          </a>

          <a
  href="#education"
  className="hover:text-blue-500 transition"
>
  Education
</a>

          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar