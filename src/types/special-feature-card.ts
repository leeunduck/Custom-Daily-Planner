import type { HTMLAttributes } from "react";

export interface SpecialFeatureCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}
