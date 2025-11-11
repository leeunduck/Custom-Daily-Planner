import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthMain } from "@/components/auth/AuthMain";
import { LoginForm } from "@/components/auth/login/LoginForm";
import { LoginPageTitle } from "@/components/auth/login/LoginPageTitle";
import { LoginSubtitle } from "@/components/auth/login/LoginSubtitle";
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
        <LoginPageTitle />
        <LoginSubtitle />
      </AuthHeader>

      <AuthMain>
        <LoginForm />
      </AuthMain>
    </>
  );
}
