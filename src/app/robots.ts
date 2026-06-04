import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://resilienceatwork.eu";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/fr/", "/en/"],
      disallow: [
        "/fr/design-system",
        "/en/design-system",
        "/fr/navigation-preview",
        "/en/navigation-preview",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
