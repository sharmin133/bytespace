import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { RevenueCard } from "@/components/cards/RevenueCard";
import { StudentsCard } from "@/components/cards/StudentsCard";
import { creatorPoints } from "@/data/content";
import { DecorShapes } from "../ui/DecorShapes";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 text-brand">
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path d="m7 12.5 3.2 3.2L17 9" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CreatorTools() {
  return (
    <section id="creators" className="relative isolate overflow-hidden py-16">
      <GlowBlob className="-bottom-24 -left-24 size-112 bg-lime/50" />
      <GlowBlob className="-bottom-32 -right-24 size-104 bg-brand/15" />
      <GlowBlob className="left-0 top-10 size-72 bg-brand/10" />

      <Container className="grid items-center  gap-12 lg:grid-cols-2">
        
        <div className="relative order-2 mx-auto aspect-11/10 w-full lg:order-1 lg:mr-auto">
          <Image
            src="/images/growth/creator.png"
            alt="Creator with headphones holding a tablet"
            width={620}
            height={575}
            sizes="(min-width: 1024px) 420px, 70vw"
            className="absolute z-40 bottom-0 left-[12%] h-auto w-[80%] drop-shadow-2xl"
          />

           <DecorShapes
            shapes={[
              {
                src: "/images/hero/spring-lime.png",
                color: "var(--color-lime)",
                className: " z-50 right-[10%] top-[20%] w-[30%] ",
              },
            ]}
          />

       <RevenueCard
  className="absolute z-30 left-[5%] top-[12%] w-[34%] min-w-32 sm:left-[10%] sm:top-[15%] lg:left-[13%] lg:top-[18%]"
  title="Total Revenue"
  period="July 1-28"
  amount="$120.29"
  progress={70}
/>

<RevenueCard
  className="absolute z-30 left-0 top-[55%] w-[24%] min-w-28 sm:left-[5%] sm:top-[50%] lg:left-[12%] lg:top-[43%]"
  title="Year to Date"
  period="2023"
  amount="$1,200.38"
  badge="+12%"
/>
          <StudentsCard className="absolute z-50 bottom-[10%] right-[5%] w-[35%] min-w-36" />
        </div>

        <div className="order-1  lg:order-2">
          <h2 className="text-3xl font-semibold leading-tight lg:text-[44px]">
            Create &amp; Manage<br className="hidden sm:block" /> Courses Easily.
          </h2>
          <p className="mt-6 text-sm text-[18px] text-gray-700">
            <strong className=" text-ink">ByteSpace</strong> supports individuals or entities in the
            creation, publication, and administration of educational courses.
          </p>

          <ul className="mt-6 space-y-3">
            {creatorPoints.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-xs text-gray-700 sm:text-sm">
                <CheckIcon />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}