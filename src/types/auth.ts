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
  /** 다음 버튼 라벨 (기본: "다음") */
  nextLabel?: string;
  /** 이전 버튼 표시 여부 */
  showPrev?: boolean;
  /** 다음 클릭(폼 submit) 콜백 */
  onNext: () => void;
  /** 이전 클릭 콜백 (showPrev=true일 때만 사용) */
  onPrev?: () => void;
}
