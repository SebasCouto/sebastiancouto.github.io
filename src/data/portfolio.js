import {
  Zap,
  GitPullRequestArrow,
  Sparkles,
  BarChart3,
  ScanSearch,
  Waypoints,
  Code2,
  Gauge,
  BrainCircuit,
  Layers3,
  Activity,
  Radar,
  CheckCircle2,
  ShieldCheck,
  Workflow,
  FlaskConical,
} from "lucide-react";

export const featuredRepos = [
  {
    name: "Cross Platform Guard",
    summary:
      "Reusable QA engine that enables cross-repository validation, automated PR analysis and quality enforcement using GitHub Actions.",
    tags: ["QA", "CI/CD", "GitHub Actions", "Automation", "AI"],
    language: "YAML",
    href: "https://github.com/PlatformUnityCI/sebco-labs-platform-guard-showcase/blob/main/README.md",
    accent: "standard",
  },
  /*{
    name: "Cross Quality CI",
    summary:
      "Capa de CI reutilizable que estandariza controles de calidad entre repositorios, permitiendo escalar pipelines de testing multilenguaje.",
    tags: ["CI/CD", "Reusable Workflows", "Automation", "QA"],
    language: "Multilanguage",
    href: "https://github.com/PlatformUnityCI/cross-quality-ci",
    accent: "standard",
  }*/,
  {
    name: "Mutation Testing PoC",
    summary:
      "Exploración práctica de mutmut para medir efectividad de tests, detectar mutantes sobrevivientes y fortalecer cobertura real.",
    tags: ["mutmut", "pytest", "Test Effectiveness"],
    language: "Python",
    href: "https://github.com/PlatformUnityCI/sebco-labs-mutation-testing",
    accent: "core",
  },
  /*{
    name: "Layer Validation PoC",
    summary:
      "Validación end-to-end de reportes financieros, conectando mocks de API, lógica de negocio y documentos PDF para asegurar consistencia real.",
    tags: ["QA", "Functional Testing E2E", "Finance", "Automation", "psycopg2", "pytesseract", "PyPDF2"],
    language: "Python",
    href: "https://github.com/SebasCouto/sebco-labs-layer-validation",
    accent: "standard",
  /,
  {
    name: "API Validation Suite",
    summary:
      "Validaciones orientadas a negocio para APIs, con foco en reglas, contratos y cobertura funcional sostenible.",
    tags: ["API Testing", "Validation", "pytest", "requests"],
    language: "Python",
    href: "Python",
    accent: "standard",
  }*/,
  {
    name: "PR Feedback System",
    summary:
      "Automatización de hallazgos en pull requests con comentarios accionables, foco en señal y mejora continua.",
    tags: ["PR Review", "Automation", "Quality Gates"],
    language: "YAML",
    href: "https://github.com/PlatformUnityCI/sebco-labs-mutation-testing/pull/72",
    accent: "core",
  },
];

export const focusAreas = [
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

export const supportingAreas = [
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

export const skillGroups = [
  {
    title: "Automation Foundations",
    icon: Code2,
    items: ["Python", "pytest", "Selenium", "API Testing", "requests", "pdfplumber", "PyPDF2"],
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

export const metrics = [
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

export const principles = [
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

export const narrativeTags = [
  "CI Signal",
  "Mutation Testing",
  "PR Feedback",
  "Quality Metrics",
];
