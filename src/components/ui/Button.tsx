import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-lime text-ink hover:brightness-95",
  dark: "bg-ink text-white hover:bg-black/80",
} as const;

interface Props {
  variant?: keyof typeof variants;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Button({ variant = "primary", href, type = "button", disabled, className, children }: Props) {
  const styles = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );
  return href ? (
    <Link href={href} className={styles}>{children}</Link>
  ) : (
    <button type={type} disabled={disabled} className={styles}>{children}</button>
  );
}