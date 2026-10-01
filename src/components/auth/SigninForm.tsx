"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";

type Errors = Partial<Record<"email" | "password" | "form", string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const email = String(data.get("email") ?? "").trim();
  const password = String(data.get("password") ?? "");

  if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Please enter a valid email address.";
  if (!password) errors.password = "Please enter your password.";
  return errors;
}

export function SigninForm() {
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
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message ?? "Invalid email or password.");
      }
    } catch (err) {
      setErrors({ form: err instanceof Error ? err.message : "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
      <FormField label="Email" name="email" type="email" placeholder="designer@example.com" autoComplete="email" error={errors.email} />
      <FormField label="Password" name="password" type="password" placeholder="********" autoComplete="current-password" error={errors.password} />

      {errors.form && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-xs text-red-700">
          {errors.form}
        </p>
      )}

      <div className="flex justify-end pt-1">
        <Button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </div>
    </form>
  );
}