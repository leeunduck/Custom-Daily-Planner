import type { Transition, Variants } from "framer-motion";

/**
 * 단일 폼용: 아래 → 위 슬라이드 + 페이드 인
 */
export const authFadeSlideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

/**
 * 다단계 폼용: 좌우 슬라이드 인/아웃
 */
export const authStepSlide: Variants = {
  enter: (direction: "forward" | "backward") => ({
    opacity: 0,
    x: direction === "forward" ? 40 : -40,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: "forward" | "backward") => ({
    opacity: 0,
    x: direction === "forward" ? -40 : 40,
  }),
};

export const authTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};
