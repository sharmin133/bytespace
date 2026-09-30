import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import { StudentsCard } from "@/components/cards/StudentsCard";
import { courses } from "@/data/content";

export function AuthShowcase() {
  return (
    // Sudhu decoration, tai screen reader ar keyboard theke lukano (inert)
    <div aria-hidden="true" inert className="relative aspect-[6/7] w-full max-w-md">
      <div className="absolute left-0 top-[17%] w-[77%]">
        <CourseCard course={courses[1]} />
      </div>
      <div className="absolute left-[23%] top-[0.5%] z-10 w-[77%]">
        <CourseCard course={courses[2]} />
      </div>

      <Image src="/images/hero/torus-lime.png" alt="" width={300} height={300} className="pointer-events-none absolute left-[10.5%] top-[8%] z-20 h-auto w-[22%]" />
      <Image src="/images/hero/cone-lime.png" alt="" width={300} height={300} className="pointer-events-none absolute left-0 top-[75%] z-20 h-auto w-[28%]" />
      <Image src="/images/hero/spring-white.png" alt="" width={300} height={300} className="pointer-events-none absolute left-[79%] top-[63%] z-20 h-auto w-[23%]" />

      <StudentsCard variant="lime" className="absolute left-[47%] top-[78%] z-20 w-[53%]" />
    </div>
  );
}