import { LegalCallout } from "@/components/legal/legal-callout";
import { legalUiCopy } from "@/content/legal/legal-ui";
import type { Locale } from "@/types/content";

interface LegalPendingNoticeProps {
  locale: Locale;
}

export function LegalPendingNotice({ locale }: LegalPendingNoticeProps) {
  return (
    <LegalCallout
      tone="accent"
      title={legalUiCopy.pendingNoticeTitle[locale]}
      description={legalUiCopy.pendingNoticeDescription[locale]}
    />
  );
}
