"use client";

import { FEATURES } from "@/lib/constants";
import type { FeatureItem } from "@/types/landing";
import { create } from "zustand";

type FeaturePreviewState = {
  activeFeature: FeatureItem;
  setActiveFeature: (feature: FeatureItem) => void;
};

export const useFeaturePreviewStore = create<FeaturePreviewState>((set) => ({
  activeFeature: FEATURES[0], // 기본: "일간"
  setActiveFeature: (feature) => set({ activeFeature: feature }),
}));
