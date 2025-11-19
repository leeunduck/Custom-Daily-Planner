"use client";

import { useOtpCode } from "@/hooks/useOtpCode";
import { CODE_LENGTH } from "@/lib/constants";
import { Input } from "@/shared/input";
import type { StepFieldMeta } from "@/types/auth";

export function ForgotPasswordVerifyStep({ fieldId, fieldName }: StepFieldMeta) {
  const { values, inputRefs, handleChange, handleKeyDown, codeValue } = useOtpCode(CODE_LENGTH);

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex flex-col gap-3">
        <label htmlFor={fieldId} className="t-14-m text-[var(--color-gray-700)] text-center">
          인증번호 (4자리)
        </label>

        <div className="flex gap-4">
          {values.map((value, index) => (
            <Input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              id={index === 0 ? fieldId : `${fieldId}-${index}`}
              name={`${fieldName}-${index}`}
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              inputMode="numeric"
              maxLength={1}
              status="default"
              className="h-20 w-20 text-center t-20-b t-20-b"
            />
          ))}
        </div>
      </div>

      <p className="t-14-m text-center text-[var(--color-gray-600)]">
        인증번호를 받지 못하셨나요?{" "}
        <button type="button" className="underline">
          재발송
        </button>
      </p>

      {/* RHF랑 연결할 전체 코드 값 */}
      <input type="hidden" id={fieldId} name={fieldName} value={codeValue} />
    </div>
  );
}
