import Image from "next/image";
import { cn } from "@/lib/cn";

const avatars = [1, 2, 3, 4, 5].map((n) => `/images/avatars/${n}.png`);

const styles = {
  white: { card: "bg-white", badge: "bg-lime text-ink" },
  lime: { card: "bg-lime", badge: "bg-ink text-white" },
} as const;

interface Props {
  className?: string;
  variant?: keyof typeof styles;
}

export function StudentsCard({ className, variant = "white" }: Props) {
  const s = styles[variant];
  return (
    <div className={cn("rounded-xl p-3 text-left text-ink shadow-lg sm:p-4", s.card, className)}>
      <p className="text-xs font-medium sm:text-sm">Happy Students</p>
      <p className="text-[10px] text-muted">4.5 (240) ★</p>
      <div className="mt-2 flex items-center">
        <div className="flex -space-x-2">
          {avatars.map((src) => (
            <Image key={src} src={src} alt="" width={32} height={32} className="size-6 rounded-full border-2 border-white object-cover sm:size-7" />
          ))}
        </div>
        <span className={cn("ml-1 grid size-7 place-items-center rounded-full text-[10px] font-medium sm:size-8", s.badge)}>2K+</span>
      </div>
    </div>
  );
}