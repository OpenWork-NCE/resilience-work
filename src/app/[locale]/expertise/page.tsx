import { useTranslations } from 'next-intl';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { SectionHeader } from '@/components/shared/section-header';
import { Card } from '@/components/shared/card';
import { Link } from '@/i18n/routing';
import { expertiseAreas } from '@/content/expertise';
import { ShieldCheck, Globe, LifeBuoy, GraduationCap } from 'lucide-react';

const iconMap = {
  'shield-heart': ShieldCheck,
  'globe': Globe,
  'life-buoy': LifeBuoy,
  'graduation-cap': GraduationCap,
};

export default function ExpertisePage() {
  const t = useTranslations();

  return (
    <>
      <SiteHeader />
      <main>
        <Section>
          <Container>
            <SectionHeader
              title={t('nav.expertise')}
              description="Nos domaines d'intervention"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {expertiseAreas.map((area) => {
                const Icon = iconMap[area.icon as keyof typeof iconMap];
                return (
                  <Link key={area.id} href={`/expertise/${area.slug}`}>
                    <Card hover className="h-full">
                      <div className="flex items-start gap-4">
                        {Icon && (
                          <div className="flex-shrink-0 w-12 h-12 rounded-[var(--radius-lg)] bg-[rgb(var(--accent-soft))] flex items-center justify-center">
                            <Icon className="w-6 h-6 text-[rgb(var(--accent))]" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            {t(area.titleKey)}
                          </h3>
                          <p className="text-[rgb(var(--muted-foreground))]">
                            {t(area.descriptionKey)}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
