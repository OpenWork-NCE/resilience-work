"use client";

import { useConsent } from "@/components/consent/consent-provider";

interface CookieSettingsTriggerProps {
  label: string;
  className?: string;
}

export function CookieSettingsTrigger({ label, className }: CookieSettingsTriggerProps) {
  const { openPreferences } = useConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className={className}
    >
      {label}
    </button>
  );
}
