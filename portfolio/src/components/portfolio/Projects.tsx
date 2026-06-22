import { useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import apiCrows from "../../assets/images/api-crows-1sem.png";
import apiKingfisher from "../../assets/images/api-kingfisher-2sem.png";
import apiJavatheHutt from "../../assets/images/api-javathehutt-3sem.png";
import agenteFilmes from "../../assets/images/data-agent-filmes.png";
import sistemaAtlantis from "../../assets/images/sistema-gestao-atlantis.png";
import { SectionHeading } from "./SectionHeading";

type Project = {
  name: string;
  category: string;
  cover: string;
  description: string;
  problem: string;
  solution: string;
  methodology: string;
  results: string[];
  tech: string[];
  repo: string;
  gallery: string[];
};

const projects: Project[] = [
  {
    name: "Visualização de Dados de Importação e Exportação - Crows",
    category: "Aprendizagem por Projeto Integrado | 1º Semestre",
    cover: apiCrows,
    description:
      "Plataforma web desenvolvida para análise do desempenho dos municípios do estado de São Paulo no comércio exterior utilizando dados abertos. Durante o desenvolvimento, foram aprimorados conhecimentos em Python, Flask, GitHub, desenvolvimento web e manipulação de dados. A utilização da metodologia Scrum e o trabalho em equipe contribuíram para o desenvolvimento da comunicação, por meio das reuniões de alinhamento e apresentações das entregas. A organização foi fortalecida pela gestão das atividades em sprints e pelo acompanhamento contínuo das tarefas. Já o pensamento analítico e a resolução de problemas foram exercitados durante a interpretação dos dados de comércio exterior e na busca por formas mais eficientes de transformá-los em informações claras e úteis para os usuários da plataforma.",
    problem:
      "A dificuldade de visualizar e interpretar dados de comércio exterior dos municípios paulistas dificultava a identificação de oportunidades, tendências de crescimento e possíveis desafios econômicos regionais.",
    solution:
      "Foi desenvolvida uma plataforma capaz de organizar e apresentar informações sobre o desempenho dos municípios no mercado internacional, permitindo uma análise mais acessível e estratégica dos dados.",
    methodology:
      "O projeto foi desenvolvido utilizando a metodologia ágil Scrum, com divisão das atividades em sprints, organização do backlog do produto, acompanhamento das entregas e melhoria contínua da solução. A metodologia promove a transparência, a comunicação constante e a melhoria contínua, garantindo entregas mais eficientes e alinhadas às necessidades do cliente.",
    results: [
      "Desenvolvimento de uma aplicação web utilizando Flask.",
      "Utilização de dados abertos para criação de uma solução voltada à análise de informações.",
      "Aplicação de conceitos de metodologia ágil e organização de projetos.",
      "Construção de uma solução colaborativa com divisão de tarefas e acompanhamento de entregas."
    ],
    tech: [
      "Python",
      "Flask",
      "GitHub",
      "HTML5",
      "CSS3",
      "Plotly",
      "Google Collab",
      "Figma",
      "Jira",
      "Git",
    ],
    repo: "https://github.com/fatec-api/api-crows",
    gallery: [apiCrows],
  },
  {
    name: "Plataforma de Gestão Integrada - Kingfisher",
    category: "Aprendizagem Por projeto integrado | 2º Semestre",
    cover: apiKingfisher,
    description:
      "Plataforma de gestão integrada desenvolvida para centralizar processos administrativos, comerciais e operacionais da empresa NeweLog, substituindo ferramentas descentralizadas por uma solução única e organizada. Durante o projeto, a comunicação foi constantemente exercitada por meio das interações com a equipe e da compreensão das necessidades apresentadas pelo cliente. A organização e o planejamento foram desenvolvidos durante a definição de prioridades e acompanhamento das atividades das sprints. O levantamento de requisitos fortaleceu a capacidade de escuta e análise de necessidades de negócio, enquanto a colaboração com os demais integrantes da equipe contribuiu para o desenvolvimento do trabalho em equipe e da adaptação às mudanças ocorridas ao longo do projeto.",
    problem:
      "A empresa utilizava diferentes ferramentas para gerenciar seus processos, como Microsoft Lists, Google Forms e planilhas, causando fragmentação de informações, retrabalho, inconsistência de dados e dificuldade na análise dos resultados.",
    solution:
      "Foi desenvolvida uma plataforma web integrada para unificar os processos da empresa, permitindo maior controle das atividades, organização das informações e geração de dados mais confiáveis para apoiar decisões estratégicas.",
    methodology:
      "O projeto foi desenvolvido seguindo a metodologia ágil Scrum, com organização das demandas em backlog, planejamento de entregas, desenvolvimento incremental e acompanhamento contínuo junto ao cliente.",
    results: [
      "Desenvolvimento de uma aplicação web para gestão integrada de processos.",
      "Centralização de informações administrativas, comerciais e operacionais.",
      "Aplicação de conceitos de desenvolvimento Front-end e banco de dados.",
      "Experiência no desenvolvimento de uma solução baseada em uma necessidade real de empresa parceira.",
      "Participação em todas as etapas do ciclo de desenvolvimento de software."
    ],
    tech: [
      "TypeScript",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "MySQL",
      "Git",
      "GitHub",
      "Figma",
      "Vertabelo"
    ],
    repo: "https://github.com/fatec-api/kingfisher-fatec-api",
    gallery: [apiKingfisher],
  },
  {
    name: "Controle de Apontamento de Horas - Java The Hutt",
    category: "Aprendizagem por Projeto Integrado | 3º Semestre",
    cover: apiJavatheHutt,
    description:
      "Sistema web desenvolvido para a GSW com o objetivo de centralizar o controle de apontamento de horas, permitindo maior visibilidade sobre produtividade, custos e desempenho das equipes. Durante o desenvolvimento, o trabalho em equipe foi essencial para integrar as diferentes partes da aplicação e garantir a consistência das entregas. A comunicação foi constantemente praticada durante os alinhamentos da equipe e discussões sobre requisitos e soluções técnicas. A organização foi fortalecida pela utilização do Scrum e pelo acompanhamento das atividades em backlog. Além disso, a análise de requisitos e a necessidade de solucionar desafios relacionados à arquitetura e integração dos sistemas contribuíram para o desenvolvimento do pensamento crítico e da resolução de problemas.",
    problem:
      "A empresa enfrentava dificuldades devido ao uso de um sistema de apontamento de horas obsoleto, com lentidão, falhas de integração e ausência de indicadores para análise de produtividade, atrasos e alocação de recursos.",
    solution:
      "Foi desenvolvida uma aplicação web capaz de centralizar registros de horas, analisar informações de projetos e gerar insights sobre produtividade, custos e eficiência das equipes. A solução utiliza arquitetura baseada em microserviços, APIs REST e uma interface intuitiva para visualização dos dados.",
    methodology:
      "O projeto foi desenvolvido utilizando a metodologia ágil Scrum, com organização de backlog, definição de critérios de entrega (DoR e DoD), planejamento de sprints e acompanhamento contínuo das necessidades do cliente.",
    results: [
      "Desenvolvimento de uma aplicação web utilizando arquitetura de microserviços.",
      "Implementação de APIs REST para comunicação entre sistemas.",
      "Criação de funcionalidades para análise de apontamentos, custos e produtividade.",
      "Aplicação de boas práticas de versionamento e organização de código.",
      "Experiência no desenvolvimento de uma solução para uma empresa parceira real.",
      "Integração entre frontend, backend e banco de dados."
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "Docker",
      "Git",
      "GitHub",
      "Jira",
      "Insomnia"
    ],
    repo: "https://github.com/fatec-api/java-the-hutt",
    gallery: [apiJavatheHutt],
  },
  {
    name: "Agente de IA para Análise de Filmes (2009–2019)",
    category: "Interação Humano Computador | Agentes de Dados",
    cover: agenteFilmes,
    description:
      "Agente de dados conversacional capaz de responder perguntas em linguagem natural sobre filmes exibidos no Brasil entre 2009 e 2019. Durante o desenvolvimento da solução, foram aprofundados conhecimentos em Inteligência Artificial, bancos de dados e processamento de linguagem natural. O projeto exigiu autonomia e aprendizado contínuo para compreender conceitos relacionados a agentes inteligentes e integração com modelos de linguagem. O pensamento analítico foi desenvolvido na estruturação do fluxo de tomada de decisão do agente, enquanto a resolução de problemas foi constantemente aplicada para garantir consultas corretas e respostas coerentes aos usuários.",
    problem:
      "A análise de grandes volumes de dados cinematográficos exige conhecimento técnico em SQL e ferramentas de análise, dificultando a exploração das informações por usuários comuns.",
    solution:
      "Foi desenvolvido um agente inteligente capaz de interpretar perguntas em linguagem natural, consultar automaticamente o banco de dados de filmes e retornar respostas contextualizadas, permitindo acesso simples e intuitivo às informações do dataset.",
    methodology:
      "A solução utiliza um fluxo agentico composto pelas etapas de Planejamento, Execução de Ferramentas e Síntese da Resposta. O agente identifica a intenção do usuário, gera consultas SQL quando necessário e utiliza os resultados obtidos para construir respostas precisas.",
    results: [
      "Implementação de um agente conversacional orientado a dados.",
      "Integração com banco de dados SQLite para consultas dinâmicas.",
      "Download automatizado do dataset através do KaggleHub.",
      "Conversão de linguagem natural em consultas estruturadas.",
      "Geração automática de respostas baseadas em dados reais.",
      "Aplicação prática de conceitos de IA Generativa e Agentic AI."
    ],
    tech: [
      "Python",
      "SQLite",
      "OpenAI API",
      "Ollama",
      "KaggleHub",
      "Pandas",
      "Jupyter Notebook",
      "SQL",
      "Git",
      "GitHub"
    ],
    repo: "https://github.com/mariaflbss/data-agent-filmes",
    gallery: [agenteFilmes],
  },
  {

    name: "Atlantis — Sistema de Gestão Integrado para Hotéis, Pousadas e Resorts",
    category: "Técnicas de Programação II | Desenvolvimento Full Stack",
    cover: sistemaAtlantis,
    description:
      "Sistema de gestão hoteleira desenvolvido com arquitetura frontend-backend separada, permitindo o gerenciamento completo de clientes, acomodações, reservas e métricas operacionais. Durante o projeto, a organização foi desenvolvida por meio do planejamento das funcionalidades e da estruturação das diferentes camadas da aplicação. A resolução de problemas esteve presente na implementação das regras de negócio e na integração entre frontend, backend e banco de dados. O pensamento analítico foi exercitado na modelagem das entidades e na construção dos indicadores apresentados nos dashboards. Além disso, a colaboração durante as atividades acadêmicas contribuiu para o fortalecimento do trabalho em equipe e da comunicação.",
    problem:
      "Processos de gestão de hospedagem frequentemente dependem de controles manuais ou sistemas fragmentados, dificultando o gerenciamento de hóspedes, acomodações, reservas e indicadores operacionais de forma centralizada.",
    solution:
      "Foi desenvolvido um sistema web integrado capaz de centralizar as operações de hotéis, pousadas e resorts. A solução oferece autenticação de usuários, gerenciamento completo de clientes, acomodações e reservas, além de dashboards com métricas em tempo real alimentadas por dados persistidos em banco SQLite.",
    methodology:
      "A aplicação foi construída utilizando arquitetura cliente-servidor, com frontend em React e TypeScript consumindo endpoints REST desenvolvidos em Express. O backend implementa camadas de rotas, controladores e serviços para separar responsabilidades, enquanto o SQLite garante persistência dos dados e integridade das operações.",
    results: [
      "Implementação de autenticação integrada entre frontend e backend.",
      "CRUD completo para gerenciamento de clientes e dependentes.",
      "CRUD completo para cadastro e controle de acomodações.",
      "Sistema de reservas com associação entre hóspedes e acomodações.",
      "Dashboard com métricas operacionais calculadas em tempo real.",
      "Persistência de dados utilizando banco de dados SQLite.",
      "Integração completa via API REST entre React e Express.",
      "Aplicação prática de conceitos de arquitetura Full Stack e Engenharia de Software."
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "SQLite",
      "REST API",
      "Fetch API",
      "CORS",
      "Git",
      "GitHub"
    ],
    repo: "https://github.com/mariaflbss/AV5_tecprogII",
    gallery: [sistemaAtlantis],
  }

];

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projetos" className="bg-primary px-6 py-28 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground/60">
              Projetos
            </p>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              Projetos Desenvolvidos
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <button
              key={p.name}
              onClick={() => setOpen(p)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] bg-clip-padding isolate"
              style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >
              <div className="relative -mt-[1px] aspect-[4/3] w-full overflow-hidden bg-black/40 border-0 p-0 m-0 isolate">
                <img
                  src={p.cover}
                  alt={p.name}
                  loading="lazy"
                  width={896}
                  height={672}
                  className="size-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
              <div className="space-y-4 p-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary-foreground/50">
                    {p.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-primary-foreground">{p.name}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/60">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-primary-foreground/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-3 text-xs font-medium text-primary-foreground/80">
                  Ver mais sobre o projeto
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm animate-fade"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-background text-foreground shadow-deep"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full border border-border bg-background/80 backdrop-blur hover:bg-accent"
        >
          <X className="size-4" />
        </button>
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img src={project.cover} alt={project.name} className="size-full object-cover" />
        </div>
        <div className="space-y-8 p-8 md:p-12">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-accent">
              {project.category}
            </p>
            <h3 className="font-display text-3xl md:text-4xl">{project.name}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <Detail label="Problema identificado" text={project.problem} />
          <Detail label="Solução desenvolvida" text={project.solution} />
          <Detail label="Metodologia aplicada" text={project.methodology} />

          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
              Resultados obtidos
            </p>
            <ul className="space-y-2">
              {project.results.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
              Tecnologias
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.gallery.length > 1 && (
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
                Galeria
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.gallery.map((g, i) => (
                  <img
                    key={i}
                    src={g}
                    alt=""
                    className="aspect-video w-full rounded-lg object-cover ring-1 ring-border"
                  />
                ))}
              </div>
            </div>
          )}

          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <Github className="size-4" /> Ver repositório
          </a>
        </div>
      </div>
    </div>
  );
}

function Detail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
        {label}
      </p>
      <p className="text-sm leading-relaxed text-foreground/85">{text}</p>
    </div>
  );
}
