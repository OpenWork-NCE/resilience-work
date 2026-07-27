"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { motionTokens } from "@/lib/animations";

const SHOW_AFTER_PX = 480;

/**
 * Floating control to return to the top of the page after scrolling.
 * Hidden near the top; appears with motion that respects reduced-motion.
 */
export function ScrollToTop() {
  const t = useTranslations("accessibility");
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 10, scale: 0.96 }
          }
          transition={{
            duration: prefersReducedMotion ? 0.01 : motionTokens.duration.normal,
            ease: motionTokens.ease.out,
          }}
          className="pointer-events-none fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6"
        >
          <button
            type="button"
            onClick={handleClick}
            aria-label={t("backToTop")}
            title={t("backToTop")}
            className={cn(
              "pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full",
              "border border-[rgb(var(--border))] bg-[rgb(var(--surface-elevated))] text-[rgb(var(--foreground))]",
              "shadow-[var(--shadow-elevated)] backdrop-blur-md",
              "transition-[background-color,border-color,transform,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-out)]",
              "hover:-translate-y-0.5 hover:border-[rgb(var(--border-strong))] hover:bg-[rgb(var(--surface-muted))] hover:shadow-[var(--shadow-floating)]",
              "active:translate-y-0",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background))]"
            )}
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
