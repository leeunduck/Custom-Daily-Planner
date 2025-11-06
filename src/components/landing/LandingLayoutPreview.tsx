"use client";

import { cn } from "@/lib/utils";
import type { LandingLayoutPreviewProps } from "@/types/landing";
import Image from "next/image";

export function LandingLayoutPreview({ className }: LandingLayoutPreviewProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="relative mx-auto max-w-full rounded-[32px] bg-[var(--color-gray-50)] md:max-w-[54.225rem]">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-white shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/layout-dnd.png"
            alt="여러 모듈을 자유롭게 배치한 대시보드 레이아웃 예시"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 480px, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
