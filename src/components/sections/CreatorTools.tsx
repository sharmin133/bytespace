import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { RevenueCard } from "@/components/cards/RevenueCard";
import { StudentsCard } from "@/components/cards/StudentsCard";
import { creatorPoints } from "@/data/content";

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
    <section id="creators" className="relative isolate overflow-hidden py-16 lg:py-24">
      <GlowBlob className="-bottom-24 -left-24 size-[28rem] bg-lime/50" />
      <GlowBlob className="-bottom-32 -right-24 size-[26rem] bg-brand/15" />
      <GlowBlob className="left-0 top-10 size-72 bg-brand/10" />

      <Container className="grid items-center gap-12 lg:grid-cols-2">
        {/* Mobile e text age, desktop e image bam e */}
        <div className="relative order-2 mx-auto aspect-[11/10] w-full max-w-md lg:order-1 lg:mr-auto">
          <Image
            src="/images/growth/creator.png"
            alt="Creator with headphones holding a tablet"
            width={520}
            height={675}
            sizes="(min-width: 1024px) 320px, 70vw"
            className="absolute bottom-0 left-[12%] h-auto w-[71%] drop-shadow-2xl"
          />

          <Image
            src="/images/hero/spring-lime.png"
            alt=""
            aria-hidden="true"
            width={400}
            height={400}
            className="pointer-events-none absolute left-[63%] top-[22%] h-auto w-[25%]"
          />

          <RevenueCard className="absolute left-0 top-[1%] w-[34%] min-w-32" title="Total Revenue" period="July 1-28" amount="$120.29" progress={70} />
          <RevenueCard className="absolute left-0 top-[30%] w-[27%] min-w-28" title="Year to Date" period="2023" amount="$1,200.38" badge="+12%" />
          <StudentsCard className="absolute bottom-[1%] right-0 w-[47%] min-w-44" />
        </div>

        <div className="order-1 max-w-md lg:order-2">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Create &amp; Manage<br className="hidden sm:block" /> Courses Easily.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            <strong className="font-semibold text-ink">ByteSpace</strong> supports individuals or entities in the
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