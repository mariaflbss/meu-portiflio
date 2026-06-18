import { SectionHeading } from "./SectionHeading";

type Event = {
  date: string;
  title: string;
  org: string;
  type: string;
  description: string;
};

const events: Event[] = [
  {
    date: "Mai 2026",
    title: "Science & Business Connection",
    org: "Parque de Inovação Tecnológica (PIT)",
    type: "Programa de Inovação",
    description:
      "Participei do programa Science & Business Connection, explorando a conexão entre ciência, tecnologia e mercado por meio de desafios voltados à inovação e ao empreendedorismo.",
  },
  {
    date: "Set 2025",
    title: "Python Day São José dos Campos",
    org: "Comunidade Python SJC e Vale do Paraíba",
    type: "Evento Técnico",
    description:
      "Participei de palestras e atividades técnicas sobre desenvolvimento com Python, projetos open source e tendências do setor de tecnologia.",
  },
  {
    date: "Nov 2025",
    title: "Hackathon FATEC São José dos Campos",
    org: "FATEC Prof. Jessen Vidal",
    type: "Hackathon",
    description:
      "Participei do desenvolvimento de uma solução em equipe durante o hackathon, aplicando conhecimentos de programação, prototipação e resolução de problemas sob prazo limitado",
  },
  {
    date: "Out 2024",
    title: "XVIII Encontro Latino-Americano de Iniciação Científica Júnior",
    org: "Universidade do Vale do Paraíba (UNIVAP)",
    type: "Evento Científico",
    description:
      "Apresentei o artigo científico 'Um estudo sobre a ferramenta Blockchain', compartilhando os resultados da pesquisa e participando de discussões acadêmicas com estudantes e pesquisadores.",
  },
];

export function Events() {
  return (
    <section id="eventos" className="px-6 py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Vivência"
          title="Eventos e atividades extracurriculares"
          description="Participação ativa em comunidades técnicas, competições e iniciativas que ampliam a formação acadêmica."
        />
        <ol className="relative space-y-10 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border md:before:left-[140px]">
          {events.map((e, i) => (
            <li key={i} className="relative pl-8 md:pl-0">
              <span className="absolute left-0 top-2 size-3.5 rounded-full border-2 border-brand-accent bg-background md:left-[1px]" />
              <div className="grid gap-3 md:grid-cols-[160px_1fr] md:gap-8">
                <div className="md:pl-0 md:pr-8 md:text-right">
                  <p className="text-sm font-medium text-brand-silver md:pr-6">{e.date}</p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:bg-accent/40 md:p-7">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-accent">
                      {e.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{e.org}</span>
                  </div>
                  <h4 className="font-display text-xl text-foreground">{e.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
