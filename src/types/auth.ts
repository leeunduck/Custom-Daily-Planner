import type { FormEvent, ReactNode } from "react";

/* =========================================================
 * 공통 (Common)
 * ========================================================= */

/** 공통 children 용 */
export interface AuthCommonProps {
  children: ReactNode;
}

/** AuthMain 전용 props */
export interface AuthMainProps extends AuthCommonProps {
  flow?: "login" | "signup" | "forgot";
}

/** 다단계 애니메이션 방향 (공통) */
export type StepDirection = "forward" | "backward";

/** Auth 스텝 전환 래퍼 props */
export interface AuthStepTransitionProps {
  stepKey: string;
  direction: StepDirection;
  children: ReactNode;
}

/** 인디케이터용 (1부터 시작) */
export interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
  className?: string;
}

/** 스텝별 주요 필드 메타 정보 (공통) */
export interface StepFieldMeta {
  fieldId: string;
  fieldName: string;
}

/** 비밀번호 토글 상태 (공통 훅에서 사용) */
export interface PasswordVisibilityState {
  isVisible: boolean;
  inputType: "password" | "text";
  iconName: "eye" | "eyeOff";
  ariaLabel: string;
  toggleVisibility: () => void;
}

/** Auth 폼 submit 핸들러 타입 (실제 onSubmit에 연결되는 함수) */
export type AuthFormSubmitHandler = (event: FormEvent<HTMLFormElement>) => void;

/** Auth 폼 콜백 타입 (폼 로직에서 쓰는 콜백, event는 받지 않음) */
export type AuthFormSubmitCallback = () => void;

/* =========================================================
 * 회원가입 (Signup)
 * ========================================================= */

/** 회원가입 다단계 스텝 키 */
export type SignupStepKey = "email" | "name" | "password" | "terms";

/** 회원가입 스텝/방향 Zustand용 상태 + 액션 */
export interface SignupStepState {
  step: SignupStepKey;
  direction: StepDirection;
  goTo: (next: SignupStepKey) => void;
  goNext: () => void;
  goPrev: () => void;
  reset: () => void;
}

/** (회원가입용) Signup 폼 값 */
export interface SignupFormValues {
  email: string;
  name: string;
  password: string;
  agreeToTerms: boolean;
  accessToken: string;
}

/** (회원가입용) Signup 폼 Zustand 상태 + 액션 */
export interface SignupFormState extends SignupFormValues {
  setEmail: (value: string) => void;
  setName: (value: string) => void;
  setPassword: (value: string) => void;
  setAgreeToTerms: (value: boolean) => void;
  setAccessToken: (value: string) => void;
  reset: () => void;
}

// 이메일 중복 확인 API 요청 바디
export type CheckEmailBody = {
  email?: string;
};

// 이메일 중복 확인 API 성공 응답
export type CheckEmailOkRes = {
  ok: true;
  available: boolean;
  message: string;
};

// 이메일 중복 확인 API 실패 응답
export type CheckEmailFailRes = {
  ok: false;
  available: false;
  message: string;
};

// 이메일 중복 확인 API 최종 응답 타입 (성공 | 실패)
export type CheckEmailResponse = CheckEmailOkRes | CheckEmailFailRes;

/** OTP 발송 API 응답 */
export interface SendOtpResponse {
  ok: boolean;
  message: string;
}

/** OTP 검증 API 응답 */
export interface VerifyOtpResponse {
  ok: boolean;
  verified: boolean;
  message: string;
  accessToken?: string;
}

/* =========================================================
 * 로그인 (Login)
 * ========================================================= */

/** 로그인 폼 값 */
export interface LoginFormValues {
  email: string;
  password: string;
}

/** 로그인 폼 Zustand 상태 + 액션 */
export interface LoginFormState extends LoginFormValues {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  reset: () => void;
}

/* =========================================================
 * 비밀번호 찾기 (Forgot Password)
 * ========================================================= */

/** 비밀번호 찾기 다단계 스텝 키 */
export type ForgotPasswordStepKey = "email" | "verify" | "reset";

/** 비밀번호 찾기 스텝/방향 Zustand용 상태 + 액션 */
export interface ForgotPasswordStepState {
  step: ForgotPasswordStepKey;
  direction: StepDirection;
  goTo: (next: ForgotPasswordStepKey) => void;
  goNext: () => void;
  goPrev: () => void;
  reset: () => void;
}

/** 비밀번호 재설정 폼 값 */
export interface ForgotPasswordFormValues {
  email: string;
  code: string;
  newPassword: string;
}

/** 비밀번호 재설정 폼 Zustand 상태 + 액션 */
export interface ForgotPasswordFormState extends ForgotPasswordFormValues {
  setEmail: (value: string) => void;
  setCode: (value: string) => void;
  setNewPassword: (value: string) => void;
  reset: () => void;
}
