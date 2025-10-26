import { cva, type VariantProps } from "class-variance-authority";

export const specialFeatureCardVariants = cva(
  [
    // === 레이아웃 스타일 ===
    "inline flex flex-col justify-center gap-5 p-7 text-center",

    // === 시각적 효과 ===
    "group relative isolate rounded-xl",

    // === 테두리 및 배경 ===
    "border border-[var(--color-gray-200)] bg-[var(--color-white)]",

    // === 그림자 효과 ===
    "shadow-soft",
  ].join(" "),
  {
    variants: {
      // === 크기 variants ===
      size: {
        sm: "w-[30rem] h-[20rem] p-5 gap-4",
        md: "w-[35rem] h-[22rem] p-6 gap-4",
        lg: "w-[40rem] h-[25rem] p-7 gap-5",
        xl: "w-[45rem] h-[28rem] p-8 gap-6",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

export type SpecialFeatureCardVariantProps = VariantProps<typeof specialFeatureCardVariants>;
