import type { ButtonHTMLAttributes } from "react";

export type ButtonPreset = "hero" | "feature" | "auth" | "signup" | "cta";
export type ButtonIntent = "primary";
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
  intent?: ButtonIntent;
  glow?: boolean;
  pill?: boolean;
  // 금지
  radius?: never;
  color?: never;
};

/** feature 전용 */
export type FeatureProps = BaseButtonProps & {
  preset: "feature";
  radius?: Radius;
  // 금지
  intent?: never;
  glow?: never;
  pill?: never;
  color?: never;
};

/** auth 전용 */
export type AuthProps = BaseButtonProps & {
  preset: "auth";
  color?: AuthColor;
  // 금지
  intent?: never;
  glow?: never;
  pill?: never;
  radius?: never;
};

/** signup 전용 */
export type SignupProps = BaseButtonProps & {
  preset: "signup";
  bg?: SignupBg;
  // 금지
  intent?: never;
  glow?: never;
  pill?: never;
  radius?: never;
  color?: never;
};

/**  cta 전용 */
export type CtaProps = BaseButtonProps & {
  preset: "cta";
  /** 전체 폭 확장 여부 */
  fullWidth?: boolean;
  /** 기본적으로 `disabled`로 비활성화 → active일 때 hover 등 동작 */
  disabled?: boolean;
  // 금지
  intent?: never;
  glow?: never;
  pill?: never;
  radius?: never;
  color?: never;
  bg?: never;
};

/** 전체 버튼 타입 유니온 */
export type ButtonProps = HeroProps | FeatureProps | AuthProps | SignupProps | CtaProps;
