import { ArrowUpRight, BookOpen, FileText, Search, NotebookPen } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

import tccPdf from "../../assets/documents/Trabalho de Conclusão.pdf";
import artigoPdf from "../../assets/documents/Iniciação Científica.pdf";
import pesquisaPdf from "../../assets/documents/Trabalho Final de Módulo 2EM Guia Inclusivo.pdf";

type Item = {
  type: "TCC" | "Artigo Científico" | "Relatório" | "Pesquisa";
  title: string;
  meta: string;
  excerpt: string;
  link: string;
};

const items: Item[] = [
  {
    type: "TCC",
    title: "Um estudo da ferramenta Blockchain juntamente com a Internet das coisas",
    meta: "2024 · Trabalho de Conclusão de Curso",
    excerpt:
      "O estudo busca ampliar o entendimento sobre como a combinação dessas tecnologias pode impactar o meio digital, contribuindo para o aprimoramento das práticas de gerenciamento e tratamento de dados.",
    link: tccPdf,
  },
  {
    type: "Artigo Científico",
    title: "Um estudo sobre a ferramenta blockchain",
    meta: "2024 · Encontro Latino Americano de Iniciação Científica Junior",
    excerpt:
      "O objetivo do artigo é analisar a estrutura e o funcionamento da tecnologia Blockchain, bem como compreender suas principais vantagens, aplicações e limitações..",
    link: artigoPdf,

  },
  {
    type: "Pesquisa",
    title: "Acessibilidade no Transporte Público para Pessoas com Deficiência",
    meta: "2023 · Trabalho Final de Módulo ",
    excerpt:
      "O estudo investiga uma solução de acessibilidade destinada a auxiliar pessoas com deficiência visual ou cognitiva na utilização do transporte público de forma mais autônoma e segura",
    link: pesquisaPdf,
  },
];

const icons: Record<Item["type"], React.ElementType> = {
  TCC: BookOpen,
  "Artigo Científico": FileText,
  Relatório: NotebookPen,
  Pesquisa: Search,
};

export function Academic() {
  return (
    <section id="academico" className="px-6 py-28 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Pesquisa e Desenvolvimento"
          title="Trabalhos acadêmicos"
          description="Trabalhos de conclusão, artigos, relatórios técnicos e projetos de pesquisa que documentam minha trajetória investigativa."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => {
            const Icon = icons[it.type];
            return (
              <article
                key={it.title}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-8 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid size-10 place-items-center rounded-lg bg-accent text-brand-accent">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-silver">
                    {it.type}
                  </span>
                </div>
                <h4 className="mb-2 font-display text-lg leading-snug text-foreground">
                  {it.title}
                </h4>
                <p className="mb-5 text-xs italic text-brand-silver">{it.meta}</p>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {it.excerpt}
                </p>
                <a
                href={it.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent transition-all group-hover:gap-3"
              >
                Ver documento
                <ArrowUpRight className="size-3.5" />
              </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
