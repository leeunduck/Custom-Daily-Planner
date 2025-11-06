import { PRODUCTLINKS, SUPPORTLINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { LandingCopyright } from "./LandingCopyright";
import { LandingFooterColumn } from "./LandingFooterColumn";

export function LandingFooter() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-gray-100)] bg-[var(--color-gray-50)] text-[var(--color-gray-600)] mt-30"
    >
      <div
        className={cn(
          "mx-auto flex max-w-[128rem] flex-col gap-10 px-6 py-10",
          "md:px-12 md:py-12",
        )}
      >
        <div
          className={cn(
            "grid grid-cols-[14rem_14rem] grid-rows-[auto_auto] justify-center items-start gap-10 text-center",
            "md:grid-cols-3 md:grid-rows-1 md:justify-between",
          )}
        >
          {/* 제품 컬럼 */}
          <div
            className={cn(
              "col-span-1 row-start-2 justify-self-center",
              "md:row-auto md:justify-self-start",
            )}
          >
            <LandingFooterColumn title="제품" links={PRODUCTLINKS} />
          </div>

          {/* 로고 블록*/}
          <div
            className={cn(
              "col-span-2 row-start-1 flex flex-col items-center gap-4 justify-self-center",
              "md:col-span-1 md:row-auto",
            )}
          >
            <Link
              href="/"
              aria-label="MyPlanMate 홈으로 이동"
              className="flex items-center justify-center"
            >
              <Image
                src="/images/logo.png"
                alt="MyPlanMate 로고"
                width={150}
                height={150}
                className="object-contain select-none h-[4rem] md:h-[6rem]"
                draggable={false}
              />
            </Link>
            <p className="t-14-m text-[var(--color-gray-500)]">
              하루를 정리하는 나만의 플래너, MyPlanMate
            </p>
          </div>

          {/* 지원 컬럼 */}
          <div
            className={cn(
              "col-span-1 row-start-2 justify-self-center",
              "md:row-auto md:justify-self-end",
            )}
          >
            <LandingFooterColumn title="지원" links={SUPPORTLINKS} />
          </div>
        </div>

        {/* 하단: 구분선 + 저작권 */}
        <div className={cn("mt-4 border-t border-[var(--color-gray-100)] pt-6")}>
          <div
            className={cn(
              "flex flex-col items-center gap-4 text-center",
              "md:flex-row md:items-center md:justify-between md:text-left",
            )}
          >
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
