"use client";

import { FORGOT_PASSWORD_STEP_FIELD_META, FORGOT_PASSWORD_STEP_ORDER } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useForgotPasswordStepStore } from "@/stores/forgotPasswordStepStore";

import Link from "next/link";

import { AuthStepTransition } from "../AuthStepTransition";
import { StepIndicator } from "../StepIndicator";
import { ForgotPasswordEmailStep } from "./ForgotPasswordEmailStep";
import { ForgotPasswordResetStep } from "./ForgotPasswordResetStep";
import { ForgotPasswordVerifyStep } from "./ForgotPasswordVerifyStep";

export function ForgotPasswordForm() {
  // ✅ 1) 현재 스텝 이름 + 전환 방향 가져오기
  const { step, direction } = useForgotPasswordStepStore();

  const isEmailStep = step === "email";
  const isVerifyStep = step === "verify";
  const isResetStep = step === "reset";

  // ✅ 2) 현재 스텝이 몇 번째인지 계산 (1부터 시작)
  const currentStepIndex = FORGOT_PASSWORD_STEP_ORDER.indexOf(step);
  const currentStepNumber = currentStepIndex + 1;

  // ✅ 3) 스텝별 필드 메타 (id / name)
  const { fieldId, fieldName } = FORGOT_PASSWORD_STEP_FIELD_META[step];

  return (
    // 스텝이 바뀌면 슬라이드 전환
    <AuthStepTransition stepKey={step} direction={direction}>
      <section
        aria-label="비밀번호 재설정 폼"
        className={cn(
          "flex flex-col items-center gap-10 rounded-2xl border border-[var(--color-gray-200)] bg-[var(--color-white)] px-4 py-6",
          "md:px-6 md:py-8",
        )}
      >
        {/* 상단 단계 인디케이터 (3단계) */}
        <StepIndicator currentStep={currentStepNumber} totalSteps={3} className="mb-3" />

        {/* 스텝별 폼 */}
        <div className="mx-auto flex w-full max-w-[36.6rem] flex-col gap-12">
          {isEmailStep && <ForgotPasswordEmailStep fieldId={fieldId} fieldName={fieldName} />}
          {isVerifyStep && <ForgotPasswordVerifyStep fieldId={fieldId} fieldName={fieldName} />}
          {isResetStep && <ForgotPasswordResetStep fieldId={fieldId} fieldName={fieldName} />}
        </div>

        {/* 하단 로그인 링크 */}
        <p className="t-14-m text-center text-[var(--color-gray-600)]">
          비밀번호를 이미 재설정하셨나요?{" "}
          <Link
            href="/login"
            className="t-14-m text-[var(--color-gray-900)] underline-offset-2 hover:underline"
          >
            로그인하기
          </Link>
        </p>
      </section>
    </AuthStepTransition>
  );
}
