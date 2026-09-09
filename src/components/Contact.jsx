import { useState } from "react"

function Contact() {
  // Form submit hone ke baad status dikhane ke liye
  const [status, setStatus] = useState("")

  // Form submit handle karega
  const handleSubmit = async (event) => {
    event.preventDefault()

    setStatus("Sending...")

    const formData = new FormData(event.target)

    try {
      const response = await fetch("https://formspree.io/f/xeaqvzdp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("Message sent successfully! ✅")
        event.target.reset()
      } else {
        setStatus("Something went wrong. Please try again.")
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">

        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Feel free to contact me for job opportunities or projects.
        </p>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-xl space-y-6"
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          ></textarea>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {/* Success/error message */}
          {status && (
            <p className="text-gray-300">
              {status}
            </p>
          )}

        </form>

      </div>
    </section>
  )
}

export default Contact