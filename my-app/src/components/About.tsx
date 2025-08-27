import Image from "next/image"
import { Mail } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import Section from "./Section"

export default function About() {
  return (
    <Section id="about" className="py-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-20 tracking-tight">About</h2>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p>
                I&apos;m a Computer Science student and aspiring Software Engineer with a strong background in building scalable,
                user-friendly applications across the full stack. My journey into tech started with a fascination for solving 
                problems and creating tools that make life easier, and it quickly grew into a career where I get to combine creativity with engineering every day.
                What drives me most is the opportunity to learn continuously, tackle complex challenges, and turn ideas into polished products that provide real value.
            </p>
            <p>
                Right now, I&apos;m focused on sharpening my expertise in modern web technologies like Next.js, React, and Node.js, while also diving deeper into system design
                and performance optimization. 
                My current goal is to contribute to impactful projects, whether that&apos;s helping teams build easy-to-use user experiences or dependable back-end systems. 
                Beyond coding, I&apos;m motivated by collaboration, mentorship, and the chance to grow both as a developer and as a problem-solver.
            </p>
            <div className="flex gap-6 pt-4">
              <a href="https://github.com/HamzahM03" className="text-gray-400 hover:text-black" target="_blank"><SiGithub size={20} /></a>
              <a href="https://www.linkedin.com/in/hamzah-marie-4270621b5/" className="text-gray-400 hover:text-black" target="_blank"><SiLinkedin size={20} /></a>
              <a href="#contact" className="text-gray-400 hover:text-black"><Mail size={20} /></a>
            </div>
          </div>
          <div className="relative h-80 md:h-[28rem] rounded-lg overflow-hidden border">
            <Image src="/coding-ctp-img.jpg" alt="Coding at CTP" fill className="object-cover object-[50%_35%]" priority />
          </div>
        </div>
      </div>
    </Section>
  )
}
