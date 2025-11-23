"use client";

import { useAuthFormSubmit } from "@/hooks/useAuthFormSubmit";
import { cn } from "@/lib/utils";
import { isValidName } from "@/lib/validators";
import { useSignupFormStore } from "@/stores/signupFormStore";
import { useSignupStepStore } from "@/stores/signupStepStore";

import { Button } from "@/shared/button";
import { Input } from "@/shared/input";

import { StepFieldMeta } from "@/types/auth";
import { useState } from "react";

export function SignupNameStep({ fieldId, fieldName }: StepFieldMeta) {
  const { name, setName } = useSignupFormStore();

  const { goNext, goPrev } = useSignupStepStore();

  const [nameError, setNameError] = useState("");

  const handleSubmit = useAuthFormSubmit(() => {
    let hasError = false;

    if (!isValidName(name)) {
      setNameError("이름은 2자 이상이어야 합니다.");
      hasError = true;
    }

    if (hasError) return;

    console.log("👤 Signup Name Step:", { name });
    goNext();
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <label htmlFor={fieldId} className="t-14-m text-[var(--color-gray-700)]">
          이름
        </label>

        {nameError && <span className="t-12-m text-[var(--color-danger-600)]">{nameError}</span>}
      </div>

      <Input
        id={fieldId}
        name={fieldName}
        type="text"
        status="default"
        placeholder="이름을 입력하세요"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        onFocus={() => setNameError("")}
        className={cn(nameError && "border-[1.5px] border-[var(--color-danger-600)]")}
      />

      <div className="mt-4 flex flex-col gap-4">
        <Button type="submit" preset="auth" bg="basic" className="w-full">
          다음
        </Button>
        <Button type="button" preset="auth" bg="white" className="w-full" onClick={goPrev}>
          이전
        </Button>
      </div>
    </form>
  );
}
