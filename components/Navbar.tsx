"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/travel", label: "Travel" },
  { href: "/registry", label: "Registry" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Close the mobile menu on route change hash/history
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isHome ? "md:hidden" : ""}`}>
      {/* Bar */}
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Brand / Logo placeholder */}
        <Link href="/" className="group inline-flex items-center text-lg font-bold tracking-wide">
            <span
              aria-hidden
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-black text-white text-base leading-none font-bold shadow ring-1 ring-white/20 transition-all group-hover:text-[var(--brand-red-hover)] hover:text-[var(--brand-red-hover)] group-hover:ring-[var(--brand-red-hover)]"
            >
              T&J
            </span>
          </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => {
            const enabled = l.href === "/" || l.href === "/travel";
            return enabled ? (
              <Link
                key={l.href}
                href={l.href}
                className="text-2xl text-black hover:text-[var(--brand-red)] transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                aria-disabled
                tabIndex={-1}
                className="text-2xl text-black transition-colors pointer-events-none cursor-not-allowed opacity-60"
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/70 text-black hover:text-[var(--brand-red)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 px-4 pb-4">
          <div className="rounded-lg bg-white/90 backdrop-blur-sm border border-black/10 shadow-lg">
            <ul className="p-2 divide-y divide-black/10">
              {navLinks.map((l) => {
                const enabled = l.href === "/" || l.href === "/travel";
                return (
                  <li key={l.href}>
                    {enabled ? (
                      <Link
                        href={l.href}
                        className="block px-4 py-3 text-xl text-black hover:text-[var(--brand-red)]"
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <Link
                        href={l.href}
                        aria-disabled
                        tabIndex={-1}
                        className="block px-4 py-3 text-xl text-black pointer-events-none cursor-not-allowed opacity-60"
                        onClick={(e) => e.preventDefault()}
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
