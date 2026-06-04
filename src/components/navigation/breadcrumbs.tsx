import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { routes } from "@/content/routes";
import type { Locale, RouteKey } from "@/types/content";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  ariaLabel: string;
}

export function Breadcrumbs({ items, ariaLabel }: BreadcrumbsProps) {
  if (items.length <= 1) {
    return null;
  }

  return (
    <nav aria-label={ariaLabel}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-[rgb(var(--muted-foreground))]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {isLast || !item.href ? (
                <span aria-current="page" className="font-medium text-[rgb(var(--foreground))]">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-[rgb(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              )}
              {!isLast ? <ChevronRight className="h-4 w-4" aria-hidden="true" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

const routeKeyByPath = new Map<string, RouteKey>(
  Object.entries(routes).map(([key, path]) => [path, key as RouteKey])
);

export function buildBreadcrumbsFromPath(
  locale: Locale,
  pathname: string,
  labels: Record<RouteKey, string>
) {
  const items: BreadcrumbItem[] = [
    {
      label: labels.home,
      href: getLocalizedHref(locale, "home"),
    },
  ];

  const parts = pathname.split("/").filter(Boolean);
  const routeSegments: string[] = [];

  for (const part of parts) {
    routeSegments.push(part);
    const routePath = `/${routeSegments.join("/")}`;
    const routeKey = routeKeyByPath.get(routePath);

    if (!routeKey || routeKey === "home") {
      continue;
    }

    items.push({
      label: labels[routeKey],
      href: getLocalizedHref(locale, routeKey),
    });
  }

  if (items.length > 1) {
    items[items.length - 1] = {
      label: items[items.length - 1].label,
    };
  }

  return items;
}
