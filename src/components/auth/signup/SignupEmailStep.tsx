"use client";

import { useAuthFormSubmit } from "@/hooks/useAuthFormSubmit";
import { cn } from "@/lib/utils";
import { isValidEmail } from "@/lib/validators";
import { useSignupFormStore } from "@/stores/signupFormStore";
import { useSignupStepStore } from "@/stores/signupStepStore";

import { Button } from "@/shared/button";
import { Input } from "@/shared/input";

import { useState } from "react";

export function SignupEmailStep() {
  const { email, setEmail } = useSignupFormStore();

  const { goNext } = useSignupStepStore();

  const [emailError, setEmailError] = useState("");

  const handleSubmit = useAuthFormSubmit(() => {
    let hasError = false;

    if (!isValidEmail(email)) {
      setEmailError("올바른 이메일을 입력해주세요.");
      hasError = true;
    }

    if (hasError) return;

    console.log("📨 Signup Email Step:", { email });

    goNext();
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <label htmlFor="signup-email" className="t-14-m text-[var(--color-gray-700)]">
          이메일
        </label>

        {emailError && <span className="t-12-m text-[var(--color-danger-600)]">{emailError}</span>}
      </div>

      <Input
        id="signup-email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
        status="default"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={() => setEmailError("")}
        className={cn(emailError && "border-[1.5px] border-[var(--color-danger-600)]")}
      />

      <Button type="submit" preset="auth" bg="basic" className="mt-2">
        다음
      </Button>
    </form>
  );
}
