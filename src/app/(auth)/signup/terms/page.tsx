import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthMain } from "@/components/auth/AuthMain";
import { SubTitle, Title } from "@/components/auth/AuthTitle";
import { SignupForm } from "@/components/auth/signup/SignupForm";
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
  return (
    <>
      <AuthHeader>
        <Title>약관동의</Title>
        <SubTitle>서비스 이용을 위한 필수 약관입니다.</SubTitle>
      </AuthHeader>

      <AuthMain>
        <SignupForm
          fieldId="signup-terms"
          fieldName="text"
          nextHref="/signup/terms"
          prevHref="/signup/password"
        />
      </AuthMain>
    </>
  );
}
