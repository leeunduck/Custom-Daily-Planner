import type { AuthFormState } from "@/types/authForm";
import { create } from "zustand";

export const useAuthFormStore = create<AuthFormState>((set, get) => ({
  email: "",
  password: "",
  emailError: false,
  passwordError: false,
  isPasswordVisible: false,

  setEmail: (value) => set({ email: value }),
  setPassword: (value) => set({ password: value }),

  clearEmailError: () => set({ emailError: false }),
  clearPasswordError: () => set({ passwordError: false }),

  togglePasswordVisible: () => set((state) => ({ isPasswordVisible: !state.isPasswordVisible })),

  validateLogin: () => {
    const { email, password } = get();

    let emailError = false;
    let passwordError = false;

    // 이메일: 비어 있거나 형식이 올바르지 않으면 에러
    const trimmedEmail = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!trimmedEmail || !isValidEmail) {
      emailError = true;
    }

    // 비밀번호: 6자리 이상 + 특수문자 1개 이상
    const hasMinLength = password.length >= 6;
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

    if (!hasMinLength || !hasSpecialChar) {
      passwordError = true;
    }

    // 하나라도 에러가 있으면 해당 필드 값 초기화 + 에러 플래그 세팅
    if (emailError || passwordError) {
      set({
        email: emailError ? "" : email,
        password: passwordError ? "" : password,
        emailError,
        passwordError,
      });
      return false;
    }

    set({ emailError: false, passwordError: false });
    return true;
  },
}));
