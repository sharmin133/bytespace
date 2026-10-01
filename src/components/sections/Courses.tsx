"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "@/components/cards/CourseCard";
import { courseFilters, courses } from "@/data/content";
import { cn } from "@/lib/cn";

export function Courses() {
  const [active, setActive] = useState("Featured");

  const visible = useMemo(
    () => courses.filter((c) => c.categories.includes(active)),
    [active],
  );

  return (
    <section id="courses" className="pt-16 lg:pt-24">
      <Container>
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."

       />

        <div
          role="group"
          aria-label="Filter courses by category"
          className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-none] sm:mx-auto sm:max-w-4xl sm:flex-wrap sm:justify-center sm:gap-x-2 sm:gap-y-3 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {courseFilters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={f === active}
              onClick={() => setActive(f)}
              className={cn(
                "shrink-0 rounded-full px-3.5 py-2 text-xs transition",
                f === active
                  ? "bg-lime font-medium text-ink"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              )}
            >
              {f}
            </button>
          ))}
          <Link
            href="/courses"
            className="shrink-0 px-2 py-2 text-xs font-medium text-brand hover:underline"
          >
            + More
          </Link>
        </div>

        {visible.length ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        ) : (
          <p className="mt-12 text-center text-muted">
            No courses in this category yet.
          </p>
        )}
      </Container>
    </section>
  );
}
