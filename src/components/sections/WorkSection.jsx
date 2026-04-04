import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Code2, TerminalSquare } from "lucide-react";
import { featuredRepos } from "../../data/portfolio";

function getLanguageIcon(language) {
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
}

export function WorkSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  const visibleRepos = useMemo(
    () => featuredRepos.slice(0, visibleCount),
    [visibleCount]
  );

  const hasMore = visibleCount < featuredRepos.length;
  const remainingCount = featuredRepos.length - visibleCount;
  const nextBatchCount = Math.min(3, remainingCount);

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
      <div className="mb-8 flex flex-col gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-blue-300 md:text-base">
            Featured Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Selected Work</h2>
        </div>
        <p className="mt-4 w-full text-base leading-8 text-slate-300 lg:w-[85%] xl:w-[90%]">
          Mi intención es mostrar proyectos destacados de forma curada. Más adelante esta sección se
          nutrirá automáticamente desde GitHub con actividad, métricas y señales adicionales.
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
            {repo.accent === "core" && (
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            )}

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
            onClick={() => setVisibleCount((prev) => Math.min(prev + 3, featuredRepos.length))}
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
  );
}
