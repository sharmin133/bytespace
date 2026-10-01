"use client";

import { useRouter } from "next/navigation";
import { buildHref, LEVELS, SORTS, type CourseQuery } from "@/lib/course-query";

const pill =
  "relative inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-xs text-gray-700 transition";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      {children}
    </svg>
  );
}

interface PillSelectProps {
  label: string;
  icon: React.ReactNode;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

function PillSelect({ label, icon, value, options, onChange }: PillSelectProps) {
  return (
    <label className={`${pill} focus-within:border-brand hover:border-gray-300`}>
      <span className="sr-only">{label}</span>
      {icon}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-pointer appearance-none bg-transparent outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

interface Props {
  query: CourseQuery;
  categories: string[];
  basePath?: string;
}

export function CourseToolbar({ query, categories, basePath }: Props) {
  const router = useRouter();
  const go = (next: Partial<CourseQuery>) =>
    router.push(buildHref(query, { ...next, page: undefined }, basePath), { scroll: false });

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <span className={pill}>
          <Icon><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" /></Icon>
          Filter
        </span>

        <PillSelect
          label="Level"
          icon={<Icon><path d="M5 20v-5M12 20V9M19 20V4" /></Icon>}
          value={query.level ?? ""}
          onChange={(v) => go({ level: v || undefined })}
          options={[{ value: "", label: "Level" }, ...LEVELS.map((l) => ({ value: l, label: l }))]}
        />

        <PillSelect
          label="Category"
          icon={<Icon><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></Icon>}
          value={query.category ?? ""}
          onChange={(v) => go({ category: v || undefined })}
          options={[
            { value: "", label: "Category" },
            ...categories.filter((c) => c !== "Featured").map((c) => ({ value: c, label: c })),
          ]}
        />
      </div>

      <PillSelect
        label="Sort by"
        icon={<Icon><path d="M3 6h18M6 12h12M10 18h4" /></Icon>}
        value={query.sort ?? ""}
        onChange={(v) => go({ sort: v || undefined })}
        options={SORTS.map((s) => ({ value: s.value, label: s.label }))}
      />
    </div>
  );
}
