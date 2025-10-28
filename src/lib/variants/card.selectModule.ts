import { cva, type VariantProps } from "class-variance-authority";

export const selectModuleCardRoot = cva(
  [
    "rounded-[2rem] border bg-[var(--color-white)] shadow-md",
    "transition-all duration-200",
    "p-8 h-[35rem]",
    "cursor-pointer hover:shadow-md focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]",
    "hover:scale-[1.02] hover:-translate-y-1",
    "hover:[box-shadow:var(--shadow-hover)]",
  ].join(" "),
  {
    variants: {
      kind: {
        module: "w-[28rem]",
        design: "w-[23rem] p-10",
      },
    },
    defaultVariants: { kind: "module" },
  },
);

export const selectModuleCardTitle = cva("text-[var(--color-gray-900)]", {
  variants: {
    kind: { module: "t-22-b", design: "t-22-b" },
  },
  defaultVariants: { kind: "module" },
});

export const selectModuleCardSubtitle = cva("t-14-m", {
  variants: {
    state: {
      select: "text-[var(--color-blue-600)]",
      noSelect: "text-[var(--color-danger-600)]",
    },
  },
  defaultVariants: { state: "select" },
});

export const selectModuleCardDescription = cva("text-[var(--color-gray-600)]", {
  variants: {
    kind: { module: "t-14-m", design: "t-14-m" },
  },
  defaultVariants: { kind: "module" },
});

export const selectModuleCardImageWrap = cva(
  ["mt-15 w-full overflow-hidden", "aspect-[18/12] grid place-items-center", "relative"].join(" "),
);

export const selectModuleCardImage = cva("h-full w-full object-contain");

export type SelectModuleCardRootVariants = VariantProps<typeof selectModuleCardRoot>;
