// src/components/landing/LandingSpecialFeatureGrid.tsx
"use client";

import { SPECIAL_FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Icon } from "@/shared/Icon";
import { SpecialFeatureCard } from "@/shared/SpecialFeatureCard";
import type { LandingSpecialFeatureGridProps } from "@/types/landing";

export function LandingSpecialFeatureGrid({
  className,
  isInView = false,
}: LandingSpecialFeatureGridProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-8",
        className,
      )}
    >
      {SPECIAL_FEATURES.map((feature, index) => {
        const delayMs = index * 200;

        return (
          <SpecialFeatureCard
            key={feature.title}
            icon={<Icon name={feature.iconName} size={28} />}
            title={feature.title}
            description={feature.description}
            className={cn(
              // 공통 트랜지션 + hover 효과
              "transition-all duration-700 ease-out",
              "hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]",
              // 스크롤 진입 시: 아래에서 위로 + 페이드 인
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
            style={{ transitionDelay: `${delayMs}ms` }}
          />
        );
      })}
    </div>
  );
}
