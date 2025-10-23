import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "회원가입 — 이메일 입력",
    description: "PlanMate 회원가입 2단계: 이메일 입력 페이지",
    canonical: "/signup/email",
  }),
  robots: { index: false, follow: false },
};

export default function SignupEmailPage() {
  return <div>회원가입 - 이메일 입력 페이지</div>;
}
