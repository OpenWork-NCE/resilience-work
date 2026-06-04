import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePage } from "@/content/pages/home";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/shared/button";
import { Eyebrow } from "@/components/ui/content";
import { Locale } from "@/types/content";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";

interface ProfileSectionProps {
  locale: Locale;
}

export function ProfileSection({ locale }: ProfileSectionProps) {
  const profile = homePage.profile;

  return (
    <section className="bg-[rgb(var(--surface-muted))] py-[var(--section-space-lg)]">
      <Container size="wide">
        <div className="grid items-center gap-10 rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-6 shadow-[var(--shadow-card)] lg:grid-cols-[0.8fr_1fr] lg:gap-14 lg:p-10">
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-[rgb(var(--surface-subtle))]">
            <div className="relative aspect-[4/5]">
              <Image
                src={profile.image.src}
                alt={profile.image.alt[locale]}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                style={{ objectPosition: profile.image.objectPosition ?? "center" }}
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <Eyebrow>{profile.eyebrow[locale]}</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-balance sm:text-5xl">
              {profile.title[locale]}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[rgb(var(--muted-foreground))]">
              {profile.description[locale]}
            </p>
            <div className="mt-8 border-t border-[rgb(var(--border-muted))] pt-6">
              <p className="text-2xl font-semibold text-[rgb(var(--foreground))]">{profile.name}</p>
              <p className="mt-2 text-base text-[rgb(var(--muted-foreground))]">{profile.role[locale]}</p>
            </div>
            <div className="mt-8">
              <Link href={getLocalizedHref(locale, "contact")}>
                <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
                  {profile.cta.label[locale]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
