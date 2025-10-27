import { makePageMetadata } from "@/seo/metadata";

export const metadata = makePageMetadata({
  title: "초기 설정 — MyPlanMate",
  description: "모듈을 선택하고 배치해 나만의 플래너를 시작하세요.",
  canonical: "/setup",
});

export default function SetupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
