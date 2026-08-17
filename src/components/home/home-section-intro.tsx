import { cn } from "@/lib/utils";

/** Shared horizontal measure with the cinematic hero. */
export const HOME_MEASURE =
  "mx-auto w-[min(94vw,88rem)] px-5 sm:px-8 lg:w-[min(94vw,92rem)] lg:px-10";

interface HomeSectionIntroProps {
  eyebrow: string;
  title?: string;
  titleId?: string;
  description?: string;
  invert?: boolean;
  className?: string;
}

export function HomeSectionIntro({
  eyebrow,
  title,
  titleId,
  description,
  invert = false,
  className,
}: HomeSectionIntroProps) {
  return (
    <div className={cn("max-w-[40rem]", className)}>
      <p
        className={cn(
          "font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.28em]",
          invert ? "text-white/50" : "text-[rgb(var(--accent))]"
        )}
      >
        {eyebrow}
      </p>
      <span
        aria-hidden="true"
        className="mt-4 block h-px w-14 bg-[rgb(var(--accent))]"
      />
      {title ? (
        <h2
          id={titleId}
          className={cn(
            "mt-7 font-display text-[clamp(2.2rem,4.6vw,3.8rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance",
            invert ? "text-white" : "text-[rgb(var(--foreground))]"
          )}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-[32rem] text-base leading-relaxed sm:text-lg",
            invert ? "text-white/70" : "text-[rgb(var(--muted-foreground))]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
