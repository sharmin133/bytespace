import { cn } from "@/lib/cn";

interface Props { rating: number; className?: string }

export function Stars({ rating, className }: Props) {
  return (
    <span role="img" aria-label={`${rating} out of 5 stars`} className={cn("inline-flex gap-1", className)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={n <= rating ? "text-ink" : "text-gray-300"}>
          <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      ))}
    </span>
  );
}