function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Feel free to contact me for job opportunities or projects.
        </p>

        {/* Form UI ban raha hai; abhi backend connected nahi hai */}
        <form className="bg-gray-900 p-8 rounded-xl space-y-6">

          {/* Name input */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          {/* Email input */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

          {/* Message input */}
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          ></textarea>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}

export default Contact