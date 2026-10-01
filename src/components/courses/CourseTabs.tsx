"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const TABS = ["About", "Lesson", "Reviews"] as const;
type Tab = (typeof TABS)[number];

export function CourseTabs({ panels }: { panels: Record<Tab, React.ReactNode> }) {
  const [active, setActive] = useState<Tab>("About");

  return (
    <div>
      <div role="tablist" aria-label="Course sections" className="flex gap-2">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            id={`tab-${t}`}
            aria-selected={t === active}
            aria-controls={`panel-${t}`}
            onClick={() => setActive(t)}
            className={cn(
              "rounded-full px-4 py-2 text-xs transition",
              t === active ? "bg-lime font-medium text-ink" : "bg-gray-100 text-gray-600 hover:bg-gray-200",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* key bodlale notun panel fade-up kore ashe */}
      <div key={active} role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`} className="animate-fade-up mt-8">
        {panels[active]}
      </div>
    </div>
  );
}