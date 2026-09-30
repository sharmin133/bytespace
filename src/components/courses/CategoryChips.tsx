import Link from "next/link";
import { courseFilters } from "@/data/content";
import { buildHref, slug, type CourseQuery } from "@/lib/course-query";
import { cn } from "@/lib/cn";

export function CategoryChips({ query }: { query: CourseQuery }) {
  const active = slug(query.category ?? "Featured");

  return (
    <nav
      aria-label="Course categories"
      className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
    >
      {courseFilters.map((f) => {
        const on = slug(f) === active;
        return (
          <Link
            key={f}
            href={buildHref(query, { category: f === "Featured" ? undefined : f, page: undefined })}
            aria-current={on ? "true" : undefined}
            className={cn(
              "shrink-0 rounded-full px-3.5 py-2 text-xs transition",
              on ? "bg-lime font-medium text-ink" : "bg-gray-100 text-gray-600 hover:bg-gray-200",
            )}
          >
            {f}
          </Link>
        );
      })}
    </nav>
  );
}