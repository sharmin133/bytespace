import { cn } from "@/lib/cn";

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" className={cn("shrink-0 text-brand", className)}>
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path d="m7 12.5 3.2 3.2L17 9" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}