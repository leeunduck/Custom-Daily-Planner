import { AuthHeader } from "@/components/auth/AuthHeader";
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

      <main>
        {/* TODO: 나중에 LoginMain + AuthCard + LoginForm 구조로 확장 */}
        <div className="rounded-2xl bg-[var(--color-white)] px-6 py-8 shadow-[var(--shadow-md)]">
          <p className="t-14-m text-[var(--color-gray-600)]">
            여기에는 로그인 폼이 들어갈 예정입니다.
          </p>
        </div>
      </main>
    </>
  );
}
