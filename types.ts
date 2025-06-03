export interface Photo {
  id: string;
  src: string;
  alt: string;
}

export interface Poster {
  id: string;
  src: string;
  alt: string;
  title: string;
  date: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
