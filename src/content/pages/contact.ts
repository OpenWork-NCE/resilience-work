import { brand } from "@/content/brand";
import type { Locale } from "@/types/content";
import type { ContactActionId } from "@/types/contact";

type LocalizedText = Record<Locale, string>;

interface LocalizedOption<T extends string> {
  value: T;
  label: LocalizedText;
}

interface ContactActionDefinition {
  id: ContactActionId;
  href: string;
  external?: boolean;
  download?: string;
  label: LocalizedText;
  description: LocalizedText;
}

const quickActionDefinitions: readonly ContactActionDefinition[] = [
  {
    id: "whatsapp",
    href: brand.contact.whatsappHref,
    external: true,
    label: {
      fr: "Échanger sur WhatsApp",
      en: "Chat on WhatsApp",
    },
    description: {
      fr: "Présenter brièvement votre besoin",
      en: "Briefly describe your needs",
    },
  },
  {
    id: "phone",
    href: brand.contact.phoneHref,
    label: {
      fr: "Appeler",
      en: "Call",
    },
    description: {
      fr: "Joindre directement Resilience@Work",
      en: "Reach Resilience@Work directly",
    },
  },
  {
    id: "email",
    href: brand.contact.emailHref,
    label: {
      fr: "Envoyer un email",
      en: "Send an email",
    },
    description: {
      fr: "Transmettre une demande écrite",
      en: "Send a written enquiry",
    },
  },
  {
    id: "website",
    href: `https://${brand.domain}`,
    external: true,
    label: {
      fr: "Visiter le site",
      en: "Visit the website",
    },
    description: {
      fr: "Explorer Resilience@Work",
      en: "Explore Resilience@Work",
    },
  },
] as const;

const directContactActions: readonly ContactActionDefinition[] = [
  {
    id: "whatsapp",
    href: brand.contact.whatsappHref,
    external: true,
    label: {
      fr: "WhatsApp",
      en: "WhatsApp",
    },
    description: {
      fr: "Ouvrir une conversation directe",
      en: "Open a direct conversation",
    },
  },
  {
    id: "phone",
    href: brand.contact.phoneHref,
    label: {
      fr: "Appeler",
      en: "Call",
    },
    description: {
      fr: "Joindre directement par téléphone",
      en: "Reach out directly by phone",
    },
  },
  {
    id: "email",
    href: brand.contact.emailHref,
    label: {
      fr: "Envoyer un email",
      en: "Send an email",
    },
    description: {
      fr: "Envoyer un message professionnel",
      en: "Send a professional message",
    },
  },
  {
    id: "vcard",
    href: "/contact/jocelyne-katshinda.vcf",
    download: "jocelyne-katshinda.vcf",
    label: {
      fr: "Enregistrer le contact",
      en: "Save contact",
    },
    description: {
      fr: "Télécharger la fiche contact",
      en: "Download the contact card",
    },
  },
] as const;

