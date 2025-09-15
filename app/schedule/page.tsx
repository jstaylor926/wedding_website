import content from "@/assets/wedding-content.json";

export default function Schedule() {
  const wed = content.schedule.wednesday;
  const fri = content.schedule.friday;

  return (
    <main className="mx-auto max-w-2xl px-6 py-10 text-gray-100">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--brand-red)]">Schedule</h1>

      {/* Wednesday */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-100">
          {wed.date}
        </h2>
        <ul className="mt-2 space-y-1 text-gray-200">
          {wed.items.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </section>

      {/* Friday */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-100">
          {fri.date}
        </h2>
        {fri.location && (
          <p className="mt-1 text-gray-300">{fri.location}</p>
        )}
        <ul className="mt-3 list-disc list-inside space-y-1 text-gray-200">
          {fri.segments.map((seg, i) => (
            <li key={i}>{seg}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
