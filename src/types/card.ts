import type { HTMLAttributes } from "react";

// 공통 베이스
export interface BaseCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/** specialFeature 전용 */
export interface SpecialFeatureCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

/** selectModule 전용 */
import * as React from "react";

export type SelectModuleCardKind = "module" | "design";
export type SubtitleState = "select" | "noSelect";

export interface SelectModuleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string; // 한글 제목
  subtitle?: string; // 영문 서브타이틀
  description?: string; // 설명
  imageSrc?: string; // 섬네일 경로
  imageAlt?: string; // 대체 텍스트
  kind?: SelectModuleCardKind; // module | design (타이포만 달라짐)
  subtitleState?: SubtitleState;
  children?: React.ReactNode;
}

export type CardProps = SpecialFeatureCardProps | SelectModuleCardProps;
