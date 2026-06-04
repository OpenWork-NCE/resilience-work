"use client";

import type { ReactNode } from "react";
import type { ConsentCategory } from "@/lib/consent/consent-types";
import { useConsent } from "@/components/consent/consent-provider";

interface ScriptGateProps {
  category: Exclude<ConsentCategory, "necessary">;
  children: ReactNode;
}

export function ScriptGate({ category, children }: ScriptGateProps) {
  const { preferences } = useConsent();

  if (!preferences || !preferences[category]) {
    return null;
  }

  return <>{children}</>;
}
