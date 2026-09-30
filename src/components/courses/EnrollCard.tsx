import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { CourseDetail } from "@/types";
import { slug } from "@/lib/course-query";

const icons = {
  book: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>,
  video: <><path d="m22 8-6 4 6 4V8z" /><rect x="2" y="6" width="14" height="12" rx="2" /></>,
  award: <><circle cx="12" cy="8" r="6" /><path d="M15.5 13 17 22l-5-3-5 3 1.5-9" /></>,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
} as const;

const PREVIEW = 3;

export function EnrollCard({ course }: { course: CourseDetail }) {
  const { creator } = course;

  return (
    <aside aria-label="Enroll in this course" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-semibold">
        {course.totalLessons} Lessons ({course.totalHours} hours)
      </h2>

      <ol className="mt-4 space-y-3">
        {course.lessonList.slice(0, PREVIEW).map((l, i) => (
          <li key={l.title} className="flex items-start justify-between gap-3 text-xs">
            <span className="flex gap-3">
              <span className="text-gray-500">{String(i + 1).padStart(2, "0")}</span>
              <span>{l.title}</span>
            </span>
            <span className="shrink-0 text-brand">{l.duration}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-[10px] text-gray-500">{course.totalLessons - PREVIEW} more videos</p>

      <p className="mt-5 text-[10px] text-gray-600">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
      <p className="mt-4">
        <span className="text-2xl font-semibold text-brand">{course.price}</span>
        <span className="text-[10px] text-gray-400">/lifetime</span>
      </p>
      <Button href="/join" className="mt-3 w-full">Enroll Now</Button>

      <h3 className="mt-6 text-sm font-semibold">This course include</h3>
      <ul className="mt-4 space-y-3">
        {course.includes.map((item) => (
          <li key={item.label} className="flex items-center gap-2.5 text-xs text-gray-700">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-brand">
              {icons[item.icon]}
            </svg>
            {item.label}
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-gray-200 pt-5">
        <div className="flex items-center gap-3">
          <Image src={creator.avatar} alt="" width={40} height={40} className="size-10 rounded-full object-cover" />
          <div>
            <p className="text-xs font-semibold">{creator.name}</p>
            <p className="text-[10px] text-gray-500">{creator.role}</p>
          </div>
        </div>
        <p className="mt-4 text-[10px] text-gray-600">{creator.bio}</p>
       <Link href={`/creators/${slug(creator.name)}`} className="mt-4 inline-block rounded-full border border-gray-300 px-4 py-1.5 text-[10px] transition hover:border-brand hover:text-brand">
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}