import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthMain } from "@/components/auth/AuthMain";
import { SubTitle, Title } from "@/components/auth/AuthTitle";
import { SignupGroupButton } from "@/components/auth/signup/SignupGroupButton";
import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "회원가입",
    description: "MyPlanMate 회원가입 페이지",
    canonical: "/signup",
  }),
  robots: { index: false, follow: false }, // 인증 관련 페이지는 검색 제외
};

export default function SignupPage() {
  return (
    <>
      <AuthHeader>
        <Title>회원가입</Title>
        <SubTitle>원하시는 가입 방식을 선택해주세요.</SubTitle>
      </AuthHeader>

      <AuthMain>
        <SignupGroupButton />
      </AuthMain>
    </>
  );
}
