import Image from "next/image";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <figure className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      <Image src={t.avatar} alt="" width={56} height={56} className="size-14 rounded-full object-cover" />

      <figcaption className="mt-4">
        <p className="text-base font-semibold">{t.name}</p>
        <p className="mt-0.5 text-xs text-brand sm:text-sm">{t.role}</p>
      </figcaption>

      <blockquote className="mt-4 text-xs leading-relaxed text-gray-600 sm:text-sm">
        <p>{`"${t.quote}"`}</p>
      </blockquote>
    </figure>
  );
}