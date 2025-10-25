import { cva } from "class-variance-authority";

export const featureButtonVariants = cva(
  [
    // Layout
    "inline-flex items-center justify-start w-full gap-3",
    "h-[4.4rem] px-[1.8rem]",

    // Typography
    "t-16-m",

    // Base (no border / transparent / token-based color)
    "bg-transparent",
    "text-[var(--color-gray-900)]",
    "shadow-none",

    // Hover & Interaction (soft bg only)
    "transition-[background-color,transform] duration-310",
    "hover:bg-[var(--color-gray-200)]",
  ].join(" "),
  {
    variants: {
      // Radius (globals.css 토큰과 1:1 매핑)
      radius: {
        sm: "rounded-[var(--radius-sm)]",
        md: "rounded-[var(--radius-md)]",
        lg: "rounded-[var(--radius-lg)]",
        xl: "rounded-[var(--radius-xl)]",
        "2xl": "rounded-[var(--radius-2xl)]",
      },

      // Size (feature용 높이/패딩 프리셋)
      size: {
        sm: "",
        md: "",
        lg: "h-[4.8rem] px-[2.2rem] t-18-m",
        xl: "",
        "2xl": "",
      },
    },

    // Defaults
    defaultVariants: {
      radius: "2xl",
      size: "md",
    },
  },
);
