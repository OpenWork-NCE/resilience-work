import { useTranslations } from 'next-intl';
import { Container } from '@/components/shared/container';
import { Section } from '@/components/shared/section';
import { SectionHeader } from '@/components/shared/section-header';

export default function CrisisManagementPage() {
  const t = useTranslations();

  return (
    <Section>
      <Container>
        <SectionHeader title={t('expertise.crisis.title')} />
        <p className="text-center text-[rgb(var(--muted-foreground))]">
          Contenu détaillé à venir
        </p>
      </Container>
    </Section>
  );
}
