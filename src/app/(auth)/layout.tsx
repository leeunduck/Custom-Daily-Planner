import { makePageMetadata } from "@/seo/metadata";

export const metadata = makePageMetadata({
  title: "PlanMate — 로그인/회원가입",
  description: "PlanMate 계정으로 로그인하거나 회원가입하세요.",
  canonical: "/login",
});

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
