"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { cn } from "@/lib/cn";
import type { CourseDetail } from "@/types";

const heading = "text-sm font-semibold";
const STAR_FILTERS = [5, 4, 3, 2, 1];

export function ReviewsPanel({ course }: { course: CourseDetail }) {
  const [filter, setFilter] = useState<number | null>(null);

  const total = course.ratingCounts.reduce((a, b) => a + b, 0);
  const average = course.ratingCounts.reduce((sum, count, i) => sum + count * (5 - i), 0) / total;

  const visible = useMemo(
    () => (filter ? course.reviewList.filter((r) => r.rating === filter) : course.reviewList),
    [filter, course.reviewList],
  );

  return (
    <div className="space-y-8">
      <Reveal>
        <h2 className={heading}>What Learners Are Saying</h2>
        <p className="mt-3 text-xs leading-relaxed text-gray-600">
          Discover what our learners have to say about their experience with &lsquo;{course.title}.&rsquo; Read reviews
          and ratings from individuals who have embarked on the transformative journey of mastering digital asset
          creation.
        </p>
      </Reveal>

      {/* Rating summary */}
      <Reveal>
        <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6">
          <div className="grid size-28 shrink-0 place-items-center rounded-lg bg-lime text-center">
            <div>
              <p className="text-[10px]">Ratings</p>
              <p className="text-4xl font-semibold leading-tight">{average.toFixed(1)}</p>
            </div>
          </div>

          <ul className="flex-1 space-y-2.5">
            {course.ratingCounts.map((count, i) => {
              const stars = 5 - i;
              const pct = Math.max(3, (count / total) * 100);
              return (
                <li key={stars} className="flex items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
                    <div className="animate-grow-x h-full rounded-full bg-lime" style={{ width: `${pct}%`, "--delay": `${i * 90}ms` } as React.CSSProperties} />
                  </div>
                  <Stars rating={stars} className="hidden sm:inline-flex [&_svg]:size-3" />
                  <span className="w-8 text-right text-[10px] text-gray-600">{count}</span>
                  <span className="sr-only">{stars} star reviews</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>

      {/* Individual reviews */}
      <div>
        <Reveal>
          <h3 className={heading}>Individual Reviews:</h3>
          <div role="group" aria-label="Filter reviews by rating" className="mt-4 flex flex-wrap gap-2">
            <FilterChip active={filter === null} onClick={() => setFilter(null)}>All rating</FilterChip>
            {STAR_FILTERS.map((n) => (
              <FilterChip key={n} active={filter === n} onClick={() => setFilter(n)}>
                <span aria-hidden="true">★</span> {n}
                <span className="sr-only"> star</span>
              </FilterChip>
            ))}
          </div>
        </Reveal>

        <p role="status" className="sr-only">{visible.length} reviews shown</p>

        {visible.length ? (
          <ul className="mt-5 space-y-4">
            {visible.map((r) => (
              <li key={r.id}>
                <Reveal>
                  <article className="rounded-2xl border border-gray-200 p-5">
                    <header className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Image src={r.avatar} alt="" width={40} height={40} className="size-10 rounded-lg object-cover" />
                        <div>
                          <p className="text-xs font-medium">{r.name}</p>
                          <p className="text-[10px] text-gray-500">{r.role}</p>
                        </div>
                      </div>
                      <span className="shrink-0 text-[10px] text-gray-500">{r.time}</span>
                    </header>
                    <Stars rating={r.rating} className="mt-4" />
                    <p className="mt-4 text-xs leading-relaxed text-gray-600">&ldquo;{r.comment}&rdquo;</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8 rounded-2xl border border-dashed border-gray-200 py-10 text-center text-xs text-gray-500">
            No reviews with this rating yet.
          </p>
        )}
      </div>
    </div>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-xs transition",
        active ? "bg-lime font-medium text-ink" : "bg-gray-100 text-gray-600 hover:bg-gray-200",
      )}
    >
      {children}
    </button>
  );
}