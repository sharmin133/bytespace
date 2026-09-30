import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ShareButton } from "@/components/courses/ShareButton";
import type { CourseDetail } from "@/types";

function Badge({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs text-ink">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-brand">
        {icon}
      </svg>
      {children}
    </li>
  );
}

export function CourseHeader({ course }: { course: CourseDetail }) {
  return (
    <section className="bg-grid bg-brand pb-8 pt-28 text-white sm:pt-32">
      <Container className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <FadeIn>
            <h1 className="text-balance text-2xl font-semibold leading-tight sm:text-4xl">{course.title}</h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-2 text-sm font-semibold sm:text-base">{course.subtitle}</p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-5 text-xs">
              by <span className="text-lime">{course.studio}</span>
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <ul className="mt-4 flex flex-wrap gap-2">
              <Badge icon={<path d="M5 20v-5M12 20V9M19 20V4" fill="none" />}>{course.level}</Badge>
              <Badge icon={<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />}>
                {course.rating} ({course.reviews} reviews)
              </Badge>
              <Badge icon={<><circle cx="9" cy="8" r="3.5" fill="none" /><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M17 4.5a3.5 3.5 0 0 1 0 7M22 20c0-2.6-1.6-4.6-4-5.5" fill="none" /></>}>
                {course.students} Students
              </Badge>
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <ShareButton title={course.title} />
        </FadeIn>
      </Container>
    </section>
  );
}