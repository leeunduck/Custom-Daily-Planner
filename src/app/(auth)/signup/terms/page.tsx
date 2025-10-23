import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "회원가입 — 약관 동의",
    description: "PlanMate 회원가입 4단계: 약관 동의 페이지",
    canonical: "/signup/terms",
  }),
  robots: { index: false, follow: false },
};

export default function SignupTermsPage() {
  return <div>회원가입 - 약관 동의 페이지</div>;
}
