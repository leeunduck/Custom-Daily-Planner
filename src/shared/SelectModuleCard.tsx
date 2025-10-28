"use client";

import { cn } from "@/lib/utils";
import {
  selectModuleCardDescription,
  selectModuleCardImage,
  selectModuleCardImageWrap,
  selectModuleCardRoot,
  selectModuleCardSubtitle,
  selectModuleCardTitle,
} from "@/lib/variants/card.selectModule";
import type { SelectModuleCardProps } from "@/types/card";
import Image from "next/image";
import * as React from "react";

export const SelectModuleCard = React.forwardRef<HTMLDivElement, SelectModuleCardProps>(
  (
    {
      className,
      title,
      subtitle,
      description,
      imageSrc,
      imageAlt,
      kind = "module",
      subtitleState = "select",
      children,
      ...native
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        className={cn(selectModuleCardRoot({ kind }), className)}
        {...native}
      >
        <div className="space-y-1">
          <h3 className={selectModuleCardTitle({ kind })}>{title}</h3>
          {subtitle ? (
            <p className={selectModuleCardSubtitle({ state: subtitleState })}>{subtitle}</p>
          ) : null}
          {description ? (
            <p className={selectModuleCardDescription({ kind })}>{description}</p>
          ) : null}
        </div>

        {children}

        {imageSrc ? (
          <div className={selectModuleCardImageWrap()}>
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              fill
              className={selectModuleCardImage()}
              sizes="(max-width: 520px) 100vw, 520px"
              priority={false}
            />
          </div>
        ) : null}
      </div>
    );
  },
);

SelectModuleCard.displayName = "SelectModuleCard";
