import Link from "next/link";
import { buildHref, type CourseQuery } from "@/lib/course-query";
import { cn } from "@/lib/cn";

const arrow = "grid size-10 place-items-center rounded-full border border-gray-300 transition";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

interface Props { page: number; pages: number; query: CourseQuery; basePath?: string }

export function Pagination({ page, pages, query, basePath }: Props) {
  if (pages <= 1) return null;

  const to = (n: number) => buildHref(query, { page: n === 1 ? undefined : String(n) }, basePath);
  const start = Math.min(Math.max(1, page - 2), Math.max(1, pages - 4));
  const numbers = Array.from({ length: Math.min(5, pages) }, (_, i) => start + i);

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-4 sm:gap-6">
      {page > 1 ? (
        <Link href={to(page - 1)} aria-label="Previous page" className={cn(arrow, "hover:border-brand hover:text-brand")}>
          <Chevron dir="left" />
        </Link>
      ) : (
        <span aria-hidden="true" className={cn(arrow, "opacity-40")}><Chevron dir="left" /></span>
      )}

      <ul className="flex items-center gap-4 text-sm font-semibold sm:gap-6">
        {numbers.map((n) => (
          <li key={n}>
            {n === page ? (
              <span aria-current="page" className="text-gray-400">{n}</span>
            ) : (
              <Link href={to(n)} aria-label={`Page ${n}`} className="transition hover:text-brand">{n}</Link>
            )}
          </li>
        ))}
      </ul>

      {page < pages ? (
        <Link href={to(page + 1)} aria-label="Next page" className={cn(arrow, "hover:border-brand hover:text-brand")}>
          <Chevron dir="right" />
        </Link>
      ) : (
        <span aria-hidden="true" className={cn(arrow, "opacity-40")}><Chevron dir="right" /></span>
      )}
    </nav>
  );
}