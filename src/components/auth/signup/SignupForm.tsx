"use client";

import { SIGNUP_STEP_ORDER } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useSignupStepStore } from "@/stores/signupStepStore";

import Link from "next/link";

import { AuthStepTransition } from "../AuthStepTransition";
import { StepIndicator } from "../StepIndicator";
import { SignupEmailStep } from "./SignupEmailStep";
import { SignupNameStep } from "./SignupNameStep";
import { SignupPasswordStep } from "./SignupPasswordStep";
import { SignupTermsStep } from "./SignupTermsStep";

export function SignupForm() {
  const { step, direction } = useSignupStepStore();

  const currentStepIndex = SIGNUP_STEP_ORDER.indexOf(step);
  const currentStepNumber = currentStepIndex + 1;

  return (
    <AuthStepTransition stepKey={step} direction={direction}>
      <section
        aria-label="회원가입 폼"
        className={cn(
          "flex flex-col items-center gap-10 rounded-2xl border border-[var(--color-gray-200)] bg-[var(--color-white)] px-4 py-6",
          "md:px-6 md:py-8",
        )}
      >
        <StepIndicator currentStep={currentStepNumber} className="mb-3" />

        <div className="mx-auto flex w-full max-w-[36.6rem] flex-col gap-12">
          {step === "email" && <SignupEmailStep />}
          {step === "name" && <SignupNameStep />}
          {step === "password" && <SignupPasswordStep />}
          {step === "terms" && <SignupTermsStep />}
        </div>

        <p className="t-14-m text-center text-[var(--color-gray-600)]">
          이미 회원이신가요?{" "}
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
