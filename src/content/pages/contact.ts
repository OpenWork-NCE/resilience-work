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
      it: "Contattaci su WhatsApp",
    },
    description: {
      fr: "Présenter brièvement votre besoin",
      en: "Briefly describe your needs",
      it: "Descrivi brevemente la tua esigenza",
    },
  },
  {
    id: "phone",
    href: brand.contact.phoneHref,
    label: {
      fr: "Appeler",
      en: "Call",
      it: "Chiama",
    },
    description: {
      fr: "Joindre directement Resilience@Work",
      en: "Reach Resilience@Work directly",
      it: "Contatta direttamente Resilience@Work",
    },
  },
  {
    id: "email",
    href: brand.contact.emailHref,
    label: {
      fr: "Envoyer un email",
      en: "Send an email",
      it: "Invia un’email",
    },
    description: {
      fr: "Transmettre une demande écrite",
      en: "Send a written enquiry",
      it: "Invia una richiesta scritta",
    },
  },
  {
    id: "website",
    href: `https://${brand.domain}`,
    external: true,
    label: {
      fr: "Visiter le site",
      en: "Visit the website",
      it: "Visita il sito",
    },
    description: {
      fr: "Explorer Resilience@Work",
      en: "Explore Resilience@Work",
      it: "Scopri Resilience@Work",
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
      it: "WhatsApp",
    },
    description: {
      fr: "Ouvrir une conversation directe",
      en: "Open a direct conversation",
      it: "Apri una conversazione diretta",
    },
  },
  {
    id: "phone",
    href: brand.contact.phoneHref,
    label: {
      fr: "Appeler",
      en: "Call",
      it: "Chiama",
    },
    description: {
      fr: "Joindre directement par téléphone",
      en: "Reach out directly by phone",
      it: "Contatta direttamente per telefono",
    },
  },
  {
    id: "email",
    href: brand.contact.emailHref,
    label: {
      fr: "Envoyer un email",
      en: "Send an email",
      it: "Invia un’email",
    },
    description: {
      fr: "Envoyer un message professionnel",
      en: "Send a professional message",
      it: "Invia un messaggio professionale",
    },
  },
  {
    id: "vcard",
    href: "/contact/jocelyne-katshinda.vcf",
    download: "jocelyne-katshinda.vcf",
    label: {
      fr: "Enregistrer le contact",
      en: "Save contact",
      it: "Salva il contatto",
    },
    description: {
      fr: "Télécharger la fiche contact",
      en: "Download the contact card",
      it: "Scarica la scheda contatto",
    },
  },
] as const;

