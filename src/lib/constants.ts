export const SITE_NAME = "MyPlanMate";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? "https://myplanmate.vercel.app";

export const DEFAULT_TITLE = `${SITE_NAME} - 나만의 맞춤형 플래너`;
export const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;
export const DEFAULT_DESCRIPTION =
  "일간·주간·월간·투두·습관·메모를 자유롭게 조합하는 커스텀 플래너";

export const OG_DEFAULT_IMAGE = "/og/og-default.png"; // metadataBase로 절대경로 해석
export const LOCALE = "ko_KR";
