import { AnimatedSection } from "@/components/motion/animated";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/navigation/breadcrumbs";
import { HOME_MEASURE, HomeSectionIntro } from "@/components/home/home-section-intro";
import { HomeStill } from "@/components/home/home-still";
import { assets } from "@/content/assets";
import { contactUiCopy } from "@/content/pages/contact";
import type { Locale } from "@/types/content";

interface TrustSignal {
  id: string;
  label: string;
  description: string;
}

interface ContactPageHeroProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  supportingText: string;
  breadcrumbs: BreadcrumbItem[];
  trustSignals: readonly TrustSignal[];
}

function TrustIndex({ items }: { items: readonly TrustSignal[] }) {
  return (
    <ol className="space-y-0 border-t border-white/15">
      {items.map((item, index) => (
        <li key={item.id} className="flex items-baseline gap-3 border-b border-white/15 py-3">
          <span className="font-[family:var(--font-accent)] text-[0.62rem] font-semibold tabular-nums tracking-[0.2em] text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="min-w-0">
            <span className="block text-[0.98rem] font-medium tracking-[-0.02em] text-white/90">
              {item.label}
            </span>
            <span className="mt-0.5 block text-sm text-white/50">{item.description}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function ContactPageHero({
  locale,
  eyebrow,
  title,
  description,
  supportingText,
  breadcrumbs,
  trustSignals,
}: ContactPageHeroProps) {
  const still = assets.hero.main;

  return (
    <section
      aria-labelledby="contact-hero-title"
      className="relative isolate overflow-hidden bg-[rgb(var(--hero-void))] text-white"
    >
      <div className={`${HOME_MEASURE} grid lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]`}>
        <AnimatedSection delay={0.08} className="relative min-h-[20rem] lg:order-2 lg:min-h-full">
          <HomeStill
            src={still.src}
            alt={still.alt[locale]}
            objectPosition={still.objectPosition}
            priority
            grain
            sizes="(max-width: 1024px) 94vw, 42vw"
            className="absolute inset-0 aspect-auto min-h-[20rem] lg:min-h-full"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--hero-void))] via-[rgb(var(--hero-void))]/25 to-transparent lg:bg-gradient-to-r lg:from-[rgb(var(--hero-void))] lg:via-[rgb(var(--hero-void))]/28 lg:to-transparent"
            />
            <div className="absolute inset-x-6 bottom-6 hidden lg:block">
              <TrustIndex items={trustSignals} />
            </div>
          </HomeStill>
        </AnimatedSection>

        <div className="relative z-[1] flex flex-col justify-center py-12 sm:py-14 lg:order-1 lg:py-16">
          <AnimatedSection>
            <Breadcrumbs
              items={breadcrumbs}
              ariaLabel={contactUiCopy.breadcrumbAria[locale]}
              invert
            />
          </AnimatedSection>
          <AnimatedSection delay={0.06} className="mt-8">
            <HomeSectionIntro invert eyebrow={eyebrow} />
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-7">
            <h1
              id="contact-hero-title"
              className="max-w-[14ch] font-display text-[clamp(2.2rem,5.2vw,3.8rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance"
            >
              {title}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.14} className="mt-5 max-w-[36rem]">
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">{description}</p>
            <p className="mt-4 border-l border-white/20 pl-4 text-sm text-white/55 sm:text-base">
              {supportingText}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.18} className="mt-8 lg:hidden">
            <TrustIndex items={trustSignals} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
