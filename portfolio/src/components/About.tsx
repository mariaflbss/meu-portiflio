import { FiMapPin, FiMail } from "react-icons/fi";
import { about, meta } from "../data/portfolio";
import type { SectionProps } from "../types";

export function About({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="py-28 px-6"
      aria-labelledby="sobre-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="text-sm text-primary font-medium">
            Sobre mim
          </span>

          <h2
            id="sobre-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mt-3 mb-10"
          >
            Quem está por trás do código?
          </h2>

          <div className="space-y-6 text-lg text-base-content/75 leading-relaxed">
            <p>
              {about.bio}
            </p>

            <p>
              Minha trajetória na tecnologia começou pela curiosidade.
              Sempre gostei de entender como as coisas funcionam e,
              com o tempo, essa curiosidade se transformou em vontade
              de criar soluções através da programação.
            </p>

            <p>
              Atualmente curso Desenvolvimento de Software
              Multiplataforma e busco evoluir constantemente por meio
              de projetos, estudos e novos desafios. Gosto de colocar
              a mão na massa, aprender coisas novas e transformar
              ideias em aplicações reais.
            </p>
          </div>
        </div>

        <div className="border-y border-base-300 py-10 my-12">
          <h3 className="text-sm uppercase tracking-widest text-base-content/40 mb-6">
            O que mais me interessa hoje
          </h3>

          <div className="flex flex-wrap gap-3">
            {about.focus.map((item) => (
              <span
                key={item}
                className="
                  px-4 py-2
                  rounded-full
                  border border-base-300
                  text-sm
                  text-base-content/70
                  hover:border-primary
                  hover:text-primary
                  transition-colors
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-6 text-base-content/60">
          <div className="flex items-center gap-2">
            <FiMapPin size={16} />
            <span>{meta.location}</span>
          </div>

          <a
            href={`mailto:${meta.email}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <FiMail size={16} />
            <span>{meta.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
}