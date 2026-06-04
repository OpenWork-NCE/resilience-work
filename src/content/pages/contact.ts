import type { Locale } from "@/types/content";

export const contactPage = {
  hero: {
    eyebrow: {
      fr: "Contact",
      en: "Contact",
    } satisfies Record<Locale, string>,
    title: {
      fr: "Échangeons sur les besoins de votre organisation.",
      en: "Let's discuss your organisation's needs.",
    } satisfies Record<Locale, string>,
    description: {
      fr: "Présentez-nous votre contexte afin que nous puissions identifier la forme d'accompagnement la plus adaptée.",
      en: "Tell us about your context so that we can identify the most appropriate form of support.",
    } satisfies Record<Locale, string>,
  },

  contactDetails: {
    name: "Jocelyne Katshinda",
    role: {
      fr: "Fondatrice & Administratrice générale",
      en: "Founder & Managing Director",
    } satisfies Record<Locale, string>,
    phone: "+32 470 542 390",
    email: "admin@resilienceatwork.eu",
  },

  form: {
    fields: [
      {
        id: "fullName",
        type: "text" as const,
        required: true,
        label: {
          fr: "Nom complet",
          en: "Full name",
        } satisfies Record<Locale, string>,
        placeholder: {
          fr: "Votre nom",
          en: "Your name",
        } satisfies Record<Locale, string>,
      },
      {
        id: "organisation",
        type: "text" as const,
        required: false,
        label: {
          fr: "Organisation",
          en: "Organisation",
        } satisfies Record<Locale, string>,
        placeholder: {
          fr: "Nom de votre organisation",
          en: "Your organisation's name",
        } satisfies Record<Locale, string>,
      },
      {
        id: "email",
        type: "email" as const,
        required: true,
        label: {
          fr: "Email professionnel",
          en: "Professional email",
        } satisfies Record<Locale, string>,
        placeholder: {
          fr: "nom@organisation.com",
          en: "name@organisation.com",
        } satisfies Record<Locale, string>,
      },
      {
        id: "phone",
        type: "tel" as const,
        required: false,
        label: {
          fr: "Téléphone",
          en: "Phone number",
        } satisfies Record<Locale, string>,
        placeholder: {
          fr: "Votre numéro de téléphone",
          en: "Your phone number",
        } satisfies Record<Locale, string>,
      },
      {
        id: "country",
        type: "text" as const,
        required: false,
        label: {
          fr: "Pays",
          en: "Country",
        } satisfies Record<Locale, string>,
        placeholder: {
          fr: "Votre pays",
          en: "Your country",
        } satisfies Record<Locale, string>,
      },
      {
        id: "subject",
        type: "select" as const,
        required: true,
        label: {
          fr: "Objet de votre demande",
          en: "How can we help?",
        } satisfies Record<Locale, string>,
        options: [
          {
            value: "psychosocial-prevention",
            label: {
              fr: "Prévention psychosociale",
              en: "Psychosocial prevention",
            } satisfies Record<Locale, string>,
          },
          {
            value: "international-mobility",
            label: {
              fr: "Mobilité internationale",
              en: "International mobility",
            } satisfies Record<Locale, string>,
          },
          {
            value: "crisis-management",
            label: {
              fr: "Gestion de crise",
              en: "Crisis management",
            } satisfies Record<Locale, string>,
          },
          {
            value: "training",
            label: {
              fr: "Formation ou webinaire",
              en: "Training or webinar",
            } satisfies Record<Locale, string>,
          },
          {
            value: "other",
            label: {
              fr: "Autre demande",
              en: "Other enquiry",
            } satisfies Record<Locale, string>,
          },
        ],
      },
      {
        id: "message",
        type: "textarea" as const,
        required: true,
        label: {
          fr: "Votre message",
          en: "Your message",
        } satisfies Record<Locale, string>,
        placeholder: {
          fr: "Décrivez brièvement votre contexte et vos besoins.",
          en: "Briefly describe your context and needs.",
        } satisfies Record<Locale, string>,
      },
    ] as const,

    submitLabel: {
      fr: "Envoyer ma demande",
      en: "Send my enquiry",
    } satisfies Record<Locale, string>,

    consentLabel: {
      fr: "J'accepte que les informations transmises soient utilisées afin de répondre à ma demande.",
      en: "I agree that the information submitted may be used to respond to my enquiry.",
    } satisfies Record<Locale, string>,

    successMessage: {
      fr: "Votre demande a bien été envoyée. Nous vous répondrons dans les meilleurs délais.",
      en: "Your enquiry has been sent successfully. We will respond as soon as possible.",
    } satisfies Record<Locale, string>,

    errorMessage: {
      fr: "Une erreur est survenue. Vous pouvez également nous contacter directement par email.",
      en: "An error occurred. You can also contact us directly by email.",
    } satisfies Record<Locale, string>,
  },
} as const;
