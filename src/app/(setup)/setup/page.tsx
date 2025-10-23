import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "기능 선택",
    description: "PlanMate 온보딩 1단계: 필요한 모듈을 선택하세요",
    canonical: "/setup",
  }),
  robots: { index: false, follow: false },
};

export default function SetupPage() {
  return <div>기능 선택 페이지</div>;
}
