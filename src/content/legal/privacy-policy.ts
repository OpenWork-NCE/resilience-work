import { brand } from "@/content/brand";
import type { LegalDocument } from "@/types/legal";

const lastUpdated = "2026-06-04";

export const privacyPolicyDocument: LegalDocument = {
  id: "privacyPolicy",
  eyebrow: {
    fr: "Confidentialité",
    en: "Privacy",
    it: "Privacy",
  },
  title: {
    fr: "Politique de confidentialité",
    en: "Privacy policy",
    it: "Informativa sulla privacy",
  },
  description: {
    fr: "Découvrez comment Resilience@Work utilise et protège les informations transmises à travers son site.",
    en: "Learn how Resilience@Work uses and protects information submitted through its website.",
    it: "Scoprite come Resilience@Work utilizza e protegge le informazioni trasmesse attraverso il proprio sito.",
  },
  lastUpdated,
  seo: {
    title: {
      fr: "Politique de confidentialité | Resilience@Work",
      en: "Privacy policy | Resilience@Work",
      it: "Informativa sulla privacy | Resilience@Work",
    },
    description: {
      fr: "Découvrez comment Resilience@Work utilise et protège les informations transmises à travers son site.",
      en: "Learn how Resilience@Work uses and protects information submitted through its website.",
      it: "Scoprite come Resilience@Work utilizza e protegge le informazioni trasmesse attraverso il proprio sito.",
    },
    canonicalRoute: "privacy",
    ogImage: "/images/hero/resilience-at-work-hero.webp",
  },
  sections: [
    {
      id: "purpose",
      title: {
        fr: "Objet de la politique",
        en: "Purpose of this policy",
        it: "Oggetto dell’informativa",
      },
      paragraphs: {
        fr: [
          "Cette politique présente les principales modalités selon lesquelles les informations personnelles transmises via le site Resilience@Work peuvent être utilisées, protégées et organisées.",
        ],
        en: [
          "This policy outlines the main ways in which personal information submitted through the Resilience@Work website may be used, protected and organised.",
        ],
        it: [
          "La presente informativa descrive le principali modalità con cui le informazioni personali trasmesse tramite il sito Resilience@Work possono essere utilizzate, protette e organizzate.",
        ],
      },
    },
    {
      id: "controller",
      title: {
        fr: "Responsable du traitement",
        en: "Data controller",
        it: "Titolare del trattamento",
      },
      paragraphs: {
        fr: [
          "À ce stade, les informations pleinement confirmées relatives au responsable du traitement sont le nom commercial Resilience@Work, la personne de contact Jocelyne Katshinda et l’adresse email admin@resilienceatwork.eu.",
        ],
        en: [
          "At this stage, the fully confirmed data-controller information includes the trading name Resilience@Work, the contact person Jocelyne Katshinda and the email address admin@resilienceatwork.eu.",
        ],
        it: [
          "A questo stadio, le informazioni pienamente confermate relative al titolare del trattamento comprendono il nome commerciale Resilience@Work, la persona di contatto Jocelyne Katshinda e l’indirizzo email admin@resilienceatwork.eu.",
        ],
      },
      isPendingSensitive: true,
    },
    {
      id: "data-collected",
      title: { fr: "Données collectées", en: "Data collected", it: "Dati raccolti" },
      items: {
        fr: [
          "Nom complet",
          "Organisation, si renseignée",
          "Adresse email",
          "Téléphone, si renseigné",
          "Pays ou région, si renseigné",
          "Objet de la demande",
          "Message",
          "Langue de réponse souhaitée",
          "Mode de contact préféré, si renseigné",
          "Informations complémentaires facultatives liées à la demande",
          "Consentement à l’utilisation des informations transmises afin de répondre à la demande",
        ],
        en: [
          "Full name",
          "Organisation, if provided",
          "Email address",
          "Phone number, if provided",
          "Country or region, if provided",
          "Subject of the enquiry",
          "Message",
          "Preferred response language",
          "Preferred contact method, if provided",
          "Optional additional information related to the enquiry",
          "Consent to the use of the submitted information in order to respond to the enquiry",
        ],
        it: [
          "Nome e cognome",
          "Organizzazione, se indicata",
          "Indirizzo email",
          "Telefono, se indicato",
          "Paese o regione, se indicato",
          "Oggetto della richiesta",
          "Messaggio",
          "Lingua di risposta desiderata",
          "Modalità di contatto preferita, se indicata",
          "Informazioni complementari facoltative relative alla richiesta",
          "Consenso all’utilizzo delle informazioni trasmesse al fine di rispondere alla richiesta",
        ],
      },
    },
    {
      id: "collection-methods",
      title: {
        fr: "Méthodes de collecte",
        en: "Collection methods",
        it: "Modalità di raccolta",
      },
      paragraphs: {
        fr: [
          "Les informations sont principalement collectées lorsque vous utilisez le formulaire de contact, contactez Resilience@Work par email, téléphone ou WhatsApp, ou interagissez avec certaines préférences techniques du site.",
        ],
        en: [
          "Information is mainly collected when you use the contact form, contact Resilience@Work by email, phone or WhatsApp, or interact with certain technical website preferences.",
        ],
        it: [
          "Le informazioni sono raccolte principalmente quando utilizzate il modulo di contatto, contattate Resilience@Work via email, telefono o WhatsApp, oppure interagite con alcune preferenze tecniche del sito.",
        ],
      },
    },
    {
      id: "purposes",
      title: {
        fr: "Finalités du traitement",
        en: "Purposes of processing",
        it: "Finalità del trattamento",
      },
      paragraphs: {
        fr: [
          "Répondre aux demandes adressées à Resilience@Work et permettre un échange adapté au contexte communiqué par l’utilisateur.",
          "Préserver le fonctionnement technique du site, lutter contre les soumissions abusives et mémoriser certaines préférences techniques lorsque vous les activez.",
        ],
        en: [
          "Respond to enquiries sent to Resilience@Work and enable an exchange suited to the context shared by the user.",
          "Preserve the technical operation of the website, mitigate abusive submissions and remember certain technical preferences when you enable them.",
        ],
        it: [
          "Rispondere alle richieste inviate a Resilience@Work e consentire uno scambio adeguato al contesto comunicato dall’utente.",
          "Preservare il funzionamento tecnico del sito, contrastare le sottomissioni abusive e memorizzare alcune preferenze tecniche quando le attivate.",
        ],
      },
    },
    {
      id: "legal-basis",
      title: { fr: "Base juridique", en: "Legal basis", it: "Base giuridica" },
      paragraphs: {
        fr: [
          "La base juridique applicable dépend de la nature de la demande. Elle peut relever de mesures précontractuelles lorsqu’une prestation est sollicitée, de l’intérêt légitime lorsqu’il s’agit de répondre à une demande professionnelle générale, ou du consentement lorsqu’une opération spécifique l’exige.",
          "Cette qualification doit être validée avant mise en production définitive.",
        ],
        en: [
          "The applicable legal basis depends on the nature of the enquiry. It may rely on pre-contractual steps when a service is requested, legitimate interest when replying to a general professional enquiry, or consent where a specific operation requires it.",
          "This qualification should be validated before final production release.",
        ],
        it: [
          "La base giuridica applicabile dipende dalla natura della richiesta. Può ricondursi a misure precontrattuali quando viene sollecitata una prestazione, all’interesse legittimo quando si risponde a una richiesta professionale generale, o al consenso quando un’operazione specifica lo richiede.",
          "Questa qualificazione deve essere validata prima della messa in produzione definitiva.",
        ],
      },
      isPendingSensitive: true,
    },
    {
      id: "recipients",
      title: { fr: "Destinataires", en: "Recipients", it: "Destinatari" },
      paragraphs: {
        fr: [
          "Les informations peuvent être consultées par Resilience@Work et, lorsqu’un fournisseur transactionnel est configuré, par le prestataire d’envoi d’emails utilisé pour transmettre les demandes.",
        ],
        en: [
          "Information may be accessed by Resilience@Work and, when a transactional provider is configured, by the email-delivery provider used to forward enquiries.",
        ],
        it: [
          "Le informazioni possono essere consultate da Resilience@Work e, quando è configurato un fornitore transazionale, dal prestatore di invio email utilizzato per trasmettere le richieste.",
        ],
      },
    },
    {
      id: "processors",
      title: {
        fr: "Fournisseurs et sous-traitants",
        en: "Processors and providers",
        it: "Fornitori e responsabili del trattamento",
      },
      paragraphs: {
        fr: [
          "L’hébergeur, le fournisseur d’email transactionnel et tout éventuel sous-traitant supplémentaire doivent être confirmés et documentés avant publication définitive.",
        ],
        en: [
          "The hosting provider, transactional email provider and any additional processor must be confirmed and documented before final publication.",
        ],
        it: [
          "Il provider di hosting, il fornitore di email transazionali e ogni eventuale ulteriore responsabile del trattamento devono essere confermati e documentati prima della pubblicazione definitiva.",
        ],
      },
      isPendingSensitive: true,
    },
    {
      id: "international-transfers",
      title: {
        fr: "Transferts éventuels hors Espace économique européen",
        en: "Potential transfers outside the European Economic Area",
        it: "Eventuali trasferimenti al di fuori dello Spazio economico europeo",
      },
      paragraphs: {
        fr: [
          "La localisation exacte de l’hébergement et des prestataires techniques doit être confirmée avant de conclure à l’existence ou à l’absence de transferts internationaux.",
        ],
        en: [
          "The exact location of hosting and technical providers must be confirmed before concluding whether international transfers occur.",
        ],
        it: [
          "La localizzazione esatta dell’hosting e dei prestatori tecnici deve essere confermata prima di concludere circa l’esistenza o l’assenza di trasferimenti internazionali.",
        ],
      },
      isPendingSensitive: true,
    },
    {
      id: "retention",
      title: {
        fr: "Durées de conservation",
        en: "Retention periods",
        it: "Periodi di conservazione",
      },
      paragraphs: {
        fr: [
          "La durée de conservation applicable aux demandes de contact doit être validée selon les besoins organisationnels et les obligations applicables avant mise en production définitive.",
        ],
        en: [
          "The retention period applicable to contact enquiries must be validated according to organisational needs and applicable obligations before final production release.",
        ],
        it: [
          "Il periodo di conservazione applicabile alle richieste di contatto deve essere validato in base alle esigenze organizzative e agli obblighi applicabili prima della messa in produzione definitiva.",
        ],
      },
      isPendingSensitive: true,
    },
    {
      id: "security",
      title: { fr: "Sécurité", en: "Security", it: "Sicurezza" },
      paragraphs: {
        fr: [
          "Le site applique des mesures techniques proportionnées à sa portée actuelle, notamment une validation côté serveur, un honeypot antispam et une limitation basique des soumissions. Les mesures détaillées et l’infrastructure effective doivent être confirmées avant publication.",
        ],
        en: [
          "The website applies technical measures proportionate to its current scope, including server-side validation, an anti-spam honeypot and basic submission limiting. The detailed measures and effective infrastructure must be confirmed before publication.",
        ],
        it: [
          "Il sito applica misure tecniche proporzionate alla sua portata attuale, tra cui una validazione lato server, un honeypot antispam e una limitazione di base delle sottomissioni. Le misure dettagliate e l’infrastruttura effettiva devono essere confermate prima della pubblicazione.",
        ],
      },
    },
    {
      id: "rights",
      title: { fr: "Droits des personnes", en: "Your rights", it: "Diritti delle persone" },
      items: {
        fr: [
          "Droit d’accès",
          "Droit de rectification",
          "Droit à l’effacement",
          "Droit à la limitation du traitement",
          "Droit d’opposition",
          "Droit à la portabilité lorsque ce droit est applicable",
          "Droit de retirer un consentement lorsque le traitement repose sur celui-ci",
          "Droit d’introduire une réclamation auprès de l’autorité de contrôle compétente",
        ],
        en: [
          "Right of access",
          "Right to rectification",
          "Right to erasure",
          "Right to restriction of processing",
          "Right to object",
          "Right to data portability where applicable",
          "Right to withdraw consent where processing relies on it",
          "Right to lodge a complaint with the competent supervisory authority",
        ],
        it: [
          "Diritto di accesso",
          "Diritto di rettifica",
          "Diritto alla cancellazione",
          "Diritto alla limitazione del trattamento",
          "Diritto di opposizione",
          "Diritto alla portabilità, ove applicabile",
          "Diritto di revocare un consenso quando il trattamento si basa su di esso",
          "Diritto di proporre reclamo all’autorità di controllo competente",
        ],
      },
    },
    {
      id: "exercise-rights",
      title: {
        fr: "Exercice des droits",
        en: "Exercising your rights",
        it: "Esercizio dei diritti",
      },
      paragraphs: {
        fr: [
          `Vous pouvez adresser une demande initiale à ${brand.contact.email}. Un contact confidentialité dédié reste à confirmer avant mise en production définitive.`,
        ],
        en: [
          `You may send an initial request to ${brand.contact.email}. A dedicated privacy contact still needs to be confirmed before final production release.`,
        ],
        it: [
          `Potete inviare una richiesta iniziale a ${brand.contact.email}. Un contatto privacy dedicato resta da confermare prima della messa in produzione definitiva.`,
        ],
      },
      isPendingSensitive: true,
    },
    {
      id: "authority",
      title: {
        fr: "Autorité de contrôle",
        en: "Supervisory authority",
        it: "Autorità di controllo",
      },
      paragraphs: {
        fr: [
          "L’autorité de contrôle compétente doit être confirmée selon le pays d’établissement final de la structure.",
        ],
        en: [
          "The competent supervisory authority must be confirmed based on the final country of establishment of the organisation.",
        ],
        it: [
          "L’autorità di controllo competente deve essere confermata in base al paese di stabilimento finale della struttura.",
        ],
      },
      isPendingSensitive: true,
    },
    {
      id: "cookies",
      title: {
        fr: "Cookies et traceurs",
        en: "Cookies and trackers",
        it: "Cookie e tracciatori",
      },
      paragraphs: {
        fr: [
          "Le site utilise actuellement des mécanismes techniques limités et documentés dans la politique relative aux cookies. Aucun analytics ni traceur marketing n’est configuré par défaut à ce stade.",
        ],
        en: [
          "The website currently uses limited technical mechanisms documented in the cookie policy. No analytics or marketing tracker is configured by default at this stage.",
        ],
        it: [
          "Il sito utilizza attualmente meccanismi tecnici limitati e documentati nell’informativa sui cookie. In questa fase non è configurato per impostazione predefinita alcuno strumento di analytics né tracciatore di marketing.",
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
          "Lorsque vous quittez le site via un lien vers WhatsApp, LinkedIn ou tout autre service externe, l’utilisation de vos données relève ensuite des politiques propres à ces services.",
        ],
        en: [
          "When you leave the website through a link to WhatsApp, LinkedIn or any other external service, the use of your data is then governed by those services’ own policies.",
        ],
        it: [
          "Quando lasciate il sito tramite un collegamento a WhatsApp, LinkedIn o qualsiasi altro servizio esterno, l’utilizzo dei vostri dati è successivamente disciplinato dalle politiche proprie di tali servizi.",
        ],
      },
    },
    {
      id: "updates",
      title: {
        fr: "Mise à jour de la politique",
        en: "Policy updates",
        it: "Aggiornamento dell’informativa",
      },
      paragraphs: {
        fr: [
          "Cette politique peut évoluer afin de refléter les changements juridiques, organisationnels ou techniques affectant le site.",
        ],
        en: [
          "This policy may evolve to reflect legal, organisational or technical changes affecting the website.",
        ],
        it: [
          "La presente informativa può evolvere per riflettere i cambiamenti giuridici, organizzativi o tecnici che interessano il sito.",
        ],
      },
    },
  ],
};
