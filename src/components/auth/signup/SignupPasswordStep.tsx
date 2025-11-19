"use client";

import { Input } from "@/shared/input";
import type { StepFieldMeta } from "@/types/auth";

export function SignupPasswordStep({ fieldId, fieldName }: StepFieldMeta) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor={`${fieldId}-password`} className="t-14-m text-[var(--color-gray-700)]">
          비밀번호
        </label>
        <Input
          id={fieldId}
          name={fieldName}
          type="password"
          placeholder="비밀번호를 입력해주세요"
          status="default"
          autoComplete="new-password"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={`${fieldId}-confirm`} className="t-14-m text-[var(--color-gray-700)]">
          비밀번호 확인
        </label>
        <Input
          id={`${fieldId}-confirm`}
          name={`${fieldName}Confirm`}
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          status="default"
          autoComplete="new-password"
        />
      </div>
    </>
  );
}
