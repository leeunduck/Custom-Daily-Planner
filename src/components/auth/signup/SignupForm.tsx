"use client";

import { SIGNUP_STEP_FIELD_META, SIGNUP_STEP_ORDER } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/button";
import { useSignupStepStore } from "@/stores/signupStepStore";
import Link from "next/link";
import { AuthStepTransition } from "../AuthStepTransition";
import { StepIndicator } from "../StepIndicator";
import { SignupEmailStep } from "./SignupEmailStep";
import { SignupNameStep } from "./SignupNameStep";
import { SignupPasswordStep } from "./SignupPasswordStep";
import { SignupTermsStep } from "./SignupTermsStep";

export function SignupForm() {
  const { step, direction, goNext, goPrev } = useSignupStepStore();

  const isEmailStep = step === "email";
  const isNameStep = step === "name";
  const isPasswordStep = step === "password";
  const isTermsStep = step === "terms";

  const currentStepIndex = SIGNUP_STEP_ORDER.indexOf(step);
  const currentStepNumber = currentStepIndex + 1;

  const { fieldId, fieldName } = SIGNUP_STEP_FIELD_META[step];

  return (
    <AuthStepTransition stepKey={step} direction={direction}>
      <form
        noValidate
        aria-label="회원가입 폼"
        className={cn(
          "flex flex-col items-center gap-10 rounded-2xl border border-[var(--color-gray-200)] bg-[var(--color-white)] px-4 py-6",
          "md:px-6 md:py-8",
        )}
      >
        <StepIndicator currentStep={currentStepNumber} className="mb-3" />

        {/* 메인 필드 영역 */}
        <div className="mx-auto flex w-full max-w-[36.6rem] flex-col gap-12">
          {isNameStep && <SignupNameStep fieldId={fieldId} fieldName={fieldName} />}
          {isEmailStep && <SignupEmailStep fieldId={fieldId} fieldName={fieldName} />}
          {isPasswordStep && <SignupPasswordStep fieldId={fieldId} fieldName={fieldName} />}
          {isTermsStep && <SignupTermsStep />}
        </div>

        {/* 다음 / 이전 버튼 */}
        <div className="mx-auto flex w-full max-w-[36.6rem] flex-col gap-4">
          {!isTermsStep && (
            <Button type="button" preset="auth" bg="basic" className="w-full" onClick={goNext}>
              다음
            </Button>
          )}

          {/* ✅ 약관 스텝: 마지막 액션 버튼 (지금은 임시로 type="button") */}
          {isTermsStep && (
            <Button
              type="button" // 나중에 실제 submit 로직 붙일 때 "submit"으로 교체
              preset="auth"
              bg="basic"
              className="w-full"
              // onClick={handleSignupSubmit} 이런 거로 교체 예정
            >
              회원가입 완료
            </Button>
          )}

          {!isEmailStep && (
            <Button type="button" preset="auth" bg="white" className="w-full" onClick={goPrev}>
              이전
            </Button>
          )}
        </div>

        {/* 하단 로그인 링크 */}
        <p className="t-14-m text-center text-[var(--color-gray-600)]">
          이미 회원이신가요?{" "}
          <Link
            href="/login"
            className="t-14-m text-[var(--color-gray-900)] underline-offset-2 hover:underline"
          >
            로그인하기
          </Link>
        </p>
      </form>
    </AuthStepTransition>
  );
}
