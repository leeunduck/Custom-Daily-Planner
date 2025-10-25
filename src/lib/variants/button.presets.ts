import type { ButtonPreset } from "@/types/button";
import type { VariantProps } from "class-variance-authority";
import { featureButtonVariants } from "./button.feature";
import { heroButtonVariants } from "./button.hero";

// 각 cva가 허용하는 옵션 타입
export type HeroVariantProps = VariantProps<typeof heroButtonVariants>;
export type FeatureVariantProps = VariantProps<typeof featureButtonVariants>;

// 두 옵션 타입의 교차(공통 superset). 필요한 키만 뽑아 쓸 거라 안전함.
type PresetSupersetOpts = Partial<HeroVariantProps & FeatureVariantProps>;

/**
 * preset에 맞춰 내부에서 알맞은 cva를 선택해 className을 만든다.
 * - 호출부는 기존처럼 하나의 객체를 넘기면 됨 (여분 키는 내부에서 무시)
 */
export function getButtonClasses(preset: ButtonPreset, opts: PresetSupersetOpts = {}): string {
  if (preset === "hero") {
    const { intent, glow, pill } = opts as Partial<HeroVariantProps>;
    return heroButtonVariants({ intent, glow, pill });
  }
  // preset === "feature"
  const { radius, size } = opts as Partial<FeatureVariantProps>;
  return featureButtonVariants({ radius, size });
}
