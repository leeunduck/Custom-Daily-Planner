import { cva } from "class-variance-authority";

export const heroButtonVariants = cva(
  [
    // Layout
    "inline-flex items-center justify-center",
    "h-[5.4rem] px-[3rem] cursor-pointer",

    // Typography (from globals.css)
    "t-18-m",

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
      intent: { primary: "" },
      glow: { true: "shadow-[0_6px_16px_0_rgba(0,0,0,0.08)]", false: "" },
      pill: { true: "rounded-full", false: "" },
    },
    defaultVariants: {
      intent: "primary",
      glow: false,
      pill: true,
    },
  },
);
