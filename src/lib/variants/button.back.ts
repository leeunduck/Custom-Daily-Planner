import { cva, type VariantProps } from "class-variance-authority";

export const backButtonVariants = cva(
  [
    "group inline-flex items-center gap-2 px-4 py-2 rounded-md  cursor-pointer",
    "text-[var(--color-gray-600)] hover:text-[var(--color-gray-900)] ",
    "transition-colors duration-200",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "t-14-m",
        md: "t-16-m",
      },
      underline: {
        true: "hover:underline underline-offset-2",
        false: "",
      },
      tone: {
        default: "",
        muted: "text-[var(--color-gray-500)] hover:text-[var(--color-gray-900)]",
      },
    },
    defaultVariants: {
      size: "md",
      underline: false,
      tone: "default",
    },
  },
);

export type BackButtonVariantProps = VariantProps<typeof backButtonVariants>;
