import { useTranslations } from 'next-intl';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { SectionHeader } from '@/components/shared/section-header';

export default function InternationalMobilityPage() {
  const t = useTranslations();

  return (
    <>
      <SiteHeader />
      <main>
        <Section>
          <Container>
            <SectionHeader title={t('expertise.mobility.title')} />
            <p className="text-center text-[rgb(var(--muted-foreground))]">
              Contenu détaillé à venir
            </p>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
