import type { ContactInfo, ZoneInfo } from '@/types/content';

export const CONTACT_INFO: ContactInfo = {
  name: 'Jocelyne Katshinda',
  role: 'Fondatrice et Administratrice générale',
  email: 'admin@resilienceatwork.eu',
  phone: '+32 470 542 390',
  whatsapp: '+32470542390',
  linkedin: 'https://www.linkedin.com/in/jocelyne-katshinda-878bb95b/',
};

export const INTERVENTION_ZONES: ZoneInfo[] = [
  {
    name: 'Afrique',
    countries: ['Afrique centrale'],
  },
  {
    name: 'Europe',
    countries: ['Belgique', 'France', 'Luxembourg'],
  },
  {
    name: 'Moyen-Orient',
    countries: ['Divers pays'],
  },
];

export const LANGUAGES = {
  site: ['fr', 'en'],
  services: ['fr', 'en', 'it'],
} as const;

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`,
  linkedin: CONTACT_INFO.linkedin,
  facebook: undefined,
};
