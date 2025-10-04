import content from "@/assets/wedding-content.json";
import Image from "next/image";

export default function Travel() {
  const { airport, hotel } = content.travel;

  return (
    <main className="relative mx-auto max-w-2xl px-6 py-10 text-gray-100 text-center">
      <Image
        src="/LasVegasSign.svg"
        alt="Las Vegas Sign"
        width={100}
        height={100}
        className="hidden md:block md:absolute md:top-16 md:right-6"
      />
      <h1 className="text-3xl font-bold tracking-tight text-[var(--brand-red)]">Travel Information</h1>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-100">Airport</h2>
        <p className="mt-1 text-slate-400">{airport.name}</p>
        <p className="mt-1 text-slate-400">{airport.note}</p>
      </section>

        <div className="mt-0 flex justify-center md:hidden">
          <Image src="/LasVegasSign.svg" alt="Las Vegas Sign" width={100} height={100} />
        </div>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-100">Hotel</h2>
        <p className="mt-1 text-slate-400">{hotel.name}</p>
        <p className="text-slate-400">{hotel.address}</p>

        <div className="mt-6 flex justify-center md:justify-start">
          <div className="flex items-center">
            <Image src="/1000chip.svg" alt="1000 chip" width={36} height={36} className="ml-1" />
            <Image src="/StackChips.svg" alt="stack of casino chips" width={48} height={48} className="-ml-2" />
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold text-gray-100 text-2xl">Hotel Block</h2>
          <p className="mt-1 text-slate-400">{hotel.roomBlock.instruction}</p>
          <a
            href={hotel.roomBlock.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-[var(--brand-red)] underline underline-offset-2 hover:text-[var(--brand-red-hover)]"
          >
            Reserve your room in the block
          </a>
          <p className="mt-3 text-slate-400">
            You must book your hotel by <span className="font-semibold">{hotel.roomBlock.deadline}</span> in order to utilize the room block rates.
          </p>
          <p className="text-slate-400">{hotel.roomBlock.deadlineNote}</p>
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
