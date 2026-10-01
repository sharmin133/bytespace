import Image from "next/image";
import { cn } from "@/lib/cn";

export interface DecorShape {
  src: string;
  className: string;
  color: string;
}

const SHADE = 0.2;

export function DecorShapes({ shapes }: { shapes: DecorShape[] }) {
  return (
    <>
      {shapes.map((s, i) => {
        const mask = `url(${s.src})`;
        return (
          <div
            key={`${s.src}-${i}`}
            aria-hidden="true"
            style={{ "--delay": `${300 + i * 120}ms` } as React.CSSProperties}
            className={cn("animate-pop-in pointer-events-none absolute z-3 select-none", s.className)}
          >
            <div className="relative">
              <Image
                src={s.src}
                alt=""
                width={600}
                height={600}
                sizes="(min-width: 1024px) 18vw, 30vw"
                className="h-auto w-full opacity-0"
              />

              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: s.color,
                  WebkitMaskImage: mask,
                  maskImage: mask,
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              />

              {SHADE > 0 && (
                <Image
                  src={s.src}
                  alt=""
                  width={600}
                  height={600}
                  sizes="(min-width: 1024px) 18vw, 30vw"
                  style={{ opacity: SHADE }}
                  className="absolute inset-0 h-auto w-full mix-blend-multiply filter-[brightness(1.6)_contrast(0.6)]"
                />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}