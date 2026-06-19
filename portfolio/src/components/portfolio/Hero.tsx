import { ArrowDownToLine, Github, Linkedin, Mail } from "lucide-react";
import fotoPerfil from "../../assets/images/fotodeperfil.jpg";


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
              <a>
                Maria Fernanda
                <br />
                <span className="font-normal italic text-brand-accent">
                  Laboissiere
                </span>
                <ArrowDownToLine className="ml-3 inline-block size-6 opacity-0 transition-all duration-300 group-hover:translate-y-1 group-hover:opacity-100 md:size-8" />
              </a>
            </h1>
            <p>
              Estudante de Desenvolvimento de Software Multiplataforma,
            </p>
          </div>
          <div
            className="animate-reveal flex flex-wrap items-center gap-3"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href="/meu-portifolio-/curriculo-maria-fernanda-laboissiere.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-deep"
            >
              <ArrowDownToLine className="size-4 transition-transform group-hover:translate-y-0.5" />
              Baixar Currículo
            </a>
            <div className="flex items-center gap-1 pl-2">
              <span className="mr-3 h-px w-8 bg-border" />
              <IconLink href="https://github.com/mariaflbss" label="GitHub">
                <Github className="size-4" />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/maria-fernanda-laboissiere-25362b353/" label="LinkedIn">
                <Linkedin className="size-4" />
              </IconLink>
              <IconLink href="mailto:laboissieremaria@gmail.com" label="E-mail">
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
