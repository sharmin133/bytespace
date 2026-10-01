import { cn } from "@/lib/cn";

interface Props { value?: number; flat?: boolean; className?: string }

export function ProgressCard({ value = 55, flat, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white text-left text-ink",
        flat ? "border border-gray-200 p-4" : "p-3 shadow-lg sm:p-4",
        className,
      )}
    >
      <p className="text-[10px] text-muted sm:text-xs">Learning Progress</p>
      <p className="mt-1 text-3xl font-semibold sm:text-4xl">{value}%</p>
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Learning progress"
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100"
      >
        <div className="h-full rounded-full bg-lime" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}