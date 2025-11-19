"use client";

import { useSignupStepStore } from "@/stores/signupStepStore";
import type { AuthMainProps } from "@/types/auth";
import { useEffect } from "react";

export function AuthMain({ children, flow }: AuthMainProps) {
  const resetSignupStep = useSignupStepStore((s) => s.reset);

  useEffect(() => {
    if (flow === "signup") {
      resetSignupStep();
    }
  }, [flow, resetSignupStep]);
  return (
    <main className="w-full" aria-label="인증 본문">
      {children}
    </main>
  );
}
