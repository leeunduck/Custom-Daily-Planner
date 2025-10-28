import { cva, type VariantProps } from "class-variance-authority";

export const signupButtonVariants = cva(
  [
    // Layout (공통)
    "inline-flex items-center justify-center",
    "w-[36.6rem] h-[6.2rem] px-[3rem] rounded-lg cursor-pointer",

    // Typography (공통)
    "t-16-m",

    // Base (투명/토큰 기반)
    "bg-transparent",
    "text-[var(--color-gray-900)]",
    "shadow-none",

    // Hover & Interaction (soft bg only)
    "transition-[background-color,transform] duration-310",
    "hover:bg-[var(--color-gray-200)]",
  ].join(" "),
  {
    variants: {
      bg: {
        basic: [
          "bg-[var(--color-gray-900)]",
          "text-[var(--color-white)]",
          "hover:bg-[var(--color-gray-600)]",
          "border-0",
        ].join(" "),
        google: [
          "bg-[var(--color-white)] text-[var(--color-gray-900)]",
          "border border-[var(--color-gray-300)]",
          "hover:bg-[var(--color-gray-100)]",
        ].join(" "),
        kakao: [
          "bg-[var(--color-yellow-100)] text-[var(--color-gray-900)]",
          "border-0",
          "hover:bg-[var(--color-yellow-200)]",
        ].join(" "),
      },
    },

    defaultVariants: {
      bg: "basic",
    },
  },
);

export type SignupButtonVariantProps = VariantProps<typeof signupButtonVariants>;
