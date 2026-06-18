import { SectionHeading } from "./SectionHeading";
import {
  SiTypescript,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiFlask,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiJira,
  SiVite,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

const hard = [
  {
    group: "Linguagens",
    items: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
    ],
  },
  {
    group: "Frameworks",
    items: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Flask", icon: SiFlask },
      { name: "Spring Boot", icon: SiSpringboot },
    ],
  },
  {
    group: "Bancos de Dados",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    group: "Ferramentas",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Figma", icon: SiFigma },
      { name: "Jira", icon: SiJira },
      { name: "Vite", icon: SiVite },
    ],
  },
];

const soft = [
  {
    group: "Pensamento Estratégico",
    skills: [
      "Pensamento Analítico",
      "Visão de Contexto",
      "Aprendizado Contínuo",
      "Visão Estratégica",
    ],
  },
  {
    group: "Construção de Relacionamentos",
    skills: [
      "Adaptabilidade",
      "Conexão com Pessoas",
      "Empatia",
      "Colaboração",
      "Relacionamento Interpessoal",
    ],
  },
  {
    group: "Influência",
    skills: [
      "Proatividade",
      "Comunicação Clara",
    ],
  },
  {
    group: "Execução",
    skills: [
      "Organização",
      "Consistência",
      "Disciplina",
      "Foco em Resultados",
      "Responsabilidade",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="habilidades"
      className="border-y border-border bg-surface px-6 py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Competências"
          title="Habilidades técnicas e humanas"
          description="Domínio técnico construído com profundidade, somado às competências comportamentais que sustentam a colaboração e a entrega contínua."
        />

        <div className="mb-20">
          <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-accent">
            Hard Skills
          </p>
          <div className="grid gap-10 md:grid-cols-2">
            {hard.map((g) => (
              <div key={g.group}>
                <h4 className="mb-5 text-sm font-semibold text-foreground">{g.group}</h4>
                <div className="flex flex-wrap gap-5">
                  {g.items.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div
                        key={s.name}
                        className="
                          group relative flex h-14 w-14 items-center justify-center
                          rounded-xl border border-border
                          bg-background
                          transition-all
                          hover:-translate-y-1
                          hover:border-brand-accent
                        "
                      >
                        <Icon
                          size={28}
                          className="
                            text-muted-foreground
                            transition-colors
                            group-hover:text-brand-accent
                          "
                        />

                        <span
                          className="
                            pointer-events-none absolute -top-10 left-1/2
                            -translate-x-1/2
                            rounded-md
                            bg-foreground
                            px-3 py-1
                            text-xs
                            font-medium
                            text-background
                            opacity-0
                            transition-all
                            duration-200
                            group-hover:opacity-100
                            group-hover:-translate-y-1
                            whitespace-nowrap
                          "
                        >
                          {s.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-accent">
            Soft Skills
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {soft.map((s) => (
              <div key={s.group}>
                <h4 className="mb-4 text-sm font-semibold text-foreground">
                  {s.group}
                </h4>

                <div className="flex flex-wrap gap-3">
                  {s.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border border-border
                        bg-background
                        px-4 py-2
                        text-sm
                        text-muted-foreground
                        transition-all
                        hover:border-brand-accent
                        hover:text-brand-accent
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}