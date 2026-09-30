import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Pagination } from "@/components/ui/Pagination";
import { CourseCard } from "@/components/cards/CourseCard";
import { CourseToolbar } from "@/components/courses/CourseToolbar";
import { CreatorHeader } from "@/components/creators/CreatorHeader";
import { courseFilters } from "@/data/content";
import { getCreator } from "@/lib/creators";
import { queryCourses } from "@/lib/courses";
import type { CourseQuery } from "@/lib/course-query";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<Record<string, string | string[] | undefined>>;
const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) return { title: "Creator not found – ByteSpace" };
  return { title: `${creator.name} – ByteSpace`, description: creator.tagline };
}

export default async function CreatorPage({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  const sp = await searchParams;
  const query: CourseQuery = {
    category: first(sp.category),
    level: first(sp.level),
    sort: first(sp.sort),
    page: first(sp.page),
  };
  const basePath = `/creators/${creator.slug}`;

  const { items, page, pages } = queryCourses({ ...query, creator: creator.slug });
  const products = queryCourses({ creator: creator.slug }).total;

  return (
    <>
      <Navbar />
      <main>
        <CreatorHeader creator={creator} products={products} />

        <Container className="py-10 sm:py-12">
          <CourseToolbar query={query} categories={courseFilters} basePath={basePath} />

          {items.length ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-lg font-medium">No courses found</p>
              <p className="mt-2 text-sm text-muted">Try clearing some filters.</p>
              <Button href={basePath} variant="dark" className="mt-6">
                Clear filters
              </Button>
            </div>
          )}

          <Pagination page={page} pages={pages} query={query} basePath={basePath} />
        </Container>
      </main>

      <div className="border-t border-gray-200">
        <Footer />
      </div>
    </>
  );
}