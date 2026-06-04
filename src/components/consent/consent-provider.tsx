"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CookieBanner } from "@/components/consent/cookie-banner";
import { CookiePreferencesDialog } from "@/components/consent/cookie-preferences-dialog";
import {
  createAcceptedConsentPreferences,
  createConsentPreferences,
  createRejectedConsentPreferences,
} from "@/lib/consent/consent-manager";
import {
  clearConsentPreferences,
  readConsentPreferences,
  writeConsentPreferences,
} from "@/lib/consent/consent-storage";
import type { ConsentPreferences } from "@/lib/consent/consent-types";
import type { Locale } from "@/types/content";

type ConsentContextValue = {
  preferences: ConsentPreferences | null;
  hasAnswered: boolean;
  updatePreferences: (next: ConsentPreferences) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  resetConsent: () => void;
  openPreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

interface ConsentProviderProps {
  children: React.ReactNode;
  locale: Locale;
}

export function ConsentProvider({ children, locale }: ConsentProviderProps) {
  const [preferences, setPreferences] = useState<ConsentPreferences | null>(() =>
    typeof window === "undefined" ? null : readConsentPreferences()
  );
  const [hasAnswered, setHasAnswered] = useState(() =>
    typeof window === "undefined" ? false : Boolean(readConsentPreferences())
  );
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentPreferences>(
    () => {
      if (typeof window === "undefined") {
        return createRejectedConsentPreferences();
      }

      return readConsentPreferences() ?? createRejectedConsentPreferences();
    }
  );
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleStorage = () => {
      const next = readConsentPreferences();
      setPreferences(next);
      setHasAnswered(Boolean(next));
      setDraft(next ?? createRejectedConsentPreferences());
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const updatePreferences = useCallback((next: ConsentPreferences) => {
    writeConsentPreferences(next);
    setPreferences(next);
    setHasAnswered(true);
    setDraft(next);
  }, []);

  const acceptAll = useCallback(() => {
    updatePreferences(createAcceptedConsentPreferences());
    setIsPreferencesOpen(false);
  }, [updatePreferences]);

  const rejectAll = useCallback(() => {
    updatePreferences(createRejectedConsentPreferences());
    setIsPreferencesOpen(false);
  }, [updatePreferences]);

  const resetConsent = useCallback(() => {
    clearConsentPreferences();
    setPreferences(null);
    setHasAnswered(false);
    setDraft(createRejectedConsentPreferences());
  }, []);

  const openPreferences = useCallback(() => {
    setDraft(preferences ?? createRejectedConsentPreferences());
    lastTriggerRef.current = document.activeElement as HTMLElement | null;
    setIsPreferencesOpen(true);
  }, [preferences]);

  const closePreferences = useCallback(() => {
    setIsPreferencesOpen(false);
    window.requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  }, []);

  const saveDraft = useCallback(() => {
    updatePreferences(
      createConsentPreferences({
        preferences: draft.preferences,
        analytics: draft.analytics,
        marketing: draft.marketing,
      })
    );
    closePreferences();
  }, [closePreferences, draft, updatePreferences]);

  const value = useMemo<ConsentContextValue>(
    () => ({
      preferences,
      hasAnswered,
      updatePreferences,
      acceptAll,
      rejectAll,
      resetConsent,
      openPreferences,
    }),
    [acceptAll, hasAnswered, openPreferences, preferences, rejectAll, resetConsent, updatePreferences]
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {!hasAnswered ? (
        <CookieBanner
          locale={locale}
          onAcceptAll={acceptAll}
          onRejectAll={rejectAll}
          onCustomise={openPreferences}
        />
      ) : null}
      <CookiePreferencesDialog
        locale={locale}
        open={isPreferencesOpen}
        draft={draft}
        onClose={closePreferences}
        onChange={setDraft}
        onSave={saveDraft}
        onAcceptAll={acceptAll}
        onRejectAll={rejectAll}
      />
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);

  if (!context) {
    throw new Error("useConsent must be used within ConsentProvider");
  }

  return context;
}
