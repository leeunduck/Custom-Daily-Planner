"use client";

import { LandingFeatureGrid } from "@/components/landing/LandingFeatureGrid";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { useFeaturePreviewStore } from "@/stores/featurePreviewStore";
import type { LandingFeaturesSection1Props } from "@/types/landing";
import Image from "next/image";

export function LandingFeaturesSection1({ className }: LandingFeaturesSection1Props) {
  const activeFeature = useFeaturePreviewStore((state) => state.activeFeature);
  const { ref, isInView } = useInView({
    threshold: 0.5,
    once: true,
  });

  return (
    <section
      id="landing-features1"
      aria-labelledby="landing-features1-title"
      ref={ref}
      className={cn(
        "grid gap-18",
        "md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center",
        "transition-all duration-800 ease-out",
        isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
        className,
      )}
    >
      {/* Left: 제목 + 기능 리스트 */}
      <div className="space-y-8">
        <header className="space-y-6">
          <h2
            id="landing-features1-title"
            className="t-30-b md:t-40-b text-[var(--color-gray-900)]"
          >
            필요한 기능만 골라 쓰는
            <br />
            데일리 플래너
          </h2>
          <p className="t-12-m md:t-16-m text-[var(--color-gray-600)]">
            나에게 필요한 모듈만 선택해 나만의 플래너를 만들 수 있습니다.
          </p>
        </header>

        <LandingFeatureGrid />
      </div>

      {/* Right: 화면 미리보기 카드 */}
      <div className="relative">
        <div className="relative mx-auto max-w-full rounded-[32px] bg-[var(--color-gray-50)]">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-[var(--color-white)] shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
            <Image
              src={activeFeature.previewImageSrc}
              alt={`${activeFeature.title} 플래너 화면 미리보기`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 480px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
