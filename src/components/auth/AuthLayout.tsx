import { Container } from "@/components/ui/Container";
import { AuthShowcase } from "@/components/auth/AuthShowcase";
import { Logo } from "@/components/ui/Logo";

interface Props {
  heading: string;
  description: string;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export function AuthLayout({ heading, description, footer, children }: Props) {
  return (
    <main className="bg-grid min-h-screen bg-brand text-white">
      <Container className="flex h-20 items-center">
        <Logo />
      </Container>

      <Container className="grid gap-10 pb-16 pt-4 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-20 xl:grid-cols-[minmax(0,1fr)_28rem]">
        <section>
          <p className="text-2xl font-semibold">{heading}</p>
          <p className="mt-4 max-w-xl text-[18px] leading-relaxed text-gray-50">
            {description}
          </p>

          <div className="mt-12 hidden lg:block">
            <AuthShowcase />
          </div>
        </section>

        <section className="flex min-h-134 flex-col rounded-3xl bg-white p-8 text-ink sm:p-10 lg:self-start">
          {children}
          <p className="mt-auto pt-10 text-center text-xs text-gray-600">
            {footer}
          </p>
        </section>
      </Container>
    </main>
  );
}