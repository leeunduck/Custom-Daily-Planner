"use client";

import { authStepSlide, authTransition } from "@/lib/variants/motion.auth";
import { StepTransitionWrapperProps } from "@/types/auth";
import { AnimatePresence, motion } from "framer-motion";

export function StepTransitionWrapper({
  stepKey,
  direction,
  children,
}: StepTransitionWrapperProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={stepKey}
        variants={authStepSlide}
        initial="enter"
        animate="center"
        exit="exit"
        custom={direction}
        transition={authTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
