import { skills } from "../data/portfolio";
import type { SectionProps } from "../types";

import javaImg from "../assets/img/java.png";
import jsImg from "../assets/img/js.png";
import tsImg from "../assets/img/typescript.png";
import pythonImg from "../assets/img/python.png";
import htmlImg from "../assets/img/html-5.png";
import cssImg from "../assets/img/css-3.png";
import reactImg from "../assets/img/react.png";
import tailwindImg from "../assets/img/tailwind-css.png";
import bootstrapImg from "../assets/img/bootstrap.png";
import nodeImg from "../assets/img/nodejs.png";
import flaskImg from "../assets/img/flask.png";
import springImg from "../assets/img/springboot.png";
import mysqlImg from "../assets/img/mysql.png";
import postgresImg from "../assets/img/potgresql.png";
import mongoImg from "../assets/img/mongodb.png";
import redisImg from "../assets/img/redis.png";
import gitImg from "../assets/img/git.png";
import githubImg from "../assets/img/github.png";
import dockerImg from "../assets/img/docker.png";
import figmaImg from "../assets/img/figma.png";
import jiraImg from "../assets/img/jira.png";
import viteImg from "../assets/img/vite.png";

const techImages: Record<string, string> = {
  Java: javaImg,
  Python: pythonImg,
  JavaScript: jsImg,
  TypeScript: tsImg,
  HTML5: htmlImg,
  CSS3: cssImg,
  React: reactImg,
  "Tailwind CSS": tailwindImg,
  Bootstrap: bootstrapImg,
  "Node.js": nodeImg,
  Flask: flaskImg,
  "Spring Boot": springImg,
  MySQL: mysqlImg,
  PostgreSQL: postgresImg,
  MongoDB: mongoImg,
  Redis: redisImg,
  Git: gitImg,
  GitHub: githubImg,
  Docker: dockerImg,
  Figma: figmaImg,
  Jira: jiraImg,
  Vite: viteImg,
};

export function Skills({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="py-28 px-6"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-primary font-medium">
            Habilidades
          </span>

          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mt-3"
          >
            Tecnologias que utilizo
          </h2>

          <p className="mt-4 text-base-content/60 max-w-2xl leading-relaxed">
            Ferramentas e tecnologias que fazem parte dos meus estudos,
            projetos e da minha rotina de desenvolvimento.
          </p>
        </div>

        <div className="space-y-14">
          {skills.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-primary" />

                <h3 className="text-lg font-semibold">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="group relative"
                  >
                    <div
                      className="
                        w-14 h-14
                        md:w-16 md:h-16

                        rounded-2xl

                        bg-base-100
                        border
                        border-base-300

                        flex
                        items-center
                        justify-center

                        transition-all
                        duration-300

                        hover:-translate-y-1
                        hover:border-primary
                        hover:shadow-lg
                      "
                    >
                      {techImages[item] ? (
                        <img
                          src={techImages[item]}
                          alt={item}
                          className={`
                            object-contain
                            transition-transform
                            duration-300
                            group-hover:scale-110

                            ${
                              item === "Vite"
                                ? "w-11 h-11 md:w-12 md:h-12"
                                : "w-8 h-8 md:w-9 md:h-9"
                            }
                          `}
                        />

                      ) : (
                        <span className="text-xs font-medium">
                          {item}
                        </span>
                      )}
                    </div>

                    {/* Tooltip */}
                    <div
                      className="
                        absolute
                        left-1/2
                        -translate-x-1/2

                        top-full
                        mt-2

                        px-3
                        py-1

                        rounded-lg

                        bg-base-content
                        text-base-100

                        text-xs
                        font-medium

                        whitespace-nowrap

                        opacity-0
                        invisible

                        group-hover:opacity-100
                        group-hover:visible

                        transition-all
                        duration-200

                        z-10
                      "
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}