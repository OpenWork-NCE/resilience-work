import { stripLocalePrefix } from "@/lib/navigation/get-localized-href";

interface ActiveRouteOptions {
  exact?: boolean;
}

function normalizePathname(pathname: string) {
  const normalized = stripLocalePrefix(pathname);
  return normalized === "/" ? normalized : normalized.replace(/\/+$/, "");
}

export function isActiveRoute(
  currentPathname: string,
  targetPathname: string,
  options: ActiveRouteOptions = {}
) {
  const current = normalizePathname(currentPathname);
  const target = normalizePathname(targetPathname);

  if (target === "/") {
    return current === "/";
  }

  if (options.exact) {
    return current === target;
  }

  return current === target || current.startsWith(`${target}/`);
}
