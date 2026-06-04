import type { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  locale: string;
}

export function generateSEO({ title, description, keywords, locale }: SEOConfig): Metadata {
  const fullTitle = title === 'Resilience@Work' ? title : `${title} | Resilience@Work`;

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      locale,
      type: 'website',
      siteName: 'Resilience@Work',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}

export const defaultSEO = {
  en: {
    title: 'Resilience@Work',
    description:
      'Professional support for organizations and expatriates. Psychosocial prevention, international mobility, crisis management and training in Africa, Europe and the Middle East.',
    keywords: [
      'resilience',
      'psychosocial support',
      'international mobility',
      'expatriation',
      'crisis management',
      'professional training',
      'burnout prevention',
      'mental health',
      'multicultural',
    ],
  },
  fr: {
    title: 'Resilience@Work',
    description:
      'Accompagnement professionnel des organisations et des expatriés. Prévention psychosociale, mobilité internationale, gestion de crise et formations en Afrique, Europe et Moyen-Orient.',
    keywords: [
      'résilience',
      'soutien psychosocial',
      'mobilité internationale',
      'expatriation',
      'gestion de crise',
      'formation professionnelle',
      'prévention burnout',
      'santé mentale',
      'multiculturel',
    ],
  },
};
