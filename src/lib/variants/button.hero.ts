import { cva } from "class-variance-authority";

export const heroButtonVariants = cva(
  [
    // Layout
    "inline-flex items-center justify-center",
    "h-[5.4rem] px-[3rem]",

    // Typography (from globals.css)
    "t-18-m",

    // Transitions & a11y
    "transition-[color,background-color,border-color,transform] duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    "disabled:opacity-50 disabled:pointer-events-none",
    "active:translate-y-[1px]",

    // Base (white/gray)
    "bg-white text-foreground border border-input",

    // Hover invert (black/white/black)
    "hover:bg-[var(--color-black)] hover:text-white hover:border-[var(--color-black)]",
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
