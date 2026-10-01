import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface Props {
  tone?: "light" | "dark";
  className?: string; 
}

export function Logo({ tone = "light", className }: Props) {
  return (
    <Link href="/" aria-label="ByteSpace home" className={cn("inline-flex items-center gap-2 text-xl", className)}>
      <Image src="/images/logo.svg" alt="" width={30} height={34} priority className="h-[1.3em] w-auto" />
      <span className={cn("font-bold leading-none tracking-tight", tone === "dark" ? "text-ink" : "text-white")}>
        ByteSpace
      </span>
    </Link>
  );
}