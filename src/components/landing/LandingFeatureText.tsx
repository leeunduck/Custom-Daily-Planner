"use client";

import { cn } from "@/lib/utils";
import type { LandingFeatureTextProps } from "@/types/landing";

export function LandingFeatureText({ className }: LandingFeatureTextProps) {
  return (
    <div className={cn("md:space-y-8", className)}>
      <h2 id="landing-features2-title" className="t-30-b md:t-40-b text-[var(--color-gray-900)]">
        모듈을
        <br />
        자유롭게 배치하세요
      </h2>
      <p className="t-12-m md:t-16-m text-[var(--color-gray-600)]">
        드래그 앤 드롭으로 나만의 대시보드를 완성하세요.
      </p>
    </div>
  );
}
