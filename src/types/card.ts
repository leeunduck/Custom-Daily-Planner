import type { HTMLAttributes } from "react";

export type CardPreset = "specialFeature";
export type CardSize = "sm" | "md" | "lg" | "xl";

export interface BaseCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/** specialFeature 전용 */
export type SpecialFeatureCardProps = BaseCardProps & {
  preset: "specialFeature";
  size?: CardSize;
};

export type CardProps = SpecialFeatureCardProps;
