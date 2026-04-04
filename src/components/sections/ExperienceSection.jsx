export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-13">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="space-y-5">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-blue-300/90 md:text-base">
              Professional Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              QA embedded across the delivery cycle
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-slate-300">
            Me desenvuelvo muy bien dentro de equipos interdisciplinarios bajo metodologías ágiles,
            participando activamente en ceremonias como dailys, refinamientos, reviews y
            retrospectivas. Mi enfoque combina prácticas de QA, shift-left testing, mejora continua
            de procesos y documentación clara para acompañar el ciclo completo de desarrollo.
          </p>

          <p className="max-w-xl text-base leading-8 text-slate-400">
            Entiendo la calidad como una práctica integrada al flujo de entrega, no como una etapa
            aislada al final. Por eso priorizo colaboración temprana, prevención de defectos,
            visibilidad compartida y feedback continuo dentro del equipo.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(59,130,246,0.08)] backdrop-blur-sm">
          <div className="mb-5">
            <p className="text-sm uppercase tracking-[0.22em] text-amber-300">Agile + QA Flow</p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Quality integrated into every sprint
            </h3>
          </div>

          <div className="relative rounded-[1.8rem] border border-blue-300/15 bg-slate-950/35 p-5">
            <div className="flex flex-wrap justify-center gap-3">
              {["Refinement", "Planning", "Development", "Review", "Retrospective"].map((item) => (
                <div
                  key={item}
                  className={`max-w-[140px] rounded-2xl border px-4 py-3 text-center text-xs font-medium transition duration-300 md:text-sm ${
                    item === "Development"
                      ? "border-rose-300/20 bg-rose-400/10 text-rose-100 hover:border-rose-300/30 hover:bg-rose-400/15"
                      : "border-blue-300/15 bg-slate-950/50 text-slate-200 hover:border-blue-300/25 hover:bg-slate-950/60"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-center">
              <div className="h-px w-full max-w-lg bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
            </div>

            <div className="mt-5 rounded-[1.6rem] border border-blue-300/20 bg-blue-400/10 p-5 shadow-[0_0_24px_rgba(59,130,246,0.10)]">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-blue-200">
                      Testing across the entire cycle
                    </p>
                    <h4 className="mt-2 text-lg font-semibold text-white">
                      Validation is embedded, not delayed
                    </h4>
                  </div>

                  <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-xs text-amber-100">
                    QA as a continuous practice
                  </span>
                </div>

                <p className="text-sm leading-7 text-slate-300">
                  Testing acompaña todo el flujo de entrega con foco en prevención, colaboración
                  temprana, validación continua y feedback útil para el equipo.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Daily sync and shared visibility",
                "Continuous feedback for better decisions",
                "Sprint goals aligned with quality",
                "Improvement loop after each iteration",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-amber-300/20 bg-amber-300/10 p-4">
            <p className="text-sm uppercase tracking-[0.22em] text-amber-200">
              QA principles across the flow
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Shift-left",
                "Risk awareness",
                "Continuous validation",
                "Documentation",
                "Feedback loop",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-amber-300/20 bg-slate-950/30 px-3 py-1.5 text-xs text-amber-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
