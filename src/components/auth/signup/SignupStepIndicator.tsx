"use client";

import { cn } from "@/lib/utils";
import type { SignupStepIndicatorProps } from "@/types/auth";

export function SignupStepIndicator({
  currentStep,
  totalSteps = 4,
  className,
}: SignupStepIndicatorProps) {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {steps.map((step, index) => {
        const isActive = step <= currentStep;
        const isLast = index === steps.length - 1;
        const isCompletedConnector = step < currentStep;

        return (
          <div key={step} className="flex items-center gap-2">
            {/* ● 동그라미 */}
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full t-12-m",
                isActive
                  ? "bg-[var(--color-gray-900)] text-[var(--color-white)]"
                  : "bg-[var(--color-gray-100)] text-[var(--color-gray-500)]",
              )}
              aria-current={step === currentStep ? "step" : undefined}
            >
              {step}
            </div>

            {/* ― 선 (마지막 스텝 뒤에는 없음) */}
            {!isLast && (
              <div
                className={cn(
                  "h-[0.3rem] w-12 rounded-full",
                  isCompletedConnector
                    ? "bg-[var(--color-gray-900)]"
                    : "bg-[var(--color-gray-200)]",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
