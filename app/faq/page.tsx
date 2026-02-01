import content from "@/assets/wedding-content.json";
import Image from "next/image";
import { Fragment } from "react";
import DressCodeModal from "@/components/DressCodeModal";

export default function Faq() {
  return (
    <main className="relative mx-auto max-w-2xl px-6 py-10 text-gray-100 text-center">
      <Image
        src="/Discoball.svg"
        alt="Discoball"
        width={90}
        height={90}
        className="hidden md:block md:absolute md:top-0 md:-left-8 filter brightness-0 invert"
      />
      <div className="mb-4 flex justify-center md:hidden">
        <Image
          src="/Discoball.svg"
          alt="Discoball"
          width={90}
          height={90}
          className="filter brightness-0 invert"
        />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-[var(--brand-red)]">FAQ</h1>

      <div className="mt-6 space-y-8">
        {content.faq.map((item) => (
          <Fragment key={item.q}>
            {item.q === "Will there be alcohol?" && (
              <div className="flex justify-center py-4">
                <Image src="/redmartini.svg" alt="Red martini glass" width={100} height={100} />
              </div>
            )}
            <section>
              <h2 className="text-2xl font-semibold text-gray-200">{item.q}</h2>
              {item.q === "What is the dress code?" ? (
                <div className="mt-2 text-slate-400 inline-flex items-center justify-center flex-wrap">
                  <span>{item.a}</span>
                  <DressCodeModal />
                </div>
              ) : (
                <p className="mt-2 text-slate-400">{item.a}</p>
              )}
            </section>
            {item.q === "Can I bring my kids?" && (
              <div className="flex justify-center py-4">
                <Image src="/redlady.svg" alt="Decorative disco tile" width={100} height={100} />
              </div>
            )}
            {item.q === "Can I bring a plus one?" && (
              <div className="flex justify-center py-4">
                <Image src="/Cherryred.svg" alt="Cherry cocktail glass" width={80} height={80} />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </main>
  );
}
