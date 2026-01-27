"use client";

import { useState } from "react";

import { useAuthFormSubmit } from "@/hooks/useAuthFormSubmit";
import { usePasswordVisibility } from "@/hooks/usePasswordVisibility";
import { cn } from "@/lib/utils";
import { isValidPassword } from "@/lib/validators";
import { useSignupFormStore } from "@/stores/signupFormStore";
import { useSignupStepStore } from "@/stores/signupStepStore";

import { Button } from "@/shared/button";
import { Icon } from "@/shared/Icon";
import { Input } from "@/shared/input";

import type { StepFieldMeta } from "@/types/auth";

type SetPasswordResponse = { ok: true; message: string } | { ok: false; message: string };

export function SignupPasswordStep({ fieldId, fieldName }: StepFieldMeta) {
  const { email, accessToken, password, setPassword, setAccessToken } = useSignupFormStore();
  const { goNext, goPrev } = useSignupStepStore();

  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordConfirmError, setPasswordConfirmError] = useState("");

  // ✅ 서버 메시지 + 로딩(버튼 `disabled`는 걸지 않고 로직으로만 방지)
  const [serverMsg, setServerMsg] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const { inputType, iconName, ariaLabel, toggleVisibility } = usePasswordVisibility(false);

  const setPasswordOnServer = async (): Promise<boolean> => {
    if (isSaving) return false;

    try {
      setIsSaving(true);
      setServerMsg("");

      const res = await fetch("/api/set-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken ?? ""}`,
        },
        body: JSON.stringify({ email, password }),
      });

      const data = (await res.json()) as SetPasswordResponse;

      if (!res.ok || !data.ok) {
        setServerMsg(data?.message || "비밀번호 저장에 실패했습니다.");
        return false;
      }

      // ✅ 토큰은 비밀번호 설정에만 쓰고 제거해도 됨(선택)
      setAccessToken("");

      return true;
    } catch {
      setServerMsg("비밀번호 저장에 실패했습니다.");
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const handleSubmit = useAuthFormSubmit(async () => {
    let hasError = false;

    // ✅ 기존 로컬 검증 로직 유지
    if (!isValidPassword(password)) {
      setPasswordError("8자리 이상, 특수문자를 포함해야 합니다.");
      hasError = true;
    }

    if (password !== passwordConfirm) {
      setPasswordConfirmError("비밀번호가 일치하지 않습니다.");
      hasError = true;
    }

    if (hasError) return;

    // ✅ 서버 저장 성공 시에만 다음 단계
    const ok = await setPasswordOnServer();
    if (!ok) return;

    goNext();
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* 1. 비밀번호 필드 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor={fieldId} className="t-14-m text-[var(--color-gray-700)]">
            비밀번호
          </label>

          {passwordError && (
            <span className="t-12-m text-[var(--color-danger-600)]">{passwordError}</span>
          )}
        </div>

        <div className="relative w-full">
          <Input
            id={fieldId}
            name={fieldName}
            type={inputType}
            status="default"
            autoComplete="new-password"
            required
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setServerMsg("");
            }}
            onFocus={() => setPasswordError("")}
            className={cn(
              "w-full pr-10",
              passwordError && "border-[1.5px] border-[var(--color-danger-600)]",
            )}
          />

          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
            aria-label={ariaLabel}
          >
            <Icon name={iconName} size={18} className="text-[var(--color-gray-500)]" />
          </button>
        </div>
      </div>

      {/* 2. 비밀번호 확인 필드 */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor={`${fieldId}-confirm`} className="t-14-m text-[var(--color-gray-700)]">
            비밀번호 확인
          </label>

          {passwordConfirmError && (
            <span className="t-12-m text-[var(--color-danger-600)]">{passwordConfirmError}</span>
          )}
        </div>

        <div className="relative w-full">
          <Input
            id={`${fieldId}-confirm`}
            name={`${fieldName}-confirm`}
            type={inputType}
            status="default"
            autoComplete="new-password"
            required
            placeholder="비밀번호를 다시 한 번 입력하세요"
            value={passwordConfirm}
            onChange={(event) => {
              setPasswordConfirm(event.target.value);
              setServerMsg("");
            }}
            onFocus={() => setPasswordConfirmError("")}
            className={cn(
              "w-full pr-10",
              passwordConfirmError && "border-[1.5px] border-[var(--color-danger-600)]",
            )}
          />

          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
            aria-label={ariaLabel}
          >
            <Icon name={iconName} size={18} className="text-[var(--color-gray-500)]" />
          </button>
        </div>

        {serverMsg && <p className="t-12-m text-[var(--color-danger-600)]">{serverMsg}</p>}
      </div>

      {/* 3. 버튼 (세로 정렬) */}
      <div className="mt-4 flex flex-col gap-3">
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
