import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { categories } from "@/data/content";

export function Categories() {
  return (
    <section id="paths" className="bg-linear-to-b from-white via-white to-lime/15 py-16 lg:pt-24 ">
      <Container>
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
           titleClassName="text-4xl"
          subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
         subtitleClassName="text-normal"
        />

        <ul className="mx-auto mt-10 grid  grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <li key={c.id}>
              <CategoryCard category={c} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}