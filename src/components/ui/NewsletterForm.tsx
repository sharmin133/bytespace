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
    <form onSubmit={handleSubmit} className="mt-12 flex items-center gap-4 sm:gap-6">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-6 py-3.5 text-base outline-none transition placeholder:text-gray-700 focus:border-brand sm:w-[23.5rem] sm:flex-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-lime px-7 py-3 text-base font-medium text-ink transition hover:brightness-95"
      >
        Search
      </button>
      <p role="status" className="sr-only">
        {status === "done" ? "Thanks for subscribing." : ""}
      </p>
    </form>
  );
}