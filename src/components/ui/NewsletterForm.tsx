"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: newsletter API te POST korbe
    setStatus("done");
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex items-center gap-3">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="min-w-0 flex-1 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm outline-none transition placeholder:text-gray-500 focus:border-brand sm:max-w-[13.5rem] sm:flex-none"
      />
      <Button type="submit">Search</Button>
      <p role="status" className="sr-only">
        {status === "done" ? "Thanks for subscribing." : ""}
      </p>
    </form>
  );
}