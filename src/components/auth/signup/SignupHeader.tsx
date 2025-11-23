"use client";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { SubTitle, Title } from "@/components/auth/AuthTitle";
import { SIGNUP_STEP_COPY } from "@/lib/constants";
import { useSignupStepStore } from "@/stores/signupStepStore";

export function SignupHeader() {
  const step = useSignupStepStore((s) => s.step);
  const { title, subtitle } = SIGNUP_STEP_COPY[step];

  return (
    <AuthHeader>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </AuthHeader>
  );
}
