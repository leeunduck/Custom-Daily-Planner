"use client";

import { cn } from "@/lib/utils";
import { authInputVariants } from "@/lib/variants/input.auth";
import type { InputProps } from "@/types/input";
import * as React from "react";

/**
 * AuthInput — 기본/포커스/에러 상태
 * - status: "default" | "error"
 * - 에러 상태에서 포커스 시 자동으로 기본 상태로 복귀
 */
export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input"> & InputProps
>(({ className, status = "default", ...rest }, ref) => {
  const [currentStatus, setCurrentStatus] = React.useState<InputProps["status"]>(status);

  // 외부에서 status가 바뀌면 동기화
  React.useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  // 포커스 시 에러 상태면 기본으로 복귀
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (currentStatus === "error") setCurrentStatus("default");
    rest.onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    rest.onBlur?.(e);
  };

  return (
    <input
      ref={ref}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={cn(authInputVariants({ status: currentStatus }), className)}
      aria-invalid={currentStatus === "error" ? "true" : "false"}
      data-invalid={currentStatus === "error" ? "true" : "false"}
      {...rest}
    />
  );
});

Input.displayName = "Input";
