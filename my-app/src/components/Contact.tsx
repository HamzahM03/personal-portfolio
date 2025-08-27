import Section from "./Section"
import { Mail } from "lucide-react"

export default function Contact() {
  return (
    <Section id="contact" className="py-32 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">Let's Work Together</h2>
          <p className="text-gray-600 leading-relaxed">
            I'm always interested in new opportunities and interesting projects. Let's connect and see how we can
            create something amazing together.
          </p>
        </div>

        <form className="space-y-6" action="#" method="post">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors bg-white"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors bg-white"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors resize-vertical bg-white"
              placeholder="Tell me about your project or just say hello..."
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors inline-flex items-center gap-2 text-sm font-medium rounded"
            >
              <Mail size={18} />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Section>
  )
}
