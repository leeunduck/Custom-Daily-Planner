import type { ReactNode } from "react";

export interface AuthCommonProps {
  children: ReactNode;
}

export interface AuthFormState {
  email: string;
  password: string;
  emailError: boolean;
  passwordError: boolean;
  isPasswordVisible: boolean;

  setEmail: (value: string) => void;
  setPassword: (value: string) => void;

  clearEmailError: () => void;
  clearPasswordError: () => void;

  togglePasswordVisible: () => void;

  validateLogin: () => boolean;
}

export interface SignupGroupButtonProps {
  className?: string;
}

/** 각 스텝 인풋에 공통으로 필요한 최소 정보 */
export interface SignupFieldBaseProps {
  fieldId: string;
  fieldName: string;
}

/** 회원가입 스텝 */
export type SignupStepKey = "email" | "name" | "password" | "terms";

export interface StepTransitionWrapperProps {
  stepKey: string;
  direction: "forward" | "backward";
  children: React.ReactNode;
}

// 스텝 이동 방향
export type StepDirection = "forward" | "backward";

export interface SignupStepState {
  step: SignupStepKey;
  direction: StepDirection;
  goTo: (next: SignupStepKey) => void;
  goNext: () => void;
  goPrev: () => void;
}

export interface SignupStepIndicatorProps {
  /** 1부터 시작하는 현재 스텝 번호 */
  currentStep: number;
  /** 전체 스텝 수 (기본 4) */
  totalSteps?: number;
  className?: string;
}

export interface SignupFormProps {
  className?: string;
  fieldId: string;
  fieldName: string;
  nextHref: string;
  prevHref?: string;
}
