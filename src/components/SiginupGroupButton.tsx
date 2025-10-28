"use client";

import { SIGNUP_BTNS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/button";
import Image from "next/image";
import * as React from "react";
import { Icon } from "../shared/Icon";

interface Props {
  className?: string;
}

export const SignupGroupButton = React.forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
  return (
    <div ref={ref} className={cn("flex flex-col gap-6", className)}>
      {SIGNUP_BTNS.map(({ key, bg, label, icon }) => (
        <Button
          key={key}
          preset="signup"
          bg={bg}
          className="justify-center gap-3"
          aria-label={label}
        >
          <span className="inline-flex items-center justify-center gap-4">
            {icon.kind === "lucide" ? (
              <Icon name="userPlus2" />
            ) : (
              <Image
                src={icon.src}
                alt=""
                width={icon.width}
                height={icon.height}
                aria-hidden
                className="w-9 h-9"
              />
            )}
            <span className="t-16-m">{label}</span>
          </span>
        </Button>
      ))}
    </div>
  );
});
SignupGroupButton.displayName = "SignupGroupButton";
