import { makePageMetadata } from "@/seo/metadata";

export const metadata = makePageMetadata({
  title: "PlanMate — 맞춤형 데일리 플래너",
  description: "원하는 모듈을 조합해 나만의 플래너를 만드는 PlanMate 랜딩 페이지",
  canonical: "/",
});

export default function Home() {
  return <div>랜딩 페이지</div>;
}
