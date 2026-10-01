// src/components/sections/CtaBanner.tsx
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DecorShapes, type DecorShape } from "@/components/ui/DecorShapes";

const LIME = "var(--color-lime)";
const WHITE = "#ffffff";

const shapes: DecorShape[] = [
  { src: "/images/hero/spring-lime.png", color: WHITE, className: "left-[15%] top-[-14%] hidden w-[11%] sm:block scale-x-[-1] max-sm:block max-sm:left-[3%] max-sm:top-[-24%] max-sm:w-[15%]" },
  { src: "/images/hero/spring-white-sm.png", color: LIME, className: "left-[-15%] top-[-45%] hidden w-[20%] md:block scale-x-[-1]" },
  { src: "/images/hero/cone-white.png", color: WHITE, className: "left-[-8%] top-[50%] hidden w-[10%] md:block scale-x-[-1]" },
  { src: "/images/hero/torus-white.png", color: LIME, className: "bottom-[-65%] left-[-2%] w-[max(20%,5.5rem)] sm:left-[5%] max-sm:bottom-[-19%] max-sm:left-[-5%] max-sm:w-[22%]" },
  { src: "/images/hero/cone-white.png", color: LIME, className: "right-[10%] top-[-15%] hidden w-[11%] sm:block" },
  { src: "/images/hero/cylinder-lime.png", color: WHITE, className: "right-[-60%] top-[10%] w-[max(18%,3.5rem)] sm:right-[-10%] sm:top-[16%] max-sm:right-[-4%] max-sm:top-[-26%] max-sm:w-[17%]" },
  { src: "/images/hero/spring-lime.png", color: LIME, className: "bottom-[-60%] right-[3%] hidden w-[18%] sm:block max-sm:block max-sm:bottom-[-20%] max-sm:right-[3%] max-sm:w-[17%]" },
];

export function CtaBanner() {
  return (
    <section className="bg-grid relative overflow-hidden  bg-brand py-16 text-white sm:py-20 ">
      <div className="relative mx-auto max-w-355 ">
        <DecorShapes shapes={shapes} />

        <Container className="relative z-10 text-center">
          <h2 className="mx-auto text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xs leading-relaxed text-gray-50 sm:text-sm">
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