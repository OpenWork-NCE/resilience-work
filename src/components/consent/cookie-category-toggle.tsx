import { cn } from "@/lib/utils";

interface CookieCategoryToggleProps {
  index: number;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label: string;
  description: string;
}

export function CookieCategoryToggle({
  index,
  checked,
  disabled = false,
  onChange,
  label,
  description,
}: CookieCategoryToggleProps) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-[rgb(var(--border-muted))] py-5">
      <div className="min-w-0">
        <p className="font-[family:var(--font-accent)] text-[0.62rem] font-semibold tabular-nums tracking-[0.2em] text-[rgb(var(--accent))]">
          {String(index).padStart(2, "0")}
        </p>
        <p className="mt-2 font-display text-lg font-medium tracking-[-0.02em] text-[rgb(var(--foreground))]">
          {label}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
          {description}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={cn(
          "group mt-1 inline-flex h-7 w-12 shrink-0 items-center rounded-full border p-1 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]",
          "disabled:cursor-not-allowed disabled:opacity-55",
          checked
            ? "border-[rgb(var(--primary))] bg-[rgb(var(--primary))]"
            : "border-[rgb(var(--border-strong))] bg-[rgb(var(--surface-muted))]"
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "h-5 w-5 rounded-full bg-[rgb(var(--surface))] shadow-[var(--shadow-soft)] transition-transform",
            checked && "translate-x-5"
          )}
        />
      </button>
    </div>
  );
}
