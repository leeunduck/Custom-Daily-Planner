export type LandingWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type LandingFooterColumnProps = {
  title: string;
  links: FooterLink[];
};
