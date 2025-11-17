import { cva, type VariantProps } from "class-variance-authority";

export const loginButtonVariants = cva(
  [
    // === 기본 레이아웃 ===
    "inline-flex items-center justify-center w-[36.6rem] h-[4.6rem] cursor-pointer",

    // === 폰트 스타일 ===
    "t-14-m",

    // === 테두리 및 모서리 ===
    "border-0 rounded-lg",

    // === 그림자 효과 ===
    "shadow-sm",

    // === 전환 효과 ===
    "transition-all duration-200",
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
        white: ["bg-withe", "text-black", "hover:bg-[var(--color-gray-100)]"],
      },
    },
    defaultVariants: {
      bg: "basic",
    },
  },
);

export type LoginButtonVariantProps = VariantProps<typeof loginButtonVariants>;
