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

export const FeatureButton = React.forwardRef<HTMLButtonElement, FeatureGroupButtonProps>(
  (
    {
      icon,
      title,
      description,
      size = "sm",
      iconRadius = "lg",
      className,
      // 안전 가드: 외부에서 type을 바꿔도 기본은 "button"
      type,
      // 접근성 폴백: 없으면 title을 사용
      "aria-label": ariaLabelProp,
      // ✅ 확장 대비: 나머지 네이티브 속성
      ...rest
    },
    ref,
  ) => {
    const ariaLabel = ariaLabelProp ?? title;
    const iconBoxRadius = iconRadiusClass[iconRadius];

    return (
      <Button
        ref={ref}
        preset="feature"
        size={size}
        type={type ?? "button"}
        className={cn("md:h-[6.4rem] md:w-[29.6rem] md:px-[2.0rem]", className)}
        aria-label={ariaLabel}
        {...rest}
      >
        <span className="inline-flex w-full items-center gap-6">
          {icon ? (
            <span
              aria-hidden="true"
              className={cn(
                "inline-flex h-[3rem] w-[3rem] shrink-0 items-center justify-center",
                "md:h-[4.5rem] md:w-[4.5rem]",
                iconBoxRadius,
                "bg-[var(--color-white)]",
                "border border-[var(--color-gray-300)]",
                "shadow-[var(--shadow-soft)]",
              )}
            >
              <span className="text-[var(--color-gray-900)]">{icon}</span>
            </span>
          ) : null}

          <span className="flex min-w-0 flex-col text-left">
            <span className={cn("t-12-b text-[var(--color-gray-900)] truncate", "md:t-16-b")}>
              {title}
            </span>
            {description ? (
              <span className={cn("t-10-m text-[var(--color-gray-600)] truncate", "md:t-14-m")}>
                {description}
              </span>
            ) : null}
          </span>
        </span>
      </Button>
    );
  },
);

FeatureButton.displayName = "FeatureGroupButton";
