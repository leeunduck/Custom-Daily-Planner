import { cva } from "class-variance-authority";

export const ctaButtonVariants = cva(
  // 공통 베이스
  [
    "inline-flex items-center justify-center select-none cursor-pointer",
    "rounded-full px-14 py-4 t-16-m",
    "transition-[background-color,color,box-shadow] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]",
    "will-change-[background-color,color,box-shadow]",
  ].join(" "),
  {
    variants: {
      /** 논리 상태: disabled(초기) | active(활성) */
      state: {
        /** 초기 비활성 — 회색 배경, 연한 텍스트 */
        disabled: [
          "bg-[var(--color-gray-400)]",
          "text-[var(--color-gray-600)]",
          "cursor-not-allowed",
          "shadow-none",
        ].join(" "),
        /** 활성 — 흰 배경/짙은 텍스트 + hover 시 다크/화이트 반전, hover 그림자 */
        active: [
          "bg-white text-[var(--color-gray-900)]",
          "border border-[var(--color-gray-200)]",
          "shadow-[var(--shadow-soft)]",
          "hover:bg-[var(--color-gray-900)] hover:text-white",
          "hover:shadow-[var(--shadow-hover)]",
        ].join(" "),
      },
    },
    defaultVariants: {
      state: "disabled",
    },
  },
);
