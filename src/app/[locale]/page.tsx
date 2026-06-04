import { useTranslations } from 'next-intl';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/shared/button';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[rgb(var(--surface-muted))] to-[rgb(var(--background))]">
          <Container className="relative z-10">
            <div className="text-center max-w-4xl mx-auto py-20">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent))] text-sm font-semibold">
                  Resilience@Work
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
                {t('home.welcome')}
              </h1>
              <p className="text-lg sm:text-xl text-[rgb(var(--muted-foreground))] mb-8 text-balance">
                {t('home.subtitle')}
              </p>
              <Link href="/expertise">
                <Button size="lg">{t('home.cta')}</Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
