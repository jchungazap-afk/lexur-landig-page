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
