export default function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="text-lg font-medium tracking-tight">Hamzah Marie</div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#about" className="text-gray-600 hover:text-black">About</a>
            <a href="#experience" className="text-gray-600 hover:text-black">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-black">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-black">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
