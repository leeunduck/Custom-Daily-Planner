"use client";

import { cn } from "@/lib/utils";
import type { StepFieldMeta } from "@/types/auth";

const CODE_LENGTH = 4;

export function ForgotPasswordVerifyStep({ fieldId, fieldName }: StepFieldMeta) {
  return (
    <div className="flex flex-col gap-6 items-center">
      {/* 라벨 + 4자리 코드 입력 */}
      <div className="flex flex-col gap-3">
        <label htmlFor={fieldId} className="t-14-m text-[var(--color-gray-700)] text-center">
          인증번호 (4자리)
        </label>

        <div className="flex gap-4">
          {Array.from({ length: CODE_LENGTH }).map((_, index) => (
            <input
              key={index}
              id={index === 0 ? fieldId : undefined}
              name={`${fieldName}[${index}]`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              className={cn(
                "h-16 w-16 rounded-2xl border border-[var(--color-gray-200)] bg-[var(--color-white)]",
                "text-center t-20-b text-[var(--color-gray-900)] outline-none",
                "focus:border-[var(--color-gray-900)] focus:ring-2 focus:ring-[var(--color-gray-900)]/10",
              )}
              aria-label={`인증번호 ${index + 1}번째 숫자`}
            />
          ))}
        </div>
      </div>

      {/* 재발송 안내 */}
      <p className="t-12-m text-center text-[var(--color-gray-500)]">
        인증번호를 받지 못하셨나요?{" "}
        <button
          type="button"
          className="underline-offset-2 hover:underline text-[var(--color-gray-700)]"
        >
          재발송
        </button>
      </p>
    </div>
  );
}
