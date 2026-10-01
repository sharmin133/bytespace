import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Pagination } from "@/components/ui/Pagination";
import { CourseCard } from "@/components/cards/CourseCard";
import { CoursesHero } from "@/components/courses/CoursesHero";
import { CourseToolbar } from "@/components/courses/CourseToolbar";
import { CategoryChips } from "@/components/courses/CategoryChips";
import { courseFilters } from "@/data/content";
import { queryCourses } from "@/lib/courses";
import type { CourseQuery } from "@/lib/course-query";

export const metadata: Metadata = {
  title: "Find Your Next Course – ByteSpace",
  description: "Search and filter ByteSpace courses by topic, level and category.",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;
const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export default async function CoursesPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const query: CourseQuery = {
    q: first(sp.q),
    category: first(sp.category),
    level: first(sp.level),
    sort: first(sp.sort),
    page: first(sp.page),
  };

  const { items, total, page, pages } = queryCourses(query);

  return (
    <>
      <Navbar />
      <main>
        <CoursesHero defaultQuery={query.q} />

        <Container className="py-10 sm:py-12">
          <CourseToolbar query={query} categories={courseFilters} />
          <div className="mt-5">
            <CategoryChips query={query} />
          </div>

          <p role="status" className="sr-only">{total} courses found</p>

          {items.length ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-lg font-medium">No courses found</p>
              <p className="mt-2 text-sm text-muted">Try a different keyword or clear some filters.</p>
              <Button href="/courses" variant="dark" className="mt-6">
                Clear filters
              </Button>
            </div>
          )}

          <Pagination page={page} pages={pages} query={query} />
        </Container>
      </main>

      <div className="border-t border-gray-200">
        <Footer />
      </div>
    </>
  );
}