import { cn } from "@/lib/cn";

export function GlowBlob({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("pointer-events-none absolute -z-10 rounded-full blur-3xl", className)} />;
}