"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import type { ResolvedExpertiseItem, ResolvedNavigationItem } from "@/lib/navigation/get-navigation";
import { isActiveRoute } from "@/lib/navigation/is-active-route";
import { NavigationDropdown } from "@/components/navigation/navigation-dropdown";
import { NavigationLink } from "@/components/navigation/navigation-link";

interface DesktopNavigationProps {
  items: ResolvedNavigationItem[];
  expertiseItems: ResolvedExpertiseItem[];
  inverse?: boolean;
  /** Brighter link color for solid dark-theme chrome */
  highContrast?: boolean;
}

export function DesktopNavigation({
  items,
  expertiseItems,
  inverse = false,
  highContrast = false,
}: DesktopNavigationProps) {
  const pathname = usePathname();
  const t = useTranslations("navigation");

  return (
    <nav
      aria-label={t("mainNavigation")}
      className="hidden min-w-0 flex-1 lg:ml-4 lg:flex lg:items-center lg:justify-start lg:gap-3 xl:ml-8 xl:gap-7"
    >
      {items.map((item) =>
        item.children?.length ? (
          <NavigationDropdown
            key={item.id}
            label={item.label}
            items={expertiseItems}
            currentPathname={pathname}
            buttonLabel={t("expertiseMenu")}
            inverse={inverse}
            highContrast={highContrast}
          />
        ) : (
          <NavigationLink
            key={item.id}
            href={item.href}
            label={item.label}
            isActive={isActiveRoute(pathname, item.href, { exact: item.route === "home" })}
            inverse={inverse}
            highContrast={highContrast}
          />
        )
      )}
    </nav>
  );
}
