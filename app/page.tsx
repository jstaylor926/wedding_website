import Link from "next/link";

export default function Home() {
  return (
    <div className={`antialiased min-h-screen w-screen bg-[url('/bg.png')] bg-cover bg-center`}>
      <main className="w-screen h-screen md:p-4 grid grid-cols-1 md:grid-cols-2">
        {/* Left: Navigation Buttons */}
        <div className="hidden md:flex items-center justify-center py-6 md:py-8 px-2 md:px-2">
          <div className="w-full md:max-w-md p-4 md:p-6">
            <div className={`w-full max-w-xs md:max-w-sm mx-auto flex flex-col gap-4`}>
              <Link
                href="/schedule"
                className="w-full md:w-4/5 md:self-start text-center rounded-lg bg-transparent text-black py-2 md:py-3 font-bold tracking-wide leading-tight text-2xl md:text-4xl transition-transform duration-200 ease-out hover:scale-105 md:hover:scale-110 hover:text-[var(--brand-red)]"
              >
                Schedule
              </Link>
              <Link
                href="/travel"
                className="w-full md:w-4/5 md:self-end text-center rounded-lg bg-transparent text-black py-2 md:py-3 font-bold tracking-wide leading-tight text-2xl md:text-4xl transition-transform duration-200 ease-out hover:scale-105 md:hover:scale-110 hover:text-[var(--brand-red)]"
              >
                Travel
              </Link>
              <Link
                href="/registry"
                className="w-full md:w-4/5 md:self-start text-center rounded-lg bg-transparent text-black py-2 md:py-3 font-bold tracking-wide leading-tight text-2xl md:text-4xl transition-transform duration-200 ease-out hover:scale-105 md:hover:scale-110 hover:text-[var(--brand-red)]"
              >
                Registry
              </Link>
              <Link
                href="/faq"
                className="w-full md:w-4/5 md:self-end text-center rounded-lg bg-transparent text-black py-2 md:py-3 font-bold tracking-wide leading-tight text-2xl md:text-4xl transition-transform duration-200 ease-out hover:scale-105 md:hover:scale-110 hover:text-[var(--brand-red)]"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Card */}
        <div className="flex items-center justify-center py-6 md:py-8 px-2 md:px-2">
          <div
            className="w-full max-w-sm aspect-[5/7] bg-white md:h-auto md:max-w-sm 
                    rounded-xl md:rounded-2xl shadow-2xl overflow-hidden"
          >
            <img
              src="/save_the_date.png"
              alt="Save the date card"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
