"use client";
import { cn } from "@/lib/utils";
import { specialFeatureCardVariants } from "@/lib/variants/card.specialFeatureCard";
import type { SpecialFeatureCardProps } from "@/types/card";
import * as React from "react";

export const SpecialFeatureCard = React.forwardRef<HTMLDivElement, SpecialFeatureCardProps>(
  (props, ref) => {
    const { className, icon, title, description, children, ...native } = props;

    const classes = specialFeatureCardVariants({ size: "sm" });

    return (
      <div
        ref={ref}
        className={cn("md:max-w-[40rem] md:h-[25rem] md:p-7 gap-5", classes, className)}
        {...native}
      >
        {icon && (
          <div
            className={cn(
              "mx-auto flex h-15 w-15 items-center justify-center rounded-lg bg-[var(--color-gray-100)]",
              "md:mb-4 flex md:h-25 md:w-25",
            )}
          >
            {icon}
          </div>
        )}

        {title && (
          <h3 className={cn("t-16-b text-[var(--color-gray-900)]", "md:mb-3 md:t-20-b")}>
            {title}
          </h3>
        )}

        {description && (
          <p className={cn("t-10-m text-[var(--color-gray-600)] text-center", "md:t-16-m")}>
            {description}
          </p>
        )}

        {children}
      </div>
    );
  },
);
SpecialFeatureCard.displayName = "SpecialFeatureCard";
