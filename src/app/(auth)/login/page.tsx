import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "로그인",
    description: "PlanMate 로그인 페이지",
    canonical: "/login",
  }),
  robots: { index: false, follow: false }, // 인증 화면은 보통 검색 제외
};

export default function LoginPage() {
  return <div>로그인 페이지</div>;
}
