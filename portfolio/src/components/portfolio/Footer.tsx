export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-silver">
          © {new Date().getFullYear()} Maria Fernanda Laboissiere
        </p>
        <p className="text-[10px] uppercase tracking-[0.25em] text-brand-silver">
          Teste
        </p>
      </div>
    </footer>
  );
}
