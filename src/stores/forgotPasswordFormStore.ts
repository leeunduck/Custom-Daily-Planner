"use client";

import type { ForgotPasswordFormState, ForgotPasswordFormValues } from "@/types/auth";
import { create } from "zustand";

const initialForgotPasswordValues: ForgotPasswordFormValues = {
  email: "",
  code: "",
  newPassword: "",
};

export const useForgotPasswordFormStore = create<ForgotPasswordFormState>((set) => ({
  ...initialForgotPasswordValues,

  setEmail: (value: string) =>
    set(() => ({
      email: value,
    })),

  setCode: (value: string) =>
    set(() => ({
      code: value,
    })),

  setNewPassword: (value: string) =>
    set(() => ({
      newPassword: value,
    })),

  reset: () =>
    set(() => ({
      ...initialForgotPasswordValues,
    })),
}));
