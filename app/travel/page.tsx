import content from "@/assets/wedding-content.json";

export default function Travel() {
  const { airport, hotel } = content.travel;

  return (
    <main className="mx-auto max-w-2xl px-6 py-10 text-gray-100 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--brand-red)]">Travel Information</h1>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-100">Airport</h2>
        <p className="mt-1 text-gray-200">{airport.name}</p>
        <p className="mt-1 text-gray-300">{airport.note}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-100">Hotel</h2>
        <p className="mt-1 text-gray-200">{hotel.name}</p>
        <p className="text-gray-300">{hotel.address}</p>

        <div className="mt-4">
          <h3 className="font-semibold text-gray-100">Hotel Block</h3>
          <p className="mt-1 text-gray-200">{hotel.roomBlock.instruction}</p>
          <a
            href={hotel.roomBlock.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[var(--brand-red)] underline underline-offset-2 hover:text-[var(--brand-red-hover)]"
          >
            Reserve your room in the block
          </a>
          <p className="mt-3 text-gray-200">
            You must book your hotel by <span className="font-semibold">{hotel.roomBlock.deadline}</span> in order to utilize the room block rates.
          </p>
          <p className="text-gray-300">{hotel.roomBlock.deadlineNote}</p>
        </div>
      </section>
      <div className="mt-10 flex justify-center">
        <img
          src="/dancinc-hearts - Edited - RED.png"
          alt="Decorative travel graphic"
          className="h-auto w-28"
        />
      </div>
    </main>
  );
}
