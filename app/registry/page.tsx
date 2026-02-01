import content from "@/assets/wedding-content.json";

export default function Registry() {
  const { intro, note, link } = content.registry;

  return (
    <main className="relative mx-auto max-w-2xl px-6 py-10 text-gray-100 text-center flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold tracking-tight text-[var(--brand-red)] mb-6">Registry</h1>
      <p className="text-xl text-slate-200 leading-relaxed max-w-lg">
        {intro}
      </p>
      {note && (
        <p className="mt-4 text-lg text-slate-400">
          {note}
        </p>
      )}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-[var(--brand-red)] underline underline-offset-4 text-xl transition-all hover:text-[var(--brand-red-hover)] hover:scale-105 active:scale-95"
      >
        View our registry
      </a>
    </main>
  );
}
