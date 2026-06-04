import { useTranslations } from 'next-intl';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { SectionHeader } from '@/components/shared/section-header';

export default function InternationalPage() {
  const t = useTranslations();

  return (
    <Section>
      <Container>
        <SectionHeader title={t('nav.international')} />
        <p className="text-center text-[rgb(var(--muted-foreground))]">
          Page à venir
        </p>
      </Container>
    </Section>
  );
}
