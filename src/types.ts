export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  category: string;
  metricValue: string;
  metricLabel: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  tags: string[];
  date: string;
  colorTheme: string; // Tailwind color scheme (e.g., 'emerald', 'indigo', 'rose', 'orange')
}

export interface ServicePricingTier {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string; // Used to dynamically choose Lucide icons
  description: string;
  keyStats: string;
  keyStatsLabel: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}
