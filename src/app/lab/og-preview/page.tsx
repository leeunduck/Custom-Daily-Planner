import { withBase } from "@/seo/baseUrl"; // 선택: 절대 URL 유틸
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PlanMate 프로모션 Seed",
  description: "공유 카드(OG/Twitter) 테스트용 페이지",
  openGraph: {
    title: "PlanMate 프로모션 Seed",
    description: "공유 카드(OG/Twitter) 테스트용 페이지",
    images: [
      {
        url: withBase("/og/promo-seed.png"),
        width: 1200,
        height: 630,
        alt: "PlanMate 프로모션 Seed",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <main className="p-8">OG/Twitter 카드 테스트 페이지</main>;
}
