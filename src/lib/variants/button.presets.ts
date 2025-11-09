import type { ButtonPreset } from "@/types/button";
import type { VariantProps } from "class-variance-authority";

import { loginButtonVariants } from "./button.auth";
import { backButtonVariants } from "./button.back";
import { ctaButtonVariants } from "./button.cta";
import { featureButtonVariants } from "./button.feature";
import { heroButtonVariants } from "./button.hero";
import { signupButtonVariants } from "./button.signup";

// 각 cva의 VariantProps에서 우리가 노출할 키만 추려서 옵션 타입 정의
type HeroVariantProps = VariantProps<typeof heroButtonVariants>;
type FeatureVariantProps = VariantProps<typeof featureButtonVariants>;
type AuthVariantProps = VariantProps<typeof loginButtonVariants>;
type SignupVariantProps = VariantProps<typeof signupButtonVariants>;
type CtaVariantProps = VariantProps<typeof ctaButtonVariants>;
type BackVariantProps = VariantProps<typeof backButtonVariants>;

type HeroOpts = Partial<Pick<HeroVariantProps, "size">>;
type FeatureOpts = Partial<Pick<FeatureVariantProps, "radius">>;
type AuthOpts = Partial<Pick<AuthVariantProps, "color">>;
type SignupOpts = Partial<Pick<SignupVariantProps, "bg">>;
type CtaOpts = Partial<Pick<CtaVariantProps, "state">>;
type BackOpts = Partial<Pick<BackVariantProps, "size" | "tone" | "underline">>;

// ✅ 프리셋별 오버로드
export function getButtonClasses(preset: "hero", opts?: HeroOpts): string;
export function getButtonClasses(preset: "feature", opts?: FeatureOpts): string;
export function getButtonClasses(preset: "auth", opts?: AuthOpts): string;
export function getButtonClasses(preset: "signup", opts?: SignupOpts): string;
export function getButtonClasses(preset: "cta", opts?: CtaOpts): string;
export function getButtonClasses(preset: "back", opts?: BackOpts): string;

// 구현체
export function getButtonClasses(
  preset: ButtonPreset,
  opts: HeroOpts | FeatureOpts | AuthOpts | SignupOpts | CtaOpts | BackOpts = {},
): string {
  switch (preset) {
    case "hero": {
      const { size } = opts as HeroOpts;
      return heroButtonVariants({ size });
    }
    case "feature": {
      const { radius } = opts as FeatureOpts;
      return featureButtonVariants({ radius });
    }
    case "auth": {
      const { color } = opts as AuthOpts;
      return loginButtonVariants({ color });
    }
    case "signup": {
      const { bg } = opts as SignupOpts;
      return signupButtonVariants({ bg });
    }
    case "cta": {
      const { state } = opts as CtaOpts;
      return ctaButtonVariants({ state });
    }
    case "back": {
      const { size, tone, underline } = opts as BackOpts;
      return backButtonVariants({ size, tone, underline });
    }
  }
}
