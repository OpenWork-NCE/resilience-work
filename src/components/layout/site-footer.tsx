import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { Container } from '@/components/shared/container';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import type { NavigationItem } from '@/types/content';

const mainNavigation: NavigationItem[] = [
  { href: '/about', labelKey: 'nav.about' },
  { href: '/expertise', labelKey: 'nav.expertise' },
  { href: '/international', labelKey: 'nav.international' },
  { href: '/contact', labelKey: 'nav.contact' },
];

export function SiteFooter() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--surface-muted))]">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Resilience@Work</h3>
            <p className="text-sm text-[rgb(var(--muted-foreground))] mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.linkedin && (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-[rgb(var(--surface))] rounded-[var(--radius-md)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-[rgb(var(--surface))] rounded-[var(--radius-md)] transition-colors"
                  aria-label="Facebook"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">{t('footer.navigation')}</h4>
            <nav className="flex flex-col gap-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href!}
                  href={item.href!}
                  className="text-sm text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] transition-colors"
                >
                  {t(item.labelKey!)}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="flex flex-col gap-3 text-sm text-[rgb(var(--muted-foreground))]">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 hover:text-[rgb(var(--foreground))] transition-colors"
              >
                <Mail size={16} />
                {CONTACT_INFO.email}
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-2 hover:text-[rgb(var(--foreground))] transition-colors"
              >
                <Phone size={16} />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-[rgb(var(--border))] text-center text-sm text-[rgb(var(--muted-foreground))]">
          <p>
            © {currentYear} Resilience@Work. {t('footer.rights')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
