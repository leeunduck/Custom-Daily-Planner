/* -------------------------------------------------
   📦 프로젝트 공통 상수 (Global Constants)
   - SEO / OG / 사이트 메타 정보
   - 공통 UI 리소스 (ex. 회원가입 버튼 등)
   ------------------------------------------------- */

/** 사이트 이름 */
export const SITE_NAME = "MyPlanMate";

/** 배포 도메인 (환경변수 우선) */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? "https://myplanmate.vercel.app";

/** 기본 메타 타이틀 / 템플릿 */
export const DEFAULT_TITLE = `${SITE_NAME} - 나만의 맞춤형 플래너`;
export const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;

/** 기본 메타 설명 */
export const DEFAULT_DESCRIPTION =
  "일간·주간·월간·투두·습관·메모를 자유롭게 조합하는 커스텀 플래너";

/** OG 기본 이미지 (metadataBase로 절대경로 해석됨) */
export const OG_DEFAULT_IMAGE = "/og/og-default.png";

/** 언어 / 지역 설정 */
export const LOCALE = "ko_KR";

/* -------------------------------------------------
   🪪 회원가입 버튼 목록 (Signup Buttons)
   - SignupGroupButton에서 사용
   - bg: cva variant key와 1:1 매핑
   ------------------------------------------------- */
export const SIGNUP_BTNS = [
  {
    key: "email",
    bg: "basic" as const,
    label: "일반 회원가입",
    icon: { kind: "lucide" as const, name: "user-plus2" as const, size: 28 }, // 28px ≈ w-7 h-7
  },
  {
    key: "google",
    bg: "google" as const,
    label: "Google로 가입",
    icon: { kind: "image" as const, src: "/icons/google.svg", width: 36, height: 36 },
  },
  {
    key: "kakao",
    bg: "kakao" as const,
    label: "카카오로 가입",
    icon: { kind: "image" as const, src: "/icons/kakaotalk.svg", width: 36, height: 36 },
  },
] as const;

export type SignupButtonKey = (typeof SIGNUP_BTNS)[number]["key"];
