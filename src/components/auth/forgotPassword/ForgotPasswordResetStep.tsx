"use client";

import { Input } from "@/shared/input";
import type { StepFieldMeta } from "@/types/auth";

export function ForgotPasswordResetStep({ fieldId, fieldName }: StepFieldMeta) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor={`${fieldId}-password`} className="t-14-m text-[var(--color-gray-700)]">
          새 비밀번호
        </label>
        <Input
          id={`${fieldId}-password`}
          name={fieldName}
          type="password"
          placeholder="새 비밀번호를 입력해주세요"
          status="default"
          autoComplete="new-password"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${fieldId}-confirm`} className="t-14-m text-[var(--color-gray-700)]">
          새 비밀번호 확인
        </label>
        <Input
          id={`${fieldId}-confirm`}
          name={`${fieldName}Confirm`}
          type="password"
          placeholder="새 비밀번호를 한 번 더 입력해주세요"
          status="default"
          autoComplete="new-password"
        />
      </div>
    </>
  );
}
