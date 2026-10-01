"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";

type Errors = Partial<Record<"fullName" | "email" | "password" | "form", string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const fullName = String(data.get("fullName") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const password = String(data.get("password") ?? "");

  if (fullName.length < 2) errors.fullName = "Please enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Please enter a valid email address.";
  if (password.length < 8) errors.password = "Password must be at least 8 characters.";
  return errors;
}

export function SignupForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setLoading(true);
    try {
  
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message ?? "Something went wrong. Please try again.");
      }
    
    } catch (err) {
      setErrors({ form: err instanceof Error ? err.message : "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
      <FormField label="Full Name" name="fullName" placeholder="Jamie Davis" autoComplete="name" error={errors.fullName} />
      <FormField label="Email" name="email" type="email" placeholder="designer@example.com" autoComplete="email" error={errors.email} />
      <FormField label="Password" name="password" type="password" placeholder="********" autoComplete="new-password" error={errors.password} />

      {errors.form && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-xs text-red-700">
          {errors.form}
        </p>
      )}

      <div className="flex justify-end pt-1 ">
        <Button className="cursor-pointer" type="submit" disabled={loading}>
          {loading ? "Creating..." : "Continue"}
        </Button>
      </div>
    </form>
  );
}