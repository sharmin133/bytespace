import { catalog, courseDetailBase } from "@/data/content";
import { slug, type CourseQuery } from "@/lib/course-query";
import type { Course, CourseDetail } from "@/types";

export const PAGE_SIZE = 9;

const priceOf = (c: Course) => Number(c.price.replace(/[^0-9.]/g, ""));

export function queryCourses(query: CourseQuery) {
  const q = query.q?.trim().toLowerCase();
  const category = slug(query.category ?? "Featured");

    const list = catalog.filter(
    (c) =>
      (!query.creator || slug(c.studio) === query.creator) &&
      (!q || c.title.toLowerCase().includes(q) || c.studio.toLowerCase().includes(q)) &&
      c.categories.some((cat) => slug(cat).includes(category)) &&
      (!query.level || c.level === query.level),
  );

  if (query.sort === "rating") list.sort((a, b) => b.rating - a.rating);
  if (query.sort === "price-asc") list.sort((a, b) => priceOf(a) - priceOf(b));
  if (query.sort === "price-desc") list.sort((a, b) => priceOf(b) - priceOf(a));

  const total = list.length;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const page = Math.min(Math.max(1, Number(query.page) || 1), pages);
  const items = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return { items, total, page, pages };
}

export function getCourseDetail(id: string): CourseDetail | undefined {
  const course = catalog.find((c) => c.id === id);
  if (!course) return undefined;

  return {
    ...course,
    ...courseDetailBase,
    title: `${course.title}: A Comprehensive Guide`,
    description: courseDetailBase.description.map((p) => p.replaceAll("{title}", course.title)),
  };
}