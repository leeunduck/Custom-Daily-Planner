import { create } from "zustand";

type UserState = {
  userId: string | null;
  setUserId: (id: string | null) => void;
  reset: () => void;
  // 앞으로 확장될 수 있는 전역 UI 상태 예시
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export const useUserStore = create<UserState>((set) => ({
  userId: null,
  setUserId: (id) => set({ userId: id }),
  reset: () => set({ userId: null }),
  theme: "light",
  toggleTheme: () => set((s) => ({ theme: s.theme === "light" ? "dark" : "light" })),
}));
