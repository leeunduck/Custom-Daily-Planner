import type { MotionProps, TargetAndTransition, Transition, Variants } from "framer-motion";

/** 뷰포트 트리거 공통 설정 */
export const viewportOnce30: MotionProps["viewport"] = {
  once: true,
  amount: 0.3,
};

export const viewportOnce35: MotionProps["viewport"] = {
  once: true,
  amount: 0.35,
};

export const viewportOnce25: MotionProps["viewport"] = {
  once: true,
  amount: 0.25,
};

/** 섹션 기본 등장 트랜지션 */
export const sectionTransition: Transition = {
  duration: 0.7,
  ease: "easeOut",
};

export const headerTransition: Transition = {
  duration: 0.6,
  ease: "easeOut",
};

/** 방향별 페이드 + 슬라이드 */
export const fadeInFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/** Special 섹션 전용 Grid / Item */
export const specialGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

export const specialCardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

/** Hero CTA: 통통 튀는 모션만 사용 */
export const heroCtaBounceAnimate: TargetAndTransition = {
  y: [0, -10, 0, -4, 0],
};

export const heroCtaBounceTransition: Transition = {
  duration: 0.45,
  repeat: Infinity,
  repeatDelay: 0.7,
  ease: "easeInOut",
};
