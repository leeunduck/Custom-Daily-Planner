import { cva } from "class-variance-authority";

export const heroButtonVariants = cva(
  [
    // Layout
    "inline-flex items-center justify-center",
    "cursor-pointer rounded-full",

    // Transitions & a11y
    "transition-[color,background-color,border-color,transform] duration-200",
    "active:translate-y-[1px]",

    // Base (white/gray)
    "bg-[var(--color-white)] text-[var(--color-gray-900)] border border-[var(--color-gray-300)]",

    // Hover invert (black/white/black)
    "hover:bg-[var(--color-black)] hover:text-[var(--color-white)] hover:border-[var(--color-black)]",
  ].join(" "),
  {
    variants: {
      size: { md: "t-18-m px-[3rem] h-[5.4rem]", sm: "t-12-m px-[1.2rem] h-[3.7rem]" },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
