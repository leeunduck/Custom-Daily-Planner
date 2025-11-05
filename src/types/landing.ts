import type { ReactNode } from "react";

/* -------------------------------------------------
   공통 베이스 타입
   ------------------------------------------------- */

type WithChildren = {
  children: ReactNode;
};

type WithClassName = {
  className?: string;
};

type WithChildrenAndClassName = WithChildren & WithClassName;

/* -------------------------------------------------
   레이아웃 / 래퍼
   ------------------------------------------------- */

export type LandingWrapperProps = WithChildrenAndClassName;

export type LandingMainSectionProps = WithChildrenAndClassName;

/* -------------------------------------------------
   Footer
   ------------------------------------------------- */

export type FooterLink = {
  label: string;
  href: string;
};

export type LandingFooterColumnProps = {
  title: string;
  links: FooterLink[];
};

/* -------------------------------------------------
   Hero / Features 섹션
   ------------------------------------------------- */

export type LandingHeroSectionProps = WithClassName;

export type LandingFeaturesSection1Props = WithClassName;

export type LandingFeatureGridProps = WithClassName;

/* -------------------------------------------------
   기능 소개 섹션 1 — Feature 리스트
   ------------------------------------------------- */

export type FeatureIconName =
  | "calendar"
  | "calendarDays"
  | "calendarRange"
  | "checkSquare"
  | "rotateCcw"
  | "stickyNote";

export interface FeatureItem {
  title: string;
  description: string;
  iconName: FeatureIconName;
  previewImageSrc: string;
}
