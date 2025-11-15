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

export interface SignupFormProps {
  className?: string;
  /** 인풋 id / name */
  fieldId: string;
  fieldName: string;
  /** 라벨 텍스트 (예: 이름, 이메일) */
  label: string;
  /** 인풋 타입 */
  type?: "text" | "email" | "password";
  /** placeholder */
  placeholder?: string;
  /** autoComplete 힌트 */
  autoComplete?: string;

  /** 임시: 다음 스텝으로 이동할 링크 */
  nextHref: string;

  /** 임시: 이전 스텝으로 이동할 링크 (있을 때만 버튼 노출) */
  prevHref?: string;
}

export interface SignupStepIndicatorProps {
  /** 1부터 시작하는 현재 스텝 번호 */
  currentStep: number;
  /** 전체 스텝 수 (기본 4) */
  totalSteps?: number;
  className?: string;
}
