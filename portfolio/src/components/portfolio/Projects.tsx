import { useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import apiCrows from "../../assets/images/api-crows-1sem.png";
import apiKingfisher from "../../assets/images/api-kingfisher-2sem.png";
import apiJavatheHutt from "../../assets/images/api-javathehutt-3sem.png";
import { SectionHeading } from "./SectionHeading";

type Project = {
  index: string;
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
    index: "01",
    name: "API '",
    category: "PRojeto",
    cover: apiCrows,
    description:
      "",
    problem:
      "",
    solution:
      "",
    methodology:
      "",
    results: [
      "",
    ],
    tech: ["HTML5", "CSS3", "Flask", "Python", "Jupyter Notebook", "Flask", "MySQL"],
    repo: "https://github.com",
    gallery: [apiCrows],
  },
];

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projetos" className="bg-primary px-6 py-28 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground/60">
              Estudos de Caso
            </p>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">
              Projetos selecionados
            </h2>
          </div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/40">
            01 — 04
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <button
              key={p.index}
              onClick={() => setOpen(p)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-all hover:-translate-y-1 hover:border-white/30"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/40">
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
                  <span className="font-display text-sm italic text-primary-foreground/40">
                    {p.index}
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
                  Ler estudo de caso
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
