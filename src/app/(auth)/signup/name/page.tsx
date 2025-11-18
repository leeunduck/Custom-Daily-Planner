import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthMain } from "@/components/auth/AuthMain";
import { SubTitle, Title } from "@/components/auth/AuthTitle";
import { SignupForm } from "@/components/auth/signup/SignupForm";
import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "회원가입 — 이름 입력",
    description: "MyPlanMate 회원가입 1단계: 이름 입력 페이지",
    canonical: "/signup/name",
  }),
  robots: { index: false, follow: false },
};

export default function SignupNamePage() {
  return (
    <>
      <AuthHeader>
        <Title>이름</Title>
        <SubTitle>이름을 알려주세요.</SubTitle>
      </AuthHeader>

      <AuthMain>
        <SignupForm fieldId="signup-name" fieldName="name" nextHref="/signup/email" />
      </AuthMain>
    </>
  );
}
