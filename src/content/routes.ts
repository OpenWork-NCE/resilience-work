import type { RouteKey } from "@/types/content";

export const routes: Record<RouteKey, string> = {
  home: "/",
  about: "/about",
  jocelyneKatshinda: "/jocelyne-katshinda",
  expertise: "/expertise",
  psychosocialPrevention: "/expertise/psychosocial-prevention",
  internationalMobility: "/expertise/international-mobility",
  crisisManagement: "/expertise/crisis-management",
  training: "/training",
  international: "/international",
  contact: "/contact",
} as const;
