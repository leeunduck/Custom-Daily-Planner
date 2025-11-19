"use client";

import { Input } from "@/shared/input";
import type { StepFieldMeta } from "@/types/auth";

export function SignupEmailStep({ fieldId, fieldName }: StepFieldMeta) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={fieldId} className="t-14-m text-[var(--color-gray-700)]">
        이메일
      </label>
      <Input
        id={fieldId}
        name={fieldName}
        type="email"
        placeholder="이메일을 입력해주세요"
        status="default"
        autoComplete="email"
      />
    </div>
  );
}
