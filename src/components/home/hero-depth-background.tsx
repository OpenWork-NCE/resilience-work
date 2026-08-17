"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroCinematicStillProps {
  src: string;
  alt: string;
  objectPosition?: string;
  prefersReducedMotion: boolean;
  caption?: string;
  variant: "bleed" | "plate";
  children?: React.ReactNode;
}

export function HeroCinematicStill({
  src,
  alt,
  objectPosition,
  prefersReducedMotion,
  caption,
  variant,
  children,
}: HeroCinematicStillProps) {
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes={variant === "plate" ? "(min-width: 1024px) 56vw, 100vw" : "100vw"}
      className={cn(
        "object-cover",
        !prefersReducedMotion && "hero-still-develop"
      )}
      style={{ objectPosition: objectPosition ?? "center 28%" }}
    />
  );

  if (variant === "bleed") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {image}
        <div aria-hidden="true" className="hero-film-grain absolute inset-0" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,24,0.42)_0%,rgba(7,16,24,0.18)_36%,rgba(7,16,24,0.88)_100%)]"
        />
      </div>
    );
  }

  return (
    <figure className="relative h-full w-full overflow-hidden">
      {image}
      <div aria-hidden="true" className="hero-film-grain absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,24,0.55)_0%,transparent_28%,transparent_68%,rgba(7,16,24,0.28)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,24,0.18)_0%,transparent_30%,rgba(7,16,24,0.62)_100%)]"
      />
      {caption ? (
        <figcaption className="pointer-events-none absolute left-6 top-6 font-[family:var(--font-accent)] text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/55">
          {caption}
        </figcaption>
      ) : null}
      {children}
    </figure>
  );
}
