import { metrics } from "../../data/portfolio";

function progressBarClass(tone) {
  return tone === "amber"
    ? "bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100"
    : "bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200";
}

export function MetricsSection() {
  return (
    <section id="metrics" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.28em] text-amber-300 md:text-base">Metrics</p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Signals, coverage and quality metrics
        </h2>
        <p className="mt-4 w-full text-base leading-8 text-slate-300 lg:w-[85%] xl:w-[90%]">
          Cuando diseño suites automatizadas, no me enfoco solo en ejecutar tests. Me interesa medir
          la calidad de la señal: estabilidad, cobertura útil, feedback accionable y efectividad
          real de las validaciones.
        </p>
      </div>

      <div className="mb-6 flex items-center gap-3 text-sm text-slate-400">
        <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
        <span>Signal-driven quality system</span>
      </div>

      <div className="mb-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <div
                key={metric.label}
                className="rounded-[1.6rem] border border-amber-300/15 bg-slate-950/40 p-5 shadow-[0_0_30px_rgba(251,191,36,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-amber-300/20"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.14)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                    Signal
                  </span>
                </div>

                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{metric.label}</p>

                <p className="mt-3 text-2xl font-semibold text-amber-100">{metric.value}</p>

                <div className="mt-4">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 backdrop-blur-sm">
                    <div
                      className={`h-full rounded-full ${progressBarClass(metric.tone)} shadow-[0_0_10px_rgba(255,255,255,0.15)]`}
                      style={{ width: `${metric.progress}%` }}
                    />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">{metric.detail}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p className="text-sm uppercase tracking-[0.22em] text-blue-200">Why metrics matter</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            Métricas conectadas a decisión, no solo a reporting
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Las métricas tienen valor cuando ayudan a interpretar la salud real del proyecto, no solo
            del pipeline. Permiten entender si la cobertura aporta confianza, si los tests sostienen
            cambios en el tiempo y si el CI está generando una señal clara o simplemente ruido en el
            feedback que recibe el equipo.
          </p>
        </div>

        <div className="rounded-[2rem] border border-amber-300/20 bg-slate-950/45 p-6 shadow-[0_0_34px_rgba(251,191,36,0.08)]">
          <p className="text-sm uppercase tracking-[0.22em] text-amber-300">Core signal stack</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "pytest",
              "GitHub Actions",
              "Mutation Testing",
              "PR Feedback",
              "Coverage Signal",
              "Reusable Workflows",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-2 text-xs text-amber-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
