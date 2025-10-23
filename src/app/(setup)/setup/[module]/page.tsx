import { pickParams } from "@/lib/route-props";
import { makePageMetadata } from "@/seo/metadata";

export function generateMetadata(props: unknown) {
  const { module } = pickParams(props, ["module"] as const);

  return {
    ...makePageMetadata({
      title: `디자인 선택 — ${module}`,
      description: `PlanMate 온보딩 2단계: ${module} 모듈 디자인을 선택하세요`,
      canonical: `/setup/${module}`,
    }),
    robots: { index: false, follow: false },
  };
}

export default function SetupModulePage(props: unknown) {
  const { module } = pickParams(props, ["module"] as const);
  return <div>디자인 선택 페이지 ({module})</div>;
}
