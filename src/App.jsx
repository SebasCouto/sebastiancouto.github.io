import { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Globe,
  ArrowRight,
  FlaskConical,
  Workflow,
  ShieldCheck,
  Code2,
  TerminalSquare,
  Sparkles,
  Gauge,
  Zap,
  BarChart3,
  GitPullRequestArrow,
  Activity,
  BrainCircuit,
  CheckCircle2,
  Layers3,
  Radar,
  Bot,
  ScanSearch,
  Waypoints,
  Cpu,
} from "lucide-react";

import { GitHubIcon, LinkedInIcon, EmailIcon } from "./components/SocialIcons";

export default function SebastianCoutoPortfolioV2() {
  const featuredRepos = [
    {
      name: "Cross Platform Guard",
      summary:
        "Reusable QA engine that enables cross-repository validation, automated PR analysis and quality enforcement using GitHub Actions.",
      tags: ["QA", "CI/CD", "GitHub Actions", "Automation", "AI"],
      language: "Python",
      href: "https://github.com/PlatformUnityCI/cross-platform-guard",
      accent: "standard",
    },
    {
      name: "Cross Quality CI",
      summary:
        "Capa de CI reutilizable que estandariza controles de calidad entre repositorios, permitiendo escalar pipelines de testing multilenguaje.",
      tags: ["CI/CD", "Reusable Workflows", "Automation", "QA"],
      language: "YAML",
      href: "https://github.com/PlatformUnityCI/cross-quality-ci",
      accent: "standard",
    },
    {
      name: "Mutation Testing PoC",
      summary:
        "Exploración práctica de mutmut para medir efectividad de tests, detectar mutantes sobrevivientes y fortalecer cobertura real.",
      tags: ["mutmut", "pytest", "Test Effectiveness"],
      language: "Python",
      href: "https://github.com/PlatformUnityCI/sebco-labs-mutation-testing",
      accent: "core",
    },    
    {
      name: "Layer Validation PoC",
      summary:
        "Validación end-to-end de reportes financieros, conectando mocks de API, lógica de negocio y documentos PDF para asegurar consistencia real.",
      tags: ["QA", "E2E", "Finance", "Automation", "psycopg2", "pytesseract", "PyPDF2"],
      language: "Python",
      href: "https://github.com/SebasCouto/sebco-labs-layer-validation",
      accent: "standard",
    },
    {
      name: "API Validation Suite",
      summary:
        "Validaciones orientadas a negocio para APIs, con foco en reglas, contratos y cobertura funcional sostenible.",
      tags: ["API Testing", "Validation", "pytest"],
      language: "Python",
      href: "#",
      accent: "standard",
    },
    {
      name: "PR Feedback System",
      summary:
        "Automatización de hallazgos en pull requests con comentarios accionables, foco en señal y mejora continua.",
      tags: ["PR Review", "Automation", "Quality Gates"],
      language: "TBD",
      href: "#",
      accent: "core",
    },
    {
      name: "QA Reporting Lab",
      summary:
        "Exploraciones para transformar resultados técnicos en reportes más claros, visuales y útiles para seguimiento.",
      tags: ["Reports", "Metrics", "QA"],
      language: "TBD",
      href: "#",
      accent: "standard",
    },
  ];

  const focusAreas = [
    {
      title: "CI Signal",
      text: "Pipelines diseñados para reducir ruido, aumentar confianza y transformar CI en una señal clara para release.",
      icon: Zap,

    },
    {
      title: "PR Feedback",
      text: "Hallazgos accionables sobre pull requests para acelerar iteración, revisión y aprendizaje técnico.",
      icon: GitPullRequestArrow,
    },
    {
      title: "AI-enriched Feedback",
      text: "IA como capa de enriquecimiento para resumir, contextualizar y sugerir, sin volver el sistema dependiente.",
      icon: Sparkles,
    },
    {
      title: "Metrics",
      text: "Mutation score, flaky rate, feedback time y cobertura útil como parte de una estrategia de señal confiable.",
      icon: BarChart3,
    },
  ];

  const supportingAreas = [
    {
      title: "Functional Testing",
      text: "Cobertura orientada a negocio, decisiones y flujos realmente relevantes.",
      icon: ScanSearch,
    },
    {
      title: "Automation Architecture",
      text: "Workflows reutilizables, suites sostenibles y automatización con criterio.",
      icon: Waypoints,
    },
  ];

  const skillGroups = [
    {
      title: "Automation Foundations",
      icon: Code2,
      items: ["Python", "pytest", "Selenium", "API Testing"],
    },
    {
      title: "CI / Delivery Signal",
      icon: Gauge,
      items: ["GitHub Actions", "CI/CD", "PR Feedback Systems", "Reusable Workflows"],
    },
    {
      title: "Quality Intelligence",
      icon: BrainCircuit,
      items: ["Mutation Testing", "Coverage Mindset", "Flaky Reduction", "Actionable Feedback"],
    },
    {
      title: "Strategy & Design",
      icon: Layers3,
      items: ["Quality Strategy", "BDD Thinking", "Validation by Risk", "Quality as a System"],
    },
  ];

  const metrics = [
    {
      label: "Mutation Score",
      value: "78% → 92%",
      detail: "Mejora progresiva de efectividad de tests sobre flujos críticos.",
      progress: 92,
      tone: "amber",
      icon: Activity,
    },
    {
      label: "Flaky Rate",
      value: "-35%",
      detail: "Reducción de ruido e inestabilidad en validaciones automáticas.",
      progress: 35,
      tone: "blue",
      icon: Radar,
    },
    {
      label: "PR Feedback Time",
      value: "-50%",
      detail: "Feedback más rápido y accionable para iterar con más confianza.",
      progress: 50,
      tone: "blue",
      icon: GitPullRequestArrow,
    },
    {
      label: "Coverage Signal",
      value: "Alta confianza",
      detail: "Cobertura usada como evidencia útil, no solo como número decorativo.",
      progress: 88,
      tone: "amber",
      icon: CheckCircle2,
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

  const narrativeTags = [
    "CI Signal",
    "Mutation Testing",
    "PR Feedback",
    "Quality Metrics",
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
        return (
          <span aria-label="Python" title="Python">
            🐍
          </span>
        );
      case "YAML":
        return <TerminalSquare className="h-4 w-4" />;
      default:
        return <Code2 className="h-4 w-4" />;
    }
  };

  const progressBarClass = (tone) =>
    tone === "amber"
      ? "bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100"
      : "bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200";

  const SectionDivider = () => (
    <section className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-px w-40 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/25 to-transparent" />
      </div>
    </section>
  );

  const remainingCount = featuredRepos.length - visibleCount;
  const nextBatchCount = Math.min(3, remainingCount);

  return (
    <div className="min-h-screen overflow-x-clip bg-[#07111f] text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.12),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.16),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.10)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="absolute left-0 top-16 h-72 w-72 -translate-x-1/3 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-64 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 translate-y-1/4 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#07111f]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-blue-300">SebCo. Labs</p>
            <p className="text-xs text-slate-400">PORTFOLIO | SEBASTIÁN COUTO</p>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#metrics" className="transition hover:text-white">
              Metrics
            </a>
            <a href="#approach" className="transition hover:text-white">
              Approach
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-14">
          <div className="space-y-7">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.12)]">
                <Bot className="h-3.5 w-3.5" />
                QA Engineer · SDET · Automation
              </div>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl">
                Diseño sistemas de calidad con{" "}
                <span className="text-blue-300">señal confiable</span> y{" "}
                <span className="text-amber-200">feedback accionable</span>
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                No se trata solo de testear. Se trata de construir pipelines donde cada
                ejecución entregue una señal clara para decidir: menos ruido, más confianza
                y una automatización que realmente ayude a sostener el cambio.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {narrativeTags.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition duration-300 hover:border-blue-300/20 hover:bg-white/[0.07]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-2xl border border-blue-300/30 bg-blue-400/15 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400/20"
              >
                View My Work
              </a>

              <a
                href="/Sebastian_Couto_CV_ES.pdf"
                download="Sebastian-Couto-CV.pdf"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                CV - ES
              </a>

              <a
                href="/Sebastian_Couto_CV_EN.pdf"
                download="Sebastian-Couto-CV.pdf"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                CV - EN
              </a>
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
                href="#work"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                aria-label="Portfolio"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="mailto:sebastian.o.couto@gmail.com"
                className="rounded-2xl border border-white/10 bg-white/5 p-3 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                aria-label="Email"
              >
                <EmailIcon className="h-5 w-5" />
              </a>
            </div>

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {[
                ["10+", "Años en tecnología"],
                ["QA → SDET", "De funcional a automation"],
                ["CI Signal", "Menos ruido, más confianza"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:border-white/15 hover:bg-white/[0.07]"
                >
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-300/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-blue-200">Focus</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Quality Engineering Focus
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                    El objetivo no es automatizar por automatizar. Es construir una capa de
                    calidad que entregue señal útil, cobertura con criterio y feedback que
                    sirva para decidir con más confianza.
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
                      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-br from-amber-300/5 via-transparent to-transparent" />

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

        <SectionDivider />

        <section id="about" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-blue-300">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Beyond test execution
              </h2>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <p className="text-base leading-8 text-slate-300">
                  Mi foco no es solo escribir tests. Me interesa diseñar sistemas de calidad
                  sostenibles: validación funcional sólida, automatización útil, pipelines
                  confiables y feedback que realmente sirva para tomar decisiones.
                </p>
                <p className="text-base leading-8 text-slate-300">
                  Este portfolio busca mostrar trabajo real, experimentación técnica y una
                  evolución clara desde QA funcional hacia quality engineering, automation
                  architecture y señales de calidad más inteligentes dentro del ecosistema
                  GitHub.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        <section id="work" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">        
          <div className="mb-8 flex flex-col gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-blue-300">Featured Work</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Projects in progress
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">
              Mi intención es mostrar proyectos destacados de forma curada. Más adelante esta
              sección se nutrirá automáticamente desde GitHub con actividad, métricas y
              señales adicionales.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {visibleRepos.map((repo) => (
              <article
                key={repo.name}
                className={`group relative overflow-hidden rounded-[2rem] border p-6 transition duration-300 hover:-translate-y-1 ${
                  repo.accent === "core"
                    ? "border-amber-300/18 bg-white/5 shadow-[0_0_24px_rgba(251,191,36,0.06)] hover:border-amber-300/25 hover:shadow-[0_0_32px_rgba(251,191,36,0.08)]"
                    : "border-white/10 bg-white/5 hover:border-blue-300/20 hover:bg-white/[0.07]"
                }`}
              >
                {repo.accent === "core" ? (
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-gradient-to-br from-amber-300/5 via-transparent to-transparent" />
                ) : null}

                <div className="relative">
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        repo.accent === "core"
                          ? "border border-amber-300/20 bg-amber-300/10 text-amber-100"
                          : "border border-white/10 bg-slate-950/50 text-slate-300"
                      }`}
                    >
                      {repo.accent === "core" ? "Core Signal" : "Repo Highlight"}
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
                      <span
                        key={tag}
                        className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={repo.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-blue-200"
                  >
                    Ver proyecto{" "}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {hasMore ? (
              <button
                onClick={() =>
                  setVisibleCount((prev) => Math.min(prev + 3, featuredRepos.length))
                }
                className="inline-flex items-center gap-2 rounded-2xl border border-blue-300/25 bg-blue-400/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400/20"
              >
                Ver {nextBatchCount} más <ChevronDown className="h-4 w-4" />
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

        <SectionDivider />

        <section id="skills" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-blue-300">Skills</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Core stack and capabilities
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                Más que una lista de herramientas, esto representa cómo conecto stack,
                cobertura, señal de CI y estrategia de calidad.
              </p>
            </div>

            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <div className="grid gap-4 md:grid-cols-2">
                {skillGroups.map((group) => {
                  const Icon = group.icon;

                  return (
                    <div
                      key={group.title}
                      className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 p-5 transition duration-300 hover:border-white/15 hover:bg-slate-950/45"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-blue-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-semibold text-white">{group.title}</h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-[1.6rem] border border-amber-300/20 bg-slate-950/45 p-5 shadow-[0_0_30px_rgba(251,191,36,0.08)]">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-amber-300/25 bg-amber-300/10 text-amber-200">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <p className="text-sm uppercase tracking-[0.22em] text-amber-300">
                    Quality signal mindset
                  </p>
                </div>

                <p className="text-sm leading-7 text-slate-300">
                  Mutation score, cobertura útil, flaky rate, feedback en PRs y tiempos de
                  respuesta forman parte del tipo de señal que priorizo al diseñar suites
                  automatizadas y workflows de calidad sostenibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        <section id="metrics" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Metrics</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Signals, coverage and quality metrics
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              Cuando diseño suites automatizadas, no me enfoco solo en ejecutar tests. Me
              interesa medir la calidad de la señal: estabilidad, cobertura útil, feedback
              accionable y efectividad real de las validaciones.
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

                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                      {metric.label}
                    </p>

                    <p className="mt-3 text-2xl font-semibold text-amber-100">
                      {metric.value}
                    </p>

                    <div className="mt-4">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 backdrop-blur-sm">
                        <div
                          className={`h-full rounded-full ${progressBarClass(
                            metric.tone
                          )} shadow-[0_0_10px_rgba(255,255,255,0.15)]`}
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
              <p className="text-sm uppercase tracking-[0.22em] text-blue-200">
                Why metrics matter
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Métricas conectadas a decisión, no solo a reporting
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                Las métricas tienen valor cuando ayudan a interpretar la salud real del
                pipeline: si la cobertura aporta confianza, si el feedback llega a tiempo,
                si los tests sostienen cambios y si CI está dando una señal limpia o ruido.
              </p>
            </div>

            <div className="rounded-[2rem] border border-amber-300/20 bg-slate-950/45 p-6 shadow-[0_0_34px_rgba(251,191,36,0.08)]">
              <p className="text-sm uppercase tracking-[0.22em] text-amber-300">
                Core signal stack
              </p>
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

        <SectionDivider />

        <section id="approach" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.28em] text-blue-300">Approach</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              How I think about quality
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.07]"
                >
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

        <SectionDivider />

        <section id="contact" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-20">
          <div className="rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-blue-400/10 via-white/5 to-cyan-400/10 p-8 shadow-[0_0_40px_rgba(251,191,36,0.06)] backdrop-blur-xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-blue-200">Contact</p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                  Let’s build better quality signals
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  Esta portfolio prioriza claridad, señal e identidad profesional, manteniendo una
                  base sólida para evolucionar hacia un portfolio vivo con datos automáticos
                  desde GitHub.
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
