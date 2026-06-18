import { ArrowDownToLine, Github, Linkedin, Mail } from "lucide-react";
import fotoPerfil from "../../assets/images/fotodeperfil.png";

export function Hero() {
  return (
    <section id="top" className="relative px-6 pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklab,_var(--brand-accent)_8%,_transparent),_transparent_60%)]" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16">
        <div className="flex-1 space-y-8">
          <p className="animate-reveal text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-accent">
            Portfólio · 2026
          </p>
          <div className="space-y-6">
            <h1 className="animate-reveal font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              Maria Fernanda
              <br />
              <span className="font-normal italic text-brand-accent">Laboissiere</span>
            </h1>
            <p
              className="animate-reveal max-w-xl text-lg font-light leading-relaxed text-muted-foreground md:text-xl"
              style={{ animationDelay: "120ms" }}
            >
              Pesquisadora e desenvolvedora de software dedicada à interseção entre sistemas
              inteligentes, arquitetura distribuída e engenharia de produto de alto padrão.
            </p>
          </div>
          <div
            className="animate-reveal flex flex-wrap items-center gap-3"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-deep"
            >
              <ArrowDownToLine className="size-4 transition-transform group-hover:translate-y-0.5" />
              Baixar Currículo
            </a>
            <div className="flex items-center gap-1 pl-2">
              <span className="mr-3 h-px w-8 bg-border" />
              <IconLink href="https://github.com" label="GitHub">
                <Github className="size-4" />
              </IconLink>
              <IconLink href="https://linkedin.com" label="LinkedIn">
                <Linkedin className="size-4" />
              </IconLink>
              <IconLink href="#contato" label="E-mail">
                <Mail className="size-4" />
              </IconLink>
            </div>
          </div>
        </div>
        <div
          className="animate-reveal relative w-full max-w-[380px] md:w-[400px]"
          style={{ animationDelay: "240ms" }}
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-accent/10 to-transparent blur-2xl" />
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-deep ring-1 ring-border">
            <img
              src={fotoPerfil}
              alt="Retrato de Maria Fernanda Laboissiere"
              className="size-full object-cover"
              width={800}
              height={1024}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-surface px-5 py-4 shadow-elegant md:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
              Disponível
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">para colaborações</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="grid size-10 place-items-center rounded-full text-brand-silver transition-all hover:bg-accent hover:text-foreground"
    >
      {children}
    </a>
  );
}
