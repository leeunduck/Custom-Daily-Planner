"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/shared/button";
import { Input } from "@/shared/input";
import { SignupFormProps } from "@/types/auth";
import Link from "next/link";
import { SignupStepIndicator } from "./SignupStepIndicator";

export function SignupForm({
  className,
  fieldId,
  fieldName,
  label,
  type = "text",
  placeholder,
  autoComplete,
  nextHref,
  prevHref,
}: SignupFormProps) {
  return (
    <form
      noValidate
      aria-label={`${label} 입력 폼`}
      className={cn(
        "flex flex-col items-center gap-10 rounded-2xl border border-[var(--color-gray-200)] bg-[var(--color-white)] px-4 py-6",
        "md:px-6 md:py-8",
        className,
      )}
    >
      <SignupStepIndicator currentStep={2} className="mb-3" />
      {/* 단일 필드 */}
      <div className="flex w-full max-w-[36.6rem] flex-col gap-4 mx-auto">
        <label htmlFor={fieldId} className="t-14-m text-[var(--color-gray-700)]">
          {label}
        </label>
        <Input
          id={fieldId}
          name={fieldName}
          type={type}
          placeholder={placeholder}
          status="default"
          autoComplete={autoComplete}
        />
      </div>

      {/* 다음 / 이전 버튼 (임시: Link로 라우팅) */}
      <div className="flex w-full max-w-[36.6rem] flex-col gap-4 mx-auto">
        <Link href={nextHref}>
          <Button type="button" preset="auth" bg="basic" className="w-full">
            다음
          </Button>
        </Link>

        {prevHref && (
          <Link href={prevHref}>
            <Button type="button" preset="auth" bg="white" className="w-full">
              이전
            </Button>
          </Link>
        )}
      </div>

      {/* 하단 로그인 링크 */}
      <p className="t-14-m text-center text-[var(--color-gray-600)]">
        이미 회원이신가요?{" "}
        <Link
          href="/login"
          className="t-14-m text-[var(--color-gray-900)] underline-offset-2 hover:underline"
        >
          로그인하기
        </Link>
      </p>
    </form>
  );
}
