import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/* Position ar size design er percentage theke nea. Stage = max-w-7xl wrapper. */
const shapes = [
  { src: "/images/hero/spring-lime.png", className: "left-0 top-[28%] w-[max(13%,4.5rem)]" },
  { src: "/images/hero/spring-white-sm.png", className: "left-[15.5%] top-[49%] hidden w-[7.8%] md:block" },
  { src: "/images/hero/torus-white.png", className: "bottom-[6%] left-[5.4%] w-[max(16%,5rem)]" },
  { src: "/images/hero/cylinder-lime.png", className: "right-0 top-[25%] w-[max(11.3%,4rem)]" },
  { src: "/images/hero/cone-white.png", className: "right-[13%] top-[47%] hidden w-[8.7%] md:block" },
  { src: "/images/hero/spring-white.png", className: "bottom-[6%] right-[6.6%] w-[max(10.7%,4rem)]" },
];

const avatars = [1, 2, 3, 4, 5].map((n) => `/images/avatars/${n}.png`);

function FloatingCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("absolute z-10 rounded-xl bg-white p-3 text-left text-ink shadow-lg sm:p-4", className)}>
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden bg-brand pt-28 text-white sm:pt-32">
      {/* Stage: shape gulo ei max-w-7xl wrapper er sathe relative */}
      <div className="relative mx-auto max-w-7xl">
        {shapes.map((s) => (
          <Image
            key={s.src}
            src={s.src}
            alt=""
            aria-hidden="true"
            width={400}
            height={400}
            className={cn("pointer-events-none absolute z-20 h-auto select-none", s.className)}
          />
        ))}

        <Container className="relative text-center">
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm text-white/90 sm:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <form action="/courses" role="search" className="mx-auto mt-8 flex max-w-md items-center gap-3">
            <label htmlFor="hero-search" className="sr-only">Search courses</label>
            <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 py-3 text-ink">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="shrink-0 text-muted">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input id="hero-search" name="q" placeholder="Course, topic, creator" className="w-full bg-transparent text-sm outline-none placeholder:text-muted" />
            </div>
            <Button type="submit">Search</Button>
          </form>

          {/* Semicircle + student + cards. Aspect ratio thakay shob kichu ek sathe scale kore */}
          <div className="relative mx-auto mt-10 aspect-4/3 w-full max-w-208 sm:mt-12 sm:aspect-[5/2]">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 aspect-square rounded-full bg-lime" />

            <Image
              src="/images/hero/student.png"
              alt="Smiling student with headphones holding a laptop"
              width={668}
              height={706}
              priority
              sizes="(min-width: 640px) 340px, 210px"
              className="absolute bottom-0 left-1/2 h-auto w-[62%] -translate-x-1/2 sm:w-[41%]"
            />

            <FloatingCard className="left-[21.7%] top-[12%] hidden sm:block">
              <p className="text-sm font-medium">UI/UX Design</p>
              <p className="mt-1 text-[10px] text-muted">200 Courses • 1000+ Students</p>
            </FloatingCard>

            <FloatingCard className="right-0 top-[4%] w-36 sm:left-[61%] sm:right-auto sm:top-[15%] sm:w-[21%] sm:min-w-[10.5rem]">
              <p className="text-[10px] text-muted sm:text-xs">Learning Progress</p>
              <p className="mt-1 text-3xl font-semibold sm:text-4xl">55%</p>
              <div role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} aria-label="Learning progress" className="mt-2 h-2 rounded-full bg-gray-100">
                <div className="h-full w-[55%] rounded-full bg-lime" />
              </div>
            </FloatingCard>

            <FloatingCard className="left-[14.8%] top-[57%] hidden min-w-[12rem] sm:block">
              <p className="text-sm font-medium">Happy Students</p>
              <p className="text-[10px] text-muted">4.5 (240) ★</p>
              <div className="mt-2 flex items-center">
                <div className="flex -space-x-2">
                  {avatars.map((src) => (
                    <Image key={src} src={src} alt="" width={32} height={32} className="size-7 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <span className="ml-1 grid size-9 place-items-center rounded-full bg-lime text-xs font-medium">2K+</span>
              </div>
            </FloatingCard>
          </div>
        </Container>
      </div>
    </section>
  );
}