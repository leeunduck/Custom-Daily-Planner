"use client";
import { cn } from "@/lib/utils";
import { specialFeatureCardVariants } from "@/lib/variants/card.specialFeatureCard";
import type { SpecialFeatureCardProps } from "@/types/special-feature-card";
import * as React from "react";

export const SpecialFeatureCard = React.forwardRef<HTMLDivElement, SpecialFeatureCardProps>(
  ({ className, icon, title, description, children, ...rest }, ref) => {
    const classes = specialFeatureCardVariants({});

    return (
      <div ref={ref} className={cn(classes, className)} {...rest}>
        {icon && (
          <div className="mx-auto mb-4 flex h-25 w-25 items-center justify-center rounded-lg bg-[var(--color-gray-100)]">
            {icon}
          </div>
        )}

        {title && <h3 className="mb-3 t-20-b text-[var(--color-gray-900)]">{title}</h3>}

        {description && (
          <p className="t-16-m text-[var(--color-gray-600)] text-center">{description}</p>
        )}

        {children}
      </div>
    );
  },
);
SpecialFeatureCard.displayName = "SpecialFeatureCard";
