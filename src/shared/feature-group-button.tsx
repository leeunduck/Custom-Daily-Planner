"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/shared/button";
import type { FeatureGroupButtonProps } from "@/types/feature-button";
import * as React from "react";

// 아이콘 박스 라운드 클래스 매핑(테마 변수 연결)
const iconRadiusClass: Record<NonNullable<FeatureGroupButtonProps["iconRadius"]>, string> = {
  sm: "rounded-[var(--radius-sm)]",
  md: "rounded-[var(--radius-md)]",
  lg: "rounded-[var(--radius-lg)]",
  xl: "rounded-[var(--radius-xl)]",
  "2xl": "rounded-[var(--radius-2xl)]",
};

export const FeatureGroupButton = React.forwardRef<HTMLButtonElement, FeatureGroupButtonProps>(
  ({ icon, title, description, radius = "2xl", iconRadius = "lg", className, ...rest }, ref) => {
    // 접근성: aria-label 없으면 title로 보완
    const ariaLabel = (rest["aria-label"] as string | undefined) ?? title;

    return (
      <Button
        ref={ref}
        preset="feature"
        radius={radius}
        className={cn("h-[6.4rem] w-[29.6rem] justify-start px-[2.0rem]", className)}
        aria-label={ariaLabel}
        {...rest}
      >
        <span className="inline-flex w-full items-center gap-6">
          {icon ? (
            <span
              className={cn(
                "inline-flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center",
                iconRadiusClass[iconRadius],
                "bg-[var(--color-white)]",
                "border border-[var(--color-gray-300)]", // ← border-1 → border 로 교정
                "shadow-[var(--shadow-soft)]",
              )}
            >
              <span className="text-[var(--color-gray-900)]">{icon}</span>
            </span>
          ) : null}

          <span className="flex min-w-0 flex-col text-left">
            <span className="t-16-b text-[var(--color-gray-900)] truncate">{title}</span>
            {description ? (
              <span className="t-14-m text-[var(--color-gray-600)] truncate">{description}</span>
            ) : null}
          </span>
        </span>
      </Button>
    );
  },
);

FeatureGroupButton.displayName = "FeatureGroupButton";
