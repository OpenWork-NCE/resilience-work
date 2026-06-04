import type { Locale } from "@/types/content";
import { LegalCallout } from "@/components/legal/legal-callout";

interface LegalPendingNoticeProps {
  locale: Locale;
}

export function LegalPendingNotice({ locale }: LegalPendingNoticeProps) {
  return (
    <LegalCallout
      tone="accent"
      title={
        locale === "fr"
          ? "Informations administratives complémentaires en cours de validation"
          : "Additional administrative information is being validated"
      }
      description={
        locale === "fr"
          ? "Certaines informations juridiques ou techniques ne sont pas encore publiées tant qu’elles ne sont pas confirmées. Cette approche vise à éviter toute mention inexacte sur le site public."
          : "Some legal or technical information is not yet published until it has been confirmed. This approach is intended to avoid inaccurate statements on the public website."
      }
    />
  );
}
