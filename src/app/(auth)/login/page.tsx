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
      <header className="text-center">
        {/* TODO: 나중에 AppLogo + LoginPageTitle + LoginSubtitle로 교체 */}
        <p className="t-14-m text-[var(--color-gray-500)]">PlanMate</p>
        <h1 className="mt-2 t-24-b text-[var(--color-gray-900)]">로그인</h1>
        <p className="mt-1 t-14-m text-[var(--color-gray-600)]">오늘도 만나서 반가워요!</p>
      </header>

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
