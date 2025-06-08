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
  achievements: any[]; // Using any[] for complex nested achievements structure
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