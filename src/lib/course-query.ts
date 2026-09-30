export interface CourseQuery {
  q?: string;
  category?: string;
  level?: string;
  sort?: string;
  page?: string;
  creator?: string;
}

export const LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;

export const SORTS = [
  { value: "", label: "Most relevant" },
  { value: "rating", label: "Top rated" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
] as const;

export const slug = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");


export function buildHref(current: CourseQuery, next: Partial<CourseQuery>, basePath = "/courses") {
  const merged = { ...current, ...next };
  const params = new URLSearchParams();
  Object.entries(merged).forEach(([key, value]) => {
    if (value && key !== "creator") params.set(key, value);
  });
  const qs = params.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}