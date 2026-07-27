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
import { heroMediaReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function useHeroDepthPointer(enabled: boolean) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 36, damping: 22, mass: 0.7 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const frameRef = useRef<number | null>(null);
  const pendingRef = useRef({ x: 0, y: 0 });

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (!enabled) return;

      const rect = event.currentTarget.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      pendingRef.current = { x: nx, y: ny };

      if (frameRef.current != null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        x.set(pendingRef.current.x * 28);
        y.set(pendingRef.current.y * 18);
      });
    },
    [enabled, x, y]
  );

  const onPointerLeave = useCallback(() => {
    if (!enabled) return;
    x.set(0);
    y.set(0);
  }, [enabled, x, y]);

  return { springX, springY, onPointerMove, onPointerLeave };
}

interface HeroDepthBackgroundProps {
  src: string;
  alt: string;
  objectPosition?: string;
  prefersReducedMotion: boolean;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
}

function DepthLayer({
  src,
  alt,
  objectPosition,
  className,
  x,
  y,
  factor,
  blur = false,
  priority = false,
  ariaHidden = false,
}: {
  src: string;
  alt: string;
  objectPosition?: string;
  className?: string;
  x: MotionValue<number>;
  y: MotionValue<number>;
  factor: number;
  blur?: boolean;
  priority?: boolean;
  ariaHidden?: boolean;
}) {
  const transform = useMotionTemplate`translate3d(calc(${x}px * ${factor}), calc(${y}px * ${factor}), 0)`;

  return (
    <motion.div
      aria-hidden={ariaHidden || undefined}
      className={cn("absolute inset-[-10%]", className)}
      style={{ transform }}
    >
      <Image
        src={src}
        alt={ariaHidden ? "" : alt}
        fill
        priority={priority}
        sizes="100vw"
        className={cn(
          "object-cover",
          // Slightly darker photo for text contrast; blur plane stays soft
          !blur && "brightness-[0.92] contrast-[1.04]",
          blur && "scale-110 blur-[16px] brightness-[0.85]"
        )}
        style={{ objectPosition: objectPosition ?? "center" }}
      />
    </motion.div>
  );
}

/**
 * Multi-plane hero background:
 * far (blurred) + mid (sharp) + near haze, with CSS depth drift
 * and pointer parallax for interactive depth.
 */
export function HeroDepthBackground({
  src,
  alt,
  objectPosition,
  prefersReducedMotion,
  springX,
  springY,
}: HeroDepthBackgroundProps) {
  const enabled = !prefersReducedMotion;
  const nearTransform = useMotionTemplate`translate3d(calc(${springX}px * 1.45), calc(${springY}px * 1.45), 0)`;

  return (
    <motion.div
      className="hero-depth-scene pointer-events-none absolute inset-0 overflow-hidden"
      initial={prefersReducedMotion ? false : "hidden"}
      animate="visible"
      variants={prefersReducedMotion ? undefined : heroMediaReveal}
    >
      {/* Far plane — soft, deeper, slower */}
      <div className={cn("absolute inset-0", enabled && "hero-depth-far")}>
        <DepthLayer
          src={src}
          alt={alt}
          objectPosition={objectPosition}
          x={springX}
          y={springY}
          factor={0.35}
          blur
          ariaHidden
          className="opacity-75"
        />
      </div>

      {/* Mid plane — primary photograph */}
      <div className={cn("absolute inset-0", enabled && "hero-depth-mid")}>
        <DepthLayer
          src={src}
          alt={alt}
          objectPosition={objectPosition}
          x={springX}
          y={springY}
          factor={1}
          priority
        />
      </div>

      {/* Near plane — luminous haze drifting in front */}
      {enabled ? (
        <motion.div
          aria-hidden="true"
          className="hero-depth-near absolute inset-0"
          style={{
            transform: nearTransform,
            background:
              "radial-gradient(ellipse 55% 45% at 30% 35%, color-mix(in srgb, rgb(var(--accent-soft)) 42%, transparent), transparent 70%), radial-gradient(ellipse 40% 35% at 78% 55%, color-mix(in srgb, rgb(var(--primary)) 18%, transparent), transparent 72%)",
          }}
        />
      ) : null}

      {/* Depth vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.28)_100%)]"
      />
    </motion.div>
  );
}
