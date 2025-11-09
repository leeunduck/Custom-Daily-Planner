"use client";

import { LandingSpecialFeatureGrid } from "@/components/landing/LandingSpecialFeatureGrid";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import type { LandingSpecialFeaturesSectionProps } from "@/types/landing";

export function LandingSpecialFeaturesSection({ className }: LandingSpecialFeaturesSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.5, once: false });

  return (
    <section
      id="landing-special-features"
      aria-labelledby="landing-special-features-title"
      className={cn("bg-[var(--color-gray-50)] py-24 md:py-32", className)}
    >
      <div ref={ref} className="container space-y-12 md:space-y-16">
        {/* 섹션 인트로: 제목 + 부제 (아래 → 위 슬라이드) */}
        <header
          className={cn(
            "space-y-3 text-center transition-all duration-1000 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          <h2
            id="landing-special-features-title"
            className="t-26-b md:t-40-b text-[var(--color-gray-900)]"
          >
            PlanMate의 특별한 기능들
          </h2>
          <p className="t-12-m md:t-16-m text-[var(--color-gray-600)]">
            당신의 생산성을 높이는 스마트한 도구들
          </p>
        </header>

        {/* 하단 카드 그리드 (isInView 전달) */}
        <LandingSpecialFeatureGrid isInView={isInView} />
      </div>
    </section>
  );
}
