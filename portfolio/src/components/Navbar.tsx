import { useState, useEffect } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { meta } from "../data/portfolio";
import type { NavItem } from "../types";

const navItems: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: "#contato" },
];

const sectionIds = ["sobre", "habilidades", "projetos", "trajetoria", "contato"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-base-100/90 backdrop-blur-md border-b border-base-200" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Navegação principal">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav("#hero"); }}
          className="font-semibold text-base-content tracking-tight text-sm hover:text-primary transition-colors"
          aria-label="Ir para o início"
        >
          {meta.name}
        </a>

        <ul className="hidden md:flex items-center gap-7" role="list">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                  className={`text-sm transition-colors duration-200 ${
                    active === id
                      ? "text-primary font-medium"
                      : "text-base-content/60 hover:text-base-content"
                  }`}
                  aria-current={active === id ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href={`mailto:${meta.email}`}
          className="hidden md:inline-flex btn btn-primary btn-sm rounded-full font-normal"
        >
          Disponível para oportunidades
        </a>

        <button
          className="md:hidden btn btn-ghost btn-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <>
                <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-base-100/95 backdrop-blur-md border-b border-base-200 px-6 pb-5 pt-2">
          <ul className="flex flex-col gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                  className="block py-2 text-sm text-base-content/70 hover:text-base-content transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${meta.email}`}
            className="mt-4 btn btn-primary btn-sm btn-block rounded-full font-normal"
          >
            Disponível para oportunidades
          </a>
        </div>
      )}
    </header>
  );
}
