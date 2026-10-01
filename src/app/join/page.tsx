import type { Metadata } from "next";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Sign up – ByteSpace",
  description: "Create your ByteSpace account and start learning or teaching today.",
};

export default function JoinPage() {
  return (
    <AuthLayout
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      footer={
        <>
          Already have an account?{" "}
          <Link href="/sign-in" className="text-brand hover:underline">
            Login
          </Link>
        </>
      }
    >
      <p className="text-sm text-brand">Create an Account</p>
      <h1 className="mt-2 text-4xl font-semibold leading-tight">
        Welcome to<br /> ByteSpace
      </h1>
      <SignupForm />
    </AuthLayout>
  );
}