import type { Metadata } from "next";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SigninForm } from "@/components/auth/SigninForm";
import { SocialButtons } from "@/components/auth/SocialButtons";

export const metadata: Metadata = {
  title: "Sign in – ByteSpace",
  description: "Sign in to your ByteSpace account.",
};

export default function SignInPage() {
  return (
    <AuthLayout
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      footer={
        <>
          New user?{" "}
          <Link href="/join" className="text-brand hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <p className="text-sm text-brand">Sign In</p>
      <h1 className="mt-2 text-4xl font-semibold leading-tight">Welcome Back</h1>

      <SigninForm />

      <div className="my-8 flex items-center gap-4 text-xs text-gray-500" role="separator" aria-label="or">
        <span className="h-px flex-1 bg-gray-200" />
        or
        <span className="h-px flex-1 bg-gray-200" />
      </div>

      <SocialButtons />
    </AuthLayout>
  );
}