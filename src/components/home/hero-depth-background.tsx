"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function useHeroDepthPointer(enabled: boolean) {
  const x = useMotionValue(52);
  const y = useMotionValue(38);
  const springConfig = { stiffness: 28, damping: 24, mass: 0.9 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const frameRef = useRef<number | null>(null);
  const pendingRef = useRef({ x: 52, y: 38 });

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (!enabled) return;

      const rect = event.currentTarget.getBoundingClientRect();
      pendingRef.current = {
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100,
      };

      if (frameRef.current != null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        x.set(pendingRef.current.x);
        y.set(pendingRef.current.y);
      });
    },
    [enabled, x, y]
  );

  const onPointerLeave = useCallback(() => {
    if (!enabled) return;
    x.set(52);
    y.set(38);
  }, [enabled, x, y]);

  return { springX, springY, onPointerMove, onPointerLeave };
}

interface HeroCinematicStillProps {
  src: string;
  alt: string;
  objectPosition?: string;
  prefersReducedMotion: boolean;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  caption?: string;
  variant: "bleed" | "plate";
}

export function HeroCinematicStill({
  src,
  alt,
  objectPosition,
  prefersReducedMotion,
  springX,
  springY,
  caption,
  variant,
}: HeroCinematicStillProps) {
  const light = useMotionTemplate`radial-gradient(38% 32% at ${springX}% ${springY}%, rgba(255,255,255,0.16), transparent 70%)`;

  const image = (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes={variant === "plate" ? "(min-width: 1024px) 46vw, 100vw" : "100vw"}
        className={cn(
          "object-cover",
          !prefersReducedMotion && "hero-kenburns"
        )}
        style={{ objectPosition: objectPosition ?? "center 28%" }}
      />
      <div aria-hidden="true" className="hero-film-grain absolute inset-0" />
      {!prefersReducedMotion ? (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 mix-blend-soft-light"
          style={{ backgroundImage: light }}
        />
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,28,0.08)_0%,transparent_28%,rgba(8,18,28,0.42)_100%)]"
      />
    </>
  );

  if (variant === "bleed") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {image}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,16,24,0.55)_0%,rgba(8,16,24,0.28)_38%,rgba(8,16,24,0.82)_100%)]"
        />
      </div>
    );
  }

  return (
    <figure className="relative">
      <div className="relative aspect-[4/5] overflow-hidden bg-[rgb(var(--surface-inverse))] shadow-[0_40px_80px_-28px_rgba(0,0,0,0.72)]">
        {image}
      </div>
      {caption ? (
        <figcaption className="mt-4 font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/45">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
