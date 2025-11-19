import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "비밀번호 찾기",
    description: "PlanMate 비밀번호 찾기 페이지",
    canonical: "/forgot-password",
  }),
  robots: { index: false, follow: false },
};

export default function ForgotPasswordPage() {
  return <div>비밀번호 찾기 - 이메일 입력 페이지</div>;
}
