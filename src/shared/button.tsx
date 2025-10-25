"use client";
import { cn } from "@/lib/utils";
import { getButtonClasses } from "@/lib/variants/button.presets"; // ⬅️ hero/feature 등 프리셋 스위치
import type { ButtonProps } from "@/types/button";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      className,
      // 프리셋 기본값: 기존과의 호환을 위해 "hero"
      preset = "hero",

      // hero 전용 기본값
      intent = "primary",
      glow = false,
      pill = true,

      // feature 전용 기본값
      size = "md",
      radius = "2xl",

      children,
      ...rest
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    // ⬇️ preset에 따라 알맞은 cva를 내부에서 선택해 클래스 생성
    const classes = getButtonClasses(preset, {
      intent,
      glow,
      pill, // hero 옵션
      size,
      radius, // feature 옵션
    });

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : "button"}
        className={cn(classes, className)}
        {...rest}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";
