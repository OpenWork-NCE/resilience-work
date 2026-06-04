export type ConsentCategory = "necessary" | "preferences" | "analytics" | "marketing";

export type ConsentPreferences = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
  version: string;
};
