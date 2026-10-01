import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { CourseCard } from "@/components/cards/CourseCard";
import { ProgressCard } from "@/components/cards/ProgressCard";
import { courses, growthStats } from "@/data/content";
import { DecorShapes } from "../ui/DecorShapes";

export function Growth() {
  return (
    <section className="relative isolate overflow-hidden  pt-16 lg:pt-24">
      <GlowBlob className="left-24 -top-24 size-94 bg-lime/40" />
      <GlowBlob className="-right-24 top-10 size-96 bg-brand/10" />
      <GlowBlob className="-left-20 bottom-0 size-72 bg-brand/10" />

      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="">
          <h2 className="text-3xl font-semibold leading-tight lg:text-[44px]">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-6 text-[18px]  text-gray-700">
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
        <div className="relative mx-auto aspect-16/15 w-full  lg:ml-auto">
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

         <DecorShapes
  shapes={[
    {
      src: "/images/hero/spring-lime.png",
      color: "var(--color-lime)",
      className: "right-0 top-[20%] w-[30%] scale-x-[-1]",
    },
  ]}
/>

          <ProgressCard className="absolute right-[2%] top-[43%] w-[32%] min-w-32" />
        </div>
      </Container>
    </section>
  );
}