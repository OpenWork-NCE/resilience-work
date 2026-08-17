import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:locale(fr|en|it)/expertise/psychosocial-prevention",
        destination: "/:locale/expertise/critical-incident-support",
        permanent: true,
      },
      {
        source: "/:locale(fr|en|it)/expertise/international-mobility",
        destination: "/:locale/expertise/crisis-management",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
