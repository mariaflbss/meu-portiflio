import { useState } from "react";
import {
  Award,
  ExternalLink,
  X,
  Microscope,
  Code2,
  Lightbulb,
  HandHeart,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

import inicAprovacaoPdf from "../../assets/documents/Certificado Aprovação INIC.pdf";
import inicApresentacaoPdf from "../../assets/documents/Certificado Apresentação INIC.pdf";
import escolaInovadoresPdf from "../../assets/documents/Certificado Escola de Inovadores.pdf";
import meninasProgramadorasPdf from "../../assets/documents/Certificado MP USP.pdf";
import introducaoLibras from "../../assets/documents/Certificado Introdução à Libras ENAP.pdf";
import pydayPdf from "../../assets/documents/Certificado PyDay.pdf";
import scienceBusinessPdf from "../../assets/documents/Certificado Science & Business Connection.pdf";

type Cert = {
  title: string;
  issuer: string;
  year: string;
  hours: string;
  pdf: string;
  category: "Pesquisa" | "Programação" | "Inovação" | "Inclusão";
};

const certs: Cert[] = [
  {
    title: "Artigo Científico Aprovado para Publicação",
    issuer: "XVIII Encontro Latino-Americano de Iniciação Científica Júnior",
    year: "2024",
    hours: "",
    pdf: inicAprovacaoPdf,
    category: "Pesquisa"
  },
  {
    title: "Apresentação de Trabalho em Evento Científico",
    issuer: "XVIII Encontro Latino-Americano de Iniciação Científica Júnior",
    year: "2024",
    hours: "36h",
    pdf: inicApresentacaoPdf,
    category: "Pesquisa" 
  },
  {
    title: "Introdução à Libras",
    issuer: "Escola Nacional de Administração Pública (ENAP)",
    year: "2024",
    hours: "60h",
    pdf: introducaoLibras, 
    category:  "Inclusão"
  },
  {
    title: "Escola de Inovadores",
    issuer: "Centro Paula Souza",
    year: "2025",
    hours: "40h",
    pdf: escolaInovadoresPdf,
    category:  "Inovação" 
  },
  {
    title: "Python Day",
    issuer: "Comunidade Python SJC e Vale do Paraíba",
    year: "2025",
    hours: "3h",
    pdf: pydayPdf,
    category: "Programação" 
  },
  {
    title: "Meninas Programadoras",
    issuer: "Universidade de São Paulo (USP)",
    year: "2024",
    hours: "48h",
    pdf: meninasProgramadorasPdf,
    category: "Programação" 
  },
  {
    title: "Science & Business Connection",
    issuer: "Parque de Inovação Tecnológica (PIT)",
    year: "2026",
    hours: "20h",
    pdf: scienceBusinessPdf,
    category: "Inovação" 
  },
];

const categoryConfig = {
  Pesquisa: {
    icon: Microscope,
    badge: "Pesquisa",
  },
  Programação: {
    icon: Code2,
    badge: "Programação",
  },
  Inovação: {
    icon: Lightbulb,
    badge: "Inovação",
  },
  Inclusão: {
    icon: HandHeart,
    badge: "Inclusão",
  },
};

export function Certifications() {
  const [open, setOpen] = useState<Cert | null>(null);
  const ModalIcon = open
  ? categoryConfig[open.category].icon
  : Award;

  return (
    <section
      id="certificacoes"
      className="border-y border-border bg-surface px-6 py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Credenciais"
          title="Certificações"
          description="Reconhecimentos formais obtidos em programas de aperfeiçoamento técnico em instituições nacionais e internacionais."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => {
          const Icon = categoryConfig[c.category].icon;
          return (
            <button
              key={c.title}
              onClick={() => setOpen(c)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background text-left transition-all hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-elegant isolate"
            >
              <div className="relative grid aspect-[4/3] place-items-center overflow-hidden border-b border-border bg-gradient-to-br from-accent to-background">
                <span
                  className="
                    absolute left-4 top-4 z-20
                    rounded-full border border-border
                    bg-background/90
                    px-3 py-1
                    text-[10px]
                    font-bold uppercase tracking-wider
                  "
                >
                  {c.category}
                </span>
                <div className="absolute inset-6 rounded-lg border border-border bg-background/70 backdrop-blur-sm" />
                <div className="relative z-10 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="size-6" />
                </div>
                <span className="absolute bottom-4 right-4 font-display text-xs italic text-brand-silver">
                  {c.year}
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-display text-lg leading-snug text-foreground">
                  {c.title}
                </h4>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    {c.issuer}
                  </p>
                  <p className="font-mono text-[10px] tracking-wider text-brand-silver">
                    {c.hours}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm animate-fade"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-background shadow-deep"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full border border-border bg-background/80 backdrop-blur hover:bg-accent"
              aria-label="Fechar"
            >
              <X className="size-4" />
            </button>
            <div className="grid aspect-[4/3] place-items-center bg-gradient-to-br from-accent to-background">
              <div className="m-8 grid aspect-[4/3] w-full max-w-md place-items-center rounded-xl border border-border bg-background p-10 text-center shadow-elegant">
                <ModalIcon className="mx-auto size-12 text-brand-accent" />
                <span
                  className="
                    rounded-full
                    border
                    border-border
                    px-3
                    py-1
                    text-xs
                    font-medium
                  "
                >
                  {open.category}
                </span>
                <h3 className="mt-6 font-display text-2xl">{open.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{open.issuer}</p>
                <p className="mt-1 font-mono text-xs text-brand-silver">
                  {open.year} · {open.hours}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-border p-6">
              <p className="text-sm text-muted-foreground">Certificado verificável</p>
              <a
                href={open.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-medium text-primary-foreground hover:opacity-90"
              >
                Abrir PDF <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
