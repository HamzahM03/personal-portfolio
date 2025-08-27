import { Download } from "lucide-react"
import Image from "next/image"
import { Outfit } from "next/font/google"
const outfit = Outfit({ subsets: ["latin"], weight: ["300","400","500","700"] })
// don't forget to import Section at the top:
import Section from "./Section"


export default function Hero() {
  return (
    <Section id="home" className={`${outfit.className} pt-40 pb-32 px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto mb-12 border border-gray-200">
          <Image src="/headshot.jpg" alt="Hamzah Marie headshot" fill className="object-cover object-top" priority />
        </div>
        <h1 className="text-5xl md:text-7xl font-medium mb-8 text-center tracking-tight">
          Hi, I'm <span className="font-semibold">Hamzah Marie</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto text-center font-light leading-relaxed">
          CS student & full-stack developer (Next.js/TypeScript) building fast, accessible web apps.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/resume.pdf" download className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium rounded">
            <Download size={18} />
            Download Resume
          </a>
          <a href="#projects" className="border border-gray-300 px-8 py-4 hover:border-black transition-colors text-sm font-medium rounded text-center">
            View My Work
          </a>
        </div>
      </div>
    </Section>
  )
}

