"use client";

import { SPECIAL_FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Icon } from "@/shared/Icon";
import { SpecialFeatureCard } from "@/shared/SpecialFeatureCard";
import type { LandingSpecialFeatureGridProps } from "@/types/landing";

export function LandingSpecialFeatureGrid({ className }: LandingSpecialFeatureGridProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-10",
        "md:flex md:flex-row md:justify-center md:gap-8",
        className,
      )}
    >
      {SPECIAL_FEATURES.map((feature) => (
        <SpecialFeatureCard
          key={feature.title}
          icon={<Icon name={feature.iconName} size={28} />}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
