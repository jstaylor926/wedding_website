import content from "@/assets/wedding-content.json";

export default function Faq() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-10 text-gray-100">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--brand-red)]">FAQ</h1>

      <dl className="mt-6 space-y-6">
        {content.faq.map((item, idx) => (
          <div key={idx} className="border-b border-gray-800 pb-6 last:border-none">
            <dt className="text-lg font-semibold text-gray-100">{item.q}</dt>
            <dd className="mt-2 text-gray-200">{item.a}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
