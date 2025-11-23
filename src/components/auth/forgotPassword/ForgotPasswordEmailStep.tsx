"use client";

import { useState } from "react";

import { useAuthFormSubmit } from "@/hooks/useAuthFormSubmit";
import { cn } from "@/lib/utils";
import { isValidEmail } from "@/lib/validators";
import { useForgotPasswordFormStore } from "@/stores/forgotPasswordFormStore";
import { useForgotPasswordStepStore } from "@/stores/forgotPasswordStepStore";

import { Button } from "@/shared/button";
import { Input } from "@/shared/input";
import type { StepFieldMeta } from "@/types/auth";

export function ForgotPasswordEmailStep({ fieldId, fieldName }: StepFieldMeta) {
  // ✅ 1) 전역 스토어에서 이메일 값 + setter 가져오기
  const { email, setEmail } = useForgotPasswordFormStore();

  // ✅ 2) 다음 스텝으로 이동하는 액션
  const { goNext } = useForgotPasswordStepStore();

  // ✅ 3) 이메일 에러 메시지 (UI 전용 로컬 상태)
  const [emailError, setEmailError] = useState("");

  // ✅ 4) 공통 submit 훅으로 form 기본 동작 막기 + 콜백 실행
  const handleSubmit = useAuthFormSubmit(() => {
    let hasError = false;

    // 이메일 형식 검증
    if (!isValidEmail(email)) {
      setEmailError("올바른 이메일을 입력해주세요.");
      hasError = true;
    }

    // 하나라도 실패하면 이 스텝에 머무르기
    if (hasError) return;

    // 디버깅용 로그 (나중에 실제 API 요청으로 대체)
    console.log("📨 Forgot Password Email Step:", { email });

    // 검증 통과 시 다음 스텝으로 이동
    goNext();
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* 라벨 + 에러 메시지 한 줄에 배치 */}
      <div className="flex items-center justify-between">
        <label htmlFor={fieldId} className="t-14-m text-[var(--color-gray-700)]">
          이메일
        </label>

        {/* 에러가 있을 때만 문구 표시 */}
        {emailError && <span className="t-12-m text-[var(--color-danger-600)]">{emailError}</span>}
      </div>

      {/* 이메일 인풋 필드 */}
      <Input
        id={fieldId}
        name={fieldName}
        type="email"
        placeholder="이메일을 입력해주세요"
        status="default"
        autoComplete="email"
        required
        // 전역 스토어 값과 연결
        value={email}
        // 입력 시 전역 스토어 업데이트
        onChange={(e) => setEmail(e.target.value)}
        // 포커스 되면 에러 메시지 초기화
        onFocus={() => setEmailError("")}
        className={cn(emailError && "border-[1.5px] border-[var(--color-danger-600)]")}
      />

      <p className="t-12-m text-[var(--color-gray-500)]">
        입력하신 이메일 주소로 비밀번호 재설정 링크 또는 인증 코드를 보내드릴게요.
      </p>

      {/* 다음 스텝으로 진행하는 버튼 */}
      <Button type="submit" preset="auth" bg="basic" className="mt-2 w-full">
        다음
      </Button>
    </form>
  );
}
