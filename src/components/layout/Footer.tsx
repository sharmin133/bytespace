import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { footerColumns, legalLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-white text-ink">
      <Container className="pt-16 lg:pt-18">
        <div className="grid gap-12 lg:grid-cols-[51.7%_1fr] lg:gap-0">
        
          <div>
            <Logo tone="dark" className="text-[1.65rem]" />
            <p className="mt-5 text-sm text-gray-800">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <NewsletterForm />
            <p className="mt-7  max-w-120 text-xs leading-relaxed text-gray-700">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

      
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 lg:mt-[3.1rem] lg:grid-cols-[35.8%_35.8%_1fr] lg:gap-y-0"
          >
            {footerColumns.map((col, i) => (
              <ul key={i} className="space-y-[1.15rem]">
                {col.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-gray-800 transition hover:text-brand">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

    
        <div className="mt-16 flex flex-col gap-4 border-t border-gray-200 pb-10 pt-6 text-xs text-gray-700 sm:flex-row sm:items-center sm:justify-between lg:mt-[8.5rem]">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="transition hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}