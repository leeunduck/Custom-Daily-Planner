import { cva, type VariantProps } from "class-variance-authority";

/**
 * 로그인 버튼 컴포넌트의 스타일 variant
 * - 어두운 배경색의 직사각형 버튼
 * - 둥근 모서리와 부드러운 그림자 효과
 * - 중앙 정렬된 텍스트
 */
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
      color: {
        black:
          "bg-[var(--color-gray-900)] text-[var(--color-white)] hover:bg-[var(--color-gray-600)] hover:shadow-md",
        white:
          "bg-[var(--color-white)] text-[var(--color-gray-900)] hover:bg-[var(--color-gray-100)] hover:shadow-md",
      },
    },
    defaultVariants: {
      color: "black",
    },
  },
);

export type LoginButtonVariantProps = VariantProps<typeof loginButtonVariants>;
