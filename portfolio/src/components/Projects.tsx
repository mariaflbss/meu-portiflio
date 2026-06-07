import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolio";
import type { Project } from "../data/portfolio";
import type { SectionProps } from "../types";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        rounded-3xl
        border
        border-base-300
        bg-base-100
        p-8
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        hover:border-primary/40
      "
    >
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <span className="text-primary text-sm font-medium">
            {project.semester}
          </span>

          <h3 className="text-2xl font-bold mt-1">
            {project.title}
          </h3>

          <p className="text-base-content/60 mt-1">
            {project.company}
          </p>
        </div>

        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-ghost"
            aria-label={`GitHub de ${project.title}`}
          >
            <FiGithub size={18} />
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-ghost"
              aria-label={`Abrir projeto ${project.title}`}
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg mb-2">
            Objetivo
          </h4>

          <p className="text-base-content/70 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">
            Minha atuação
          </h4>

          <p className="text-base-content/70 leading-relaxed">
            {project.role}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">
            Tecnologias Utilizadas
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  badge
                  badge-outline
                  badge-primary
                  px-4
                  py-3
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="py-24 px-6"
      aria-labelledby="projetos-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-primary font-medium">
            Projetos Acadêmicos
          </span>

          <h2
            id="projetos-heading"
            className="text-4xl md:text-5xl font-bold mt-3"
          >
            Aprendizagem por Projetos Integrados (API)
          </h2>

          <p className="mt-4 text-base-content/60 max-w-3xl leading-relaxed">
            Durante a graduação em Desenvolvimento de Software
            Multiplataforma, participei de projetos reais em parceria
            com empresas e instituições. Cada projeto contribuiu para
            o desenvolvimento de competências técnicas em front-end,
            back-end, bancos de dados, integração de sistemas e
            experiência do usuário.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}