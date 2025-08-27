import Section from "./Section"

export default function Skills() {
  const skills = {
    Languages: ["JavaScript", "TypeScript", "Python", "C++"],
    Frontend: ["React", "Next.js", "Bootstrap", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "Supabase", "Prisma", "PostgreSQL", "MongoDB"],
    Tools: ["Git", "Vercel", "Postman"],
  };

  return (
    <Section id="skills" className="py-32 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-20 tracking-tight">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {Object.entries(skills).map(([title, items]) => (
            <div key={title}>
              <h3 className="text-lg font-medium mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-800 bg-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
