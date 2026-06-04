"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { brand } from "@/content/brand";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LocaleSwitcher } from "@/components/locale/locale-switcher";
import { DesktopNavigation } from "@/components/navigation/desktop-navigation";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { MobileNavigationTrigger } from "@/components/navigation/mobile-navigation-trigger";
import { Button } from "@/components/shared/button";
import {
  getLocalizedCta,
  getLocalizedExpertiseItems,
  getLocalizedNavigation,
} from "@/lib/navigation/get-navigation";
import { getLocalizedHref, stripLocalePrefix } from "@/lib/navigation/get-localized-href";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

const SCROLL_THRESHOLD = 24;

export function SiteHeader() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations("navigation");
  const navigationId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = getLocalizedNavigation(locale);
  const expertiseItems = getLocalizedExpertiseItems(locale);
  const primaryCta = getLocalizedCta(locale, "scheduleConversation");
  const isHome = stripLocalePrefix(pathname) === "/";

  useEffect(() => {
    const handleScroll = () => {
      const nextValue = window.scrollY > SCROLL_THRESHOLD;
      setIsScrolled((currentValue) => (currentValue === nextValue ? currentValue : nextValue));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseMobileMenu = (restoreFocus = false) => {
    setIsMobileMenuOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => {
        triggerRef.current?.focus();
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 border-b transition-[background-color,border-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
          isHome && !isScrolled
            ? "border-transparent bg-[rgba(248,251,252,0.72)] supports-[backdrop-filter]:bg-[color-mix(in_srgb,rgb(var(--background))_72%,transparent)] supports-[backdrop-filter]:backdrop-blur-xl"
            : "border-[rgb(var(--border-muted))] bg-[rgb(var(--background))]/95 supports-[backdrop-filter]:bg-[color-mix(in_srgb,rgb(var(--background))_88%,transparent)] supports-[backdrop-filter]:backdrop-blur-xl shadow-[var(--shadow-soft)]"
        )}
      >
        <Container size="wide">
          <div className="flex min-h-20 min-w-0 items-center justify-between gap-3">
            <Link
              href={getLocalizedHref(locale, "home")}
              aria-label={brand.name}
              className="min-w-0 shrink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2"
            >
              <Logo size="md" className="max-w-[clamp(10rem,52vw,12.5rem)] sm:max-w-[12.5rem]" />
            </Link>

            <DesktopNavigation items={navigationItems} expertiseItems={expertiseItems} />

            <div className="hidden items-center gap-3 lg:flex">
              <LocaleSwitcher />
              <ThemeToggle />
              <Link href={primaryCta.href}>
                <Button variant={primaryCta.variant} size="sm">
                  {primaryCta.label}
                </Button>
              </Link>
            </div>

            <div className="shrink-0 flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <MobileNavigationTrigger
                isOpen={isMobileMenuOpen}
                controls={navigationId}
                label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
                onClick={() => setIsMobileMenuOpen((value) => !value)}
                triggerRef={triggerRef}
              />
            </div>
          </div>
        </Container>
      </header>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        navigationId={navigationId}
        currentPathname={pathname}
        items={navigationItems}
        expertiseItems={expertiseItems}
        cta={primaryCta}
        contact={brand.contact}
        triggerRef={triggerRef}
        onClose={handleCloseMobileMenu}
      />
    </>
  );
}
