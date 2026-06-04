import { useTranslations } from 'next-intl';
import { Section } from '@/components/shared/section';
import { SectionHeader } from '@/components/shared/section-header';

export default function ContactPage() {
  const t = useTranslations();

  return (
    <Section>
      <SectionHeader title={t('nav.contact')} />
      <p className="text-center text-[rgb(var(--muted-foreground))]">
        Page à venir
      </p>
    </Section>
  );
}
