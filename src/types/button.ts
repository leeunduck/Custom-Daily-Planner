import type { ButtonHTMLAttributes } from "react";

export type ButtonPreset = "hero" | "feature" | "auth" | "signup";
export type ButtonIntent = "primary";
export type Radius = "sm" | "md" | "lg" | "xl" | "2xl";
export type AuthColor = "black" | "white";
export type SignupBg = "basic" | "google" | "kakao";

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

/** signup 전용 **/
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

export type ButtonProps = HeroProps | FeatureProps | AuthProps | SignupProps;
