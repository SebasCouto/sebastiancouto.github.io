import { GitHubIcon, LinkedInIcon, EmailIcon } from "../SocialIcons";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
      <div className="mb-6">
        <p className="text-sm uppercase tracking-[0.28em] text-blue-300 md:text-base">Contact</p>
      </div>

      <div className="rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-blue-400/10 via-white/5 to-cyan-400/10 p-6 shadow-[0_0_40px_rgba(251,191,36,0.06)] backdrop-blur-xl md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Let's build better quality signals
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Este portfolio prioriza claridad, señal e identidad profesional, manteniendo una base
              sólida para evolucionar hacia un portfolio vivo con datos automáticos desde GitHub.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/SebasCouto"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-blue-300/25 bg-blue-400/15 px-5 py-3 text-left text-sm font-medium text-white transition hover:bg-blue-400/20"
            >
              <GitHubIcon className="h-5 w-5 fill-white" />
              GitHub Profile
            </a>

            <a
              href="https://www.linkedin.com/in/sebastiancouto/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-white/10"
            >
              <LinkedInIcon className="h-5 w-5 fill-white" />
              LinkedIn Profile
            </a>

            <a
              href="mailto:sebastian.o.couto@gmail.com"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-white/10"
            >
              <EmailIcon className="h-5 w-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
