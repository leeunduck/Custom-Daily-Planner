import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "비밀번호 찾기 — 인증번호 입력",
    description: "PlanMate 비밀번호 찾기 2단계: 이메일 인증번호 입력 페이지",
    canonical: "/forgot-password/verify",
  }),
  robots: { index: false, follow: false },
};

export default function ForgotPasswordVerifyPage() {
  return <div>비밀번호 찾기 - 인증번호 입력 페이지</div>;
}
