export interface Company {
  code: string;
  companyName: string;
  countryFlag: string;
  companyType: string;
  companySector: string;
  companyLogo: string;
  companyLogoX: number;
  companyLogoY: number;
  companyUrl: string;
  role: string;
  story: string;
  year: string;
  show: boolean;
  icon: string;
  achievements: Achievement[];
}

export interface CustomersData {
  companies: Company[];
}

export interface NavItem {
  href: string;
  label: string;
  dropdown?: NavItem[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface UseCaseItem {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  position: string;
  company: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface JobOpening {
  title: string;
  location: string;
  description: string;
  skills: string[];
}

// Achievements types
// Currently the data model uses a "list" of items, where each item is a line with an icon and text.
// Some items include a variant (e.g., "startup" or "content") that maps to a CSS style.

export type AchievementVariant = 'startup' | 'content' | 'default' | string

export interface AchievementItem {
  icon: string
  text: string
  type?: AchievementVariant
}

export interface AchievementList {
  type: 'list'
  items: AchievementItem[]
}

export type Achievement = AchievementList