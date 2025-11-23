"use client";

import { useState } from "react";

import { useAuthFormSubmit } from "@/hooks/useAuthFormSubmit";
import { usePasswordVisibility } from "@/hooks/usePasswordVisibility";
import { cn } from "@/lib/utils";
import { isValidPassword } from "@/lib/validators";
import { useForgotPasswordFormStore } from "@/stores/forgotPasswordFormStore";
import { useForgotPasswordStepStore } from "@/stores/forgotPasswordStepStore";

import { Button } from "@/shared/button";
import { Icon } from "@/shared/Icon";
import { Input } from "@/shared/input";
import type { StepFieldMeta } from "@/types/auth";

export function ForgotPasswordResetStep({ fieldId, fieldName }: StepFieldMeta) {
  // ✅ 1) 전역 스토어에서 새 비밀번호 값 + setter 가져오기
  const { email, code, newPassword, setNewPassword, reset } = useForgotPasswordFormStore();

  // ✅ 2) 스텝 이동 액션
  const { goPrev } = useForgotPasswordStepStore();

  // ✅ 3) 로컬 상태: 에러 + 비밀번호 확인 값
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  // ✅ 4) 비밀번호 보기/숨기기 토글 훅
  const { inputType, iconName, ariaLabel, toggleVisibility } = usePasswordVisibility(false);

  // ✅ 5) submit 핸들러 (공통 훅 사용)
  const handleSubmit = useAuthFormSubmit(() => {
    let hasError = false;

    // 1) 비밀번호 규칙 검증 (길이 + 특수문자)
    if (!isValidPassword(newPassword)) {
      setPasswordError("8자리 이상, 특수문자를 포함해야 합니다.");
      hasError = true;
    }

    // 2) 비밀번호 확인 일치 여부 검증
    if (newPassword !== passwordConfirm) {
      setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
      hasError = true;
    }

    if (hasError) return;

    // 최종 payload 생성 (이메일 + 코드 + 새 비밀번호)
    const forgotPayload = { email, code, newPassword };

    // 디버깅용 출력 (나중에 Supabase 비밀번호 재설정 API로 교체)
    console.log("🔑 Forgot Password Reset Step:", forgotPayload);

    // 전체 입력값 초기화
    reset();
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {/* 1. 새 비밀번호 필드 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor={fieldId} className="t-14-m text-[var(--color-gray-700)]">
            새 비밀번호
          </label>

          {passwordError && (
            <span className="t-12-m text-[var(--color-danger-600)]">{passwordError}</span>
          )}
        </div>

        <div className="relative w-full">
          <Input
            id={fieldId}
            name={fieldName}
            type={inputType}
            placeholder="새 비밀번호를 입력해주세요"
            status="default"
            autoComplete="new-password"
            // 전역 스토어 값과 연결
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            onFocus={() => setPasswordError("")}
            className={cn(
              "w-full pr-10",
              passwordError && "border-[1.5px] border-[var(--color-danger-600)]",
            )}
          />

          {/* 보기/숨기기 토글 버튼 */}
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
            aria-label={ariaLabel}
          >
            <Icon name={iconName} size={18} className="text-[var(--color-gray-500)]" />
          </button>
        </div>
      </div>

      {/* 2. 새 비밀번호 확인 필드 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor={`${fieldId}-confirm`} className="t-14-m text-[var(--color-gray-700)]">
            새 비밀번호 확인
          </label>

          {passwordConfirmError && (
            <span className="t-12-m text-[var(--color-danger-600)]">{passwordConfirmError}</span>
          )}
        </div>

        <div className="relative w-full">
          <Input
            id={`${fieldId}-confirm`}
            name={`${fieldName}Confirm`}
            type={inputType}
            placeholder="새 비밀번호를 한 번 더 입력해주세요"
            status="default"
            autoComplete="new-password"
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirmError("");
              setPasswordConfirm(e.target.value);
            }}
            className={cn(
              "w-full pr-10",
              passwordConfirmError && "border-[1.5px] border-[var(--color-danger-600)]",
            )}
          />

          {/* 동일 토글 버튼 재사용 */}
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
            aria-label={ariaLabel}
          >
            <Icon name={iconName} size={18} className="text-[var(--color-gray-500)]" />
          </button>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="mt-4 flex flex-col gap-3">
        <Button type="submit" preset="auth" bg="basic" className="w-full">
          비밀번호 재설정 완료
        </Button>
        <Button type="button" preset="auth" bg="white" className="w-full" onClick={goPrev}>
          이전
        </Button>
      </div>
    </form>
  );
}
