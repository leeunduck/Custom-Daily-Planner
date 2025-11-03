import { FooterLink } from "@/types/landing";
import Image from "next/image";
import Link from "next/link";
import { LandingCopyright } from "./LandingCopyright";
import { LandingFooterColumn } from "./LandingFooterColumn";

export function LandingFooter() {
  const productLinks: FooterLink[] = [
    { label: "기능 소개", href: "/features" },
    { label: "요금제", href: "/pricing" },
    { label: "업데이트", href: "/changelog" },
  ];

  const supportLinks: FooterLink[] = [
    { label: "FAQ", href: "/faq" },
    { label: "문의하기", href: "/support" },
    { label: "개인정보처리방침", href: "/privacy" },
  ];

  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-gray-100)] bg-[var(--color-gray-50)] text-[var(--color-gray-600)]"
    >
      <div className="mx-auto flex max-w-[128rem] flex-col gap-10 px-12 py-12">
        {/* 상단: 좌우 컬럼 + 중앙 로고 */}
        <div className="flex flex-row items-center gap-10   justify-between">
          {/* 좌측: 제품 관련 링크 */}
          <LandingFooterColumn title="제품" links={productLinks} />

          {/* 중앙: 브랜드 로고/문구 */}
          <div className="flex flex-col items-center gap-5">
            <Link href="/" aria-label="MyPlanMate 홈으로 이동" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="MyPlanMate 로고"
                width={150}
                height={150}
                className="object-contain select-none"
                draggable={false}
              />
            </Link>
            <p className="t-14-m text-[var(--color-gray-500)]">
              하루를 정리하는 나만의 플래너, MyPlanMate
            </p>
          </div>

          {/* 우측: 지원/정책 링크 */}
          <LandingFooterColumn title="지원" links={supportLinks} />
        </div>

        {/* 하단: 구분선 + 저작권 */}
        <div className="mt-4 border-t border-[var(--color-gray-100)] pt-6">
          <div className="flex flex-row items-center justify-between gap-4 ">
            <LandingCopyright />
            <p className="t-12-r text-[var(--color-gray-400)]">
              서비스 관련 안내 및 공지사항은 홈페이지를 통해 제공됩니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
