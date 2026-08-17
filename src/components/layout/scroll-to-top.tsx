"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { motionTokens } from "@/lib/animations";

const SHOW_AFTER_PX = 480;

export function ScrollToTop() {
  const tA11y = useTranslations("accessibility");
  const tTheme = useTranslations("theme");
  const { resolvedTheme, setTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const themeLabel = isDark ? tTheme("switchToLight") : tTheme("switchToDark");

  const handleTheme = () => {
    if (!mounted) return;
    setTheme(isDark ? "light" : "dark");
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="pointer-events-none fixed bottom-[5.75rem] right-4 z-30 sm:right-6 lg:bottom-7">
      <div
        className={cn(
          "pointer-events-auto flex flex-col items-center",
          "rounded-full border border-white/12 bg-[rgb(var(--hero-void))] p-1.5 text-white",
          "shadow-[0_18px_48px_rgba(7,16,24,0.38)]"
        )}
      >
        <button
          type="button"
          aria-label={themeLabel}
          title={themeLabel}
          onClick={handleTheme}
          className={cn(
            "relative inline-flex h-11 w-11 items-center justify-center rounded-full",
            "text-white/80 transition-colors hover:bg-white/8 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
          )}
        >
          <span
            aria-hidden="true"
            className="absolute inset-[7px] rounded-full border border-[rgb(var(--accent))]/35"
          />
          {mounted ? (
            isDark ? <Sun className="relative h-4 w-4" /> : <Moon className="relative h-4 w-4" />
          ) : (
            <span className="relative h-4 w-4" aria-hidden="true" />
          )}
        </button>

        <AnimatePresence initial={false}>
          {isVisible ? (
            <motion.div
              key="top"
              initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : motionTokens.duration.normal,
                ease: motionTokens.ease.emphasized,
              }}
              className="flex flex-col items-center overflow-hidden"
            >
              <span aria-hidden="true" className="my-1 block h-6 w-px bg-[rgb(var(--accent))]" />
              <button
                type="button"
                onClick={handleTop}
                aria-label={tA11y("backToTop")}
                title={tA11y("backToTop")}
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-full",
                  "text-white/80 transition-colors hover:bg-white/8 hover:text-white",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                )}
              >
                <ArrowUp className="h-4 w-4" aria-hidden="true" />
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
