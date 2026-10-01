import { Container } from "@/components/ui/Container";
import { PartnerIcon } from "@/components/ui/PartnerIcon";
import { Reveal } from "@/components/ui/Reveal";
import { partners } from "@/data/content";

export function Partners() {
  return (
    <section aria-label="Our partners" className="bg-mist py-12 sm:py-14 lg:py-[3.4rem]">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:gap-x-12 lg:gap-x-28">
          {partners.map((p, i) => (
            <li key={`${p.icon}-${i}`}>
              <Reveal delay={i * 80} className="flex items-center gap-1.5 text-shuttle">
                <PartnerIcon name={p.icon} />
                <span className="text-lg font-bold tracking-tight font-[Arial,Helvetica,sans-serif] sm:text-xl">
                  {p.name}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}