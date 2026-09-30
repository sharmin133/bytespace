"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const authLinks = [
  { label: "Sign In", href: "/sign-in" },
  { label: "Join Us", href: "/join" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);


  useEffect(() => {
    setOpen(false);
  }, [pathname]);


  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const linkClass = (active: boolean) => cn("transition hover:text-lime", active ? "text-white" : "text-white/75");

  return (
    <header className="absolute inset-x-0 top-0 z-40 text-white">
      <Container className="relative flex h-20 items-center justify-between lg:h-22">
        {/* Logo icon + "ByteSpace" text */}
        <Link href="/" aria-label="ByteSpace home" className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt="" width={26} height={30} priority className="h-7 w-auto" />
          <span className="text-xl font-bold tracking-tight">ByteSpace</span>
        </Link>

        {/*  nav (desktop) */}
        <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={linkClass(isActive(l.href))}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-sm">
          {authLinks.map((l) => (
            <Link key={l.label} href={l.href} className={cn("hidden md:inline", linkClass(pathname === l.href))}>
              {l.label}
            </Link>
          ))}

          <button type="button" aria-label="Cart" className="transition hover:text-lime">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="animate-fade-down border-t border-white/15 bg-brand/95 backdrop-blur md:hidden">
          <Container className="flex flex-col py-2">
            {[...links, ...authLinks].map((l) => (
              <Link key={l.label} href={l.href} className="border-b border-white/10 py-3.5 text-base last:border-0 hover:text-lime">
                {l.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}