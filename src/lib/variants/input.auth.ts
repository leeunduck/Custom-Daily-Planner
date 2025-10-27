// src/lib/variants/input.auth.ts
import { cva, type VariantProps } from "class-variance-authority";

/**
 * 로그인 인풋 컴포넌트의 스타일 variant
 * - 기본: 1px + gray-300
 * - 포커스: 1.5px + gray-900
 * - 에러: 1.5px + danger-600
 * - 에러 상태에서 포커스 시: 포커스 규칙(gray-900)로 복귀
 */
export const authInputVariants = cva(
  [
    // === 기본 레이아웃 ===
    "w-[36.6rem] h-[4.6rem] px-6 rounded-lg bg-white t-14-m outline-none",

    // === 플레이스홀더 ===
    "placeholder:text-[var(--color-gray-500)]",

    // === 기본 테두리 (1px + gray-300) ===
    "border-[1.5px] border-[color:var(--color-gray-300)]",

    // === 포커스 (1.5px + gray-900) ===
    "focus:border-[2px] focus:border-[color:var(--color-gray-900)]",

    // === 전환 효과 ===
    "transition-colors duration-150",
  ].join(" "),
  {
    variants: {
      status: {
        default: "",

        error: [
          "border-[2px]",
          "border-[color:var(--color-danger-600)]",
          "focus:border-[2px]",
          "focus:border-[color:var(--color-gray-900)]",
        ].join(" "),
      },
    },
    defaultVariants: {
      status: "default",
    },
  },
);

export type AuthInputVariants = VariantProps<typeof authInputVariants>;
