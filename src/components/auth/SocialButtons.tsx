const providers = [
  {
    name: "Facebook",
    href: "/api/auth/facebook",
    icon: (
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z" />
    ),
  },
  {
    name: "Google",
    href: "/api/auth/google",
    icon: (
      <path d="M21.8 10.2H12v3.9h5.6c-.5 2.6-2.7 4-5.6 4a6.1 6.1 0 1 1 0-12.2c1.5 0 2.8.5 3.8 1.4l2.8-2.8A10 10 0 0 0 12 2a10 10 0 1 0 0 20c5.8 0 9.6-4 9.6-9.8 0-.7-.1-1.4-.2-2z" />
    ),
  },
];

export function SocialButtons() {
  return (
    <div className="flex justify-center gap-4">
      {providers.map((p) => (
        <a
          key={p.name}
          href={p.href}
          aria-label={`Continue with ${p.name}`}
          className="grid size-12 place-items-center rounded-xl border border-gray-200 bg-white text-ink transition hover:border-brand hover:shadow-sm"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            {p.icon}
          </svg>
        </a>
      ))}
    </div>
  );
}