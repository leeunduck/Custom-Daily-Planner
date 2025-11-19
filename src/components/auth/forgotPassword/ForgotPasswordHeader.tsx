"use client";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { SubTitle, Title } from "@/components/auth/AuthTitle";
import { FORGOT_PASSWORD_STEP_COPY } from "@/lib/constants";
import { useForgotPasswordStepStore } from "@/stores/forgotPasswordStepStore";

export function ForgotPasswordHeader() {
  const step = useForgotPasswordStepStore((s) => s.step);
  const { title, subtitle } = FORGOT_PASSWORD_STEP_COPY[step];

  return (
    <AuthHeader>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </AuthHeader>
  );
}
