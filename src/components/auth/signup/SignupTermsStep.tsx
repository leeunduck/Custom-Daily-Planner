"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { supabaseAuth } from "@/api/client";
import { useAuthFormSubmit } from "@/hooks/useAuthFormSubmit";
import { Button } from "@/shared/button";
import { useSignupFormStore } from "@/stores/signupFormStore";
import { useSignupStepStore } from "@/stores/signupStepStore";
import type { StepFieldMeta } from "@/types/auth";

export function SignupTermsStep({ fieldId, fieldName }: StepFieldMeta) {
  const router = useRouter();

  const { email, password, agreeToTerms, setAgreeToTerms, reset } = useSignupFormStore();
  const { goPrev } = useSignupStepStore();

  const [serviceChecked, setServiceChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const [termsError, setTermsError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const syncTerms = (nextService: boolean, nextPrivacy: boolean) => {
    setServiceChecked(nextService);
    setPrivacyChecked(nextPrivacy);

    const nextAgree = nextService && nextPrivacy;
    setAgreeToTerms(nextAgree);

    if (nextAgree) {
      setTermsError("");
    }
  };

  const handleSubmit = useAuthFormSubmit(async () => {
    if (!agreeToTerms) {
      setTermsError("필수 약관에 모두 동의해야 합니다.");
      return;
    }

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      setTermsError("");

      const { error } = await supabaseAuth.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        setTermsError("회원가입 완료 처리 중 오류가 발생했습니다.");
        return;
      }

      reset();
      router.replace("/");
    } catch {
      setTermsError("회원가입 완료 처리 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <fieldset className="flex flex-col gap-7">
        <legend className="sr-only">약관 동의</legend>

        {/* 상단 에러 메시지 */}
        {termsError && <span className="t-12-m text-[var(--color-danger-600)]">{termsError}</span>}

        {/* [필수] 서비스 이용약관 */}
        <label className="flex items-center justify-between gap-4 t-14-m text-[var(--color-gray-900)]">
          <span className="flex items-center gap-2">
            <input
              id={fieldId}
              type="checkbox"
              name={fieldName}
              className="h-6 w-6 border border-[var(--color-gray-300)]"
              checked={serviceChecked}
              onChange={(event) => syncTerms(event.target.checked, privacyChecked)}
            />
            <span>[필수] 서비스 이용약관에 동의합니다</span>
          </span>

          <button
            type="button"
            className="t-12-m text-[var(--color-gray-500)] underline-offset-2 hover:underline"
          >
            상세보기
          </button>
        </label>

        {/* [필수] 개인정보 처리방침 */}
        <label className="flex items-center justify-between gap-4 t-14-m text-[var(--color-gray-900)]">
          <span className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agreePrivacy"
              className="h-6 w-6 border border-[var(--color-gray-300)]"
              checked={privacyChecked}
              onChange={(event) => syncTerms(serviceChecked, event.target.checked)}
            />
            <span>[필수] 개인정보 처리방침에 동의합니다</span>
          </span>

          <button
            type="button"
            className="t-12-m text-[var(--color-gray-500)] underline-offset-2 hover:underline"
          >
            상세보기
          </button>
        </label>
      </fieldset>

      {/* 버튼: 회원가입 완료 / 이전 (세로 정렬) */}
      <div className="mt-2 flex flex-col gap-3">
        <Button type="submit" preset="auth" bg="basic" className="w-full">
          {isSubmitting ? "처리 중" : "회원가입 완료"}
        </Button>

        <Button type="button" preset="auth" bg="white" className="w-full" onClick={goPrev}>
          이전
        </Button>
      </div>
    </form>
  );
}
