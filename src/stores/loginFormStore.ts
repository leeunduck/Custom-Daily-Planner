"use client";

import type { LoginFormState } from "@/types/auth";
import { create } from "zustand";

export const useLoginFormStore = create<LoginFormState>((set) => ({
  email: "",
  password: "",
  setEmail: (value) => set({ email: value }),
  setPassword: (value) => set({ password: value }),
  reset: () => set({ email: "", password: "" }),
}));
