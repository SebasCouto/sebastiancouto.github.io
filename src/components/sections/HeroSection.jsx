import { GitHubIcon, LinkedInIcon, EmailIcon } from "../SocialIcons";
import { focusAreas, supportingAreas } from "../../data/portfolio";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-14">
      <div className="space-y-7">
        <div className="space-y-5">
          <div className="inline-flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.22em] text-blue-100">
            {[
              "QA Engineer",
              "SDET",
              "Automation",
              "Python",
              "pytest",
              "API Testing",
              "Postman",
              "JMeter",
              "GitHub Actions",
              "Functional Testing E2E",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
            <span className="block">QA Engineer / SDET</span>

            <span className="mt-4 block text-lg font-normal leading-relaxed md:text-2xl">
              <span className="text-blue-300">
                Diseño sistemas de CI agnósticos que reducen el ruido
              </span>{" "}
              y{" "}
              <span className="text-amber-200">generan feedback accionable.</span>
            </span>
          </h1>
        </div>

        <div id="about" className="scroll-mt-24 space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-blue-300 md:text-base">
              About me
            </p>
          </div>

          <div className="space-y-5">
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              QA Engineer con más de 10 años de experiencia en testing y automatización, con sólida experiencia en sistemas financieros y fintech bajo normativas regionales, trabajando sobre flujos
              críticos, datos sensibles y entornos de alta confiabilidad. Mi enfoque combina testing
              funcional, automatización de APIs y diseño de pipelines de calidad orientados a señal.
              Actualmente enfocado en evolucionar hacia un rol SDET puro, construyendo soluciones que
              mejoren la calidad desde el pipeline.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-slate-300">
          <a
            href="https://github.com/SebasCouto"
            className="rounded-2xl border border-white/10 bg-white/5 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5 fill-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastiancouto/"
            className="rounded-2xl border border-white/10 bg-white/5 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5 fill-white" />
          </a>
          <a
            href="mailto:sebastian.o.couto@gmail.com"
            className="rounded-2xl border border-white/10 bg-white/5 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            aria-label="Email"
          >
            <EmailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-300/5 blur-2xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="mb-7 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-blue-200 md:text-base">
                Focus
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Quality Engineering Focus</h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                El objetivo no es automatizar por automatizar. Es construir una capa de calidad que
                entregue señal útil, cobertura con criterio y feedback que sirva para decidir con
                más confianza.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[1.6rem] border border-amber-300/20 bg-slate-950/50 p-5 shadow-[0_0_28px_rgba(251,191,36,0.10)] transition duration-300 hover:-translate-y-1 hover:border-amber-200/30 hover:shadow-[0_0_44px_rgba(251,191,36,0.16)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-300/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200 shadow-[0_0_18px_rgba(251,191,36,0.16)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-semibold text-amber-100 md:text-lg">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm leading-7 text-slate-300">{item.text}</p>
                  </div>
                </div>
              );
            })}

            <div className="grid gap-4 pt-1 md:grid-cols-2">
              {supportingAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.4rem] border border-white/10 bg-slate-950/35 p-4 transition duration-300 hover:border-white/15 hover:bg-slate-950/50"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/10 text-blue-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="font-medium text-white">{item.title}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-400">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
