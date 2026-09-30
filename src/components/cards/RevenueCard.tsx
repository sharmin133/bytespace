import { cn } from "@/lib/cn";

interface Props {
  title: string;
  period: string;
  amount: string;
  progress?: number;
  badge?: string;
  className?: string;
}

export function RevenueCard({ title, period, amount, progress, badge, className }: Props) {
  return (
    <div className={cn("rounded-xl bg-brand p-3 text-white shadow-lg sm:p-4", className)}>
      <p className="text-xs font-medium">{title}</p>
      <p className="text-[10px] text-white/70">{period}</p>
      <p className="mt-1 text-lg font-semibold sm:text-xl">{amount}</p>

      {progress !== undefined && (
        <div
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={title}
          className="mt-2 h-1.5 rounded-full bg-white/80"
        >
          <div className="h-full rounded-full bg-lime" style={{ width: `${progress}%` }} />
        </div>
      )}

      {badge && (
        <span className="mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] font-medium text-ink">{badge}</span>
      )}
    </div>
  );
}