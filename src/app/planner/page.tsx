import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "플래너",
    description: "PlanMate 플래너 대시보드",
    canonical: "/planner",
  }),
  robots: { index: false, follow: false }, // 보호 구역은 검색 제외
};

export default function PlannerPage() {
  return <div>플래너 대시보드</div>;
}
