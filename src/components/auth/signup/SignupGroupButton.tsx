"use client";

import { useFadeSlideInOnMount } from "@/hooks/useMotionPresets";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/button";
import { Icon } from "@/shared/Icon";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface SignupGroupButtonProps {
  className?: string;
}

export const SignupGroupButton = React.forwardRef<HTMLDivElement, SignupGroupButtonProps>(
  ({ className }, ref) => {
    const fadeClass = useFadeSlideInOnMount("up");

    return (
      <div
        ref={ref}
        className={cn("flex w-full max-w-[36.6rem] flex-col gap-6 mx-auto", fadeClass, className)}
      >
        {/* 1) 일반 회원가입 → 이메일 회원가입 폼 페이지로 이동 */}
        <Link href="/signup/email" className="w-full">
          <Button
            type="button"
            preset="signup"
            bg="basic"
            className="w-full justify-center gap-3"
            aria-label="일반 회원가입"
          >
            <span className="inline-flex items-center justify-center gap-4">
              <Icon name="userPlus2" />
              <span>일반 회원가입</span>
            </span>
          </Button>
        </Link>

        {/* 2) Google로 가입 */}
        <Button
          type="button"
          preset="signup"
          bg="google"
          className="w-full justify-center gap-3"
          aria-label="Google로 가입"
        >
          <span className="inline-flex items-center justify-center gap-4">
            <Image
              src="/icons/google.svg"
              alt="Google 로고"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span>구글로 가입</span>
          </span>
        </Button>

        {/* 3) 카카오로 가입 */}
        <Button
          type="button"
          preset="signup"
          bg="kakao"
          className="w-full justify-center gap-3"
          aria-label="카카오로 가입"
        >
          <span className="inline-flex items-center justify-center gap-4">
            <Image
              src="/icons/kakaotalk.svg"
              alt="카카오톡 로고"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span>카카오로 가입</span>
          </span>
        </Button>
      </div>
    );
  },
);

SignupGroupButton.displayName = "SignupGroupButton";
