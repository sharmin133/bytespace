import type { PartnerIconName } from "@/types";

const ring = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`;

const common = { width: 28, height: 28, viewBox: "0 0 28 28", "aria-hidden": true, className: "shrink-0" } as const;

export function PartnerIcon({ name }: { name: PartnerIconName }) {
  switch (name) {
    case "wave":
      return (
        <svg {...common}>
          <defs>
            <clipPath id="pi-wave">
              <circle cx="14" cy="14" r="13" />
            </clipPath>
          </defs>
          <g clipPath="url(#pi-wave)" fill="none" stroke="currentColor" strokeWidth="4.5">
            <path d="M-2 8q8-5 16 0t16 0" />
            <path d="M-2 14.5q8-5 16 0t16 0" />
            <path d="M-2 21q8-5 16 0t16 0" />
          </g>
        </svg>
      );

    case "burst":
      return (
        <svg {...common}>
          {Array.from({ length: 12 }, (_, i) => (
            <line
              key={i}
              x1="14" y1="1.5" x2="14" y2={i % 2 ? 7 : 8}
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
              transform={`rotate(${i * 30} 14 14)`}
            />
          ))}
        </svg>
      );

    case "bolt":
      return (
        <svg {...common}>
          <path fill="currentColor" fillRule="evenodd" d={`${ring(14, 14, 13)}M16.5 5.5 8.5 15.5h4.8L11.8 22.5l8-10h-4.8Z`} />
        </svg>
      );

    case "dots":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d={[ring(14, 14, 13), ring(14, 9.2, 3), ring(14, 18.8, 3), ring(9.2, 14, 3), ring(18.8, 14, 3)].join("")}
          />
        </svg>
      );

    case "rings":
      return (
        <svg {...common}>
          <g fill="none" stroke="currentColor" strokeWidth="0.9">
            {[13, 11.5, 10, 8.5, 7, 5.5, 4, 2.5].map((r, i) => (
              <circle key={r} cx={14 + i * 0.35} cy="14" r={r} />
            ))}
          </g>
        </svg>
      );
  }
}