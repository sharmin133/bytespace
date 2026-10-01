import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/types";

const avatars = [1, 2, 3, 4].map((n) => `/images/avatars/${n}.png`);

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
    </svg>
  );
}

function LevelIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <rect x="1" y="7" width="2" height="4" rx="1" />
      <rect x="5" y="4" width="2" height="7" rx="1" />
      <rect x="9" y="1" width="2" height="10" rx="1" />
    </svg>
  );
}

export function CourseCard({ course }: { course: Course }) {
  const meta = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];

  return (
    <article className="relative rounded-2xl border border-gray-200 bg-white p-2 transition hover:shadow-lg">
      {/* Thumbnail + glass pills */}
      <div className="relative aspect-[7/4] overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
        />
        <ul className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5">
          {meta.map((m) => (
            <li key={m} className="rounded-full bg-white/60 px-2.5 py-1 text-[10px] text-gray-600 backdrop-blur-md">
              {m}
            </li>
          ))}
        </ul>
      </div>

      <div className="px-2 pb-3 pt-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 truncate text-sm font-semibold">
            {/* Stretched link: pura card clickable */}
            <Link href={`/courses/${course.id}`} className="after:absolute after:inset-0">
              {course.title}
            </Link>
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-xs text-gray-400">
            {course.rating}
            <StarIcon />
          </span>
        </div>

        <p className="mt-0.5 text-[10px] text-brand">by {course.studio}</p>

        <div className="mt-3 flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] text-gray-600">
            <LevelIcon />
            {course.level}
          </span>
          <div className="flex items-center">
            <div className="flex -space-x-1.5">
              {avatars.map((src) => (
                <Image key={src} src={src} alt="" width={24} height={24} className="size-6 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <span className="-ml-1.5 grid size-6 place-items-center rounded-full border-2 border-white bg-lime text-[9px] font-medium">
              {course.learners}
            </span>
          </div>
        </div>

        <p className="mt-3">
          <span className="text-sm font-semibold text-brand">{course.price}</span>
          <span className="text-[10px] text-gray-400">/lifetime</span>
        </p>
      </div>
    </article>
  );
}