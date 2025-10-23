import { makePageMetadata } from "@/seo/metadata";

export async function generateMetadata({ params }: { params: { module: string } }) {
  const moduleName = params.module;
  return {
    ...makePageMetadata({
      title: `디자인 선택 — ${moduleName}`,
      description: `PlanMate 온보딩 2단계: ${moduleName} 모듈 디자인을 선택하세요`,
      canonical: `/setup/${moduleName}`,
    }),
    robots: { index: false, follow: false },
  };
}

export default function SetupModulePage({ params }: { params: { module: string } }) {
  return <div>디자인 선택 페이지 ({params.module})</div>;
}
