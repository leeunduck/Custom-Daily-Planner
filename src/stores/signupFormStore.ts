"use client";

import type { SignupFormState, SignupFormValues } from "@/types/auth";
import { create } from "zustand";

const initialSignupValues: SignupFormValues = {
  email: "",
  name: "",
  password: "",
  agreeToTerms: false,
};

export const useSignupFormStore = create<SignupFormState>((set) => ({
  ...initialSignupValues,

  setEmail: (value: string) =>
    set(() => ({
      email: value,
    })),

  setName: (value: string) =>
    set(() => ({
      name: value,
    })),

  setPassword: (value: string) =>
    set(() => ({
      password: value,
    })),

  setAgreeToTerms: (value: boolean) =>
    set(() => ({
      agreeToTerms: value,
    })),

  reset: () =>
    set(() => ({
      ...initialSignupValues,
    })),
}));
