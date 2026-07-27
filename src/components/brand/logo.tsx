import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

/**
 * Asset note: both PNG files are currently the same dark-navy logo.
 * `onDark` applies a CSS invert so the mark reads light on night surfaces.
 * When a true light logo asset exists, point `onDark` at it and drop the filter.
 */
type LogoVariant = "default" | "dark" | "light" | "monochrome" | "onDark";
type LogoSize = "sm" | "md" | "lg" | "xl";

interface LogoProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  variant?: LogoVariant;
  size?: LogoSize;
  showText?: boolean;
}

const sizeStyles: Record<LogoSize, { height: number; width: number }> = {
  sm: { height: 32, width: 160 },
  md: { height: 40, width: 200 },
  lg: { height: 48, width: 240 },
  xl: { height: 64, width: 320 },
};

export const Logo = ({
  variant = "default",
  size = "md",
  className,
  ...props
}: LogoProps) => {
  const { height, width } = sizeStyles[size];
  // "dark" historically meant "for dark backgrounds" — keep as alias of onDark.
  const onDark = variant === "dark" || variant === "light" || variant === "onDark";

  return (
    <div className={cn("flex min-w-0 items-center", className)} {...props}>
      <Image
        src="/images/brand/resilience-at-work-logo.png"
        alt="Resilience@Work"
        width={width}
        height={height}
        priority
        className={cn(
          "h-auto max-w-full object-contain",
          // Monochrome light mark for night / dark UI chrome
          onDark && "brightness-0 invert"
        )}
      />
    </div>
  );
};

export const LogoFavicon = () => {
  return (
    <Image
      src="/images/brand/resilience-at-work-favicon.png"
      alt="Resilience@Work"
      width={32}
      height={32}
    />
  );
};
