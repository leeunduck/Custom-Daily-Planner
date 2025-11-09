import type { backButtonVariants } from "@/lib/variants/button.back";
import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

export type ButtonPreset = "hero" | "feature" | "auth" | "signup" | "cta" | "back";
export type Size = "sm" | "md";
export type Radius = "sm" | "md" | "lg" | "xl" | "2xl";
export type AuthColor = "black" | "white";
export type SignupBg = "basic" | "google" | "kakao";

/** 공통 기본 타입 */
export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
}

/** hero 전용 */
export type HeroProps = BaseButtonProps & {
  preset: "hero";
  size?: Size;
  // 금지
  color?: never;
  bg?: never;
};

/** feature 전용 */
export type FeatureProps = BaseButtonProps & {
  preset: "feature";
  size?: Size;
  // 금지
  color?: never;
};

/** auth 전용 */
export type AuthProps = BaseButtonProps & {
  preset: "auth";
  color?: AuthColor;
  // 금지
  size?: Size;
  bg?: never;
};

/** signup 전용 */
export type SignupProps = BaseButtonProps & {
  preset: "signup";
  bg?: SignupBg;
  // 금지
  size?: Size;
  color?: never;
};

/** cta 전용 */
export type CtaProps = BaseButtonProps & {
  preset: "cta";
  disabled?: boolean;
  // 금지
  size?: Size;
  color?: never;
  bg?: never;
};

/** back 전용 */
export type BackProps = BaseButtonProps &
  VariantProps<typeof backButtonVariants> & {
    preset: "back";
    // 금지
    size?: Size;
    color?: never;
    bg?: never;
  };

/** 전체 버튼 타입 유니온 */
export type ButtonProps = HeroProps | FeatureProps | AuthProps | SignupProps | CtaProps | BackProps;
