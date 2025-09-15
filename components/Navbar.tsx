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
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-100 hover:text-[var(--brand-red)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-black/30 text-gray-100 hover:text-[var(--brand-red)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
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
          <div className="rounded-lg bg-black/70 backdrop-blur-sm border border-white/10 shadow-lg">
            <ul className="p-2 divide-y divide-white/10">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block px-4 py-3 text-gray-100 hover:text-[var(--brand-red)]"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
