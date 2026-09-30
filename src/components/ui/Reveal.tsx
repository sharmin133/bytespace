"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface Props { delay?: number; className?: string; children: React.ReactNode }

export function Reveal({ delay = 0, className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
      className={cn(shown ? "animate-fade-up" : "opacity-0", className)}
    >
      {children}
    </div>
  );
}