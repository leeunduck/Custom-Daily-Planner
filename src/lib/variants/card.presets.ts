import type { CardPreset } from "@/types/card";
import type { VariantProps } from "class-variance-authority";
import { specialFeatureCardVariants } from "./card.specialFeatureCard";

/** cva VariantProps 원본에서 노출할 옵션만 선택 */
type SpecialFeatureVariantProps = VariantProps<typeof specialFeatureCardVariants>;
type SpecialFeatureOpts = Partial<Pick<SpecialFeatureVariantProps, "size">>;

/** 프리셋별 오버로드 (자동완성/가드 정확) */
export function getCardClasses(preset: "specialFeature", opts?: SpecialFeatureOpts): string;

// 구현체
export function getCardClasses(preset: CardPreset, opts: SpecialFeatureOpts = {}): string {
  switch (preset) {
    case "specialFeature": {
      const { size } = opts;
      return specialFeatureCardVariants({ size });
    }
  }
}
