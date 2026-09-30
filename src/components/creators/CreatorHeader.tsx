import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { CreatorStats } from "@/components/creators/CreatorStats";
import type { Creator } from "@/types";

export function CreatorHeader({ creator, products }: { creator: Creator; products: number }) {
  return (
    <section className="bg-grid bg-brand pb-10 pt-28 text-white sm:pt-32">
      <Container>
        <FadeIn>
          <div className="flex items-center gap-4">
            <Image
              src={creator.avatar}
              alt=""
              width={64}
              height={64}
              priority
              className="size-14 shrink-0 rounded-xl object-cover sm:size-16"
            />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-semibold sm:text-3xl">{creator.name}</h1>
                <span className="rounded-full bg-lime px-3 py-1 text-xs font-medium text-ink">Creator</span>
              </div>
              <p className="mt-1 text-xs text-white/90 sm:text-sm">{creator.tagline}</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-6 max-w-5xl space-y-2 text-xs leading-relaxed text-white/90 sm:text-sm">
            {creator.bio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <CreatorStats products={products} followers={creator.followers} />
        </FadeIn>
      </Container>
    </section>
  );
}