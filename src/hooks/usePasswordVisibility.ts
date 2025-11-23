import type { PasswordVisibilityState } from "@/types/auth";
import { useState } from "react";

export function usePasswordVisibility(initialVisible: boolean = false): PasswordVisibilityState {
  const [isVisible, setIsVisible] = useState<boolean>(initialVisible);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const inputType: "password" | "text" = isVisible ? "text" : "password";
  const iconName: "eye" | "eyeOff" = isVisible ? "eyeOff" : "eye";
  const ariaLabel = isVisible ? "비밀번호 숨기기" : "비밀번호 표시";

  return {
    isVisible,
    inputType,
    iconName,
    ariaLabel,
    toggleVisibility,
  };
}
