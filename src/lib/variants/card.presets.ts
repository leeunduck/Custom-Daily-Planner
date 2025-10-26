import type { CardPreset } from "@/types/card";
import type { VariantProps } from "class-variance-authority";
import { specialFeatureCardVariants } from "./card.specialFeatureCard";

export type SpecialFeatureVariantProps = VariantProps<typeof specialFeatureCardVariants>;

type PresetSupersetOpts = Partial<SpecialFeatureVariantProps>;

export function getCardClasses(preset: CardPreset, opts: PresetSupersetOpts = {}): string {
  // preset === "specialFeature"
  const { size } = opts as Partial<SpecialFeatureVariantProps>;
  return specialFeatureCardVariants({ size });
}
