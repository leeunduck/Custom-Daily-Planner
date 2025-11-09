import { cva } from "class-variance-authority";

export const featureButtonVariants = cva(
  [
    // Layout
    "inline-flex items-center justify-start gap-3",
    "h-[4.4rem] px-[1.8rem]",
    "rounded-[var(--radius-2xl)]",

    // Hover & Interaction (soft bg only)
    "transition-[background-color,transform] duration-310",
    "hover:bg-[var(--color-gray-200)]",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-[3.4rem] px-[1rem] w-[20.8rem]",
        md: "h-[6.4rem] px-[2rem] w-[29.6rem]",
      },
    },

    defaultVariants: {
      size: "sm",
    },
  },
);
