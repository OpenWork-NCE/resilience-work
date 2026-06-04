interface CookieCategoryToggleProps {
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label: string;
  description: string;
}

export function CookieCategoryToggle({
  checked,
  disabled = false,
  onChange,
  label,
  description,
}: CookieCategoryToggleProps) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-4">
      <div className="min-w-0">
        <p className="font-medium text-[rgb(var(--foreground))]">{label}</p>
        <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
          {description}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className="group inline-flex h-7 w-12 shrink-0 items-center rounded-full border border-[rgb(var(--border-strong))] bg-[rgb(var(--surface-muted))] p-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] disabled:cursor-not-allowed disabled:opacity-60 data-[checked=true]:bg-[rgb(var(--primary))]"
        data-checked={checked}
      >
        <span
          className="h-5 w-5 rounded-full bg-[rgb(var(--surface))] shadow-[var(--shadow-soft)] transition-transform group-data-[checked=true]:translate-x-5"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
