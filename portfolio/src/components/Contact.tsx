import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { meta } from "../data/portfolio";
import type { SectionProps } from "../types";

export function Contact({ id }: SectionProps) {
  return (
    <section id={id} className="py-28 px-6" aria-labelledby="contato-heading">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-16">
          <div>
            <span className="text-xs font-medium text-base-content/30 uppercase tracking-widest">
              Contato
            </span>
          </div>

          <div>
            <h2
              id="contato-heading"
              className="text-3xl md:text-4xl font-light text-base-content leading-snug mb-4 max-w-md"
            >
              Vamos conversar sobre a próxima oportunidade?
            </h2>
            <p className="text-sm text-base-content/50 mb-10 max-w-md">
              Estou disponível para estágios e posições junior em desenvolvimento full stack. Entre em contato por e-mail ou redes sociais.
            </p>

            <a
              href={`mailto:${meta.email}`}
              className="btn btn-primary rounded-full font-normal mb-12"
            >
              <FiMail size={16} aria-hidden="true" />
              {meta.email}
            </a>

            <div className="pt-8 border-t border-base-200 flex items-center gap-6">
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-base-content/50 hover:text-base-content transition-colors"
                aria-label="Perfil GitHub"
              >
                <FiGithub size={16} aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-base-content/50 hover:text-base-content transition-colors"
                aria-label="Perfil LinkedIn"
              >
                <FiLinkedin size={16} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
