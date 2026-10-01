"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("done");
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-lg items-center gap-3 sm:mt-12 sm:gap-5">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm outline-none transition placeholder:text-gray-700 focus:border-brand sm:px-6 sm:py-3.5 sm:text-base"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-lime px-5 py-3 text-sm font-medium text-ink transition hover:brightness-95 sm:px-7 sm:text-base"
      >
        Search
      </button>
      <p role="status" className="sr-only">
        {status === "done" ? "Thanks for subscribing." : ""}
      </p>
    </form>
  );
}