import { brand } from "@/content/brand";
import type { LegalDocument } from "@/types/legal";

const lastUpdated = "2026-06-04";

export const legalNoticeDocument: LegalDocument = {
  id: "legalNotice",
  eyebrow: {
    fr: "Mentions légales",
    en: "Legal notice",
    it: "Note legali",
  },
  title: {
    fr: "Mentions légales",
    en: "Legal notice",
    it: "Note legali",
  },
  description: {
    fr: "Consultez les informations légales relatives au site Resilience@Work.",
    en: "Read the legal information relating to the Resilience@Work website.",
    it: "Consultate le informazioni legali relative al sito Resilience@Work.",
  },
  lastUpdated,
  seo: {
    title: {
      fr: "Mentions légales | Resilience@Work",
      en: "Legal notice | Resilience@Work",
      it: "Note legali | Resilience@Work",
    },
    description: {
      fr: "Consultez les informations légales relatives au site Resilience@Work.",
      en: "Read the legal information relating to the Resilience@Work website.",
      it: "Consultate le informazioni legali relative al sito Resilience@Work.",
    },
    canonicalRoute: "legalNotice",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },
  sections: [
    {
      id: "site-publisher",
      title: {
        fr: "Éditeur du site",
        en: "Website publisher",
        it: "Editore del sito",
      },
      paragraphs: {
        fr: [
          "Les informations publiées sur cette page reprennent uniquement les éléments actuellement confirmés pour le site Resilience@Work.",
        ],
        en: [
          "This page publishes only the information currently confirmed for the Resilience@Work website.",
        ],
        it: [
          "Le informazioni pubblicate in questa pagina riprendono esclusivamente gli elementi attualmente confermati per il sito Resilience@Work.",
        ],
      },
      definitions: [
        {
          id: "trade-name",
          label: { fr: "Nom commercial", en: "Trading name", it: "Nome commerciale" },
          value: { fr: brand.name, en: brand.name, it: brand.name },
        },
        {
          id: "responsible-person",
          label: {
            fr: "Responsable de la structure",
            en: "Responsible person",
            it: "Responsabile della struttura",
          },
          value: { fr: brand.person.name, en: brand.person.name, it: brand.person.name },
        },
        {
          id: "role",
          label: { fr: "Fonction", en: "Role", it: "Funzione" },
          value: brand.person.role,
        },
        {
          id: "site",
          label: { fr: "Site", en: "Website", it: "Sito" },
          value: {
            fr: `https://${brand.domain}`,
            en: `https://${brand.domain}`,
            it: `https://${brand.domain}`,
          },
        },
      ],
    },
    {
      id: "publication-manager",
      title: {
        fr: "Responsable de publication",
        en: "Publication manager",
        it: "Responsabile della pubblicazione",
      },
      paragraphs: {
        fr: [
          "Le responsable de publication définitif doit être confirmé avant mise en production. En attendant cette validation, seules les informations de contact confirmées sont publiées.",
        ],
        en: [
          "The final publication manager must be confirmed before production release. Until then, only the confirmed contact details are published.",
        ],
        it: [
          "Il responsabile definitivo della pubblicazione deve essere confermato prima della messa in produzione. In attesa di tale validazione, vengono pubblicate solo le informazioni di contatto confermate.",
        ],
      },
      isPendingSensitive: true,
    },
    {
      id: "contact",
      title: {
        fr: "Contact",
        en: "Contact",
        it: "Contatti",
      },
      definitions: [
        {
          id: "email",
          label: { fr: "Email", en: "Email", it: "Email" },
          value: { fr: brand.contact.email, en: brand.contact.email, it: brand.contact.email },
        },
        {
          id: "phone",
          label: { fr: "Téléphone", en: "Phone", it: "Telefono" },
          value: {
            fr: brand.contact.phoneDisplay,
            en: brand.contact.phoneDisplay,
            it: brand.contact.phoneDisplay,
          },
        },
      ],
    },
    {
      id: "hosting",
      title: {
        fr: "Hébergement",
        en: "Hosting",
        it: "Hosting",
      },
      paragraphs: {
        fr: [
          "Les informations précises relatives à l’hébergeur et au pays d’hébergement doivent être confirmées avant publication.",
        ],
        en: [
          "The precise hosting provider and hosting-country details must be confirmed before publication.",
        ],
        it: [
          "Le informazioni precise relative al provider di hosting e al paese di hosting devono essere confermate prima della pubblicazione.",
        ],
      },
      isPendingSensitive: true,
    },
    {
      id: "intellectual-property",
      title: {
        fr: "Propriété intellectuelle",
        en: "Intellectual property",
        it: "Proprietà intellettuale",
      },
      paragraphs: {
        fr: [
          "Sauf mention contraire, les contenus publiés sur ce site sont présentés à des fins d’information et ne peuvent être reproduits, adaptés ou diffusés sans autorisation préalable lorsqu’une telle autorisation est requise.",
        ],
        en: [
          "Unless otherwise stated, the content published on this website is provided for information purposes and may not be reproduced, adapted or distributed without prior permission where such permission is required.",
        ],
        it: [
          "Salvo diversa indicazione, i contenuti pubblicati su questo sito sono presentati a fini informativi e non possono essere riprodotti, adattati o diffusi senza previa autorizzazione, laddove tale autorizzazione sia richiesta.",
        ],
      },
    },
    {
      id: "liability",
      title: {
        fr: "Limitation de responsabilité",
        en: "Limitation of liability",
        it: "Limitazione di responsabilità",
      },
      paragraphs: {
        fr: [
          "Resilience@Work s’efforce de présenter des informations claires et à jour, sans garantir l’absence totale d’erreur, d’omission ou d’indisponibilité technique.",
        ],
        en: [
          "Resilience@Work aims to provide clear and up-to-date information, without guaranteeing the total absence of errors, omissions or technical unavailability.",
        ],
        it: [
          "Resilience@Work si impegna a presentare informazioni chiare e aggiornate, senza garantire l’assenza totale di errori, omissioni o indisponibilità tecniche.",
        ],
      },
    },
    {
      id: "external-links",
      title: {
        fr: "Liens externes",
        en: "External links",
        it: "Collegamenti esterni",
      },
      paragraphs: {
        fr: [
          "Le site peut proposer des liens vers des services tiers tels que WhatsApp ou LinkedIn. L’accès à ces services relève ensuite de leurs propres politiques et conditions.",
        ],
        en: [
          "The website may provide links to third-party services such as WhatsApp or LinkedIn. Access to those services is then governed by their own policies and terms.",
        ],
        it: [
          "Il sito può proporre collegamenti a servizi di terze parti quali WhatsApp o LinkedIn. L’accesso a tali servizi è successivamente disciplinato dalle rispettive politiche e condizioni.",
        ],
      },
    },
    {
      id: "personal-data",
      title: {
        fr: "Protection des données personnelles",
        en: "Personal data protection",
        it: "Protezione dei dati personali",
      },
      paragraphs: {
        fr: [
          "Pour plus d’informations sur l’utilisation des données personnelles via ce site, veuillez consulter la politique de confidentialité.",
        ],
        en: [
          "For more information about how personal data is used through this website, please refer to the privacy policy.",
        ],
        it: [
          "Per ulteriori informazioni sull’utilizzo dei dati personali tramite questo sito, consultate l’informativa sulla privacy.",
        ],
      },
    },
    {
      id: "applicable-law",
      title: {
        fr: "Droit applicable",
        en: "Applicable law",
        it: "Diritto applicabile",
      },
      paragraphs: {
        fr: [
          "Le droit applicable et les autorités compétentes devront être confirmés selon le pays d’établissement définitif de la structure.",
        ],
        en: [
          "The applicable law and competent authorities must be confirmed based on the final country of establishment of the organisation.",
        ],
        it: [
          "Il diritto applicabile e le autorità competenti dovranno essere confermati in base al paese di stabilimento definitivo della struttura.",
        ],
      },
      isPendingSensitive: true,
    },
    {
      id: "updates",
      title: {
        fr: "Mise à jour",
        en: "Updates",
        it: "Aggiornamento",
      },
      paragraphs: {
        fr: [
          "Cette page peut être mise à jour afin de refléter l’évolution des informations administratives, techniques ou juridiques du site.",
        ],
        en: [
          "This page may be updated to reflect changes in the website’s administrative, technical or legal information.",
        ],
        it: [
          "Questa pagina può essere aggiornata per riflettere l’evoluzione delle informazioni amministrative, tecniche o giuridiche del sito.",
        ],
      },
    },
  ],
};
