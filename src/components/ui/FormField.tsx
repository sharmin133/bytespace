import { cn } from "@/lib/cn";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
}

export function FormField({ label, name, error, className, ...props }: Props) {
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="text-xs text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-brand",
          error ? "border-red-500" : "border-gray-200",
          className,
        )}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}