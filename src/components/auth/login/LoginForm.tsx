"use client";

import { useFadeSlideInOnMount } from "@/hooks/useMotionPresets";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/button";
import { Icon } from "@/shared/Icon";
import { Input } from "@/shared/input";
import { useAuthFormStore } from "@/stores/authForm.store";
import Link from "next/link";
import type { ChangeEvent, FormEvent } from "react";

export function LoginForm() {
  const {
    email,
    password,
    emailError,
    passwordError,
    isPasswordVisible,
    setEmail,
    setPassword,
    clearEmailError,
    clearPasswordError,
    togglePasswordVisible,
    validateLogin,
  } = useAuthFormStore();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본 form submit 동작 막기

    const isValid = validateLogin();
    if (!isValid) {
      // 에러 상태/값 초기화는 스토어에서 이미 처리
      return;
    }

    // TODO: 실제 로그인 요청 로직
    // ex) await login({ email, password });
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const fadeClass = useFadeSlideInOnMount("up");

  return (
    <form
      className={cn(
        "flex flex-col gap-10 rounded-2xl border border-[var(--color-gray-200)] bg-[var(--color-white)] px-4 py-6",
        "md:px-6 md:py-8",
        fadeClass,
      )}
      aria-label="로그인 폼"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* 이메일 필드 */}
      <div className="flex w-full max-w-[36.6rem] flex-col gap-4 mx-auto">
        <div className="flex items-center justify-between">
          <label htmlFor="login-email" className="t-14-m text-[var(--color-gray-700)]">
            이메일
          </label>

          {emailError && (
            <span className="t-12-m text-[var(--color-red-500)]">이메일 정보를 확인해 주세요.</span>
          )}
        </div>
        <Input
          id="login-email"
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
          status={emailError ? "error" : "default"}
          autoComplete="email"
          required
          value={email}
          onChange={handleEmailChange}
          onFocus={clearEmailError} // 다시 클릭하면 에러 해제 → 검은 테두리
        />
      </div>

      {/* 비밀번호 필드 + 표시 토글 */}
      <div className="flex w-full max-w-[36.6rem] flex-col gap-4 mx-auto">
        <div className="flex items-center justify-between">
          <label htmlFor="login-password" className="t-14-m text-[var(--color-gray-700)]">
            비밀번호
          </label>

          {passwordError && (
            <span className="t-12-m text-[var(--color-red-500)]">비밀번호를 확인해 주세요.</span>
          )}
        </div>
        <div className="relative w-full">
          <Input
            id="login-password"
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            status={passwordError ? "error" : "default"}
            autoComplete="current-password"
            required
            className="w-full pr-10"
            value={password}
            onChange={handlePasswordChange}
            onFocus={clearPasswordError} // 다시 클릭하면 에러 해제
          />
          {/* 비밀번호 표시/숨김 토글 아이콘 */}
          <button
            type="button"
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
            aria-label={isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 표시"}
            aria-pressed={isPasswordVisible}
            onClick={togglePasswordVisible}
          >
            <Icon
              name={isPasswordVisible ? "eyeOff" : "eye"}
              size={18}
              className="text-[var(--color-gray-500)]"
            />
          </button>
        </div>
      </div>

      {/* 로그인 버튼 */}
      <div className="w-full max-w-[36.6rem] mx-auto">
        <Button type="submit" preset="signup" bg="basic" className="w-full">
          로그인
        </Button>
      </div>

      {/* 헬퍼 링크: 비밀번호 찾기 / 회원가입 */}
      <div className="flex w-full max-w-[36.6rem] flex-col gap-4 text-center mx-auto">
        <p className="t-14-m text-[var(--color-gray-600)]">
          비밀번호를 잊으셨나요?{" "}
          <Link
            href="/forgot-password"
            className="t-14-m text-[var(--color-gray-900)] underline-offset-2 hover:underline"
          >
            비밀번호 찾기
          </Link>
        </p>
        <p className="t-14-m text-[var(--color-gray-600)]">
          회원이 아니신가요?{" "}
          <Link
            href="/signup"
            className="t-14-m text-[var(--color-gray-900)] underline-offset-2 hover:underline"
          >
            회원가입하기
          </Link>
        </p>
      </div>

      {/* 간편 로그인 + 소셜 버튼 */}
      <div className="flex w-full max-w-[36.6rem] flex-col gap-4 pt-2 mx-auto">
        <div className="flex items-center gap-4 w-full">
          <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
          <span className="t-14-m text-[var(--color-gray-500)]">간편 로그인</span>
          <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
        </div>

        <div className="flex w-full flex-col items-center gap-5">
          <Button type="button" preset="signup" bg="kakao" className="w-full">
            <span>카카오톡으로 로그인</span>
          </Button>

          <Button type="button" preset="signup" bg="google" className="w-full">
            <span>구글로 로그인</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
