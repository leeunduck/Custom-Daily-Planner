"use client";

import { cn } from "@/lib/utils";

export function LandingHeroAnimation() {
  return (
    <div className="relative">
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl bg-[var(--color-white)]",
          "shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
          "aspect-video w-full",
        )}
      >
        <video
          className="h-full w-full object-cover"
          src="/videos/landing-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="PlanMate 데일리 플래너 사용 예시 영상"
        />
      </div>
    </div>
  );
}
