// src/types/auth.ts
import type { ReactNode } from "react";

/** 다단계 애니메이션 방향 (공통) */
export type StepDirection = "forward" | "backward";

/** Auth 공통 스텝 전환 래퍼에서 사용할 props */
export interface AuthStepTransitionProps {
  stepKey: string;
  direction: StepDirection;
  children: ReactNode;
}

/** 1부터 시작하는 스텝 인디케이터용 props (공통) */
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

/** Auth 컴포넌트 전반에서 사용하는 기본 children props 타입 */
export interface AuthCommonProps {
  children: ReactNode;
}

/** AuthMain 전용 props */
export interface AuthMainProps extends AuthCommonProps {
  flow?: "login" | "signup" | "forgot";
}

/** 회원가입용 스텝 키 */
export type SignupStepKey = "email" | "name" | "password" | "terms";

export interface SignupStepState {
  step: SignupStepKey;
  direction: StepDirection;
  goTo: (next: SignupStepKey) => void;
  goNext: () => void;
  goPrev: () => void;
  reset: () => void;
}

/** 비밀번호 재설정 스텝 키 */
export type ForgotPasswordStepKey = "email" | "verify" | "reset";

export interface ForgotPasswordStepState {
  step: ForgotPasswordStepKey;
  direction: StepDirection;
  goTo: (next: ForgotPasswordStepKey) => void;
  goNext: () => void;
  goPrev: () => void;
  reset: () => void;
}
