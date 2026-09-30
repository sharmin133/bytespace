import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" aria-label="ByteSpace home">
          <Image src="/images/logo.svg" alt="ByteSpace" width={16} height={20} priority />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l, i) => (
            <Link key={l.label} href={l.href} className={cn("transition hover:text-lime", i === 0 ? "text-white" : "text-white/80")}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-sm">
          <Link href="/sign-in" className="hidden text-white/80 transition hover:text-lime sm:inline">Sign In</Link>
          <Link href="/join" className="text-white/80 transition hover:text-lime">Join Us</Link>
          <button type="button" aria-label="Cart" className="transition hover:text-lime">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}