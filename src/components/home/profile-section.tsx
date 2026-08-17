import { homePage } from "@/content/pages/home";
import { AnimatedSection } from "@/components/motion/animated";
import {
  HOME_MEASURE,
  HomeSectionIntro,
} from "@/components/home/home-section-intro";
import { HomeStill } from "@/components/home/home-still";
import { HomeTextLink } from "@/components/home/home-text-link";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import type { Locale } from "@/types/content";

interface ProfileSectionProps {
  locale: Locale;
}

export function ProfileSection({ locale }: ProfileSectionProps) {
  const profile = homePage.profile;
  const portfolioHref = getLocalizedHref(locale, profile.portfolioCta.route);
  const contactHref = getLocalizedHref(locale, "contact");

  return (
    <section
      aria-labelledby="home-profile-title"
      className="relative isolate overflow-hidden bg-[rgb(var(--hero-void))] text-white"
    >
      <div
        className={`${HOME_MEASURE} grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24`}
      >
        <HomeStill
          src={profile.image.src}
          alt={profile.image.alt[locale]}
          objectPosition={profile.image.objectPosition}
          sizes="(max-width: 1024px) 94vw, 46vw"
          grain
          className="aspect-[4/5] lg:order-2 lg:aspect-auto lg:h-[min(78svh,46rem)]"
        >
          <figcaption className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/55">
              {profile.role[locale]}
            </p>
            <p className="mt-2 font-display text-2xl font-medium tracking-[-0.02em] text-white">
              {profile.name}
            </p>
          </figcaption>
        </HomeStill>

        <AnimatedSection className="lg:order-1">
          <HomeSectionIntro
            invert
            eyebrow={profile.eyebrow[locale]}
            title={profile.title[locale]}
            titleId="home-profile-title"
            description={profile.description[locale]}
          />

          <ol className="mt-10 max-w-[34rem] space-y-0 border-t border-white/15">
            {profile.highlights.map((item, index) => (
              <li
                key={item.id}
                className="flex items-baseline gap-4 border-b border-white/15 py-3.5"
              >
                <span className="font-[family:var(--font-accent)] text-[0.62rem] font-semibold tabular-nums tracking-[0.2em] text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[1.02rem] font-medium tracking-[-0.02em] text-white/90">
                  {item.label[locale]}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <HomeTextLink href={portfolioHref} invert>
              {profile.portfolioCta.label[locale]}
            </HomeTextLink>
            <HomeTextLink href={contactHref} invert>
              {profile.cta.label[locale]}
            </HomeTextLink>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
