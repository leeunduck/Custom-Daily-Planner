import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "회원가입 — 비밀번호 설정",
    description: "PlanMate 회원가입 3단계: 비밀번호 설정 페이지",
    canonical: "/signup/password",
  }),
  robots: { index: false, follow: false },
};

export default function SignupPasswordPage() {
  return <div>회원가입 - 비밀번호 설정 페이지</div>;
}
