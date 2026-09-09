import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Website ka top navigation */}
      <Navbar />

      {/* First section */}
      <Hero />

      {/* About section */}
      <About />

       {/* Skills */}
      <Skills />

       {/* Projects section */}
      <Projects />

       {/* Experience */}
      <Experience />

         {/* Education */}
       < Education/>

        {/* Contact */}
       < Contact/>

       {/* Footer */}
       < Footer/>

    </div>
  )
}

export default App