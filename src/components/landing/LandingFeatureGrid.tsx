"use client";

import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { FeatureButton } from "@/shared/FeatureButton";
import { Icon } from "@/shared/Icon";
import { useFeaturePreviewStore } from "@/stores/featurePreviewStore";
import type { LandingFeatureGridProps } from "@/types/landing";

export function LandingFeatureGrid({ className }: LandingFeatureGridProps) {
  const setActiveFeature = useFeaturePreviewStore((state) => state.setActiveFeature);

  return (
    <div className={cn("grid grid-cols-1 gap-3", "md:grid-cols-2 md:gap-8", className)}>
      {FEATURES.map((feature) => (
        <FeatureButton
          key={feature.title}
          icon={<Icon name={feature.iconName} size={19} />}
          title={feature.title}
          description={feature.description}
          onMouseEnter={() => setActiveFeature(feature)}
          onFocus={() => setActiveFeature(feature)}
        />
      ))}
    </div>
  );
}
