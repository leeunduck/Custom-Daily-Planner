"use client";

import { useAuthFormSubmit } from "@/hooks/useAuthFormSubmit";
import { usePasswordVisibility } from "@/hooks/usePasswordVisibility";
import { cn } from "@/lib/utils";
import { isValidEmail, isValidPassword } from "@/lib/validators";
import { authFadeSlideUp, authTransition } from "@/lib/variants/motion.auth";
import { useLoginFormStore } from "@/stores/loginFormStore";

import { Button } from "@/shared/button";
import { Icon } from "@/shared/Icon";
import { Input } from "@/shared/input";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  // ✅ 1) 전역 스토어: 이메일/비밀번호 값 + 액션
  const { email, password, setEmail, setPassword, reset } = useLoginFormStore();

  // ✅ 2) 로컬 에러 상태: UI 전용
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // ✅ 3) 비밀번호 토글 훅
  const { inputType, iconName, ariaLabel, toggleVisibility } = usePasswordVisibility(false);

  // ✅ 4) 공통 submit 훅으로 preventDefault 처리
  const handleSubmit = useAuthFormSubmit(() => {
    let hasError = false;

    // 이메일 검증
    if (!isValidEmail(email)) {
      setEmailError("올바른 이메일을 입력해주세요.");
      hasError = true;
    }

    // 비밀번호 검증 (8자리 이상 + 특수문자)
    if (!isValidPassword(password)) {
      setPasswordError("8자리 이상, 특수문자를 포함해야 합니다.");
      hasError = true;
    }

    if (hasError) {
      return; // ❌ 에러가 하나라도 있으면 제출 중단
    }

    // ✅ 5) 검증 통과 시: 로그인 데이터 콘솔 출력
    //    (나중에 이 자리에서 Supabase Auth 요청으로 교체)

    console.log("🟢 Login submit:", { email, password });

    // ✅ 6) 성공 후 인풋 값 초기화
    reset();
  });

  return (
    <motion.form
      variants={authFadeSlideUp}
      initial="hidden"
      animate="visible"
      transition={authTransition}
      aria-label="로그인 폼"
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        "flex flex-col gap-10 rounded-2xl border border-[var(--color-gray-200)] bg-[var(--color-white)] px-4 py-6",
        "md:px-6 md:py-8",
      )}
    >
      {/* 이메일 필드 */}
      <div className="mx-auto flex w-full max-w-[36.6rem] flex-col gap-4">
        <div className="flex items-center justify-between">
          <label htmlFor="login-email" className="t-14-m text-[var(--color-gray-700)]">
            이메일
          </label>
          {emailError && (
            <span className="t-12-m text-[var(--color-danger-600)]">{emailError}</span>
          )}
        </div>

        <Input
          id="login-email"
          name="email"
          type="email"
          status="default"
          placeholder="example@gmail.com"
          autoComplete="email"
          required
          value={email} // ✅ 전역 스토어의 email과 연결
          onChange={(event) => setEmail(event.target.value)} // ✅ setEmail으로 업데이트
          onFocus={() => setEmailError("")} // ✅ 포커스 시 에러 해제
          className={cn(
            emailError && "border-[1.5px] border-[var(--color-danger-600)]", // ✅ 에러 시 테두리 강조
          )}
        />
      </div>

      {/* 비밀번호 필드 + 표시 토글 */}
      <div className="mx-auto flex w-full max-w-[36.6rem] flex-col gap-4">
        <div className="flex items-center justify-between">
          <label htmlFor="login-password" className="t-14-m text-[var(--color-gray-700)]">
            비밀번호
          </label>

          {/* ✅ 비밀번호 에러 문구 */}
          {passwordError && (
            <span className="t-12-m text-[var(--color-danger-600)]">{passwordError}</span>
          )}
        </div>

        <div className="relative w-full">
          <Input
            id="login-password"
            name="password"
            type={inputType} // ✅ "password" / "text"를 훅이 알아서 관리
            status="default"
            autoComplete="current-password"
            required
            placeholder="비밀번호를 입력하세요"
            value={password} // ✅ 전역 스토어의 password와 연결
            onChange={(event) => setPassword(event.target.value)}
            onFocus={() => setPasswordError("")} // ✅ 포커스 시 에러 해제
            className={cn(
              "w-full pr-10",
              passwordError && "border-[1.5px] border-[var(--color-danger-600)]", // ✅ 에러 테두리
            )}
          />

          {/* ✅ 비밀번호 보기/숨기기 토글 버튼 */}
          <button
            type="button"
            onClick={toggleVisibility} // ✅ 클릭 시 isVisible 토글
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
            aria-label={ariaLabel}
          >
            <Icon name={iconName} size={18} className="text-[var(--color-gray-500)]" />
          </button>
        </div>
      </div>

      {/* 로그인 버튼 */}
      <div className="mx-auto w-full max-w-[36.6rem]">
        <Button type="submit" preset="auth" bg="basic" className="w-full">
          로그인
        </Button>
      </div>

      {/* 헬퍼 링크: 비밀번호 찾기 / 회원가입 */}
      <div className="mx-auto flex w-full max-w-[36.6rem] flex-col gap-4 text-center">
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
      <div className="flex w-full max-w-[36.6rem] flex-col items-center gap-4 pt-2 mx-auto">
        {/* 구분선 + 텍스트 */}
        <div className="flex items-center gap-4 w-full">
          <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
          <span className="t-14-m text-[var(--color-gray-500)]">간편 로그인</span>
          <div className="h-px flex-1 bg-[var(--color-gray-200)]" />
        </div>

        <div className="flex w-full flex-col items-center gap-5">
          <Button type="button" preset="auth" bg="kakao" className="w-full">
            <span>카카오톡으로 로그인</span>
          </Button>

          <Button type="button" preset="auth" bg="google" className="w-full">
            <span>구글로 로그인</span>
          </Button>
        </div>
      </div>
    </motion.form>
  );
}
