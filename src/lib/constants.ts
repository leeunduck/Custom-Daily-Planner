import { FeatureItem, FooterLink, SpecialFeatureItem } from "@/types/landing";

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
   🧩 Layout - Footer
   - LandingFooter에서 사용
   ------------------------------------------------- */

export const PRODUCTLINKS: FooterLink[] = [
  { label: "기능 소개", href: "/features" },
  { label: "요금제", href: "/pricing" },
  { label: "업데이트", href: "/changelog" },
];

export const SUPPORTLINKS: FooterLink[] = [
  { label: "FAQ", href: "/faq" },
  { label: "문의하기", href: "/support" },
  { label: "개인정보처리방침", href: "/privacy" },
];

/* -------------------------------------------------
   🧩 랜딩 페이지 — 기능 소개 섹션 1
   - LandingFeatureGrid / LandingFeaturesSection1에서 사용
   - “일간 / 주간 / 월간 / To-Do / 습관 / 메모” 6개 모듈 메타데이터
   ------------------------------------------------- */

export const FEATURES: FeatureItem[] = [
  {
    title: "일간",
    description: "오늘의 일정과 할 일을 한눈에",
    iconName: "calendar",
    previewImageSrc: "/images/feature-daily.png",
  },
  {
    title: "주간",
    description: "일주일 단위로 계획을 세우고 관리",
    iconName: "calendarDays",
    previewImageSrc: "/images/feature-weekly.png",
  },
  {
    title: "월간",
    description: "한 달 전체 일정을 조망하고 계획",
    iconName: "calendarRange",
    previewImageSrc: "/images/feature-monthly.png",
  },
  {
    title: "To-Do",
    description: "해야 할 일을 체계적으로 정리",
    iconName: "checkSquare",
    previewImageSrc: "/images/feature-todo.png",
  },
  {
    title: "습관",
    description: "좋은 습관을 만들고 지속적으로 추적",
    iconName: "rotateCcw",
    previewImageSrc: "/images/feature-habit.png",
  },
  {
    title: "메모",
    description: "중요한 생각과 아이디어를 기록",
    iconName: "stickyNote",
    previewImageSrc: "/images/feature-memo.png",
  },
];

/* -------------------------------------------------
   🧩 랜딩 페이지 — 특별한 기능 소개 섹션
   - LandingSpecialFeatureGrid 사용
   ------------------------------------------------- */

export const SPECIAL_FEATURES: SpecialFeatureItem[] = [
  {
    title: "스마트 스케줄링",
    description: "AI가 추천하는 최적의 일정 배치로 효율성을 극대화하세요.",
    iconName: "calendar",
  },
  {
    title: "팀 협업",
    description: "팀원들과 실시간으로 일정을 공유하고 함께 작업하세요.",
    iconName: "users",
  },
  {
    title: "스마트 알림",
    description: "중요한 일정을 놓치지 않도록 맞춤형 알림을 받아보세요.",
    iconName: "bellRing",
  },
];

/* ----------------------------------------------
   🧭 회원가입 단계 — 순서 정의 (Zustand + Router 공용)
   ---------------------------------------------- */

import type { ForgotPasswordStepKey, SignupStepKey, StepFieldMeta } from "@/types/auth";

export const SIGNUP_STEP_ORDER: SignupStepKey[] = ["email", "name", "password", "terms"];

/** 스텝별 필드 id/name 메타 */
export const SIGNUP_STEP_FIELD_META: Record<SignupStepKey, StepFieldMeta> = {
  email: {
    fieldId: "email",
    fieldName: "email",
  },
  name: {
    fieldId: "name",
    fieldName: "name",
  },
  password: {
    fieldId: "password",
    fieldName: "password",
  },
  terms: {
    // terms 단계는 실제 input 하나에 묶이는 건 아니지만,
    // 라벨/aria 연결용으로 기본 값만 잡아둔다.
    fieldId: "terms",
    fieldName: "terms",
  },
};

export const SIGNUP_STEP_COPY: Record<SignupStepKey, { title: string; subtitle: string }> = {
  email: {
    title: "이메일",
    subtitle: "계정으로 사용할 이메일을 알려주세요.",
  },
  name: {
    title: "이름",
    subtitle: "플래너에서 사용할 이름을 입력해주세요.",
  },
  password: {
    title: "비밀번호 설정",
    subtitle: "안전하게 사용할 비밀번호를 만들어 주세요.",
  },
  terms: {
    title: "약관 동의",
    subtitle: "서비스 이용약관과 개인정보 처리방침에 동의해 주세요.",
  },
};

/* ----------------------------------------------
   ⚙️ 비밀번호 찾기 — 순서 정의 (Zustand + Router 공용)
   ---------------------------------------------- */
/** ✅ 비밀번호 재설정 스텝 순서 (3단계) */
export const FORGOT_PASSWORD_STEP_ORDER: ForgotPasswordStepKey[] = ["email", "verify", "reset"];

/** ✅ 비밀번호 재설정 스텝별 타이틀/서브카피 */
export const FORGOT_PASSWORD_STEP_COPY: Record<
  ForgotPasswordStepKey,
  { title: string; subtitle: string }
> = {
  email: {
    title: "이메일 입력",
    subtitle: "계정을 찾기 위해 가입하신 이메일을 입력해주세요.",
  },
  verify: {
    title: "이메일 인증",
    subtitle: "메일로 전송된 인증 코드를 입력해주세요.",
  },
  reset: {
    title: "비밀번호 재설정",
    subtitle: "새 비밀번호를 설정해 주세요.",
  },
};

/** 스텝별 필드 id/name 메타 */
export const FORGOT_PASSWORD_STEP_FIELD_META: Record<ForgotPasswordStepKey, StepFieldMeta> = {
  email: {
    fieldId: "forgot-email",
    fieldName: "email",
  },
  verify: {
    fieldId: "verify",
    fieldName: "verificationCode",
  },
  reset: {
    fieldId: "new-password",
    fieldName: "newPassword",
  },
};

/** 인증번호 자리 수 */
export const CODE_LENGTH = 4;
