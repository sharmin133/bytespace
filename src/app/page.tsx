
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Categories } from "@/components/sections/Categories";
import { Courses } from "@/components/sections/Courses";
import { CreatorTools } from "@/components/sections/CreatorTools";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Growth } from "@/components/sections/Growth";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";



export default function Home() {
  return (
    <div >
      <Navbar />
      <main className="mx-auto w-full  ">
        <Hero />
        <Partners/>
        <Courses />
        <Categories />
         <Growth/>
        <CreatorTools />
        <CtaBanner />
        <Testimonials />
      </main>
      <Footer/>
    </div>
  );
}