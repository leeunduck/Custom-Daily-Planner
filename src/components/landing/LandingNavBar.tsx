import { cn } from "@/lib/utils";
import { AppLogo } from "@/shared/AppLogo";
import Link from "next/link";

export function LandingNavBar() {
  return (
    <nav
      className={cn(
        "mx-auto flex h-[6.4rem] max-w-[128rem] items-center justify-between px-6",
        "md:h-[9.6rem] md:px-12",
      )}
      aria-label="Global navigation"
    >
      {/* 좌측: 로고 (이미지) */}
      <AppLogo />

      {/* 우측: 언어 토글 + 로그인 */}
      <div className={cn("flex items-center gap-6", "md:gap-12")}>
        <button
          type="button"
          className={cn(
            "cursor-pointer t-14-m text-[var(--color-gray-600)] hover:text-[var(--color-gray-900)]",
            "md:t-16-m",
          )}
          aria-label="언어 전환"
        >
          한국어
        </button>
        <Link
          href="/login"
          className={cn(
            "t-14-m text-[var(--color-gray-600)] hover:text-[var(--color-gray-900)]",
            "md:t-16-m",
          )}
          aria-label="로그인페이지로 이동"
        >
          로그인
        </Link>
      </div>
    </nav>
  );
}
