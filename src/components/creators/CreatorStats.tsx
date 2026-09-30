"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const pill = "rounded-full bg-white px-4 py-2 text-xs text-ink";

interface Props { products: number; followers: number }

export function CreatorStats({ products, followers }: Props) {
  const [following, setFollowing] = useState(false);
  // TODO: follow ke backend e save korbe. Ekhon shudhu page e thake.
  const count = followers + (following ? 1 : 0);

  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
      <ul className="flex flex-wrap gap-3">
        <li className={pill}>
          <span className="font-medium text-brand">{products}</span> Products
        </li>
        <li className={pill} aria-live="polite">
          <span className="font-medium text-brand">{count}</span> Followers
        </li>
      </ul>

      <button
        type="button"
        aria-pressed={following}
        onClick={() => setFollowing((f) => !f)}
        className={cn(
          "rounded-full px-6 py-2.5 text-sm font-medium text-ink transition",
          following ? "bg-white" : "bg-lime hover:brightness-95",
        )}
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
}