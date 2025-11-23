"use client";

import { useForgotPasswordStepStore } from "@/stores/forgotPasswordStepStore";
import { useSignupStepStore } from "@/stores/signupStepStore";
import type { AuthMainProps } from "@/types/auth";
import { useEffect } from "react";

export function AuthMain({ children, flow }: AuthMainProps) {
  const resetSignupStep = useSignupStepStore((s) => s.reset);
  const resetForgotStep = useForgotPasswordStepStore((s) => s.reset);

  useEffect(() => {
    if (flow === "signup") {
      resetSignupStep();
    }
    if (flow === "forgot") {
      resetForgotStep();
    }
  }, [flow, resetSignupStep, resetForgotStep]);

  return (
    <main className="w-full" aria-label="인증 본문">
      {children}
    </main>
  );
}
