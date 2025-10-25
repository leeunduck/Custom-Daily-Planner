"use client";
import { cn } from "@/lib/utils";
import { heroButtonVariants } from "@/lib/variants/button.hero";
import type { ButtonProps } from "@/types/button";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild, className, intent = "primary", glow = false, pill = true, children, ...rest },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : "button"}
        className={cn(heroButtonVariants({ intent, glow, pill }), className)}
        {...rest}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";
