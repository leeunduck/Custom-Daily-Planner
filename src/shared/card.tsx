"use client";

import { cn } from "@/lib/utils";
import { getCardClasses } from "@/lib/variants/card.presets";
import type { CardProps } from "@/types/card";
import * as React from "react";

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, preset, size = "lg", children, ...native } = props;

  if (preset === "specialFeature") {
    const classes = getCardClasses("specialFeature", { size });
    return (
      <div ref={ref} className={cn(classes, className)} {...native}>
        {children}
      </div>
    );
  }

  // 기본 카드 (fallback)
  return (
    <div
      ref={ref}
      className={cn("bg-white rounded-xl border border-gray-200 shadow-sm p-6", className)}
      {...native}
    >
      {children}
    </div>
  );
});
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
