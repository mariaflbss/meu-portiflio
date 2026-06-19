import { useState } from "react";
import { Check, Github, Linkedin, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section id="contato" className="bg-primary px-6 py-28 text-primary-foreground lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-20">
        <div className="space-y-10">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground/60">
              Contato
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Entre em contato
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/70">
              Disponível para colaborações acadêmicas, projetos de pesquisa e oportunidades na área de desenvolvimento.
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary-foreground/60">
              Canais diretos
            </p>
            <a
              href="mailto:laboissieremaria@gmail.com"
              className="group flex items-center gap-4 border-b border-white/10 pb-4 transition-colors hover:border-white/30"
            >
              <Mail className="size-5 text-primary-foreground/60" />
              <span className="text-lg md:text-xl">laboissieremaria@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/maria-fernanda-laboissiere-25362b353/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 border-b border-white/10 pb-4 transition-colors hover:border-white/30"
            >
              <Linkedin className="size-5 text-primary-foreground/60" />
              <span className="text-base">linkedin.com/in/maria-fernanda-laboissiere</span>
            </a>
            <a
              href="https://github.com/mariaflbss"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 border-b border-white/10 pb-4 transition-colors hover:border-white/30"
            >
              <Github className="size-5 text-primary-foreground/60" />
              <span className="text-base">github.com/mariaflbss</span>
            </a>
        </div>
      </div>

      <form
          onSubmit={async (e) => {
          e.preventDefault();

          setLoading(true);

          try {
            const form = e.target as HTMLFormElement;

            await emailjs.sendForm(
              "service_7i1c2se",
              "template_b3tudtl",
              form,
              "kb_RGPZQJTrc7VgXi"
            );

            setSent(true);
            form.reset();

            setTimeout(() => setSent(false), 4000);
          } catch (error) {
            console.error(error);
            alert("Erro ao enviar mensagem.");
          } finally {
            setLoading(false);
          }
        }}
        className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm md:p-9"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Nome" name="name" required />
          <Field label="E-mail" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em]">Assunto</label>
          <select
            name="subject"
            required
            className="w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-primary-foreground outline-none transition-colors focus:border-white/40"
          >
            <option className="bg-primary">Oportunidade profissional</option>
            <option className="bg-primary">Colaboração em pesquisa</option>
            <option className="bg-primary">Consultoria técnica</option>
            <option className="bg-primary">Outro assunto</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em]">Mensagem</label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-primary-foreground outline-none transition-colors focus:border-white/40"
          />
        </div>
        <button
          type="submit"
          disabled={loading || sent}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-foreground py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-all hover:opacity-90 disabled:opacity-60"
        >
          {loading ? (
            "Enviando..."
          ) : sent ? (
            <>
              <Check className="size-4" /> Mensagem enviada
            </>
          ) : (
            <>
              Enviar mensagem <Send className="size-4" />
            </>
          )}
        </button>
      </form>
    </div>
    </section >
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-[0.2em]">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-primary-foreground outline-none transition-colors focus:border-white/40"
      />
    </div>
  );
}
