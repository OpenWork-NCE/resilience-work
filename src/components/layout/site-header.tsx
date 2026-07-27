"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
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
  const isInverseChrome = isHome && !isScrolled;

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
          "sticky top-0 z-30 border-b transition-[background-color,border-color,box-shadow,color] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
          isInverseChrome
            ? "border-transparent bg-[color-mix(in_srgb,rgb(var(--surface-inverse))_42%,transparent)] text-white supports-[backdrop-filter]:bg-[color-mix(in_srgb,rgb(var(--surface-inverse))_38%,transparent)] supports-[backdrop-filter]:backdrop-blur-xl"
            : "border-[rgb(var(--border-muted))] bg-[rgb(var(--background))]/95 text-[rgb(var(--foreground))] shadow-[var(--shadow-soft)] supports-[backdrop-filter]:bg-[color-mix(in_srgb,rgb(var(--background))_88%,transparent)] supports-[backdrop-filter]:backdrop-blur-xl"
        )}
      >
        <Container size="wide">
          <div className="flex min-h-20 min-w-0 items-center gap-2 xl:gap-3">
            <Link
              href={getLocalizedHref(locale, "home")}
              aria-label={brand.name}
              className="min-w-0 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <Logo
                variant={isInverseChrome ? "dark" : "default"}
                size="md"
                className="max-w-[clamp(9.5rem,40vw,12.5rem)] xl:max-w-[12.5rem]"
              />
            </Link>

            <div className="hidden lg:block lg:translate-y-[2px]">
              <DesktopNavigation
                items={navigationItems}
                expertiseItems={expertiseItems}
                inverse={isInverseChrome}
              />
            </div>

            <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex lg:translate-y-[2px] xl:gap-3">
              <LocaleSwitcher inverse={isInverseChrome} />
              <ThemeToggle inverse={isInverseChrome} />
              <Link href={primaryCta.href}>
                <Button
                  variant={isInverseChrome ? "onInverse" : "primary"}
                  size="md"
                  className="whitespace-nowrap"
                >
                  {primaryCta.label}
                </Button>
              </Link>
            </div>

            <div className="ml-auto flex shrink-0 items-center gap-2 lg:hidden">
              <Link
                href={getLocalizedHref(locale, "contact")}
                aria-label={primaryCta.label}
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2",
                  isInverseChrome
                    ? "border-white/20 bg-white/10 text-white hover:bg-white/18 focus-visible:ring-offset-transparent"
                    : "border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--surface-muted))] focus-visible:ring-offset-[rgb(var(--background))]"
                )}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </Link>
              <ThemeToggle inverse={isInverseChrome} />
              <MobileNavigationTrigger
                isOpen={isMobileMenuOpen}
                controls={navigationId}
                label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
                onClick={() => setIsMobileMenuOpen((value) => !value)}
                triggerRef={triggerRef}
                inverse={isInverseChrome}
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
