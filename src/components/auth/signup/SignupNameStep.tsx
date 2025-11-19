"use client";

import { Input } from "@/shared/input";
import type { StepFieldMeta } from "@/types/auth";

export function SignupNameStep({ fieldId, fieldName }: StepFieldMeta) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={fieldId} className="t-14-m text-[var(--color-gray-700)]">
        이름
      </label>
      <Input
        id={fieldId}
        name={fieldName}
        type="text"
        placeholder="이름을 입력해주세요"
        status="default"
        autoComplete="name"
      />
    </div>
  );
}
