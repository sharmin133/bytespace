import { Container } from "@/components/ui/Container";
import { GlowBlob } from "@/components/ui/GlowBlob";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-gray-50 to-white py-16 lg:py-24">
      <GlowBlob className="-right-20 top-0 size-112 bg-lime/40" />
      <GlowBlob className="left-150 top-0 size-80 bg-lime/40" />
      <GlowBlob className="-left-24 bottom-0 size-96 bg-brand/15" />

      <Container>
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
          <h2 className=" text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-md text-xs leading-relaxed text-gray-700 sm:text-sm">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}