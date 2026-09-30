import { Container } from "@/components/ui/Container";

export function CoursesHero({ defaultQuery }: { defaultQuery?: string }) {
  return (
    <section className="bg-grid bg-brand pb-14 pt-28 text-white sm:pb-16 sm:pt-32">
      <Container className="text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl">Find Your Next Course</h1>

        <form action="/courses" role="search" className="mx-auto mt-8 flex max-w-2xl items-center gap-3">
          <label htmlFor="course-search" className="sr-only">Search courses</label>
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-4 py-3 text-ink">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" className="shrink-0 text-muted">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              id="course-search"
              name="q"
              type="search"
              defaultValue={defaultQuery}
              placeholder="Search"
              className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-muted"
            />
          </div>

          <div className="relative shrink-0">
            <label htmlFor="search-type" className="sr-only">Search in</label>
            <select
              id="search-type"
              name="type"
              className="cursor-pointer appearance-none rounded-full bg-lime py-3 pl-5 pr-10 text-sm font-medium text-ink outline-none"
            >
              <option value="courses">Courses</option>
              <option value="creators">Creators</option>
            </select>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          {/* Enter chaple submit hoy, keyboard user er jonno button ta focusable */}
          <button type="submit" className="sr-only">Search</button>
        </form>
      </Container>
    </section>
  );
}