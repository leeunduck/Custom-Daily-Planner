"use client";

import { useState } from "react";

import { useAuthFormSubmit } from "@/hooks/useAuthFormSubmit";
import { cn } from "@/lib/utils";
import { isValidName } from "@/lib/validators";
import { useSignupFormStore } from "@/stores/signupFormStore";
import { useSignupStepStore } from "@/stores/signupStepStore";

import { Button } from "@/shared/button";
import { Input } from "@/shared/input";

import type { StepFieldMeta } from "@/types/auth";

type UpdateNameResponse = { ok: true; message: string } | { ok: false; message: string };

export function SignupNameStep({ fieldId, fieldName }: StepFieldMeta) {
  const { email, name, setName } = useSignupFormStore();
  const { goNext, goPrev } = useSignupStepStore();

  const [nameError, setNameError] = useState("");

  const [serverMsg, setServerMsg] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = useAuthFormSubmit(async () => {
    let hasError = false;

    if (!isValidName(name)) {
      setNameError("이름은 2자 이상이어야 합니다.");
      hasError = true;
    }

    if (hasError) return;

    if (isSaving) return;

    try {
      setIsSaving(true);
      setServerMsg("");

      const res = await fetch("/api/update-name", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name.trim(),
        }),
      });

      const data = (await res.json()) as UpdateNameResponse;

      if (!res.ok || !data.ok) {
        setServerMsg(data?.message || "이름 저장에 실패했습니다.");
        return;
      }

      goNext();
    } catch {
      setServerMsg("이름 저장에 실패했습니다.");
    } finally {
      setIsSaving(false);
    }
  });

  const rightMsg = nameError || serverMsg;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <label htmlFor={fieldId} className="t-14-m text-[var(--color-gray-700)]">
          이름
        </label>

        {rightMsg && (
          <span
            className={cn(
              "t-12-m",
              nameError ? "text-[var(--color-danger-600)]" : "text-[var(--color-gray-600)]",
            )}
          >
            {rightMsg}
          </span>
        )}
      </div>

      <Input
        id={fieldId}
        name={fieldName}
        type="text"
        status="default"
        placeholder="이름을 입력하세요"
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setServerMsg("");
        }}
        onFocus={() => {
          setNameError("");
          setServerMsg("");
        }}
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
