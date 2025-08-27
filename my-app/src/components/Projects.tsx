import Section from "./Section"
import Image from "next/image"
import { SiGithub } from "react-icons/si"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  return (
    <Section id="projects" className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-20 tracking-tight">Featured Projects</h2>

        <div className="space-y-16">

          {/* Project 1 */}
          <div className="border-b border-gray-200 pb-16 last:border-b-0">
            <div className="grid md:grid-cols-2 gap-8 items-start">
           
              <a
                href="https://github.com/HamzahM03/NHC_COACH_MANAGER"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-64 rounded-lg overflow-hidden border bg-gray-50"
                aria-label="Open Sports Management System GitHub repository in a new tab"
              >
                <Image
                  src="/SportsLogo.jpg"
                  alt="Sports Management System screenshot"
                  fill
                  className="object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>

              {/* Content */}
              <div>
                <h3 className="text-xl font-medium mb-4">Sports Management System</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Full-stack app for a basketball camp to replace paper workflows: participant profiles, attendance,
                  package management, and quick access to emergency info. Built with Next.js, Supabase (auth + DB), and Tailwind.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Next.js", "Supabase", "Tailwind CSS"].map(t => (
                    <span key={t} className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-800 bg-white">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/HamzahM03/NHC_COACH_MANAGER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:border-black"
                  >
                    <SiGithub size={16} />
                    Code
                  </a>
                  <button
                    disabled
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-gray-200 text-gray-500 cursor-not-allowed"
                  >
                    <ExternalLink size={16} className="opacity-50" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border-b border-gray-200 pb-16 last:border-b-0">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              
              <a
                href="https://github.com/CSI-Computer-Science-Club/resumer-builder"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-64 rounded-lg overflow-hidden border bg-gray-50"
                aria-label="Open AI Resume Builder GitHub repository in a new tab"
              >
                <Image
                  src="/AIResumeBuilderLogo.jpg"
                  alt="AI Resume Builder screenshot"
                  fill
                  className="object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>

              <div>
                <h3 className="text-xl font-medium mb-4">AI Resume Builder</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Generates professional resumes from structured inputs with AI assistance. Built form UX in Next.js + Tailwind,
                  designed API routes/data flow, and explored LaTeX-to-PDF for polished exports.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Next.js", "TailwindCSS", "TypeScript", "SQLite", "LaTeX-to-PDF", "ChatGPT API", "Git"].map(t => (
                    <span key={t} className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-800 bg-white">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/CSI-Computer-Science-Club/resumer-builder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:border-black"
                  >
                    <SiGithub size={16} />
                    Code
                  </a>
                  <button
                    disabled
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-gray-200 text-gray-500 cursor-not-allowed"
                  >
                    <ExternalLink size={16} className="opacity-50" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border-b border-gray-200 pb-16 last:border-b-0">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              
              <a
                href="https://github.com/HamzahM03/AIMealPlanner"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-64 rounded-lg overflow-hidden border bg-gray-50"
                aria-label="Open AI Meal Planner GitHub repository in a new tab"
              >
                <Image
                  src="/AIMealPlannerLogo.jpg"
                  alt="AI Meal Planner screenshot"
                  fill
                  className="object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>

              <div>
                <h3 className="text-xl font-medium mb-4">AI Meal Planner (CTP Hackathon)</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Personalized meal plans via ChatGPT API (JSON) → ingredients → Edamam API for nutrition. Next.js UI,
                  Prisma + Neon for data, deployed on Vercel.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Next.js", "TailwindCSS", "TypeScript", "Prisma", "Neon", "ChatGPT API", "Edamam API", "Vercel", "Git"].map(t => (
                    <span key={t} className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-800 bg-white">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/HamzahM03/AIMealPlanner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:border-black"
                  >
                    <SiGithub size={16} />
                    Code
                  </a>
                  <button
                    disabled
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-gray-200 text-gray-500 cursor-not-allowed"
                  >
                    <ExternalLink size={16} className="opacity-50" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}
