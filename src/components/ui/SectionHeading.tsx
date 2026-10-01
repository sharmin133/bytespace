import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface Props {
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({ title, subtitle, className, titleClassName, subtitleClassName }: Props) {
  return (
    <div className={cn("text-center", className)}>
      <h2 className={cn("mx-auto text-balance text-3xl font-semibold leading-tight sm:text-5xl", titleClassName)}>
        {title}
      </h2>
      {subtitle &&   <p
    className={cn(
      "mx-auto mt-4 max-w-5xl text-sm leading-relaxed text-gray-400 lg:text-[18px] font-normal",
      subtitleClassName
    )}
  >{subtitle}</p>}
    </div>
  );
}