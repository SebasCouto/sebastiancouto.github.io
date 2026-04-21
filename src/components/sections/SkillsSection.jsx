import { Cpu } from "lucide-react";
import { skillGroups } from "../../data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-blue-300 md:text-base">Skills</p>
          <div className="space-y-5">
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Core stack and capabilities
            </h2>

            <p className="max-w-2xl text-base leading-7 text-slate-400">
              Trabajo con Postman para exploración inicial de servicios y evoluciono hacia suites
              automatizadas en Python con framework de pytest utilizando (request) para validacion de 
              contratos de api-rest, SOAP y GraphQL. Diseño y mantenimiento de suites integradas en CI/CD (Github) 
              para regresión testing. Experiencia en entornos serverless sobre AWS utilizando boto3 para consultas 
              en DynamoDB. API Gateway y Cloudwatch de lambdas. 
            </p>

            <p className="max-w-2xl text-base leading-7 text-slate-400">
              Participación en pruebas cross-producto, cross-teams y coordinación de test plans durante pruebas de 
              negocio en sistemas complejos como "la integración con diferentes proveedores/billeteras".
            </p>

            <p className="text-base leading-8 text-slate-400">
              Más que una lista de skilss, esto representa cómo conecto stack, cobertura,señal de CI y estrategia de calidad.
            </p>
          </div>
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
              Mutation score, cobertura útil, flaky rate, feedback en PRs y tiempos de respuesta
              forman parte del tipo de señal que priorizo al diseñar suites automatizadas y workflows
              de calidad sostenibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
