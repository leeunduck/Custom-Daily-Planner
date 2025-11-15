import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthMain } from "@/components/auth/AuthMain";
import { SubTitle, Title } from "@/components/auth/AuthTitle";
import { LoginForm } from "@/components/auth/login/LoginForm";
import { makePageMetadata } from "@/seo/metadata";

export const metadata = {
  ...makePageMetadata({
    title: "MyPlanMate — 로그인",
    description: "MyPlanMate 계정으로 로그인하고 오늘의 플랜을 시작하세요.",
    canonical: "/login",
  }),
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <>
      <AuthHeader>
        <Title>로그인</Title>
        <SubTitle>오늘도 만나서 반가워요!</SubTitle>
      </AuthHeader>

      <AuthMain>
        <LoginForm />
      </AuthMain>
    </>
  );
}
