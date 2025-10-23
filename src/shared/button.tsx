import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

export const buttonVariants = cva(
  [
    // Base
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap select-none font-medium text-sm",
    "rounded-full transition-colors",
    "disabled:opacity-50 disabled:pointer-events-none",
    // Icon defaults
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    // Focus ring (a11y)
    "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
  ].join(" "),
  {
    variants: {
      variant: {
        pill: [
          // default border + text/bg
          "border-[0.5px] border-[var(--color-gray-300)]",
          "bg-[#ffffff] text-[#111827]",
          // hover: bg + border unify (#1f1f1f)
          "hover:bg-[#1f1f1f] hover:text-white hover:border-[#1f1f1f]",
          // active/selected
          "data-[active=true]:bg-black data-[active=true]:text-white data-[active=true]:border-black",
        ].join(" "),
      },
      size: {
        pill: "h-10 px-6",
      },
    },
    defaultVariants: { variant: "pill", size: "pill" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  "data-active"?: boolean | "true" | "false";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : "button"}
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
