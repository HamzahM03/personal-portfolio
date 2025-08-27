import { Mail, ExternalLink, Download } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import Image from "next/image"
import headshot from "@/../public/headshot.jpg";


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-lg font-medium tracking-tight">Hamzah Marie</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-black transition-colors text-sm">
                About
              </a>
              <a href="#skills" className="text-gray-600 hover:text-black transition-colors text-sm">
                Skills
              </a>
              <a href="#experience" className="text-gray-600 hover:text-black transition-colors text-sm">
                Experience
              </a>
              <a href="#projects" className="text-gray-600 hover:text-black transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>





      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto mb-12 border border-gray-200">
          <Image
            src={headshot}
            alt="Hamzah Marie headshot"
            fill
            className="object-cover object-top"
            priority
            quality={100}
            placeholder="blur"
            sizes="(min-width: 768px) 12rem, 10rem"
          />
        </div>

          <h1 className="text-5xl md:text-7xl font-light mb-8 text-center tracking-tight">
            Hello, I'm <span className="font-medium">Hamzah Marie</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto text-center font-light leading-relaxed">
            CS Student and Full-Stack Developer (Next.js/TypeScript) building fast, accessible web apps — open to SWE internships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"        // path to the file in /public
              download                  // tells browser to download instead of open
              className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium rounded"
            >
              <Download size={18} />
              Download Resume
            </a>

            <button className="border border-gray-300 px-8 py-4 hover:border-black transition-colors text-sm font-medium">
              <a href="#projects">
                View My Work
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-20 tracking-tight">About</h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-light mb-6">Hello! I'm a developer who loves to create.</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a Computer Science student and aspiring Software Engineer with a strong background in building scalable, user-friendly applications across the full stack. 
                My journey into tech started with a fascination for solving problems and creating tools that make life easier, and it quickly grew into a career where 
                I get to combine creativity with engineering every day.
                What drives me most is the opportunity to learn continuously, tackle complex challenges, and turn ideas into polished products that provide real value.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Right now, I'm focused on sharpening my expertise in modern web technologies like Next.js, React, and Node.js, 
                while also diving deeper into system design and performance optimization. My current goal is to contribute to impactful projects, 
                whether that's helping teams build easy-to-use user experiences or dependable back-end systems. 
                Beyond coding, I'm motivated by collaboration, mentorship, and the chance to grow both as a developer and as a problem-solver.
              </p>
              <div className="flex gap-6 pt-4">
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <SiGithub size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <SiLinkedin size={20} />
                </a>
                <a href="#contact" className="text-gray-400 hover:text-black transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="relative h-80 md:h-[28rem] rounded-lg overflow-hidden border">
              <Image
                src="/coding-ctp-img.jpg"
                alt="Coding at CTP"
                fill
                className="object-cover object-[50%_35%]"   // tweak this to shift the crop
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-20 tracking-tight">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-medium mb-4">Frontend</h3>
              <p className="text-gray-600 text-sm leading-relaxed">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Backend</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Node.js, Python, PostgreSQL, MongoDB</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Tools</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Git, Docker, AWS, Vercel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-20 tracking-tight">Experience</h2>

          <div className="space-y-8">

            {/* Students Who Code (Research Foundation) */}
            <article className="rounded-lg border p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-medium">Software Development Engineering Intern</h3>
                  <p className="text-gray-600">Students Who Code (Research Foundation) • Remote</p>
                </div>
                <p className="text-sm text-gray-500">
                  <time dateTime="2023-06">Jun 2023</time> – <time dateTime="2023-08">Aug 2023</time>
                </p>
              </div>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                <li>Built and maintained RESTful APIs with <strong>Node.js</strong> and <strong>MongoDB</strong> for student and course data.</li>
                <li>Implemented autosave/restore so clients could log off and return with work preserved.</li>
                <li>Created Postman collections/tests to validate APIs, reducing system errors.</li>
                <li>Collaborated on data-driven social campaigns that boosted student enrollment and engagement.</li>
              </ul>

              {/* Tech badges (optional) */}
              <div className="mt-4 flex flex-wrap gap-2">
                {["Node.js", "MongoDB", "REST", "Postman"].map(t => (
                  <span key={t} className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-800 bg-white">
                    {t}
                  </span>
                ))}
              </div>
            </article>

            {/* Your Next Thought */}
            <article className="rounded-lg border p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-medium">Social Media Marketing Intern</h3>
                  <p className="text-gray-600">Your Next Thought • Remote</p>
                </div>
                <p className="text-sm text-gray-500">
                  <time dateTime="2024-06">Jun 2024</time> – <time dateTime="2024-08">Aug 2024</time>
                </p>
              </div>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                <li>Designed eye-catching Instagram posts in <strong>Canva</strong> to boost interaction.</li>
                <li>Edited videos in <strong>CapCut</strong> with subtitles and smooth transitions to improve engagement.</li>
                <li>Compiled strong footage into engaging Stories to keep viewers watching.</li>
              </ul>

              {/* Tech badges (optional) */}
              <div className="mt-4 flex flex-wrap gap-2">
                {["Canva", "CapCut", "Instagram", "Content Strategy"].map(t => (
                  <span key={t} className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-800 bg-white">
                    {t}
                  </span>
                ))}
              </div>
            </article>

          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-20 tracking-tight">
            Featured Projects
          </h2>

          <div className="space-y-16">

            {/* Project 1 */}
            <div className="border-b border-gray-200 pb-16 last:border-b-0">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Image */}
                <div className="relative h-64 rounded-lg overflow-hidden bg-gray-100 border">
                  <Image
                    src="/SportsLogo.jpg"   // TODO: put this file in /public/projects/
                    alt="Sports Management System screenshot"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 20vw, 80vw"
                    priority
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-medium mb-4">Sports Management System</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    I’m building a full-stack application for my cousin’s basketball camp to replace paper sign-ins,
                    session packages, and emergency forms. It handles participant profiles, attendance, packages,
                    and quick access to critical info. Built with Next.js, Supabase (auth + DB), and Tailwind CSS.
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-800 bg-white">
                      Next.js
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-800 bg-white">
                      Supabase
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-800 bg-white">
                      Tailwind CSS
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:border-black"
                    >
                      <SiGithub size={16} />
                      Code
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-md bg-black text-white px-3 py-2 text-sm hover:bg-gray-800"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border-b border-gray-200 pb-16 last:border-b-0">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="relative h-64 rounded-lg overflow-hidden bg-gray-100 border">
                  <Image
                    src="/AIResumeBuilderLogo.jpg"        // TODO
                    alt="AI Resume Builder screenshot"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">AI Resume Builder</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Full-stack app for my university’s CS Club to generate professional resumes with AI.
                    Built the form UX in Next.js + Tailwind, designed data flows/API routes, integrated AI,
                    and researched LaTeX-to-PDF for polished exports.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Next.js", "TailwindCSS", "TypeScript", "SQLite", "LaTeX-to-PDF", "ChatGPT API", "Git"].map(t => (
                      <span key={t} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-800 bg-white">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href="#" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:border-black">
                      <SiGithub size={16} />
                      Code
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 rounded-md bg-black text-white px-3 py-2 text-sm hover:bg-gray-800">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border-b border-gray-200 pb-16 last:border-b-0">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="relative h-64 rounded-lg overflow-hidden bg-gray-100 border">
                  <Image
                    src="/AIMealPlannerLogo.jpg" // TODO
                    alt="AI Meal Planner screenshot"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">AI Meal Planner (CTP Hackathon)</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Personalized meal plans based on user data (goals, allergies, activity). ChatGPT API
                    generates plans (JSON) → ingredients → Edamam API for nutrition. Next.js UI, Prisma + Neon DB,
                    deployed on Vercel.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Next.js", "TailwindCSS", "TypeScript", "Prisma", "Neon", "ChatGPT API", "Edamam API", "Vercel", "Git"].map(t => (
                      <span key={t} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-800 bg-white">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href="#" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:border-black">
                      <SiGithub size={16} />
                      Code
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 rounded-md bg-black text-white px-3 py-2 text-sm hover:bg-gray-800">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">Let's Work Together</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm always interested in new opportunities and interesting projects. Let's connect and see how we can
              create something amazing together.
            </p>
          </div>

          <form className="space-y-6">
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
                className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors inline-flex items-center gap-2 text-sm font-medium"
              >
                <Mail size={18} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">&copy; 2025 Hamzah Marie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