export const contactPage = {
  hero: {
    eyebrow: {
      fr: "Contact",
      en: "Contact",
    } satisfies LocalizedText,
    title: {
      fr: "Échangeons sur les besoins de votre organisation.",
      en: "Let’s discuss your organisation’s needs.",
    } satisfies LocalizedText,
    description: {
      fr: "Présentez-nous votre contexte afin que nous puissions identifier la forme d’accompagnement la plus adaptée.",
      en: "Tell us about your context so that we can identify the most appropriate form of support.",
    } satisfies LocalizedText,
    supportingText: {
      fr: "Prévention psychosociale, mobilité internationale, gestion de crise ou formation : nous vous invitons à nous transmettre les informations essentielles à votre demande.",
      en: "Psychosocial prevention, international mobility, crisis management or training: please share the essential information related to your enquiry.",
    } satisfies LocalizedText,
  },

  reassurance: {
    title: {
      fr: "Une approche humaine, confidentielle et pragmatique",
      en: "A human, confidential and pragmatic approach",
    } satisfies LocalizedText,
    description: {
      fr: "Chaque demande est examinée avec attention afin d’identifier une réponse adaptée au contexte de votre organisation.",
      en: "Each enquiry is reviewed carefully to identify a response suited to your organisation’s context.",
    } satisfies LocalizedText,
  },

  form: {
    section: {
      eyebrow: {
        fr: "Formulaire principal",
        en: "Main form",
      } satisfies LocalizedText,
      title: {
        fr: "Partagez les informations utiles à votre demande",
        en: "Share the information relevant to your enquiry",
      } satisfies LocalizedText,
      description: {
        fr: "Le formulaire reste volontairement concis afin de faciliter une première prise de contact claire, simple et adaptée à votre contexte.",
        en: "The form is intentionally concise to support a clear, simple first conversation tailored to your context.",
      } satisfies LocalizedText,
    },

    fields: {
      fullName: {
        label: {
          fr: "Nom complet",
          en: "Full name",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Votre nom",
          en: "Your name",
        } satisfies LocalizedText,
      },
      organisation: {
        label: {
          fr: "Organisation",
          en: "Organisation",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Nom de votre organisation",
          en: "Your organisation’s name",
        } satisfies LocalizedText,
      },
      email: {
        label: {
          fr: "Email professionnel",
          en: "Professional email",
        } satisfies LocalizedText,
        placeholder: {
          fr: "nom@organisation.com",
          en: "name@organisation.com",
        } satisfies LocalizedText,
      },
      phone: {
        label: {
          fr: "Téléphone",
          en: "Phone",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Votre numéro de téléphone",
          en: "Your phone number",
        } satisfies LocalizedText,
      },
      country: {
        label: {
          fr: "Pays ou région",
          en: "Country or region",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Votre zone d’intervention",
          en: "Your region",
        } satisfies LocalizedText,
      },
      subject: {
        label: {
          fr: "Objet de la demande",
          en: "Subject of your enquiry",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Sélectionnez un sujet",
          en: "Select a subject",
        } satisfies LocalizedText,
        options: [
          {
            value: "psychosocial-prevention",
            label: {
              fr: "Prévention psychosociale",
              en: "Psychosocial prevention",
            } satisfies LocalizedText,
          },
          {
            value: "international-mobility",
            label: {
              fr: "Mobilité internationale",
              en: "International mobility",
            } satisfies LocalizedText,
          },
          {
            value: "crisis-management",
            label: {
              fr: "Gestion de crise",
              en: "Crisis management",
            } satisfies LocalizedText,
          },
          {
            value: "training",
            label: {
              fr: "Formation ou webinaire",
              en: "Training or webinar",
            } satisfies LocalizedText,
          },
          {
            value: "institutional",
            label: {
              fr: "Demande institutionnelle",
              en: "Institutional enquiry",
            } satisfies LocalizedText,
          },
          {
            value: "other",
            label: {
              fr: "Autre demande",
              en: "Other enquiry",
            } satisfies LocalizedText,
          },
        ] as const satisfies readonly LocalizedOption<string>[],
      },
      message: {
        label: {
          fr: "Message",
          en: "Message",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Décrivez brièvement votre contexte et vos besoins.",
          en: "Briefly describe your context and needs.",
        } satisfies LocalizedText,
        hint: {
          fr: "Quelques phrases suffisent pour nous aider à comprendre votre demande.",
          en: "A few sentences are enough to help us understand your enquiry.",
        } satisfies LocalizedText,
      },
      preferredLanguage: {
        label: {
          fr: "Langue de réponse souhaitée",
          en: "Preferred response language",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Sélectionnez une langue",
          en: "Select a language",
        } satisfies LocalizedText,
        options: [
          {
            value: "fr",
            label: {
              fr: "Français",
              en: "French",
            } satisfies LocalizedText,
          },
          {
            value: "en",
            label: {
              fr: "Anglais",
              en: "English",
            } satisfies LocalizedText,
          },
          {
            value: "it",
            label: {
              fr: "Italien",
              en: "Italian",
            } satisfies LocalizedText,
          },
        ] as const satisfies readonly LocalizedOption<string>[],
      },
      preferredContactMethod: {
        label: {
          fr: "Mode de contact préféré",
          en: "Preferred contact method",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Sélectionnez une option",
          en: "Select an option",
        } satisfies LocalizedText,
        options: [
          {
            value: "email",
            label: {
              fr: "Email",
              en: "Email",
            } satisfies LocalizedText,
          },
          {
            value: "phone",
            label: {
              fr: "Téléphone",
              en: "Phone",
            } satisfies LocalizedText,
          },
          {
            value: "whatsapp",
            label: {
              fr: "WhatsApp",
              en: "WhatsApp",
            } satisfies LocalizedText,
          },
        ] as const satisfies readonly LocalizedOption<string>[],
      },
      consent: {
        label: {
          fr: "J’accepte que les informations transmises soient utilisées afin de répondre à ma demande.",
          en: "I agree that the information submitted may be used to respond to my enquiry.",
        } satisfies LocalizedText,
      },
      companyWebsite: {
        label: {
          fr: "Site internet de votre entreprise",
          en: "Your company website",
        } satisfies LocalizedText,
      },
      crisisContext: {
        label: {
          fr: "Contexte général",
          en: "General context",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Quelques mots sur la situation",
          en: "A few words about the situation",
        } satisfies LocalizedText,
      },
      urgencyLevel: {
        label: {
          fr: "Niveau de priorité",
          en: "Priority level",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Sélectionnez un niveau",
          en: "Select a priority level",
        } satisfies LocalizedText,
        options: [
          {
            value: "information-request",
            label: {
              fr: "Demande d’information",
              en: "Information request",
            } satisfies LocalizedText,
          },
          {
            value: "discuss-soon",
            label: {
              fr: "Besoin d’échange prochainement",
              en: "Would like to discuss soon",
            } satisfies LocalizedText,
          },
          {
            value: "prompt-contact",
            label: {
              fr: "Situation nécessitant une prise de contact rapide",
              en: "Situation requiring prompt contact",
            } satisfies LocalizedText,
          },
        ] as const satisfies readonly LocalizedOption<string>[],
      },
      trainingAudience: {
        label: {
          fr: "Public concerné",
          en: "Audience",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Équipe, managers, direction, etc.",
          en: "Team, managers, leadership, etc.",
        } satisfies LocalizedText,
      },
      estimatedParticipants: {
        label: {
          fr: "Nombre approximatif de participants",
          en: "Estimated number of participants",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Ex. 20 personnes",
          en: "E.g. 20 participants",
        } satisfies LocalizedText,
      },
      trainingFormat: {
        label: {
          fr: "Format envisagé",
          en: "Preferred format",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Sélectionnez un format",
          en: "Select a format",
        } satisfies LocalizedText,
        options: [
          {
            value: "on-site",
            label: {
              fr: "Présentiel",
              en: "On-site",
            } satisfies LocalizedText,
          },
          {
            value: "remote",
            label: {
              fr: "Distanciel",
              en: "Remote",
            } satisfies LocalizedText,
          },
          {
            value: "webinar",
            label: {
              fr: "Webinaire",
              en: "Webinar",
            } satisfies LocalizedText,
          },
          {
            value: "to-be-defined",
            label: {
              fr: "À déterminer",
              en: "To be defined",
            } satisfies LocalizedText,
          },
        ] as const satisfies readonly LocalizedOption<string>[],
      },
      mobilityRegion: {
        label: {
          fr: "Pays ou région concernée",
          en: "Country or region involved",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Zone géographique concernée",
          en: "Relevant geographic area",
        } satisfies LocalizedText,
      },
      mobilityStage: {
        label: {
          fr: "Étape de la mobilité",
          en: "Mobility stage",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Sélectionnez une étape",
          en: "Select a stage",
        } satisfies LocalizedText,
        options: [
          {
            value: "pre-departure",
            label: {
              fr: "Préparation au départ",
              en: "Pre-departure",
            } satisfies LocalizedText,
          },
          {
            value: "in-progress",
            label: {
              fr: "Mission en cours",
              en: "Assignment in progress",
            } satisfies LocalizedText,
          },
          {
            value: "return",
            label: {
              fr: "Retour d’expatriation",
              en: "Return from expatriation",
            } satisfies LocalizedText,
          },
          {
            value: "to-be-defined",
            label: {
              fr: "À déterminer",
              en: "To be defined",
            } satisfies LocalizedText,
          },
        ] as const satisfies readonly LocalizedOption<string>[],
      },
    },

    conditionalSections: {
      crisis: {
        description: {
          fr: "Lorsque le contexte l’exige, vous pouvez ajouter quelques précisions complémentaires afin d’orienter la prise de contact.",
          en: "When relevant, you may add a few optional details to help guide the initial conversation.",
        } satisfies LocalizedText,
      },
    },

    emergencyNote: {
      fr: "Resilience@Work n’est pas un service d’urgence médicale. En cas d’urgence immédiate, contactez les services d’urgence de votre région.",
      en: "Resilience@Work is not a medical emergency service. In case of an immediate emergency, contact your local emergency services.",
    } satisfies LocalizedText,

    validation: {
      fr: {
        fullName: "Veuillez renseigner votre nom.",
        organisation: "Veuillez raccourcir le nom de votre organisation.",
        email: "Veuillez saisir une adresse email valide.",
        phone: "Veuillez saisir un numéro de téléphone valide.",
        country: "Veuillez raccourcir cette indication géographique.",
        subject: "Veuillez préciser l’objet de votre demande.",
        message: "Votre message doit contenir au moins quelques mots.",
        preferredLanguage: "Veuillez sélectionner une langue de réponse.",
        preferredContactMethod: "Veuillez choisir un mode de contact valide.",
        consent:
          "Vous devez accepter l’utilisation de vos informations afin d’envoyer votre demande.",
        crisisContext: "Veuillez raccourcir ce contexte général.",
        urgencyLevel: "Veuillez sélectionner un niveau de priorité valide.",
        trainingAudience: "Veuillez raccourcir le public concerné.",
        estimatedParticipants: "Veuillez raccourcir cette estimation.",
        trainingFormat: "Veuillez sélectionner un format valide.",
        mobilityRegion: "Veuillez raccourcir cette zone concernée.",
        mobilityStage: "Veuillez sélectionner une étape valide.",
      },
      en: {
        fullName: "Please enter your name.",
        organisation: "Please shorten your organisation name.",
        email: "Please enter a valid email address.",
        phone: "Please enter a valid phone number.",
        country: "Please shorten this region entry.",
        subject: "Please select the subject of your enquiry.",
        message: "Your message should contain at least a few words.",
        preferredLanguage: "Please select a preferred response language.",
        preferredContactMethod: "Please choose a valid contact method.",
        consent: "You must agree to the use of your information before submitting your enquiry.",
        crisisContext: "Please shorten this context entry.",
        urgencyLevel: "Please select a valid priority level.",
        trainingAudience: "Please shorten the audience entry.",
        estimatedParticipants: "Please shorten this estimate.",
        trainingFormat: "Please select a valid format.",
        mobilityRegion: "Please shorten this region entry.",
        mobilityStage: "Please select a valid mobility stage.",
      },
    },

    status: {
      success: {
        title: {
          fr: "Votre demande a bien été envoyée.",
          en: "Your enquiry has been sent successfully.",
        } satisfies LocalizedText,
        description: {
          fr: "Merci pour votre message. Nous reviendrons vers vous afin d’échanger sur votre contexte.",
          en: "Thank you for your message. We will get back to you to discuss your context.",
        } satisfies LocalizedText,
      },
      error: {
        title: {
          fr: "Une erreur est survenue.",
          en: "An error occurred.",
        } satisfies LocalizedText,
        description: {
          fr: "Vous pouvez réessayer ou nous contacter directement par email à admin@resilienceatwork.eu.",
          en: "You can try again or contact us directly by email at admin@resilienceatwork.eu.",
        } satisfies LocalizedText,
      },
      rateLimited: {
        title: {
          fr: "Veuillez patienter quelques instants avant d’envoyer une nouvelle demande.",
          en: "Please wait a moment before submitting another enquiry.",
        } satisfies LocalizedText,
        description: {
          fr: "Vous pouvez également utiliser WhatsApp, le téléphone ou l’email direct si nécessaire.",
          en: "You may also use WhatsApp, phone or direct email if needed.",
        } satisfies LocalizedText,
      },
    },

    submitLabel: {
      default: {
        fr: "Envoyer ma demande",
        en: "Send my enquiry",
      } satisfies LocalizedText,
      loading: {
        fr: "Envoi en cours...",
        en: "Sending...",
      } satisfies LocalizedText,
    },

    submitNote: {
      fr: "Vos informations sont utilisées uniquement pour répondre à votre demande.",
      en: "Your information is used only to respond to your enquiry.",
    } satisfies LocalizedText,

    sensitiveDataNote: {
      fr: "Pour préserver votre confidentialité, évitez de transmettre des informations médicales détaillées ou des données personnelles sensibles qui ne sont pas nécessaires à l’examen initial de votre demande.",
      en: "To protect your privacy, please avoid sharing detailed medical information or sensitive personal data that is not necessary for the initial review of your enquiry.",
    } satisfies LocalizedText,

    privacyNotice: {
      text: {
        fr: "Les informations transmises sont utilisées uniquement afin de répondre à votre demande. Pour en savoir plus, consultez notre",
        en: "The information submitted is used solely to respond to your enquiry. For more information, read our",
      } satisfies LocalizedText,
      linkLabel: {
        fr: "politique de confidentialité",
        en: "privacy policy",
      } satisfies LocalizedText,
    },
  },

  directContact: {
    eyebrow: {
      fr: "Contact direct",
      en: "Direct contact",
    } satisfies LocalizedText,
    title: {
      fr: "Contacter Resilience@Work par le canal qui vous convient",
      en: "Reach Resilience@Work through the channel that suits you best",
    } satisfies LocalizedText,
    description: {
      fr: "Vous pouvez également joindre directement Jocelyne Katshinda par WhatsApp, téléphone, email ou enregistrer sa fiche contact.",
      en: "You may also contact Jocelyne Katshinda directly via WhatsApp, phone, email or by saving the contact card.",
    } satisfies LocalizedText,
    personName: "Jocelyne Katshinda",
    role: {
      fr: "Fondatrice et Administratrice générale",
      en: "Founder and Managing Director",
    } satisfies LocalizedText,
    actions: directContactActions,
  },

  quickActions: {
    eyebrow: {
      fr: "Actions rapides",
      en: "Quick actions",
    } satisfies LocalizedText,
    title: {
      fr: "Des options simples, pensées pour un usage mobile",
      en: "Simple options designed for mobile use",
    } satisfies LocalizedText,
    description: {
      fr: "Utilisez le canal le plus adapté à votre contexte, selon que vous préfériez écrire, appeler ou démarrer une conversation directe.",
      en: "Use the channel that best fits your context, whether you prefer to write, call or start a direct conversation.",
    } satisfies LocalizedText,
    actions: quickActionDefinitions,
  },

  delivery: {
    eyebrow: {
      fr: "Modalités d’intervention",
      en: "Support modalities",
    } satisfies LocalizedText,
    title: {
      fr: "Des interventions adaptées à votre contexte",
      en: "Support adapted to your context",
    } satisfies LocalizedText,
    items: [
      {
        id: "formats",
        label: {
          fr: "Formats",
          en: "Delivery formats",
        } satisfies LocalizedText,
        value: {
          fr: "Présentiel et distanciel",
          en: "On-site and remote",
        } satisfies LocalizedText,
      },
      {
        id: "languages",
        label: {
          fr: "Langues de prestation",
          en: "Service languages",
        } satisfies LocalizedText,
        value: {
          fr: "Français · Anglais · Italien",
          en: "French · English · Italian",
        } satisfies LocalizedText,
      },
      {
        id: "regions",
        label: {
          fr: "Zones d’intervention",
          en: "Regions",
        } satisfies LocalizedText,
        value: {
          fr: "Afrique · Europe · Moyen-Orient",
          en: "Africa · Europe · Middle East",
        } satisfies LocalizedText,
      },
    ] as const,
  },

  faq: {
    eyebrow: {
      fr: "FAQ contact",
      en: "Contact FAQ",
    } satisfies LocalizedText,
    title: {
      fr: "Quelques repères utiles avant de nous écrire",
      en: "A few useful pointers before you write to us",
    } satisfies LocalizedText,
    description: {
      fr: "Des réponses courtes pour clarifier le type de demande, les modalités d’intervention et le cadre de cette prise de contact.",
      en: "Short answers to clarify the type of enquiry, delivery formats and the scope of this initial conversation.",
    } satisfies LocalizedText,
    items: [
      {
        id: "types",
        question: {
          fr: "Quels types de demandes puis-je transmettre ?",
          en: "What types of enquiries can I submit?",
        } satisfies LocalizedText,
        answer: {
          fr: "Vous pouvez nous contacter pour échanger sur la prévention psychosociale, la mobilité internationale, la gestion de crise, les formations ou les besoins spécifiques de votre organisation.",
          en: "You can contact us to discuss psychosocial prevention, international mobility, crisis management, training or your organisation’s specific needs.",
        } satisfies LocalizedText,
      },
      {
        id: "remote",
        question: {
          fr: "Les interventions sont-elles proposées à distance ?",
          en: "Are services available remotely?",
        } satisfies LocalizedText,
        answer: {
          fr: "Oui. Les prestations peuvent être proposées en présentiel ou à distance selon le contexte et les besoins de l’organisation.",
          en: "Yes. Services may be delivered on-site or remotely depending on the context and the organisation’s needs.",
        } satisfies LocalizedText,
      },
      {
        id: "languages",
        question: {
          fr: "Dans quelles langues pouvez-vous intervenir ?",
          en: "Which languages are available?",
        } satisfies LocalizedText,
        answer: {
          fr: "Les prestations sont proposées en français, en anglais et en italien.",
          en: "Services are available in French, English and Italian.",
        } satisfies LocalizedText,
      },
      {
        id: "emergency",
        question: {
          fr: "Resilience@Work est-il un service d’urgence ?",
          en: "Is Resilience@Work an emergency service?",
        } satisfies LocalizedText,
        answer: {
          fr: "Non. Resilience@Work n’est pas un service d’urgence médicale. En cas d’urgence immédiate, contactez les services d’urgence de votre région.",
          en: "No. Resilience@Work is not a medical emergency service. In case of an immediate emergency, contact your local emergency services.",
        } satisfies LocalizedText,
      },
    ] as const,
  },

  whatsAppCta: {
    eyebrow: {
      fr: "Alternative WhatsApp",
      en: "WhatsApp alternative",
    } satisfies LocalizedText,
    title: {
      fr: "Vous préférez échanger directement ?",
      en: "Would you prefer to connect directly?",
    } satisfies LocalizedText,
    description: {
      fr: "Contactez-nous sur WhatsApp pour présenter brièvement votre besoin.",
      en: "Contact us on WhatsApp to briefly describe your needs.",
    } satisfies LocalizedText,
    action: {
      label: {
        fr: "Échanger sur WhatsApp",
        en: "Chat on WhatsApp",
      } satisfies LocalizedText,
    },
  },

  seo: {
    title: {
      fr: "Contact | Resilience@Work",
      en: "Contact | Resilience@Work",
    } satisfies LocalizedText,
    description: {
      fr: "Contactez Resilience@Work pour échanger sur les besoins de votre organisation : prévention psychosociale, mobilité internationale, gestion de crise ou formation.",
      en: "Contact Resilience@Work to discuss your organisation’s needs: psychosocial prevention, international mobility, crisis management or training.",
    } satisfies LocalizedText,
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },
} as const;
