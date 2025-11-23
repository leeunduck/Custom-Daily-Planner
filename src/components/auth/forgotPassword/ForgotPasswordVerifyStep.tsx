"use client";

import { useState } from "react";

import { useAuthFormSubmit } from "@/hooks/useAuthFormSubmit";
import { useOtpCode } from "@/hooks/useOtpCode";
import { CODE_LENGTH } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { isValidCode } from "@/lib/validators";
import { useForgotPasswordFormStore } from "@/stores/forgotPasswordFormStore";
import { useForgotPasswordStepStore } from "@/stores/forgotPasswordStepStore";

import { Button } from "@/shared/button";
import { Input } from "@/shared/input";
import type { StepFieldMeta } from "@/types/auth";

export function ForgotPasswordVerifyStep({ fieldId, fieldName }: StepFieldMeta) {
  // ✅ 1) 전역 스토어에서 code setter 가져오기
  const { setCode } = useForgotPasswordFormStore();

  // ✅ 2) 스텝 이동 액션
  const { goNext, goPrev } = useForgotPasswordStepStore();

  // ✅ 3) OTP 훅: 4자리 코드 입력 UX 관리
  const { values, inputRefs, handleChange, handleKeyDown, codeValue } = useOtpCode(CODE_LENGTH);

  // ✅ 4) 코드 에러 메시지 (로컬 상태)
  const [codeError, setCodeError] = useState("");

  // ✅ 5) submit 핸들러 (공통 훅 사용)
  const handleSubmit = useAuthFormSubmit(() => {
    let hasError = false;

    // 숫자 4자리 검증
    if (!isValidCode(codeValue)) {
      setCodeError("4자리 숫자 인증번호를 정확히 입력해주세요.");
      hasError = true;
    }

    if (hasError) return;

    // 전역 스토어에 최종 코드 저장
    setCode(codeValue);

    // 디버깅용 로그
    console.log("✅ Forgot Password Verify Step:", { code: codeValue });

    // 다음 스텝(비밀번호 재설정)으로 이동
    goNext();
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col items-center gap-6">
      <div className="flex flex-col gap-3">
        {/* 라벨 + 에러 메시지 */}
        <div className="flex items-center justify-between">
          <label htmlFor={fieldId} className="t-14-m text-[var(--color-gray-700)]">
            인증번호 (4자리)
          </label>

          {codeError && <span className="t-12-m text-[var(--color-danger-600)]">{codeError}</span>}
        </div>

        {/* 4개의 한 자리 인풋 */}
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
              onChange={(e) => {
                setCodeError("");
                handleChange(index, e.target.value);
              }}
              onKeyDown={(e) => handleKeyDown(index, e)}
              inputMode="numeric"
              maxLength={1}
              status="default"
              className={cn(
                "h-20 w-20 text-center t-20-b",
                codeError && "border-[1.5px] border-[var(--color-danger-600)]",
              )}
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

      {/* RHF 등과 연결할 전체 코드 값 hidden 필드 */}
      <input type="hidden" id={fieldId} name={fieldName} value={codeValue} />

      {/* 버튼 영역 */}
      <div className="mt-2 flex w-full max-w-[36.6rem] flex-col gap-3">
        <Button type="submit" preset="auth" bg="basic" className="w-full">
          다음
        </Button>
        <Button type="button" preset="auth" bg="white" className="w-full" onClick={goPrev}>
          이전
        </Button>
      </div>
    </form>
  );
}
