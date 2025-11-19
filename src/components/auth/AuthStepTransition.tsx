import { authStepSlide, authTransition } from "@/lib/variants/motion.auth";
import type { AuthStepTransitionProps } from "@/types/auth";
import { AnimatePresence, motion } from "framer-motion";

export function AuthStepTransition({ stepKey, direction, children }: AuthStepTransitionProps) {
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
