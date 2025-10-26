"use client";
import { cn } from "@/lib/utils";
import { getCardClasses } from "@/lib/variants/card.presets";
import type { CardProps } from "@/types/card";
import * as React from "react";

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, preset = "specialFeature", size = "lg", children, ...rest }, ref) => {
    // ⬇️ preset에 따라 알맞은 cva를 내부에서 선택해 클래스 생성
    const classes = getCardClasses(preset, { size });

    return (
      <div ref={ref} className={cn(classes, className)} {...rest}>
        {children}
      </div>
    );
  },
);
Card.displayName = "Card";

// 카드 내부 컴포넌트들
function CardIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-icon"
      className={cn(
        "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-gray-100)]",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn("mb-3 text-lg font-semibold text-[var(--color-gray-900)]", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-[var(--color-gray-600)] leading-relaxed", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-footer" className={cn("mt-4", className)} {...props} />;
}

export { CardContent, CardDescription, CardFooter, CardIcon, CardTitle };
