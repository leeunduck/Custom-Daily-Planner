"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/shared/button";
import { Icon } from "@/shared/Icon";
import { Input } from "@/shared/input";
import Link from "next/link";

export function LoginForm() {
  return (
    <form
      className={cn(
        "flex flex-col gap-10 rounded-2xl border border-[var(--color-gray-200)] bg-[var(--color-white)] px-4 py-6",
        "md:px-6 md:py-8",
      )}
      aria-label="로그인 폼"
    >
      {/* 이메일 필드 */}
      <div className="flex w-full max-w-[36.6rem] flex-col gap-4 mx-auto">
        <label htmlFor="login-email" className="t-14-m text-[var(--color-gray-700)]">
          이메일
        </label>
        <Input
          id="login-email"
          name="email"
          type="email"
          placeholder="이메일을 입력하세요"
          status="default"
          autoComplete="email"
          required
        />
      </div>

      {/* 비밀번호 필드 + 표시 토글 */}
      <div className="flex w-full max-w-[36.6rem] flex-col gap-4 mx-auto">
        <label htmlFor="login-password" className="t-14-m text-[var(--color-gray-700)]">
          비밀번호
        </label>
        <div className="relative w-full">
          <Input
            id="login-password"
            name="password"
            type="password"
            status="default"
            autoComplete="current-password"
            required
            className="w-full pr-10"
          />
          {/* 아이콘 버튼 (레이아웃만, 로직은 나중에) */}
          <button
            type="button"
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
            aria-label="비밀번호 표시"
          >
            <Icon name="eye" size={18} className="text-[var(--color-gray-500)]" />
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
      <div className="flex w-full max-w-[36.6rem] flex-col items-center gap-4 pt-2 mx-auto">
        <span className="t-14-m text-[var(--color-gray-500)]">간편 로그인</span>

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
