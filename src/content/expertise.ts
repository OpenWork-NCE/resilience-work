import type { ExpertiseArea } from '@/types/content';

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'psychosocial-prevention',
    slug: 'psychosocial-prevention',
    titleKey: 'expertise.psychosocial.title',
    descriptionKey: 'expertise.psychosocial.description',
    icon: 'shield-heart',
    services: [
      'expertise.psychosocial.services.individualInterviews',
      'expertise.psychosocial.services.collectiveDebriefing',
    ],
  },
  {
    id: 'international-mobility',
    slug: 'international-mobility',
    titleKey: 'expertise.mobility.title',
    descriptionKey: 'expertise.mobility.description',
    icon: 'globe',
    services: [
      'expertise.mobility.services.stressManagement',
      'expertise.mobility.services.culturalAdaptation',
      'expertise.mobility.services.resilience',
      'expertise.mobility.services.confidentialSupport',
      'expertise.mobility.services.departurePreparation',
      'expertise.mobility.services.repatriationSupport',
    ],
  },
  {
    id: 'crisis-management',
    slug: 'crisis-management',
    titleKey: 'expertise.crisis.title',
    descriptionKey: 'expertise.crisis.description',
    icon: 'life-buoy',
    services: [
      'expertise.crisis.services.teamSupport',
      'expertise.crisis.services.debriefing',
      'expertise.crisis.services.managerSupport',
      'expertise.crisis.services.emergencyProtocols',
    ],
  },
  {
    id: 'training',
    slug: 'training',
    titleKey: 'expertise.training.title',
    descriptionKey: 'expertise.training.description',
    icon: 'graduation-cap',
    services: [
      'expertise.training.services.leadership',
      'expertise.training.services.burnoutPrevention',
      'expertise.training.services.compassionFatigue',
      'expertise.training.services.tensionCommunication',
      'expertise.training.services.stressManagement',
      'expertise.training.services.multiculturalManagement',
      'expertise.training.services.mobilitySupport',
      'expertise.training.services.mentalHealthFirstAid',
      'expertise.training.services.workLifeBalance',
    ],
  },
];
