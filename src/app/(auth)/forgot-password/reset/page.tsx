import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "비밀번호 찾기 — 비밀번호 재설정",
    description: "PlanMate 비밀번호 찾기 3단계: 새 비밀번호 설정 페이지",
    canonical: "/forgot-password/reset",
  }),
  robots: { index: false, follow: false },
};

export default function ForgotPasswordResetPage() {
  return <div>비밀번호 찾기 - 비밀번호 재설정 페이지</div>;
}
