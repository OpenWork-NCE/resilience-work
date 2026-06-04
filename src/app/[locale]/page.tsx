import { useTranslations } from 'next-intl';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/shared/button';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations();

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-b from-[rgb(var(--surface-muted))] to-[rgb(var(--background))]">
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl py-20 text-center">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-[rgb(var(--accent-soft))] px-4 py-2 text-sm font-semibold text-[rgb(var(--accent))]">
              Resilience@Work
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t('home.welcome')}
          </h1>
          <p className="mb-8 text-lg text-[rgb(var(--muted-foreground))] text-balance sm:text-xl">
            {t('home.subtitle')}
          </p>
          <Link href="/expertise">
            <Button size="lg">{t('home.cta')}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
