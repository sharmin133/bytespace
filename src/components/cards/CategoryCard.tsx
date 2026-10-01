import Link from "next/link";
import { CategoryIcon } from "@/components/ui/CategoryIcon";
import type { Category } from "@/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/courses?category=${category.id}`}
      className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <span className="grid size-10 place-items-center rounded-full bg-lime text-ink">
        <CategoryIcon name={category.icon} />
      </span>
      <span className="text-center text-xs text-gray-600">{category.label}</span>
    </Link>
  );
}