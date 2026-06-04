export type Locale = "fr" | "en";

export type LocalizedText = Record<Locale, string>;

export type LocalizedStringArray = Record<Locale, readonly string[]>;

export type LocalizedParagraphs = Record<Locale, readonly string[]>;

export type RouteKey =
  | "home"
  | "about"
  | "expertise"
  | "psychosocialPrevention"
  | "internationalMobility"
  | "crisisManagement"
  | "training"
  | "international"
  | "contact";

export type SocialPlatform = "whatsapp" | "linkedin" | "facebook";

export interface ImageAsset {
  src: string;
  alt: LocalizedText;
  width?: number;
  height?: number;
  aspectRatio?: string;
  objectPosition?: string;
  priority?: boolean;
}

export interface PageSeo {
  title: LocalizedText;
  description: LocalizedText;
  keywords?: Record<Locale, readonly string[]>;
  canonicalRoute: RouteKey;
  ogImage?: string;
  noIndex?: boolean;
}

export interface Cta {
  label: LocalizedText;
  route?: RouteKey;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  external?: boolean;
}

export interface NavigationItem {
  href?: string;
  labelKey?: string;
  id?: string;
  label?: LocalizedText;
  route?: RouteKey;
  children?: readonly NavigationItem[];
}

export type ExpertiseId =
  | "psychosocialPrevention"
  | "internationalMobility"
  | "crisisManagement"
  | "training";

export interface ExpertiseItem {
  id: ExpertiseId;
  icon: string;
  route: RouteKey;
  title: LocalizedText;
  shortTitle: LocalizedText;
  summary: LocalizedText;
  description: LocalizedParagraphs;
  services: LocalizedStringArray;
  outcomes: LocalizedStringArray;
  image: ImageAsset;
}

export interface TrainingTopic {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  audiences: LocalizedStringArray;
}

export type RegionId = "africa" | "europe" | "middleEast";

export interface Region {
  id: RegionId;
  title: LocalizedText;
  summary: LocalizedText;
  image: ImageAsset;
}

export interface LocaleParams {
  locale: string;
}

export interface ExpertiseArea {
  id: string;
  slug: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
  services: string[];
}

export interface ContactInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  whatsapp: string;
  linkedin?: string;
  facebook?: string;
}

export interface ZoneInfo {
  name: string;
  countries: string[];
}
