import { cn } from "@/lib/cn";

interface Props { delay?: number; className?: string; children: React.ReactNode }

export function FadeIn({ delay = 0, className, children }: Props) {
  return (
    <div className={cn("animate-fade-up", className)} style={{ "--delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
}