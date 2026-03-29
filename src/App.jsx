import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Globe,
  FileText,
  ArrowRight,
  FlaskConical,
  Workflow,
  Mail,
  ShieldCheck,
  Code2,
  TerminalSquare,
  BriefcaseBusiness,
  GraduationCap,
  BadgeCheck,
  Sparkles,
  Gauge,
  Zap,
  BarChart3,
} from "lucide-react";

import { GitHubIcon, LinkedInIcon, EmailIcon } from "./components/SocialIcons";

export default function SebastianCoutoPortfolioV1() {
  const featuredRepos = [
    {
      name: "PlatformUnityCI",
      summary:
        "Framework orientado a calidad como sistema: feedback automatizado en PRs, reusable workflows y señales confiables en CI.",
      tags: ["Python", "GitHub Actions", "Quality Engineering"],
      language: "Python",
      href: "#",
    },
    {
      name: "cross-quality-ci",
      summary:
        "Base reusable para mover controles de calidad entre repos y evolucionar hacia un enfoque multilenguaje.",
      tags: ["CI/CD", "Reusable Workflows", "Automation"],
      language: "YAML",
      href: "#",
    },
    {
      name: "Mutation Testing PoC",
      summary:
        "Exploración práctica de mutmut para medir efectividad de tests, detectar mutantes sobrevivientes y fortalecer cobertura real.",
      tags: ["mutmut", "pytest", "Test Effectiveness"],
      language: "Python",
      href: "#",
    },
    {
      name: "PR Feedback System",
      summary:
        "Automatización de hallazgos en pull requests con comentarios accionables, foco en señal y mejora continua.",
      tags: ["PR Review", "Automation", "Quality Gates"],
      language: "Python",
      href: "#",
    },
    {
      name: "QA Reporting Lab",
      summary:
        "Exploraciones para transformar resultados técnicos en reportes más claros, visuales y útiles para seguimiento.",
      tags: ["Reports", "Metrics", "QA"],
      language: "Python",
      href: "#",
    },
    {
      name: "API Validation Suite",
      summary:
        "Validaciones orientadas a negocio para APIs, con foco en reglas, contratos y cobertura funcional sostenible.",
      tags: ["API Testing", "Validation", "pytest"],
      language: "Python",
      href: "#",
    },
  ];

  const skills = [
    "Functional Testing",
    "API Testing",
    "Test Automation",
    "Python",
    "pytest",
    "Selenium",
    "GitHub Actions",
    "CI/CD",
    "Mutation Testing",
    "BDD Thinking",
    "Quality Strategy",
    "PR Feedback Systems",
  ];

  const metrics = [
    {
      label: "Mutation Score",
      value: "78% → 92%",
      detail: "Mejora progresiva de efectividad de tests sobre flujos críticos.",
    },
    {
      label: "Flaky Rate",
      value: "-35%",
      detail: "Reducción de ruido e inestabilidad en validaciones automáticas.",
    },
    {
      label: "PR Feedback Time",
      value: "-50%",
      detail: "Feedback más rápido y accionable para iterar con más confianza.",
    },
    {
      label: "Coverage Signal",
      value: "Alta confianza",
      detail: "Cobertura usada como evidencia útil, no solo como número decorativo.",
    },
  ];

  const principles = [
    {
      title: "Quality as a System",
      text: "No solo escribir tests: diseñar señales confiables para release, feedback útil y automatización sostenible.",
      icon: ShieldCheck,
    },
    {
      title: "AI as an Accelerator",
      text: "Usar IA para resumir, sugerir y transcribir hallazgos, sin volver la solución dependiente de un proveedor.",
      icon: Workflow,
    },
    {
      title: "Build in Public",
      text: "Repos, pipelines y experimentos reales como evidencia visible de aprendizaje, criterio técnico y ejecución.",
      icon: FlaskConical,
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const visibleRepos = useMemo(
    () => featuredRepos.slice(0, visibleCount),
    [featuredRepos, visibleCount]
  );

  const hasMore = visibleCount < featuredRepos.length;

  const getLanguageIcon = (language) => {
    switch (language) {
      case "Python":
        return <span aria-label="Python" title="Python">🐍</span>;
      case "YAML":
        return <TerminalSquare className="h-4 w-4" />;
      default:
        return <Code2 className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#07111f] text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.16),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.10)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-5%] top-64 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#07111f]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-blue-300">SebCo. Labs</p>
            <p className="text-xs text-slate-400">Portfolio · QA · Automation</p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#metrics" className="transition hover:text-white">Metrics</a>
            <a href="#approach" className="transition hover:text-white">Approach</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-28 lg:pt-28">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Sebastián Couto
              </h1>
              <p className="text-lg text-blue-300 md:text-xl">
                QA Engineer | SDET | Automation
              </p>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                QA Engineer enfocado en testing funcional, automatización, APIs y CI/CD. Construyo soluciones de calidad que reducen ruido, mejoran la señal y hacen más confiable cada entrega.
              </p>
            </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-2xl border border-blue-300/30 bg-blue-400/15 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-400/20"
            >
              View My Work
            </a>

            <a
              href="/Sebastian_Couto_CV_ES.pdf"
              download="Sebastian-Couto-CV.pdf"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              CV - ES
            </a>

            <a
              href="/Sebastian_Couto_CV_EN.pdf"
              download="Sebastian-Couto-CV.pdf"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              CV - EN
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-slate-300">
              <a
                href="https://github.com/SebasCouto"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-5 w-5 fill-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/sebastiancouto/"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5 fill-white" />
              </a>
              <a
                href="#work"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                aria-label="Portfolio"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="mailto:sebastian.o.couto@gmail.com"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
                aria-label="Email"
              >
                <EmailIcon className="h-5 w-5" />
              </a>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {[
                ["10+", "Años en tecnología"],
                ["QA", "De funcional a automation"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-400/10 to-cyan-300/5 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Focus</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Quality Engineering</h2>
                </div>
                <div className="rounded-2xl border border-blue-300/20 bg-blue-300/10 px-3 py-2 text-xs text-blue-100">
                  Live portfolio concept
                </div>
              </div>

            <div className="space-y-4">
              {[
                {
                  title: "Functional Testing",
                  text: "Cobertura con intención de negocio y caminos de validación utilizables.",
                  featured: false,
                },
                {
                  title: "Automation",
                  text: "De la ejecución de tests a workflows reutilizables y feedback sostenible.",
                  featured: false,
                },
                {
                  title: "CI Signal",
                  text: "Pipelines diseñados para reducir ruido y generar señales de release confiables y accionables.",
                  featured: true,
                },
                {
                  title: "PR Feedback",
                  text: "Integro controles automatizados como mutation testing, cobertura, análisis estático y feedback en PRs.",
                  featured: true,
                },
                {
                  title: "AI-enriched Feedback",
                  text: "Uso IA para resumir resultados, contextualizar hallazgos y mejorar la calidad del feedback sin depender de ella para la ejecución.",
                  featured: true,
                },
                {
                  title: "Metrics",
                  text: "Uso métricas como mutation score, flaky rate, feedback time y cobertura útil para reforzar la señal de calidad.",
                  featured: true,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-4 transition ${
                    item.featured
                      ? "border-amber-300/20 bg-slate-950/50 shadow-[0_0_28px_rgba(251,191,36,0.10)]"
                      : "border-white/10 bg-slate-950/40"
                  }`}
                >
                  <div className="mb-1 flex items-center gap-3">
                    {item.featured ? (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-300/10 text-amber-300 shadow-[0_0_16px_rgba(251,191,36,0.18)]">
                        <Zap className="h-3.5 w-3.5" />
                      </div>
                    ) : (
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-300" />
                    )}
                    <p className={`${item.featured ? "text-amber-100" : "text-white"} font-medium`}>
                      {item.title}
                    </p>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
              
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-blue-300">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Beyond test execution
              </h2>
            </div>
            <div className="space-y-5 rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <p className="text-base leading-8 text-slate-300">
                Mi foco no es solo escribir tests. Me interesa diseñar sistemas de calidad sostenibles: validación funcional sólida, automatización útil, pipelines confiables y feedback que realmente sirva para tomar decisiones.
              </p>
              <p className="text-base leading-8 text-slate-300">
                Este portfolio busca mostrar trabajo real, experimentación técnica y una evolución clara desde QA funcional hacia quality engineering, automation architecture y señales de calidad más inteligentes dentro del ecosistema GitHub.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-blue-300">Featured Work</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Projects in progress</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              Esta V1 muestra proyectos destacados de forma curada. Más adelante esta sección podrá nutrirse automáticamente desde GitHub con lenguajes, métricas y actividad.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {visibleRepos.map((repo) => (
              <article key={repo.name} className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-300/20 hover:bg-white/[0.07]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-300">
                    Repo Highlight
                  </span>
                  <span className="flex items-center gap-2 text-sm text-blue-200">
                    {getLanguageIcon(repo.language)}
                    <span>{repo.language}</span>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{repo.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{repo.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {repo.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={repo.href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-blue-200">
                  Ver proyecto <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {hasMore ? (
              <button
                onClick={() => setVisibleCount((prev) => prev + 3)}
                className="inline-flex items-center gap-2 rounded-2xl border border-blue-300/25 bg-blue-400/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400/20"
              >
                Ver 3 más <ChevronDown className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => setVisibleCount(3)}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                Mostrar menos <ChevronUp className="h-4 w-4" />
              </button>
            )}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-blue-300">Skills</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Core stack and capabilities</h2>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-amber-300/20 bg-slate-950/40 p-5 shadow-[0_0_30px_rgba(251,191,36,0.08)]">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200">
                    <Zap className="h-4 w-4" />
                  </div>
                  <p className="text-sm uppercase tracking-[0.22em] text-amber-300">
                    Focus metrics
                  </p>
                </div>

    <p className="text-sm leading-7 text-slate-300">
      Mutation score, cobertura útil, flaky rate, feedback en PRs y tiempos de respuesta
      son parte del tipo de señal que priorizo cuando diseño suites de cobertura automatizada.
    </p>
  </div>
</div>
            
          </div>
        </section>

        <section id="metrics" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Metrics</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Signals, coverage and quality metrics
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              Cuando diseño suites automatizadas, no me enfoco solo en ejecutar tests.
              Me interesa medir la calidad de la señal: estabilidad, cobertura útil,
              feedback accionable y efectividad real de las validaciones.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[2rem] border border-amber-300/20 bg-white/5 p-6 backdrop-blur-sm shadow-[0_0_35px_rgba(251,191,36,0.08)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.15)]">
                  <BarChart3 className="h-5 w-5" />
                </div>

                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  {metric.label}
                </p>

                <p className="mt-3 text-2xl font-semibold text-amber-100">
                  {metric.value}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="approach" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.28em] text-blue-300">Approach</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">How I think about quality</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-300/25 bg-blue-400/10 text-blue-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
          <div className="rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-blue-400/10 via-white/5 to-cyan-400/10 p-8 backdrop-blur-xl md:p-10 shadow-[0_0_40px_rgba(251,191,36,0.06)]">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-blue-200">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                  Let’s build better quality signals
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  Esta V1 prioriza claridad, identidad profesional y una base sólida para evolucionar hacia un portfolio vivo con datos automáticos desde GitHub.
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
      </main>
    </div>
  );
}
