'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Container } from '@/components/shared/container';
import { cn } from '@/lib/utils';
import type { NavigationItem } from '@/types/content';

const mainNavigation: NavigationItem[] = [
  { href: '/about', labelKey: 'nav.about' },
  { href: '/expertise', labelKey: 'nav.expertise' },
  { href: '/international', labelKey: 'nav.international' },
  { href: '/contact', labelKey: 'nav.contact' },
];

export function SiteHeader() {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-[rgb(var(--background))]/80 backdrop-blur-md border-b border-[rgb(var(--border))]'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Resilience@Work
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.href!}
                href={item.href!}
                className="text-sm font-medium transition-colors hover:text-[rgb(var(--accent))]"
              >
                {t(item.labelKey!)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
          <Container>
            <nav className="py-4 flex flex-col gap-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href!}
                  href={item.href!}
                  className="text-base font-medium py-2 transition-colors hover:text-[rgb(var(--accent))]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(item.labelKey!)}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
