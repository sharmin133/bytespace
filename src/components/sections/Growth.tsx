import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { CourseCard } from "@/components/cards/CourseCard";
import { ProgressCard } from "@/components/cards/ProgressCard";
import { courses, growthStats } from "@/data/content";

export function Growth() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-lime/10 to-white py-16 lg:py-24">
      <GlowBlob className="-left-24 -top-24 size-[28rem] bg-lime/40" />
      <GlowBlob className="-right-24 top-10 size-[24rem] bg-brand/10" />
      <GlowBlob className="-left-20 bottom-0 size-72 bg-brand/10" />

      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="max-w-md lg:pl-8">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Your Path to Professional<br className="hidden sm:block" /> Growth Starts Here!
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
            journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
            career path entirely, we have the resources you need.
          </p>

          <dl className="mt-8 flex gap-8">
            {growthStats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="text-xs text-gray-600">{s.label}</dt>
                <dd className="text-2xl font-medium text-brand">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Course card + student + spring + progress card */}
        <div className="relative mx-auto aspect-[16/15] w-full max-w-md lg:ml-auto">
          <div className="absolute left-0 top-0 w-[64%]">
            <CourseCard course={courses[0]} />
          </div>

          <Image
            src="/images/growth/student.png"
            alt="Student learning with a laptop"
            width={600}
            height={640}
            sizes="(min-width: 1024px) 400px, 90vw"
            className="absolute bottom-0 right-0 h-auto w-[89%] drop-shadow-2xl"
          />

          <Image
            src="/images/hero/spring-lime.png"
            alt=""
            aria-hidden="true"
            width={400}
            height={400}
            className="pointer-events-none absolute right-0 top-[14%] h-auto w-[21%]"
          />

          <ProgressCard className="absolute right-[2%] top-[39%] w-[39%] min-w-32" />
        </div>
      </Container>
    </section>
  );
}