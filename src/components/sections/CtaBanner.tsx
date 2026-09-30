import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DecorShapes, type DecorShape } from "@/components/ui/DecorShapes";

/* Choto screen e shudhu 3 ta shape dekhabe, text er upor jate na pore */
const shapes: DecorShape[] = [
  { src: "/images/hero/spring-lime.png", className: "left-[-1%] top-[-4%] hidden w-[9%] sm:block" },
  { src: "/images/hero/spring-white-sm.png", className: "left-[16%] top-[14%] hidden w-[7%] md:block" },
  { src: "/images/hero/cone-white.png", className: "left-0 top-[50%] hidden w-[6.5%] md:block" },
  { src: "/images/hero/torus-white.png", className: "bottom-[-4%] left-[-2%] w-[max(16%,4.5rem)] sm:left-[5%]" },
  { src: "/images/hero/cone-white.png", className: "right-[10%] top-[5%] hidden w-[11%] sm:block" },
  { src: "/images/hero/cylinder-lime.png", className: "right-[-3%] top-[6%] w-[max(11%,3.5rem)] sm:right-[-1%] sm:top-[16%]" },
  { src: "/images/hero/spring-lime.png", className: "bottom-[-3%] right-[3%] hidden w-[11%] sm:block" },
];

export function CtaBanner() {
  return (
    <section className="bg-grid relative overflow-hidden bg-brand py-16 text-white sm:py-20">
      <div className="relative mx-auto max-w-7xl">
        <DecorShapes shapes={shapes} />

        <Container className="relative z-10 text-center">
          <h2 className="mx-auto max-w-lg text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xs leading-relaxed text-white/90 sm:text-sm">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
            become a part of a community comprising over 10.000 local and international creators. Utilize our Course
            Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <Button href="/join" className="mt-8">
            Join as Creator
          </Button>
        </Container>
      </div>
    </section>
  );
}