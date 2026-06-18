import { SectionHeading } from "./SectionHeading";

export function Introduction() {
  return (
    <section id="intro" className="border-y border-border bg-surface px-6 py-28 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="Apresentação" title="Sobre mim" />
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/85">
              Atualmente, sou estudante de Desenvolvimento de Software Multiplataforma na FATEC Jessen Vidal e formada
              como Técnica em Administração. Tenho interesse em desenvolvimento web e busco construir soluções
              que unam tecnologia, usabilidade e impacto real para os usuários.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85">
              Ao longo da minha trajetória, participei de projetos acadêmicos, pesquisa científica e
              experiências profissionais que fortaleceram minhas habilidades técnicas e interpessoais.
              Atualmente, sigo aprofundando meus conhecimentos em desenvolvimento Full Stack, com foco em
              criar aplicações modernas, acessíveis e eficientes.
            </p>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                Áreas de interesse
              </p>
              <ul className="flex flex-wrap gap-2">
                {[
                  "Desenvolvimento web",
                  "Desenvolvimento front-end",
                  "UX/UI",
                  "Engenharia de Software",
                  "Banco de Dados",
                  "Metodologias Ágeis e Product Management",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <Block label="Objetivos de curto prazo">
              Consolidar minha atuação como desenvolvedora Full Stack, aprofundando
              conhecimentos em JavaScript, TypeScript, React, Python, Java e bancos de
              dados, além de conquistar uma oportunidade de estágio na área de
              desenvolvimento de software e concluir minha graduação em Desenvolvimento de
              Software Multiplataforma na FATEC São José dos Campos.
            </Block>

            <Block label="Objetivos de médio prazo">
              Expandir minha atuação para áreas como arquitetura de software, computação em
              nuvem e desenvolvimento de aplicações escaláveis, aprimorando conhecimentos em
              tecnologias modernas e boas práticas de engenharia de software.
            </Block>

            <Block label="Objetivos de longo prazo">
              Tornar-me uma Desenvolvedora Full Stack, participando da criação de
              produtos digitais inovadores e acessíveis, com potencial para evoluir para
              posições de liderança técnica e gestão de equipes, unindo minha formação em
              tecnologia e minha base em administração para contribuir com soluções de alto
              impacto.
            </Block>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-brand-accent/30 pl-5">
      <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent">
        {label}
      </p>
      <p className="text-sm leading-relaxed text-foreground/80">{children}</p>
    </div>
  );
}
