export type Language = "es" | "en";

export interface NavLink {
  key: string;
  href: string;
  label: {
    es: string;
    en: string;
  };
}

export interface StatItemData {
  icon: string;
  target: number;
  suffix: string;
  decimals: number;
  label: {
    es: string;
    en: string;
  };
}

export interface PartnerItem {
  id: string;
  name: string;
  category: {
    es: string;
    en: string;
  };
  iconSvg?: string;
  badge?: string;
}

export interface SaaSProduct {
  id: string;
  name: string;
  badge: string;
  tagline: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  image: string;
  metrics: Array<{
    label: { es: string; en: string };
    value: string;
  }>;
  features: Array<{
    es: string;
    en: string;
  }>;
}

export interface ConsultingService {
  id: string;
  iconName: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  tags: string[];
}

export interface MethodologyStep {
  step: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
}

export interface CaseStudy {
  id: string;
  client: string;
  sector: {
    es: string;
    en: string;
  };
  metric: string;
  metricLabel: {
    es: string;
    en: string;
  };
  summary: {
    es: string;
    en: string;
  };
}
