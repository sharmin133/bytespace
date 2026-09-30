import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { footerColumns, legalLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-white">
      <Container className="pt-14 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Logo + newsletter */}
          <div className="max-w-sm">
            <Link href="/" aria-label="ByteSpace home" className="inline-block">
              <Image src="/images/logo-dark.svg" alt="ByteSpace" width={132} height={32} />
            </Link>
            <p className="mt-4 text-xs text-gray-700">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <NewsletterForm />
            <p className="mt-6 max-w-[17rem] text-[10px] leading-relaxed text-gray-600">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:max-w-xl lg:justify-self-end">
            {footerColumns.map((col, i) => (
              <ul key={i} className="space-y-4">
                {col.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-xs text-gray-700 transition hover:text-brand">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-gray-200 py-6 text-[10px] text-gray-600 sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
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