import {
  FiGithub,
  FiLinkedin,
  FiArrowDownRight,
} from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import { meta } from "../data/portfolio";

export function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-16"
      aria-label="Apresentação"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_350px] gap-16 items-center">
          <div>

            <p className="text-primary font-medium mb-4">
              Olá, eu sou 
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-4">
              Maria Fernanda
            </h1>

            <div className="text-xl md:text-2xl text-base-content/80 font-medium min-h-[40px] mb-8">
              <TypeAnimation
                sequence={[
                  "Desenvolvedora de software",
                  2500,
                  "Apaixonada por tecnologia",
                  2500,
                  "Criando soluções digitais",
                  2500,
                  "Sempre aprendendo algo novo",
                  2500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-lg md:text-xl text-base-content/70 max-w-2xl leading-relaxed mb-10">
              Atualmente curso Desenvolvimento de Software
              Multiplataforma e gosto de transformar ideias em
              aplicações úteis. Tenho interesse em desenvolvimento
              web, APIs, bancos de dados e arquitetura de software,
              sempre buscando criar experiências simples e bem
              construídas.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projetos"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#projetos");
                }}
                className="btn btn-primary rounded-full px-8"
              >
                Ver projetos
              </a>

              <a
                href={`mailto:${meta.email}`}
                className="btn btn-outline rounded-full px-8"
              >
                Conversar comigo
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base-content/60 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
                <span>GitHub</span>
              </a>

              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base-content/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Maria Fernanda"
                className="w-80 h-96 object-cover rounded-[32px] shadow-2xl"
              />


            </div>
          </div>
        </div>

        <button
          onClick={() => handleScroll("#sobre")}
          className="mt-20 flex items-center gap-2 text-sm text-base-content/50 hover:text-primary transition-colors group"
          aria-label="Rolar para a seção Sobre"
        >
          <FiArrowDownRight
            size={18}
            className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
          />
          Conheça mais sobre mim
        </button>
      </div>
    </section>
  );
}