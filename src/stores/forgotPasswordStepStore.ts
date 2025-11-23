"use client";

import { FORGOT_PASSWORD_STEP_ORDER } from "@/lib/constants";
import type { ForgotPasswordStepState, StepDirection } from "@/types/auth";
import { create } from "zustand";

export const useForgotPasswordStepStore = create<ForgotPasswordStepState>((set, get) => ({
  step: "email",
  direction: "forward",

  goTo: (next) => {
    const current = get().step;
    if (current === next) return;

    const currentIndex = FORGOT_PASSWORD_STEP_ORDER.indexOf(current);
    const nextIndex = FORGOT_PASSWORD_STEP_ORDER.indexOf(next);

    const direction: StepDirection = nextIndex > currentIndex ? "forward" : "backward";

    set({ step: next, direction });
  },

  goNext: () => {
    const current = get().step;
    const currentIndex = FORGOT_PASSWORD_STEP_ORDER.indexOf(current);
    const nextIndex = Math.min(currentIndex + 1, FORGOT_PASSWORD_STEP_ORDER.length - 1);
    const next = FORGOT_PASSWORD_STEP_ORDER[nextIndex];

    if (next !== current) {
      set({ step: next, direction: "forward" });
    }
  },

  goPrev: () => {
    const current = get().step;
    const currentIndex = FORGOT_PASSWORD_STEP_ORDER.indexOf(current);
    const prevIndex = Math.max(currentIndex - 1, 0);
    const prev = FORGOT_PASSWORD_STEP_ORDER[prevIndex];

    if (prev !== current) {
      set({ step: prev, direction: "backward" });
    }
  },

  reset: () => {
    set({
      step: "email",
      direction: "forward",
    });
  },
}));
