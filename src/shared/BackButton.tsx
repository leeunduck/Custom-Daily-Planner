"use client";

import { Button } from "@/shared/button";
import { Icon } from "@/shared/Icon";
import type { ButtonProps } from "@/types/button";
import * as React from "react";

type BackOnlyProps = Omit<Extract<ButtonProps, { preset: "back" }>, "preset">;

export const BackButton = React.forwardRef<HTMLButtonElement, BackOnlyProps>(
  ({ children = "이전", ...rest }, ref) => {
    return (
      <Button ref={ref} preset="back" {...rest}>
        <Icon name="chevronleft" size={19} />
        <span>{children}</span>
      </Button>
    );
  },
);

BackButton.displayName = "BackButton";
