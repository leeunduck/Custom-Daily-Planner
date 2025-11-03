// src/components/landing/LandingNavBar.tsx
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function LandingNavBar() {
  return (
    <nav
      className={cn("mx-auto flex h-[9.6rem] max-w-[128rem] items-center justify-between px-6")}
      aria-label="Global navigation"
    >
      {/* 좌측: 로고 (이미지) */}
      <Link href="/" aria-label="MyPlanMate 홈으로 이동">
        <Image
          src="/images/logo.png"
          alt="MyPlanMate 로고"
          width={150}
          height={150}
          className="object-contain select-none"
          draggable={false}
        />
      </Link>

      {/* 우측: 언어 토글 + 로그인 */}
      <div className="flex items-center gap-12">
        <button
          type="button"
          className="t-16-m text-[var(--color-gray-600)] hover:text-[var(--color-gray-900)] cursor-pointer"
          aria-label="언어 전환"
        >
          한국어
        </button>
        <Link
          href="/login"
          className="t-16-m text-[var(--color-gray-600)] hover:text-[var(--color-gray-900)]"
          aria-label="로그인페이지로 이동"
        >
          로그인
        </Link>
      </div>
    </nav>
  );
}
