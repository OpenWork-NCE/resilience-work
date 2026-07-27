"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle, Phone, Mail, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type {
  ResolvedCta,
  ResolvedExpertiseItem,
  ResolvedNavigationItem,
} from "@/lib/navigation/get-navigation";
import { isActiveRoute } from "@/lib/navigation/is-active-route";
import { Button } from "@/components/shared/button";
import { NavigationLink } from "@/components/navigation/navigation-link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LocaleSwitcher } from "@/components/locale/locale-switcher";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { mobileMenuReveal } from "@/lib/animations";

interface MobileNavigationProps {
  isOpen: boolean;
  navigationId: string;
  currentPathname: string;
  items: ResolvedNavigationItem[];
  expertiseItems: ResolvedExpertiseItem[];
  cta: ResolvedCta;
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    whatsappHref: string;
  };
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  onClose: (restoreFocus?: boolean) => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getSubmenuItems(
  item: ResolvedNavigationItem,
  expertiseItems: ResolvedExpertiseItem[]
): { id: string; label: string; href: string }[] {
  if (item.id === "expertise") {
    return expertiseItems;
  }
  return (item.children ?? []).map((child) => ({
    id: child.id,
    label: child.label,
    href: child.href,
  }));
}

export function MobileNavigation({
  isOpen,
  navigationId,
  currentPathname,
  items,
  expertiseItems,
  cta,
  contact,
  triggerRef,
  onClose,
}: MobileNavigationProps) {
  const t = useTranslations();
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const headingId = useId();

  const initiallyOpenIds = items
    .filter((item) => {
      if (!item.children?.length) {
        return false;
      }
      const submenu = getSubmenuItems(item, expertiseItems);
      return (
        submenu.some((entry) => isActiveRoute(currentPathname, entry.href)) ||
        isActiveRoute(currentPathname, item.href)
      );
    })
    .map((item) => item.id);

  const [openSectionIds, setOpenSectionIds] = useState<string[]>(initiallyOpenIds);

  const toggleSection = (id: string) => {
    setOpenSectionIds((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id]
    );
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = window.requestAnimationFrame(() => {
      const firstFocusable = panelRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
      firstFocusable?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose(true);
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusableElements = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          aria-hidden={!isOpen}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
          className="lg:hidden"
        >
          <div
            className="fixed inset-0 z-40 bg-[rgb(var(--overlay-strong))]"
            onClick={() => onClose(true)}
          />

          <motion.aside
            ref={panelRef}
            id={navigationId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={headingId}
            variants={mobileMenuReveal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={cn(
              "fixed inset-y-0 right-0 z-50 flex w-full max-w-[24rem] flex-col overflow-y-auto border-l border-[rgb(var(--border-muted))]",
              "bg-[rgb(var(--surface-elevated))] px-5 pb-6 pt-5 shadow-[var(--shadow-floating)]"
            )}
          >
            <div className="flex items-center justify-between">
              <h2 id={headingId} className="text-sm font-semibold uppercase tracking-[0.14em] text-[rgb(var(--accent))]">
                {t("navigation.mainNavigation")}
              </h2>
              <button
                type="button"
                onClick={() => onClose(true)}
                className="rounded-[var(--radius-md)] p-2 text-[rgb(var(--muted-foreground))] transition-colors hover:bg-[rgb(var(--surface-muted))] hover:text-[rgb(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
              >
                <span className="sr-only">{t("navigation.closeMenu")}</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-8 space-y-2">
              {items.map((item) => {
                if (!item.children?.length) {
                  return (
                    <NavigationLink
                      key={item.id}
                      href={item.href}
                      label={item.label}
                      variant="mobile"
                      isActive={isActiveRoute(currentPathname, item.href, {
                        exact: item.route === "home",
                      })}
                      onClick={() => onClose()}
                    />
                  );
                }

                const submenuItems = getSubmenuItems(item, expertiseItems);
                const isSectionOpen = openSectionIds.includes(item.id);
                const isExpertise = item.id === "expertise";
                const panelControlId = `${navigationId}-${item.id}`;
                const sectionActive =
                  submenuItems.some((entry) => isActiveRoute(currentPathname, entry.href)) ||
                  isActiveRoute(currentPathname, item.href);

                return (
                  <div
                    key={item.id}
                    className="rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))]"
                  >
                    <div className="flex items-stretch">
                      {isExpertise ? (
                        <button
                          type="button"
                          aria-expanded={isSectionOpen}
                          aria-controls={panelControlId}
                          onClick={() => toggleSection(item.id)}
                          className={cn(
                            "flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium transition-colors",
                            "hover:bg-[rgb(var(--surface-muted))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]",
                            sectionActive
                              ? "text-[rgb(var(--primary))]"
                              : "text-[rgb(var(--foreground))]"
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)]",
                              isSectionOpen && "rotate-180"
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      ) : (
                        <>
                          <Link
                            href={item.href}
                            onClick={() => onClose()}
                            aria-current={
                              isActiveRoute(currentPathname, item.href) ? "page" : undefined
                            }
                            className={cn(
                              "min-w-0 flex-1 px-4 py-3 text-left text-base font-medium transition-colors",
                              "hover:bg-[rgb(var(--surface-muted))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]",
                              sectionActive
                                ? "text-[rgb(var(--primary))]"
                                : "text-[rgb(var(--foreground))]"
                            )}
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            aria-expanded={isSectionOpen}
                            aria-controls={panelControlId}
                            aria-label={
                              isExpertise ? t("navigation.expertiseMenu") : t("navigation.aboutMenu")
                            }
                            onClick={() => toggleSection(item.id)}
                            className="flex shrink-0 items-center px-3 text-[rgb(var(--foreground))] transition-colors hover:bg-[rgb(var(--surface-muted))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                          >
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)]",
                                isSectionOpen && "rotate-180"
                              )}
                              aria-hidden="true"
                            />
                          </button>
                        </>
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {isSectionOpen ? (
                        <motion.div
                          id={panelControlId}
                          variants={mobileMenuReveal}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="overflow-hidden border-t border-[rgb(var(--border-muted))] px-2 py-2"
                        >
                          {submenuItems.map((subItem) => (
                            <NavigationLink
                              key={subItem.id}
                              href={subItem.href}
                              label={subItem.label}
                              variant="mobile"
                              isActive={isActiveRoute(currentPathname, subItem.href)}
                              onClick={() => onClose()}
                              className="text-sm"
                            />
                          ))}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <Link href={cta.href} onClick={() => onClose()}>
                <Button variant={cta.variant} className="w-full justify-center">
                  {cta.label}
                </Button>
              </Link>
            </div>

            <div className="mt-8 rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <LocaleSwitcher />
                <ThemeToggle />
              </div>
            </div>

            <div className="mt-8 space-y-3 border-t border-[rgb(var(--border-muted))] pt-6 text-sm text-[rgb(var(--muted-foreground))]">
              <a
                href={contact.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-[rgb(var(--foreground))]"
              >
                <Phone className="h-4 w-4" />
                <span>{contact.phoneDisplay}</span>
              </a>
              <a
                href={contact.emailHref}
                className="flex items-center gap-3 transition-colors hover:text-[rgb(var(--foreground))]"
              >
                <Mail className="h-4 w-4" />
                <span>{contact.email}</span>
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-[rgb(var(--foreground))]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
