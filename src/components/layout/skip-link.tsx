import { useTranslations } from "next-intl";

export function SkipLink() {
  const t = useTranslations("accessibility");

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-sm)] focus:bg-[rgb(var(--surface-inverse))] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[rgb(var(--inverse-foreground))] focus:shadow-[var(--shadow-elevated)]"
    >
      {t("skipToContent")}
    </a>
  );
}
