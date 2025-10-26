import type { HTMLAttributes } from "react";

export type CardPreset = "specialFeature";

export interface BaseCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/** 공용 Card 프롭 */
export interface CardProps extends BaseCardProps {
  /** 어떤 cva를 쓸지 결정 (specialFeature) */
  preset?: CardPreset;
  /** 카드 크기 */
  size?: "sm" | "md" | "lg" | "xl";
}
