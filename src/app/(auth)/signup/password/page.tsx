import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthMain } from "@/components/auth/AuthMain";
import { SubTitle, Title } from "@/components/auth/AuthTitle";
import { SignupForm } from "@/components/auth/signup/SignupForm";
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
  return (
    <>
      <AuthHeader>
        <Title>비밀번호</Title>
        <SubTitle>8자 이상 / 특수문자 포함</SubTitle>
      </AuthHeader>

      <AuthMain>
        <SignupForm
          fieldId="signup-password"
          fieldName="password"
          nextHref="/signup/terms"
          prevHref="/signup/email"
        />
      </AuthMain>
    </>
  );
}
