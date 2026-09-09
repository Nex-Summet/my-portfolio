import { useState } from "react"

function Navbar() {
  // Mobile menu open/close karne ke liye state
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md text-white z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Portfolio logo */}
        <h1 className="text-2xl font-bold">
          Sumeet<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-blue-500 transition">Home</a>
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
          <a href="#education" className="hover:text-blue-500 transition">Education</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4">

          <div className="flex flex-col gap-4">

            {/* Click karne par menu close bhi hoga */}
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar