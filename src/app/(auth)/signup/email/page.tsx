import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthMain } from "@/components/auth/AuthMain";
import { SubTitle, Title } from "@/components/auth/AuthTitle";
import { SignupForm } from "@/components/auth/signup/SignupForm";
import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "회원가입 — 이메일 입력",
    description: "MyPlanMate 회원가입 2단계: 이메일 입력 페이지",
    canonical: "/signup/email",
  }),
  robots: { index: false, follow: false },
};

export default function SignupEmailPage() {
  return (
    <>
      <AuthHeader>
        <Title>이메일</Title>
        <SubTitle>계정으로 사용할 이메일을 알려주세요.</SubTitle>
      </AuthHeader>

      <AuthMain>
        <SignupForm
          fieldId="signup-email"
          fieldName="email"
          label="이메일"
          type="email"
          placeholder="example@email.com"
          autoComplete="email"
          nextHref="/signup/password"
          prevHref="/signup/name"
        />
      </AuthMain>
    </>
  );
}
