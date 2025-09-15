import content from "@/assets/wedding-content.json";

export default function Registry() {
  const { intro, note, link } = content.registry;
  return (
    <main className="mx-auto max-w-2xl px-6 py-10 text-gray-100">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--brand-red)]">Registry</h1>
      <p className="mt-4 text-gray-200">{intro}</p>
      <p className="mt-2 text-gray-200">{note}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-[var(--brand-red)] underline underline-offset-2 hover:text-[var(--brand-red-hover)]"
      >
        View our registry
      </a>
    </main>
  );
}
