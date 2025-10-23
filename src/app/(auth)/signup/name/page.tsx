import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "회원가입 — 이름 입력",
    description: "PlanMate 회원가입 1단계: 이름 입력 페이지",
    canonical: "/signup/name",
  }),
  robots: { index: false, follow: false },
};

export default function SignupNamePage() {
  return <div>회원가입 - 이름 입력 페이지</div>;
}
