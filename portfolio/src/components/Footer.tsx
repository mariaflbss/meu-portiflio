import { meta } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base-200 px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-base-content/30">
        <span>{meta.name} &copy; {year}</span>
        <span>Desenvolvido com React + TypeScript + Tailwind</span>
      </div>
    </footer>
  );
}
