export function SectionDivider() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-px w-40 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-300/25 to-transparent" />
      </div>
    </section>
  );
}
