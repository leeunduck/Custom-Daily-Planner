import type { ButtonHTMLAttributes } from "react";

export type ButtonPreset = "hero" | "feature";
export type ButtonIntent = "primary"; // hero 전용(필요 시 확장 가능)

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
}

/** 공용 Button 프롭 */
export interface ButtonProps extends BaseButtonProps {
  /** 어떤 cva를 쓸지 결정 (hero | feature) */
  preset?: ButtonPreset;

  /** hero 전용 옵션 */
  intent?: ButtonIntent;
  glow?: boolean;
  pill?: boolean;

  /** feature 전용 옵션 */
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  radius?: "sm" | "md" | "lg" | "xl" | "2xl";
}
