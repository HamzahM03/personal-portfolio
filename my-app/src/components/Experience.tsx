import Section from "./Section"

export default function Experience() {
  return (
    <Section id="experience" className="py-32 px-6 lg:px-8">
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

            <div className="mt-4 flex flex-wrap gap-2">
              {["HTML/CSS","JavaScript","Express.js", "MongoDB", "REST", "Postman"].map(t => (
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
    </Section>
  )
}
