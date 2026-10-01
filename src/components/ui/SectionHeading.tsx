import { cn } from "@/lib/cn";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({ title, subtitle, className, titleClassName }: Props) {
  return (
    <div className={cn("text-center", className)}>
      <h2 className={cn("mx-auto text-balance text-3xl font-semibold leading-tight sm:text-5xl", titleClassName ?? "max-w-2xl")}>
        {title}
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-5xl text-sm lg:text-xl leading-relaxed text-gray-400">{subtitle}</p>}
    </div>
  );
}