"use client";

import { Input } from "@/shared/input";
import type { StepFieldMeta } from "@/types/auth";

export function ForgotPasswordEmailStep({ fieldId, fieldName }: StepFieldMeta) {
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
      <p className="t-12-m text-[var(--color-gray-500)]">
        입력하신 이메일 주소로 비밀번호 재설정 링크 또는 인증 코드를 보내드릴게요.
      </p>
    </div>
  );
}
