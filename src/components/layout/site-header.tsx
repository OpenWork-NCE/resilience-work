"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
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
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { headerReveal } from "@/lib/animations";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

export function SiteHeader() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations("navigation");
  const { resolvedTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const navigationId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = getLocalizedNavigation(locale);
  const expertiseItems = getLocalizedExpertiseItems(locale);
  const primaryCta = getLocalizedCta(locale, "scheduleConversation");
  const isDarkTheme = themeReady && resolvedTheme === "dark";

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setThemeReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      <motion.header
        initial={prefersReducedMotion ? false : "hidden"}
        animate="visible"
        variants={prefersReducedMotion ? undefined : headerReveal}
        className={cn(
          "sticky top-0 z-30 border-b text-[rgb(var(--foreground))]",
          "supports-[backdrop-filter]:backdrop-blur-xl",
          "transition-[background-color,border-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
          isScrolled
            ? "border-[rgb(var(--border-muted))] bg-[rgb(var(--background))]/96 shadow-[var(--shadow-card)] supports-[backdrop-filter]:bg-[color-mix(in_srgb,rgb(var(--background))_92%,transparent)]"
            : "border-[rgb(var(--border-muted))] bg-[rgb(var(--background))]/96 shadow-[var(--shadow-soft)] supports-[backdrop-filter]:bg-[color-mix(in_srgb,rgb(var(--background))_92%,transparent)]"
        )}
      >
        <Container size="wide">
          <div className="flex min-h-20 min-w-0 items-center gap-2 xl:gap-3">
            <Link
              href={getLocalizedHref(locale, "home")}
              aria-label={brand.name}
              className="min-w-0 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background))]"
            >
              <Logo
                variant={isDarkTheme ? "onDark" : "default"}
                size="md"
                className="max-w-[clamp(9.5rem,40vw,12.5rem)] xl:max-w-[12.5rem]"
              />
            </Link>

            <div className="hidden lg:block lg:translate-y-[2px]">
              <DesktopNavigation
                items={navigationItems}
                expertiseItems={expertiseItems}
                highContrast={isDarkTheme}
              />
            </div>

            <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex lg:translate-y-[2px] xl:gap-3">
              <LocaleSwitcher />
              <ThemeToggle />
              <Link href={primaryCta.href}>
                <Button variant="primary" size="md" className="whitespace-nowrap">
                  {primaryCta.label}
                </Button>
              </Link>
            </div>

            <div className="ml-auto flex shrink-0 items-center gap-2 lg:hidden">
              <Link
                href={getLocalizedHref(locale, "contact")}
                aria-label={primaryCta.label}
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-[var(--radius-md)] border px-3 text-sm font-medium transition-colors",
                  "border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--foreground))] hover:bg-[rgb(var(--surface-muted))]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background))]"
                )}
              >
                <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                <span className="max-w-[9rem] truncate">{primaryCta.label}</span>
              </Link>
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
      </motion.header>

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
