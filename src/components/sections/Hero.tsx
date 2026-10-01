import Image from "next/image";
import { DecorShapes, type DecorShape } from "@/components/ui/DecorShapes";
import { cn } from "@/lib/cn";

const lime = "[filter:sepia(1)_hue-rotate(25deg)_saturate(5)_brightness(1.15)]";
const white = "brightness-[1.35]";


const LIME = "var(--color-lime)";
const WHITE = "#ffffff";

const shapes: DecorShape[] = [
  { src: "/images/hero/spring-lime.png", color: LIME, className: "-left-[6%] top-[3%] w-[22%] lg:-left-[6%] lg:top-[26%] lg:w-[20%]" },
  { src: "/images/hero/spring-white-sm.png", color: WHITE, className: "hidden lg:left-[14%] lg:top-[47%] lg:block lg:w-[10.5%]" },
  { src: "/images/hero/torus-white.png", color: WHITE, className: "-left-[8%] top-[34%] w-[26%] lg:left-[4%] lg:top-[68%] lg:w-[21%]" },
  { src: "/images/hero/cylinder-lime.png", color: LIME, className: "-right-[10%] -top-[10%] w-[20%] lg:-right-[5%] lg:top-[24%] lg:w-[16%]" },
  { src: "/images/hero/cone-white.png", color: WHITE, className: "right-[10%] -top-[5%] w-[20%] lg:right-[12%] lg:top-[45%] lg:w-[11.5%]" },
  { src: "/images/hero/spring-white.png", color: WHITE, className: "-right-[6%] bottom-[60%] w-[20%] lg:bottom-auto lg:right-[3%] lg:top-[65%] lg:w-[20%]" },
];

const avatars = [1, 2, 3, 4, 5].map((n) => `/images/avatars/${n}.png`);

const d = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

function HeroCard({ className, delay, children }: { className?: string; delay: number; children: React.ReactNode }) {
  return (
    <div
      style={d(delay)}
      className={cn(
        "animate-pop-in absolute z-30 rounded-xl bg-white p-3 text-left text-ink shadow-xl lg:rounded-[1.1cqw] lg:p-[1.25cqw]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden bg-brand text-white">
      <div className="@container relative mx-auto w-full max-w-360 px-5 pt-28 sm:pt-32 lg:aspect-1440/1020 lg:px-0 lg:pt-0">
        <div className="relative z-10 text-center lg:absolute lg:inset-x-0 lg:top-[12%]">
          <h1
            style={d(100)}
            className="animate-fade-up mx-auto max-w-3xl text-balance text-[2rem] font-semibold leading-tight min-[420px]:text-4xl sm:text-5xl lg:max-w-none lg:text-[5cqw] lg:leading-[1.19]"
          >
            Get Access to Hundreds <br className="hidden md:block" />
            Courses Available
          </h1>

          <p
            style={d(220)}
            className="animate-fade-up mx-auto mt-5 max-w-md text-sm text-white/90 lg:mt-[2.4cqw] lg:max-w-[57%] lg:text-[1.35cqw] lg:leading-[1.4]"
          >
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <form
            action="/courses"
            role="search"
            style={d(340)}
            className="animate-fade-up mx-auto mt-7 flex max-w-md items-center gap-3 lg:mt-[4.2cqw] lg:w-[40.3%] lg:max-w-none lg:gap-[1.2cqw]"
          >
            <label htmlFor="hero-search" className="sr-only">Search courses</label>
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-4 py-3 text-ink lg:h-[3.6cqw] lg:gap-[0.8cqw] lg:px-[1.5cqw] lg:py-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="size-4 shrink-0 text-muted lg:size-[1.3cqw]">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                id="hero-search"
                name="q"
                placeholder="Course, topic, creator"
                className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-muted lg:text-[1.3cqw]"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 rounded-full bg-lime px-6 py-3 text-sm font-medium text-ink transition hover:brightness-95 lg:h-[3.2cqw] lg:px-[2.2cqw] lg:py-0 lg:text-[1.3cqw]"
            >
              Search
            </button>
          </form>
        </div>

      
        <div className="relative mx-auto mt-10 aspect-5/4 w-full max-w-md sm:max-w-xl md:max-w-2xl lg:contents">
          <DecorShapes shapes={shapes} />

          <div
            aria-hidden="true"
            style={d(250)}
            className="animate-pop-in absolute left-1/2 top-[30%] z-1 aspect-square w-[112%] -translate-x-1/2 rounded-full bg-lime lg:top-[57%] lg:w-[80%]"
          />

          <Image
            src="/images/hero/student.png"
            alt="Smiling student with headphones holding a laptop"
            width={668}
            height={706}
            priority
            sizes="(min-width: 1024px) 34vw, 60vw"
            style={d(400)}
            className="animate-rise absolute bottom-0 left-1/2 z-20 h-auto w-[56%] -translate-x-1/2 sm:w-[50%] lg:left-[38.6%] lg:w-[31.5%] lg:translate-x-0"
          />

          <HeroCard delay={650} className="left-[12%] top-[5%]  sm:block lg:left-[28.1%] lg:top-[62.3%] lg:w-[14.4%]">
            <p className="text-xs font-medium lg:text-[max(10px,1.15cqw)]">UI/UX Design</p>
            <p className="mt-0.5 text-[9px] text-muted lg:text-[max(9px,0.75cqw)]">200 Courses • 1000+ Students</p>
          </HeroCard>

          <HeroCard delay={750} className="right-0 top-[40%] w-[38%] sm:w-[30%] lg:left-[60.5%] lg:right-auto lg:top-[65.5%] lg:w-[16.1%]">
            <p className="text-[10px] text-muted lg:text-[max(9px,0.95cqw)]">Learning Progress</p>
            <p className="mt-1 text-3xl font-semibold leading-none lg:mt-[0.6cqw] lg:text-[3.2cqw]">55%</p>
            <div
              role="progressbar"
              aria-valuenow={55}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Learning progress"
              className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100 lg:mt-[0.9cqw] lg:h-[0.55cqw]"
            >
              <div className="h-full w-[55%] rounded-full bg-lime" />
            </div>
          </HeroCard>

          <HeroCard delay={850} className="bottom-[4%] left-0 w-[40%] sm:w-[36%] lg:bottom-auto lg:left-[26.9%] lg:top-[81.6%] lg:w-[17.8%]">
            <p className="text-xs font-medium lg:text-[max(10px,1.05cqw)]">Happy Students</p>
            <p className="text-[9px] text-muted lg:text-[max(9px,0.8cqw)]">
              4.5 (240) <span className="text-lime">★</span>
            </p>
            <div className="mt-2 flex items-center lg:mt-[0.7cqw]">
              <div className="flex -space-x-2 lg:-space-x-0.7cqw">
                {avatars.map((src) => (
                  <Image key={src} src={src} alt="" width={40} height={40} className="size-6 rounded-full border-2 border-white object-cover lg:size-[2.6cqw]" />
                ))}
              </div>
              <span className="-ml-1 grid size-7 place-items-center rounded-full bg-lime text-[9px] font-medium lg:size-[3cqw] lg:text-[max(9px,0.9cqw)]">
                2K+
              </span>
            </div>
          </HeroCard>
        </div>
      </div>
    </section>
  );
}