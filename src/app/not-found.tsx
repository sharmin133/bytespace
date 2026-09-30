import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "404 – Page not found | ByteSpace",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-grid relative overflow-hidden bg-brand pb-16 pt-28 text-white sm:pb-24 sm:pt-32">
        <Container className="text-center">
          
          <p
            aria-hidden="true"
            className="bg-gradient-to-b from-lime from-30% to-brand bg-clip-text text-[clamp(8rem,28vw,20rem)] font-semibold leading-none text-transparent select-none"
          >
            404
          </p>

          {/* Negative margin: heading 404 er nicher ongsho er upor bose */}
          <h1 className="relative mx-auto -mt-[clamp(2.5rem,9vw,7rem)] max-w-2xl text-balance text-3xl font-semibold leading-tight sm:text-5xl">
            <span className="sr-only">404. </span>
            The page you are looking for doesn&rsquo;t exist
          </h1>

          <p className="mx-auto mt-6 max-w-md text-xs text-white/90 sm:text-sm">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Button href="/" className="mt-8">
            Back to Home
          </Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}