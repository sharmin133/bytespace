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
        <div
          key={`${s.src}-${i}`}
          aria-hidden="true"
          style={{ "--delay": `${300 + i * 120}ms` } as React.CSSProperties}
          className={cn("animate-pop-in pointer-events-none absolute z-[2] select-none", s.className)}
        >
          <Image
            src={s.src}
            alt=""
            width={600}
            height={600}
            sizes="(min-width: 1024px) 18vw, 30vw"
            className="h-auto w-full"
          />
        </div>
      ))}
    </>
  );
}