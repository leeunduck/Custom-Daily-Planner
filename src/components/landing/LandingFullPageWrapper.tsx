"use client";

import { useFullPageScroll } from "@/hooks/useFullPageScroll";
import type { LandingFullPageWrapperProps } from "@/types/landing";

export function LandingFullPageWrapper({ children }: LandingFullPageWrapperProps) {
  useFullPageScroll();
  return <>{children}</>;
}
