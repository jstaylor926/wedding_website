import content from "@/assets/wedding-content.json";

export default function Schedule() {
  const wed = content.schedule.wednesday;
  const fri = content.schedule.friday;

  return (
    <main className="relative mx-auto max-w-2xl px-6 py-10 text-gray-100 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--brand-red)]">Schedule</h1>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-100">{wed.date}</h2>
        <ul className="mt-4 space-y-3 text-slate-400">
          {wed.items.map((item, i) => (
            <li key={item + i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-100">{fri.date}</h2>
        {fri.location && <p className="mt-2 text-slate-400">{fri.location}</p>}
        <ul className="mt-4 space-y-3 text-slate-400">
          {fri.segments.map((seg, i) => (
            <li key={seg + i}>{seg}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
