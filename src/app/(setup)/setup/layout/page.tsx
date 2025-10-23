import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "기능 배치",
    description: "PlanMate 온보딩 3단계: 선택한 기능을 배치하세요",
    canonical: "/setup/layout",
  }),
  robots: { index: false, follow: false },
};

export default function SetupLayoutPage() {
  return <div>기능 배치 페이지</div>;
}
