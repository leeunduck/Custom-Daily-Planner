import type { IconProps } from "@/types/icon";
import { icons } from "./Icon.registry";

export function Icon({ name, size = 24, strokeWidth = 2, label, className, ...rest }: IconProps) {
  const Cmp = icons[name];
  return (
    <Cmp
      size={size}
      strokeWidth={strokeWidth}
      color="currentColor"
      className={className}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...rest}
    />
  );
}
