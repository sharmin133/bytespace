
import { CourseCard } from "@/components/cards/CourseCard";
import { StudentsCard } from "@/components/cards/StudentsCard";
import { DecorShapes, type DecorShape } from "@/components/ui/DecorShapes";
import { courses } from "@/data/content";

const WHITE = "#ffffff";
const LIME = "var(--color-lime)";

const shapes: DecorShape[] = [
  { src: "/images/hero/torus-white.png", color: LIME, className: "left-[10.5%] top-[8%] z-20 w-[22%]" },
  { src: "/images/hero/cone-white.png", color: LIME, className: "left-0 top-[75%] z-20 w-[28%]" },
  { src: "/images/hero/spring-white.png", color: WHITE, className: "left-[75%] top-[56%] z-20 w-[30%] z-30" },
];

export function AuthShowcase() {
  return (

    <div aria-hidden="true" inert className="relative aspect-6/7 w-full max-w-md ">
      <div className="absolute left-0 top-[17%] w-[77%]">
        <CourseCard course={courses[1]} />
      </div>
      <div className="absolute left-[23%] top-[0.5%] z-10 w-[77%]">
        <CourseCard course={courses[2]} />
      </div>

      <DecorShapes shapes={shapes} />

      <StudentsCard variant="lime" className="absolute left-[47%] top-[78%] z-20 w-[53%]" />
    </div>
  );
}