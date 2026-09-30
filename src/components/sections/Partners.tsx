import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partners } from "@/data/content";

export function Partners() {
  return (
    <section aria-label="Our partners" className="py-10 sm:py-14">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-between">
          {partners.map((p, i) => (
            <li key={i}>
              <Image src={p.logo} alt={p.name} width={120} height={32} className="h-6 w-auto opacity-70 sm:h-7" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}