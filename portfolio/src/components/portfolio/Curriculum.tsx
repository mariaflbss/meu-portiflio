import { SectionHeading } from "./SectionHeading";

type Entry = {
  period: string;
  title: string;
  org: string;
  description: string;
  type: "formacao" | "curso" | "certificacao" | "experiência" ;
  current?: boolean;
};

const entries: Entry[] = [
  {
    period: "2025 — 2027",
    title: "Desenvolvimento de Software Multiplataforma",
    org: "FATEC Jessen Vidal",
    description:
      "Graduação focada em desenvolvimento web, engenharia de software e aplicações multiplataforma. Experiência com HTML, CSS, JavaScript, TypeScript, Python, Flask, MySQL, Git, UML e AWS.",
    type: "formacao",
    current: true,
  },
  {
    period: "2022 — 2024",
    title: "Técnico em Administração",
    org: "Colégio Técnico Antônio Teixeira Fernandes",
    description:
      "Formação em gestão de processos, planejamento estratégico, administração financeira, contabilidade básica, organização de equipes e comunicação corporativa.",
    type: "formacao",
  },
  {
    period: "Set 2024 — Jan 2025",
    title: "Estagiária Administrativa",
    org: "ASV Bom Humor",
    description:
      "Atuação em processos administrativos, controle de estoque, logística, gestão de projetos, organização documental e suporte à coordenação de equipes e reuniões.",
    type: "experiência",
  },
  {
    period: "2024",
    title: "XVIII Encontro Latino-Americano de Iniciação Científica Júnior",
    org: "INIC Jr.",
    description:
      "Apresentação e publicação de trabalho científico sobre Blockchain, explorando conceitos, aplicações e impactos da tecnologia em ambientes digitais.",
    type: "certificacao",
  },
];

const typeLabel: Record<Entry["type"], string> = {
  formacao: "Formação",
  curso: "Curso Complementar",
  certificacao: "Certificação",
  experiência: "Experiência"
};

export function Curriculum() {
  return (
    <section id="trajetoria" className="px-6 py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Trajetória"
          title="Formação e trajetória profissional"
          description="Minha jornada acadêmica, experiências profissionais e certificações que contribuíram para minha formação como desenvolvedora."
        />
        <ol className="relative space-y-14 before:absolute before:left-[17px] before:top-2 before:bottom-0 before:w-px before:bg-border">
          {entries.map((e, i) => (
            <li key={i} className="relative pl-12">
              <span
                className={`absolute left-0 top-1 grid size-[35px] place-items-center rounded-full border-2 bg-background ${
                  e.current ? "border-brand-accent" : "border-border"
                }`}
              >
                <span
                  className={`size-2 rounded-full ${
                    e.current ? "bg-brand-accent" : "bg-border"
                  }`}
                />
              </span>
              <div className="grid gap-2 md:grid-cols-[200px_1fr] md:gap-8">
                <div className="pt-1">
                  <p className="text-sm font-medium text-brand-silver">{e.period}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">
                    {typeLabel[e.type]}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{e.title}</h3>
                  <p className="text-sm font-medium text-brand-accent">{e.org}</p>
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {e.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
