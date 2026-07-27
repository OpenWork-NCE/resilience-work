import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://resilienceatwork.eu";
const locales = ["fr", "en"] as const;

const localizedPaths = [
  "",
  "/about",
  "/contact",
  "/expertise",
  "/training",
  "/jocelyne-katshinda",
  "/consultants/murielle-de-potesta",
  "/consultants/vanessa-wright",
  "/consultants/rym-mimouna-herdies",
  "/legal-notice",
  "/privacy",
  "/cookies",
  "/accessibility",
  "/expertise/psychosocial-prevention",
  "/expertise/international-mobility",
  "/expertise/crisis-management",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    localizedPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified,
      changeFrequency: path === "" ? "monthly" : "yearly",
      priority: path === "" ? 1 : path.startsWith("/legal") || path === "/privacy" || path === "/cookies" ? 0.3 : 0.7,
    }))
  );
}
