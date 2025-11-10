import { makePageMetadata } from "@/seo/metadata";
import type { AuthCommonProps } from "@/types/auth";

export const metadata = makePageMetadata({
  title: "MyPlanMate — 인증",
  description: "MyPlanMate 계정으로 로그인하고, 새 계정을 만들고, 비밀번호를 재설정하세요.",
});

export default function AuthLayout({ children }: AuthCommonProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col gap-20 w-full max-w-[500px]">{children}</div>
    </div>
  );
}