export const contactPage = {
  hero: {
    eyebrow: {
      fr: "Contact",
      en: "Contact",
      it: "Contatto",
    } satisfies LocalizedText,
    title: {
      fr: "Échangeons sur les besoins de votre organisation.",
      en: "Let’s discuss your organisation’s needs.",
      it: "Parliamo delle esigenze della vostra organizzazione.",
    } satisfies LocalizedText,
    description: {
      fr: "Présentez-nous votre contexte afin que nous puissions identifier la forme d’accompagnement la plus adaptée.",
      en: "Tell us about your context so that we can identify the most appropriate form of support.",
      it: "Presentateci il vostro contesto affinché possiamo individuare la forma di accompagnamento più adatta.",
    } satisfies LocalizedText,
    supportingText: {
      fr: "Support post-incident, crise en mobilité internationale, formation ou workshop : transmettez-nous l’essentiel de votre demande.",
      en: "Post-incident support, crisis in international mobility, training or workshop: share the essentials of your enquiry.",
      it: "Supporto post-incidente, crisi in mobilità internazionale, formazione o workshop: trasmetteteci l’essenziale della vostra richiesta.",
    } satisfies LocalizedText,
    trustSignals: [
      {
        id: "confidential",
        label: {
          fr: "Confidentiel",
          en: "Confidential",
          it: "Confidenziale",
        } satisfies LocalizedText,
        description: {
          fr: "Cadre discret, adapté aux situations sensibles.",
          en: "A discreet framework suited to sensitive situations.",
          it: "Un quadro discreto, adatto a situazioni sensibili.",
        } satisfies LocalizedText,
      },
      {
        id: "response",
        label: {
          fr: "Réponse soignée",
          en: "Careful response",
          it: "Risposta attenta",
        } satisfies LocalizedText,
        description: {
          fr: "Chaque demande est lue et orientée avec attention.",
          en: "Each enquiry is reviewed and directed carefully.",
          it: "Ogni richiesta viene letta e orientata con attenzione.",
        } satisfies LocalizedText,
      },
      {
        id: "channels",
        label: {
          fr: "Plusieurs canaux",
          en: "Multiple channels",
          it: "Più canali",
        } satisfies LocalizedText,
        description: {
          fr: "Formulaire, email, téléphone ou WhatsApp.",
          en: "Form, email, phone or WhatsApp.",
          it: "Modulo, email, telefono o WhatsApp.",
        } satisfies LocalizedText,
      },
    ] as const,
  },

  reassurance: {
    title: {
      fr: "Une approche humaine, confidentielle et pragmatique",
      en: "A human, confidential and pragmatic approach",
      it: "Un approccio umano, confidenziale e pragmatico",
    } satisfies LocalizedText,
    description: {
      fr: "Chaque demande est examinée avec attention afin d’identifier une réponse adaptée au contexte de votre organisation.",
      en: "Each enquiry is reviewed carefully to identify a response suited to your organisation’s context.",
      it: "Ogni richiesta viene esaminata con attenzione al fine di individuare una risposta adatta al contesto della vostra organizzazione.",
    } satisfies LocalizedText,
  },

  form: {
    section: {
      eyebrow: {
        fr: "Formulaire",
        en: "Form",
        it: "Modulo",
      } satisfies LocalizedText,
      title: {
        fr: "Partagez les informations utiles à votre demande",
        en: "Share the information relevant to your enquiry",
        it: "Condividete le informazioni utili alla vostra richiesta",
      } satisfies LocalizedText,
      description: {
        fr: "Le formulaire reste volontairement concis afin de faciliter une première prise de contact claire, simple et adaptée à votre contexte.",
        en: "The form is intentionally concise to support a clear, simple first conversation tailored to your context.",
        it: "Il modulo resta volutamente conciso per facilitare un primo contatto chiaro, semplice e adatto al vostro contesto.",
      } satisfies LocalizedText,
    },

    groups: {
      identity: {
        title: {
          fr: "Vos coordonnées",
          en: "Your details",
          it: "I vostri dati",
        } satisfies LocalizedText,
        description: {
          fr: "Les informations nécessaires pour vous recontacter.",
          en: "The essentials we need to get back to you.",
          it: "Le informazioni necessarie per ricontattarvi.",
        } satisfies LocalizedText,
      },
      request: {
        title: {
          fr: "Votre demande",
          en: "Your enquiry",
          it: "La vostra richiesta",
        } satisfies LocalizedText,
        description: {
          fr: "Précisez le sujet et le contexte utile.",
          en: "Share the subject and useful context.",
          it: "Indicate l’oggetto e il contesto utile.",
        } satisfies LocalizedText,
      },
      preferences: {
        title: {
          fr: "Préférences de réponse",
          en: "Response preferences",
          it: "Preferenze di risposta",
        } satisfies LocalizedText,
        description: {
          fr: "Indiquez comment et dans quelle langue nous répondre.",
          en: "Tell us how and in which language to respond.",
          it: "Indicate come e in quale lingua rispondervi.",
        } satisfies LocalizedText,
      },
    },

    errorSummary: {
      title: {
        fr: "Veuillez corriger les éléments suivants",
        en: "Please correct the following items",
        it: "Vi preghiamo di correggere i seguenti elementi",
      } satisfies LocalizedText,
      description: {
        fr: "Certains champs requis sont incomplets ou invalides.",
        en: "Some required fields are incomplete or invalid.",
        it: "Alcuni campi obbligatori sono incompleti o non validi.",
      } satisfies LocalizedText,
    },

    successActions: {
      title: {
        fr: "Besoin d’un échange plus direct ?",
        en: "Need a more direct conversation?",
        it: "Preferite un contatto più diretto?",
      } satisfies LocalizedText,
      whatsapp: {
        fr: "Continuer sur WhatsApp",
        en: "Continue on WhatsApp",
        it: "Continua su WhatsApp",
      } satisfies LocalizedText,
      email: {
        fr: "Écrire par email",
        en: "Write by email",
        it: "Scrivi via email",
      } satisfies LocalizedText,
      reset: {
        fr: "Envoyer une autre demande",
        en: "Send another enquiry",
        it: "Invia un’altra richiesta",
      } satisfies LocalizedText,
    },

    fields: {
      fullName: {
        label: {
          fr: "Nom complet",
          en: "Full name",
          it: "Nome e cognome",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Votre nom",
          en: "Your name",
          it: "Il vostro nome",
        } satisfies LocalizedText,
      },
      organisation: {
        label: {
          fr: "Organisation",
          en: "Organisation",
          it: "Organizzazione",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Nom de votre organisation",
          en: "Your organisation’s name",
          it: "Nome della vostra organizzazione",
        } satisfies LocalizedText,
      },
      email: {
        label: {
          fr: "Email professionnel",
          en: "Professional email",
          it: "Email professionale",
        } satisfies LocalizedText,
        placeholder: {
          fr: "nom@organisation.com",
          en: "name@organisation.com",
          it: "nome@organizzazione.com",
        } satisfies LocalizedText,
      },
      phone: {
        label: {
          fr: "Téléphone",
          en: "Phone",
          it: "Telefono",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Votre numéro de téléphone",
          en: "Your phone number",
          it: "Il vostro numero di telefono",
        } satisfies LocalizedText,
      },
      country: {
        label: {
          fr: "Pays ou région",
          en: "Country or region",
          it: "Paese o regione",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Votre zone d’intervention",
          en: "Your region",
          it: "La vostra area di intervento",
        } satisfies LocalizedText,
      },
      subject: {
        label: {
          fr: "Objet de la demande",
          en: "Subject of your enquiry",
          it: "Oggetto della richiesta",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Sélectionnez un sujet",
          en: "Select a subject",
          it: "Selezionate un oggetto",
        } satisfies LocalizedText,
        options: [
          {
            value: "psychosocial-prevention",
            label: {
              fr: "Support psychologique post-incident",
              en: "Post-incident psychological support",
              it: "Supporto psicologico post-incidente",
            } satisfies LocalizedText,
          },
          {
            value: "crisis-management",
            label: {
              fr: "Crise et mobilité internationale",
              en: "Crisis and international mobility",
              it: "Crisi e mobilità internazionale",
            } satisfies LocalizedText,
          },
          {
            value: "training",
            label: {
              fr: "Formation ou workshop",
              en: "Training or workshop",
              it: "Formazione o workshop",
            } satisfies LocalizedText,
          },
          {
            value: "institutional",
            label: {
              fr: "Demande institutionnelle",
              en: "Institutional enquiry",
              it: "Richiesta istituzionale",
            } satisfies LocalizedText,
          },
          {
            value: "other",
            label: {
              fr: "Autre demande",
              en: "Other enquiry",
              it: "Altra richiesta",
            } satisfies LocalizedText,
          },
        ] as const satisfies readonly LocalizedOption<string>[],
      },
      message: {
        label: {
          fr: "Message",
          en: "Message",
          it: "Messaggio",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Décrivez brièvement votre contexte et vos besoins.",
          en: "Briefly describe your context and needs.",
          it: "Descrivete brevemente il vostro contesto e le vostre esigenze.",
        } satisfies LocalizedText,
        hint: {
          fr: "Quelques phrases suffisent pour nous aider à comprendre votre demande.",
          en: "A few sentences are enough to help us understand your enquiry.",
          it: "Bastano poche frasi per aiutarci a comprendere la vostra richiesta.",
        } satisfies LocalizedText,
      },
      preferredLanguage: {
        label: {
          fr: "Langue de réponse souhaitée",
          en: "Preferred response language",
          it: "Lingua di risposta preferita",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Sélectionnez une langue",
          en: "Select a language",
          it: "Selezionate una lingua",
        } satisfies LocalizedText,
        options: [
          {
            value: "fr",
            label: {
              fr: "Français",
              en: "French",
              it: "Francese",
            } satisfies LocalizedText,
          },
          {
            value: "en",
            label: {
              fr: "Anglais",
              en: "English",
              it: "Inglese",
            } satisfies LocalizedText,
          },
          {
            value: "it",
            label: {
              fr: "Italien",
              en: "Italian",
              it: "Italiano",
            } satisfies LocalizedText,
          },
        ] as const satisfies readonly LocalizedOption<string>[],
      },
      preferredContactMethod: {
        label: {
          fr: "Mode de contact préféré",
          en: "Preferred contact method",
          it: "Modalità di contatto preferita",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Sélectionnez une option",
          en: "Select an option",
          it: "Selezionate un’opzione",
        } satisfies LocalizedText,
        options: [
          {
            value: "email",
            label: {
              fr: "Email",
              en: "Email",
              it: "Email",
            } satisfies LocalizedText,
          },
          {
            value: "phone",
            label: {
              fr: "Téléphone",
              en: "Phone",
              it: "Telefono",
            } satisfies LocalizedText,
          },
          {
            value: "whatsapp",
            label: {
              fr: "WhatsApp",
              en: "WhatsApp",
              it: "WhatsApp",
            } satisfies LocalizedText,
          },
        ] as const satisfies readonly LocalizedOption<string>[],
      },
      consent: {
        label: {
          fr: "J’accepte que les informations transmises soient utilisées afin de répondre à ma demande.",
          en: "I agree that the information submitted may be used to respond to my enquiry.",
          it: "Accetto che le informazioni trasmesse siano utilizzate per rispondere alla mia richiesta.",
        } satisfies LocalizedText,
      },
      companyWebsite: {
        label: {
          fr: "Site internet de votre entreprise",
          en: "Your company website",
          it: "Sito web della vostra azienda",
        } satisfies LocalizedText,
      },
      crisisContext: {
        label: {
          fr: "Contexte général",
          en: "General context",
          it: "Contesto generale",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Quelques mots sur la situation",
          en: "A few words about the situation",
          it: "Qualche parola sulla situazione",
        } satisfies LocalizedText,
      },
      urgencyLevel: {
        label: {
          fr: "Niveau de priorité",
          en: "Priority level",
          it: "Livello di priorità",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Sélectionnez un niveau",
          en: "Select a priority level",
          it: "Selezionate un livello",
        } satisfies LocalizedText,
        options: [
          {
            value: "information-request",
            label: {
              fr: "Demande d’information",
              en: "Information request",
              it: "Richiesta di informazioni",
            } satisfies LocalizedText,
          },
          {
            value: "discuss-soon",
            label: {
              fr: "Besoin d’échange prochainement",
              en: "Would like to discuss soon",
              it: "Necessità di un confronto a breve",
            } satisfies LocalizedText,
          },
          {
            value: "prompt-contact",
            label: {
              fr: "Situation nécessitant une prise de contact rapide",
              en: "Situation requiring prompt contact",
              it: "Situazione che richiede un contatto rapido",
            } satisfies LocalizedText,
          },
        ] as const satisfies readonly LocalizedOption<string>[],
      },
      trainingAudience: {
        label: {
          fr: "Public concerné",
          en: "Audience",
          it: "Pubblico interessato",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Équipe, managers, direction, etc.",
          en: "Team, managers, leadership, etc.",
          it: "Team, manager, direzione, ecc.",
        } satisfies LocalizedText,
      },
      estimatedParticipants: {
        label: {
          fr: "Nombre approximatif de participants",
          en: "Estimated number of participants",
          it: "Numero approssimativo di partecipanti",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Ex. 20 personnes",
          en: "E.g. 20 participants",
          it: "Es. 20 persone",
        } satisfies LocalizedText,
      },
      trainingFormat: {
        label: {
          fr: "Format envisagé",
          en: "Preferred format",
          it: "Formato previsto",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Sélectionnez un format",
          en: "Select a format",
          it: "Selezionate un formato",
        } satisfies LocalizedText,
        options: [
          {
            value: "on-site",
            label: {
              fr: "Présentiel",
              en: "On-site",
              it: "In presenza",
            } satisfies LocalizedText,
          },
          {
            value: "remote",
            label: {
              fr: "Distanciel",
              en: "Remote",
              it: "A distanza",
            } satisfies LocalizedText,
          },
          {
            value: "webinar",
            label: {
              fr: "Webinaire",
              en: "Webinar",
              it: "Webinar",
            } satisfies LocalizedText,
          },
          {
            value: "to-be-defined",
            label: {
              fr: "À déterminer",
              en: "To be defined",
              it: "Da definire",
            } satisfies LocalizedText,
          },
        ] as const satisfies readonly LocalizedOption<string>[],
      },
      mobilityRegion: {
        label: {
          fr: "Pays ou région concernée",
          en: "Country or region involved",
          it: "Paese o regione interessata",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Zone géographique concernée",
          en: "Relevant geographic area",
          it: "Area geografica interessata",
        } satisfies LocalizedText,
      },
      mobilityStage: {
        label: {
          fr: "Étape de la mobilité",
          en: "Mobility stage",
          it: "Fase della mobilità",
        } satisfies LocalizedText,
        placeholder: {
          fr: "Sélectionnez une étape",
          en: "Select a stage",
          it: "Selezionate una fase",
        } satisfies LocalizedText,
        options: [
          {
            value: "pre-departure",
            label: {
              fr: "Préparation au départ",
              en: "Pre-departure",
              it: "Preparazione alla partenza",
            } satisfies LocalizedText,
          },
          {
            value: "in-progress",
            label: {
              fr: "Mission en cours",
              en: "Assignment in progress",
              it: "Missione in corso",
            } satisfies LocalizedText,
          },
          {
            value: "return",
            label: {
              fr: "Retour d’expatriation",
              en: "Return from expatriation",
              it: "Rientro dall’espatrio",
            } satisfies LocalizedText,
          },
          {
            value: "to-be-defined",
            label: {
              fr: "À déterminer",
              en: "To be defined",
              it: "Da definire",
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
          it: "Quando il contesto lo richiede, potete aggiungere alcune precisazioni complementari per orientare il contatto.",
        } satisfies LocalizedText,
      },
    },

    emergencyNote: {
      fr: "Resilience@Work n’est pas un service d’urgence médicale. En cas d’urgence immédiate, contactez les services d’urgence de votre région.",
      en: "Resilience@Work is not a medical emergency service. In case of an immediate emergency, contact your local emergency services.",
      it: "Resilience@Work non è un servizio di emergenza medica. In caso di emergenza immediata, contattate i servizi di emergenza della vostra zona.",
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
      it: {
        fullName: "Vi preghiamo di inserire il vostro nome.",
        organisation: "Vi preghiamo di accorciare il nome della vostra organizzazione.",
        email: "Vi preghiamo di inserire un indirizzo email valido.",
        phone: "Vi preghiamo di inserire un numero di telefono valido.",
        country: "Vi preghiamo di accorciare questa indicazione geografica.",
        subject: "Vi preghiamo di precisare l’oggetto della vostra richiesta.",
        message: "Il vostro messaggio deve contenere almeno alcune parole.",
        preferredLanguage: "Vi preghiamo di selezionare una lingua di risposta.",
        preferredContactMethod: "Vi preghiamo di scegliere una modalità di contatto valida.",
        consent:
          "Dovete accettare l’utilizzo delle vostre informazioni per inviare la richiesta.",
        crisisContext: "Vi preghiamo di accorciare questo contesto generale.",
        urgencyLevel: "Vi preghiamo di selezionare un livello di priorità valido.",
        trainingAudience: "Vi preghiamo di accorciare il pubblico interessato.",
        estimatedParticipants: "Vi preghiamo di accorciare questa stima.",
        trainingFormat: "Vi preghiamo di selezionare un formato valido.",
        mobilityRegion: "Vi preghiamo di accorciare quest’area interessata.",
        mobilityStage: "Vi preghiamo di selezionare una fase valida.",
      },
    },

    status: {
      success: {
        title: {
          fr: "Votre demande a bien été envoyée.",
          en: "Your enquiry has been sent successfully.",
          it: "La vostra richiesta è stata inviata correttamente.",
        } satisfies LocalizedText,
        description: {
          fr: "Merci pour votre message. Nous reviendrons vers vous afin d’échanger sur votre contexte.",
          en: "Thank you for your message. We will get back to you to discuss your context.",
          it: "Grazie per il vostro messaggio. Vi ricontatteremo per confrontarci sul vostro contesto.",
        } satisfies LocalizedText,
      },
      error: {
        title: {
          fr: "Une erreur est survenue.",
          en: "An error occurred.",
          it: "Si è verificato un errore.",
        } satisfies LocalizedText,
        description: {
          fr: "Vous pouvez réessayer ou nous contacter directement par email à admin@resilienceatwork.eu.",
          en: "You can try again or contact us directly by email at admin@resilienceatwork.eu.",
          it: "Potete riprovare o contattarci direttamente via email all’indirizzo admin@resilienceatwork.eu.",
        } satisfies LocalizedText,
      },
      rateLimited: {
        title: {
          fr: "Veuillez patienter quelques instants avant d’envoyer une nouvelle demande.",
          en: "Please wait a moment before submitting another enquiry.",
          it: "Vi preghiamo di attendere qualche istante prima di inviare una nuova richiesta.",
        } satisfies LocalizedText,
        description: {
          fr: "Vous pouvez également utiliser WhatsApp, le téléphone ou l’email direct si nécessaire.",
          en: "You may also use WhatsApp, phone or direct email if needed.",
          it: "Se necessario, potete anche utilizzare WhatsApp, il telefono o l’email diretta.",
        } satisfies LocalizedText,
      },
    },

    submitLabel: {
      default: {
        fr: "Envoyer ma demande",
        en: "Send my enquiry",
        it: "Invia la mia richiesta",
      } satisfies LocalizedText,
      loading: {
        fr: "Envoi en cours...",
        en: "Sending...",
        it: "Invio in corso...",
      } satisfies LocalizedText,
    },

    submitNote: {
      fr: "Vos informations sont utilisées uniquement pour répondre à votre demande.",
      en: "Your information is used only to respond to your enquiry.",
      it: "Le vostre informazioni sono utilizzate esclusivamente per rispondere alla vostra richiesta.",
    } satisfies LocalizedText,

    sensitiveDataNote: {
      fr: "Pour préserver votre confidentialité, évitez de transmettre des informations médicales détaillées ou des données personnelles sensibles qui ne sont pas nécessaires à l’examen initial de votre demande.",
      en: "To protect your privacy, please avoid sharing detailed medical information or sensitive personal data that is not necessary for the initial review of your enquiry.",
      it: "Per tutelare la vostra riservatezza, evitate di trasmettere informazioni mediche dettagliate o dati personali sensibili non necessari all’esame iniziale della vostra richiesta.",
    } satisfies LocalizedText,

    privacyNotice: {
      text: {
        fr: "Les informations transmises sont utilisées uniquement afin de répondre à votre demande. Pour en savoir plus, consultez notre",
        en: "The information submitted is used solely to respond to your enquiry. For more information, read our",
        it: "Le informazioni trasmesse sono utilizzate esclusivamente per rispondere alla vostra richiesta. Per saperne di più, consultate la nostra",
      } satisfies LocalizedText,
      linkLabel: {
        fr: "politique de confidentialité",
        en: "privacy policy",
        it: "informativa sulla privacy",
      } satisfies LocalizedText,
    },
  },

  directContact: {
    eyebrow: {
      fr: "Contact direct",
      en: "Direct contact",
      it: "Contatto diretto",
    } satisfies LocalizedText,
    title: {
      fr: "Contacter Resilience@Work par le canal qui vous convient",
      en: "Reach Resilience@Work through the channel that suits you best",
      it: "Contattate Resilience@Work attraverso il canale più adatto a voi",
    } satisfies LocalizedText,
    description: {
      fr: "Vous pouvez également joindre directement Jocelyne Katshinda par WhatsApp, téléphone, email ou enregistrer sa fiche contact.",
      en: "You may also contact Jocelyne Katshinda directly via WhatsApp, phone, email or by saving the contact card.",
      it: "Potete anche contattare direttamente Jocelyne Katshinda via WhatsApp, telefono, email o salvando la sua scheda contatto.",
    } satisfies LocalizedText,
    personName: "Jocelyne Katshinda",
    role: {
      fr: "Fondatrice et Administratrice générale",
      en: "Founder and Managing Director",
      it: "Fondatrice e Amministratrice generale",
    } satisfies LocalizedText,
    actions: directContactActions,
  },

  quickActions: {
    eyebrow: {
      fr: "Actions rapides",
      en: "Quick actions",
      it: "Azioni rapide",
    } satisfies LocalizedText,
    title: {
      fr: "Des options simples, pensées pour un usage mobile",
      en: "Simple options designed for mobile use",
      it: "Opzioni semplici, pensate per l’uso da mobile",
    } satisfies LocalizedText,
    description: {
      fr: "Utilisez le canal le plus adapté à votre contexte, selon que vous préfériez écrire, appeler ou démarrer une conversation directe.",
      en: "Use the channel that best fits your context, whether you prefer to write, call or start a direct conversation.",
      it: "Utilizzate il canale più adatto al vostro contesto, a seconda che preferiate scrivere, chiamare o avviare una conversazione diretta.",
    } satisfies LocalizedText,
    actions: quickActionDefinitions,
  },

  delivery: {
    eyebrow: {
      fr: "Modalités d’intervention",
      en: "Support modalities",
      it: "Modalità di intervento",
    } satisfies LocalizedText,
    title: {
      fr: "Des interventions adaptées à votre contexte",
      en: "Support adapted to your context",
      it: "Interventi adattati al vostro contesto",
    } satisfies LocalizedText,
    items: [
      {
        id: "formats",
        label: {
          fr: "Formats",
          en: "Delivery formats",
          it: "Formati",
        } satisfies LocalizedText,
        value: {
          fr: "Présentiel et distanciel",
          en: "On-site and remote",
          it: "In presenza e a distanza",
        } satisfies LocalizedText,
      },
      {
        id: "languages",
        label: {
          fr: "Langues de prestation",
          en: "Service languages",
          it: "Lingue di prestazione",
        } satisfies LocalizedText,
        value: {
          fr: "Français · Anglais · Italien",
          en: "French · English · Italian",
          it: "Francese · Inglese · Italiano",
        } satisfies LocalizedText,
      },
      {
        id: "regions",
        label: {
          fr: "Zones d’intervention",
          en: "Regions",
          it: "Aree di intervento",
        } satisfies LocalizedText,
        value: {
          fr: "Afrique · Europe · Moyen-Orient",
          en: "Africa · Europe · Middle East",
          it: "Africa · Europa · Medio Oriente",
        } satisfies LocalizedText,
      },
    ] as const,
  },

  faq: {
    eyebrow: {
      fr: "FAQ contact",
      en: "Contact FAQ",
      it: "FAQ contatto",
    } satisfies LocalizedText,
    title: {
      fr: "Quelques repères utiles avant de nous écrire",
      en: "A few useful pointers before you write to us",
      it: "Alcuni punti utili prima di scriverci",
    } satisfies LocalizedText,
    description: {
      fr: "Des réponses courtes pour clarifier le type de demande, les modalités d’intervention et le cadre de cette prise de contact.",
      en: "Short answers to clarify the type of enquiry, delivery formats and the scope of this initial conversation.",
      it: "Risposte brevi per chiarire il tipo di richiesta, le modalità di intervento e il quadro di questo primo contatto.",
    } satisfies LocalizedText,
    items: [
      {
        id: "types",
        question: {
          fr: "Quels types de demandes puis-je transmettre ?",
          en: "What types of enquiries can I submit?",
          it: "Quali tipi di richieste posso inviare?",
        } satisfies LocalizedText,
        answer: {
          fr: "Vous pouvez nous contacter pour un soutien post-incident, une crise en mobilité internationale, une formation, un workshop ou tout autre besoin de votre organisation.",
          en: "You can contact us for post-incident support, a crisis in international mobility, training, a workshop or any other organisational need.",
          it: "Potete contattarci per un sostegno post-incidente, una crisi in mobilità internazionale, una formazione, un workshop o qualsiasi altra esigenza della vostra organizzazione.",
        } satisfies LocalizedText,
      },
      {
        id: "remote",
        question: {
          fr: "Les interventions sont-elles proposées à distance ?",
          en: "Are services available remotely?",
          it: "Gli interventi sono proposti a distanza?",
        } satisfies LocalizedText,
        answer: {
          fr: "Oui. Les prestations peuvent être proposées en présentiel ou à distance selon le contexte et les besoins de l’organisation.",
          en: "Yes. Services may be delivered on-site or remotely depending on the context and the organisation’s needs.",
          it: "Sì. Le prestazioni possono essere proposte in presenza o a distanza, a seconda del contesto e delle esigenze dell’organizzazione.",
        } satisfies LocalizedText,
      },
      {
        id: "languages",
        question: {
          fr: "Dans quelles langues pouvez-vous intervenir ?",
          en: "Which languages are available?",
          it: "In quali lingue potete intervenire?",
        } satisfies LocalizedText,
        answer: {
          fr: "Les prestations sont proposées en français, en anglais et en italien.",
          en: "Services are available in French, English and Italian.",
          it: "Le prestazioni sono proposte in francese, inglese e italiano.",
        } satisfies LocalizedText,
      },
      {
        id: "emergency",
        question: {
          fr: "Resilience@Work est-il un service d’urgence ?",
          en: "Is Resilience@Work an emergency service?",
          it: "Resilience@Work è un servizio di emergenza?",
        } satisfies LocalizedText,
        answer: {
          fr: "Non. Resilience@Work n’est pas un service d’urgence médicale. En cas d’urgence immédiate, contactez les services d’urgence de votre région.",
          en: "No. Resilience@Work is not a medical emergency service. In case of an immediate emergency, contact your local emergency services.",
          it: "No. Resilience@Work non è un servizio di emergenza medica. In caso di emergenza immediata, contattate i servizi di emergenza della vostra zona.",
        } satisfies LocalizedText,
      },
    ] as const,
  },

  whatsAppCta: {
    eyebrow: {
      fr: "Alternative WhatsApp",
      en: "WhatsApp alternative",
      it: "Alternativa WhatsApp",
    } satisfies LocalizedText,
    title: {
      fr: "Vous préférez échanger directement ?",
      en: "Would you prefer to connect directly?",
      it: "Preferite un confronto diretto?",
    } satisfies LocalizedText,
    description: {
      fr: "Contactez-nous sur WhatsApp pour présenter brièvement votre besoin.",
      en: "Contact us on WhatsApp to briefly describe your needs.",
      it: "Contattateci su WhatsApp per presentare brevemente la vostra esigenza.",
    } satisfies LocalizedText,
    action: {
      label: {
        fr: "Échanger sur WhatsApp",
        en: "Chat on WhatsApp",
        it: "Contattaci su WhatsApp",
      } satisfies LocalizedText,
    },
  },

  seo: {
    title: {
      fr: "Contact | Resilience@Work",
      en: "Contact | Resilience@Work",
      it: "Contatto | Resilience@Work",
    } satisfies LocalizedText,
    description: {
      fr: "Contactez Resilience@Work pour un soutien post-incident, une crise en mobilité internationale, une formation ou un workshop.",
      en: "Contact Resilience@Work for post-incident support, a crisis in international mobility, training or a workshop.",
      it: "Contattate Resilience@Work per un sostegno post-incidente, una crisi in mobilità internazionale, una formazione o un workshop.",
    } satisfies LocalizedText,
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },
} as const;

/** UI chrome for contact page shell (breadcrumbs, etc.). */
export const contactUiCopy = {
  breadcrumbHome: {
    fr: "Accueil",
    en: "Home",
    it: "Home",
  } satisfies LocalizedText,
  breadcrumbAria: {
    fr: "Fil d'Ariane",
    en: "Breadcrumb",
    it: "Percorso di navigazione",
  } satisfies LocalizedText,
} as const;

/**
 * Internal notification email labels (admin-facing).
 * Kept complete for fr/en/it so site locale never hardcodes ternaries.
 */
export const contactEmailLabels = {
  newRequest: {
    fr: "Nouvelle demande depuis resilienceatwork.eu",
    en: "New enquiry from resilienceatwork.eu",
    it: "Nuova richiesta da resilienceatwork.eu",
  } satisfies LocalizedText,
  subjectPrefix: {
    fr: "[Resilience@Work] Nouvelle demande - ",
    en: "[Resilience@Work] New enquiry - ",
    it: "[Resilience@Work] Nuova richiesta - ",
  } satisfies LocalizedText,
  fullName: { fr: "Nom", en: "Name", it: "Nome" } satisfies LocalizedText,
  organisation: {
    fr: "Organisation",
    en: "Organisation",
    it: "Organizzazione",
  } satisfies LocalizedText,
  email: { fr: "Email", en: "Email", it: "Email" } satisfies LocalizedText,
  phone: {
    fr: "Téléphone",
    en: "Phone",
    it: "Telefono",
  } satisfies LocalizedText,
  country: {
    fr: "Pays ou région",
    en: "Country or region",
    it: "Paese o regione",
  } satisfies LocalizedText,
  subject: { fr: "Objet", en: "Subject", it: "Oggetto" } satisfies LocalizedText,
  preferredLanguage: {
    fr: "Langue souhaitée",
    en: "Preferred language",
    it: "Lingua preferita",
  } satisfies LocalizedText,
  preferredContactMethod: {
    fr: "Mode de contact souhaité",
    en: "Preferred contact method",
    it: "Modalità di contatto preferita",
  } satisfies LocalizedText,
  additionalInfo: {
    fr: "Informations complémentaires",
    en: "Additional information",
    it: "Informazioni aggiuntive",
  } satisfies LocalizedText,
  message: { fr: "Message", en: "Message", it: "Messaggio" } satisfies LocalizedText,
  consent: {
    fr: "Consentement",
    en: "Consent",
    it: "Consenso",
  } satisfies LocalizedText,
  consentYes: { fr: "Oui", en: "Yes", it: "Sì" } satisfies LocalizedText,
  date: { fr: "Date", en: "Date", it: "Data" } satisfies LocalizedText,
  crisisContext: {
    fr: "Contexte général",
    en: "General context",
    it: "Contesto generale",
  } satisfies LocalizedText,
  urgencyLevel: {
    fr: "Niveau de priorité",
    en: "Priority level",
    it: "Livello di priorità",
  } satisfies LocalizedText,
  trainingAudience: {
    fr: "Public concerné",
    en: "Audience",
    it: "Pubblico interessato",
  } satisfies LocalizedText,
  estimatedParticipants: {
    fr: "Participants approximatifs",
    en: "Estimated participants",
    it: "Partecipanti stimati",
  } satisfies LocalizedText,
  trainingFormat: {
    fr: "Format envisagé",
    en: "Preferred format",
    it: "Formato previsto",
  } satisfies LocalizedText,
  mobilityRegion: {
    fr: "Pays ou région concernée",
    en: "Country or region involved",
    it: "Paese o regione interessata",
  } satisfies LocalizedText,
  mobilityStage: {
    fr: "Étape de la mobilité",
    en: "Mobility stage",
    it: "Fase della mobilità",
  } satisfies LocalizedText,
} as const;
