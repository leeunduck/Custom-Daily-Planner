import type { ButtonPreset } from "@/types/button";
import type { VariantProps } from "class-variance-authority";
import { loginButtonVariants } from "./button.auth";
import { featureButtonVariants } from "./button.feature";
import { heroButtonVariants } from "./button.hero";

// 각 cva의 VariantProps에서 우리가 노출할 키만 추려서 옵션 타입 정의
type HeroVariantProps = VariantProps<typeof heroButtonVariants>;
type FeatureVariantProps = VariantProps<typeof featureButtonVariants>;
type AuthVariantProps = VariantProps<typeof loginButtonVariants>;

type HeroOpts = Partial<Pick<HeroVariantProps, "intent" | "glow" | "pill">>;
type FeatureOpts = Partial<Pick<FeatureVariantProps, "radius">>; // size 등 추가하면 여기서 확장
type AuthOpts = Partial<Pick<AuthVariantProps, "color">>;

// ✅ 프리셋별 오버로드 (자동완성/타입가드 정확)
export function getButtonClasses(preset: "hero", opts?: HeroOpts): string;
export function getButtonClasses(preset: "feature", opts?: FeatureOpts): string;
export function getButtonClasses(preset: "auth", opts?: AuthOpts): string;
// 구현체
export function getButtonClasses(
  preset: ButtonPreset,
  opts: HeroOpts | FeatureOpts | AuthOpts = {},
): string {
  switch (preset) {
    case "hero": {
      const { intent, glow, pill } = opts as HeroOpts;
      // 필요한 키만 전달 (불필요 키 유입 차단)
      return heroButtonVariants({ intent, glow, pill });
    }
    case "feature": {
      const { radius } = opts as FeatureOpts;
      return featureButtonVariants({ radius });
    }
    case "auth": {
      const { color } = opts as AuthOpts;
      return loginButtonVariants({ color });
    }
  }
}
