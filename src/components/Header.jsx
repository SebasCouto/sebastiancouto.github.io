export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#07111f]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-blue-300">SebCo. Labs</p>
          <p className="text-xs text-slate-400">PORTFOLIO | SEBASTIÁN COUTO</p>
        </div>

        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#experience" className="transition hover:text-white">Experience</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#work" className="transition hover:text-white">Work</a>
          <a href="#metrics" className="transition hover:text-white">Metrics</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}
