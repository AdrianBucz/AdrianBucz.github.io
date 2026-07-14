export interface PortfolioProject {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  imagePlaceholderLabel: string;
  featured: boolean;
}

export interface FeaturedProjectCaseStudy {
  id: string;
  shortLabel: string;
  title: string;
  whatItWas: string;
  whyItWasBuilt: string;
  responsibilities: string[];
  engineeringChallenges: string[];
  keyAccomplishments: string[];
  technologies: string[];
  imagePlaceholderLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  imageContain?: boolean;
  media?: ProjectMedia[];
}

export interface StarsProject {
  id: string;
  shortLabel: string;
  title: string;
  summary: string;
  technologies: string[];
  imagePlaceholderLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  imageContain?: boolean;
  media?: ProjectMedia[];
}

export interface ProjectMedia {
  kind: "image" | "video";
  src: string;
  alt: string;
}
