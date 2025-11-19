import type { ReactNode } from "react";

export interface AuthCommonProps {
  children: ReactNode;
}

export interface AuthMainProps extends AuthCommonProps {
  flow?: "login" | "signup" | "forgot";
}

export interface SignupGroupButtonProps {
  className?: string;
}

/** 회원가입 스텝 */
export type SignupStepKey = "email" | "name" | "password" | "terms";

export interface AuthStepTransitionProps {
  stepKey: string;
  direction: StepDirection;
  children: ReactNode;
}

// 스텝 이동 방향
export type StepDirection = "forward" | "backward";

export interface SignupStepState {
  step: SignupStepKey;
  direction: StepDirection;
  goTo: (next: SignupStepKey) => void;
  goNext: () => void;
  goPrev: () => void;
  reset: () => void;
}

export interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
  className?: string;
}

export interface SignupFormProps {
  className?: string;
}

/** 스텝별 주요 필드 메타 정보 */
export interface SignupStepFieldMeta {
  fieldId: string;
  fieldName: string;
}
