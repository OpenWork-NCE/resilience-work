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
      'Psychological support after a critical incident, crisis management in international mobility, webinars and workshops on well-being and mental health.',
    keywords: [
      'resilience',
      'psychological support',
      'critical incident',
      'collective debriefing',
      'international crisis',
      'international mobility',
      'webinars',
      'workshops',
      'mental health',
    ],
  },
  fr: {
    title: 'Resilience@Work',
    description:
      'Soutien psychologique après un incident critique, management de crise en mobilité internationale, webinaires et workshops sur le bien-être et la santé mentale.',
    keywords: [
      'résilience',
      'soutien psychologique',
      'incident critique',
      'débriefing collectif',
      'crise internationale',
      'mobilité internationale',
      'webinaires',
      'workshops',
      'santé mentale',
    ],
  },
  it: {
    title: 'Resilience@Work',
    description:
      'Sostegno psicologico dopo un incidente critico, gestione delle crisi nella mobilità internazionale, webinar e workshop su benessere e salute mentale.',
    keywords: [
      'resilienza',
      'sostegno psicologico',
      'incidente critico',
      'debriefing collettivo',
      'crisi internazionale',
      'mobilità internazionale',
      'webinar',
      'workshop',
      'salute mentale',
    ],
  },
};
