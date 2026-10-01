import Image from "next/image";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Reveal } from "@/components/ui/Reveal";
import type { CourseDetail } from "@/types";
import { ProgressCard } from "../cards/ProgressCard";

const heading = "text-sm font-semibold";

export function CourseAbout({ course }: { course: CourseDetail }) {
  return (
    <div className="space-y-10">
      <Reveal>
        <h2 className={heading}>Description</h2>
        <div className="mt-4 space-y-5 text-xs leading-relaxed text-gray-600">
          {course.description.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h2 className={heading}>Sneak Peak</h2>
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {course.sneakPeek.map((src, i) => (
            <li key={src} className="relative aspect-4/3 overflow-hidden rounded-xl bg-gray-100">
              <Image src={src} alt={`Course preview ${i + 1}`} fill sizes="(min-width: 640px) 160px, 45vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </Reveal>

      <div>
        <Reveal>
          <h2 className={heading}>Key Points</h2>
        </Reveal>
        <ul className="mt-4 space-y-3">
          {course.keyPoints.map((p, i) => (
            <li key={p}>
              <Reveal delay={i * 70} className="flex items-center gap-2.5 text-xs text-gray-700">
                <CheckIcon />
                {p}
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function LessonPanel({ course }: { course: CourseDetail }) {
  return (
    <div className="space-y-8">
      <Reveal>
        <h2 className={heading}>Explore the Modules</h2>
        <p className="mt-3 text-xs leading-relaxed text-gray-600">{course.lessonIntro}</p>
      </Reveal>

      <div>
        <Reveal>
          <h3 className={heading}>Lesson List</h3>
        </Reveal>
        <ol className="mt-4 space-y-4">
          {course.modules.map((m, i) => (
            <li key={m.title}>
              <Reveal delay={i * 70} className="flex items-start gap-4">
                <span aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-2xl bg-lime text-ink">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 8-6 4 6 4V8z" />
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <h4 className="text-xs font-medium">
                    Module {i + 1}: {m.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600">{m.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <Reveal>
        <h3 className={heading}>Lesson Content</h3>
        <p className="mt-3 text-xs leading-relaxed text-gray-600">{course.lessonContent}</p>
      </Reveal>

      <Reveal>
        <h3 className={heading}>Lesson Progress Tracking</h3>
        <p className="mt-3 text-xs leading-relaxed text-gray-600">{course.progressIntro}</p>
        <ProgressCard flat className="mt-5" />
      </Reveal>
    </div>
  );
}

