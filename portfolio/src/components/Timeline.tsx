import { experiences } from "../data/portfolio";
import type { Experience } from "../data/portfolio";
import type { SectionProps } from "../types";

const typeLabel: Record<Experience["type"], string> = {
  work: "Trabalho",
  education: "Educação",
  volunteer: "Voluntário",
};

export function Timeline({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="py-28 px-6 bg-base-200/40"
      aria-labelledby="trajetoria-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
            <span className="text-primary font-medium">
            Habilidades
          </span>

          <div>
            <h2
              id="trajetoria-heading"
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              Minha jornada
            </h2>

            <p className="text-base-content/60 mb-12 max-w-2xl">
              Um resumo da minha formação e experiências que contribuíram
              para meu desenvolvimento profissional até aqui.
            </p>

            <ol
              className="relative flex flex-col"
              aria-label="Linha do tempo"
            >
              {experiences.map((exp, index) => {
                const isCurrent =
                  exp.company.toLowerCase().includes("fatec");

                return (
                  <li
                    key={`${exp.company}-${index}`}
                    className="
                      relative
                      pl-8
                      pb-12
                      last:pb-0

                      border-l
                      border-base-300
                    "
                  >
                    {/* Indicador */}
                    <span
                      className="
                        absolute
                        left-[-7px]
                        top-1

                        w-3
                        h-3

                        rounded-full

                        bg-primary
                        border-4
                        border-base-100
                      "
                      aria-hidden="true"
                    />

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs text-base-content/30 uppercase tracking-widest">
                        {typeLabel[exp.type]}
                      </span>

                      {isCurrent && (
                        <span
                          className="
                            text-[10px]
                            px-2
                            py-1
                            rounded-full

                            bg-primary/10
                            text-primary
                            font-medium
                          "
                        >
                          Atual
                        </span>
                      )}

                      <span className="text-xs text-base-content/30">
                        •
                      </span>

                      <time className="text-xs text-base-content/40">
                        {exp.period}
                      </time>
                    </div>

                    {/* Cargo / Curso */}
                    <h3 className="font-semibold text-lg text-base-content mb-1">
                      {exp.role}
                    </h3>

                    <p className="text-sm text-primary mb-4">
                      {exp.company}
                    </p>

                    <p className="text-sm md:text-base text-base-content/65 leading-relaxed">
                      {exp.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}