import Image from "next/image";
import { cn } from "@/lib/cn";

export interface DecorShape {
  src: string;
  className: string;
}

export function DecorShapes({ shapes }: { shapes: DecorShape[] }) {
  return (
    <>
      {shapes.map((s, i) => (
        <Image
          key={`${s.src}-${i}`}
          src={s.src}
          alt=""
          aria-hidden="true"
          width={400}
          height={400}
          className={cn("pointer-events-none absolute z-0 h-auto select-none", s.className)}
        />
      ))}
    </>
  );
}