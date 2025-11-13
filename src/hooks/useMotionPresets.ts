"use client";

import type { FadeSlideOptions, MotionDirection } from "@/types/motion";
import { useEffect, useState } from "react";

export function useFadeSlideInOnMount(
  direction: MotionDirection = "up",
  options: FadeSlideOptions = {},
): string {
  const { distanceClass, durationClass } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const baseTransition = durationClass ?? "transition-all duration-1000 ease-out";

  const hiddenByDirection: Record<MotionDirection, string> = {
    up: distanceClass ? `opacity-0 ${distanceClass}` : "opacity-0 translate-y-4",
    down: distanceClass ? `opacity-0 ${distanceClass}` : "opacity-0 -translate-y-4",
    left: distanceClass ? `opacity-0 ${distanceClass}` : "opacity-0 translate-x-4",
    right: distanceClass ? `opacity-0 ${distanceClass}` : "opacity-0 -translate-x-4",
  };

  const visibleClass = "opacity-100 translate-x-0 translate-y-0";

  const stateClass = isVisible ? visibleClass : hiddenByDirection[direction];

  return `${baseTransition} ${stateClass}`;
}

export function useStepSlideOnMount(
  from: "left" | "right" = "right",
  options: FadeSlideOptions = {},
): string {
  const { distanceClass, durationClass } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const baseTransition = durationClass ?? "transition-all duration-300 ease-out";

  const hidden =
    from === "right" ? (distanceClass ?? "translate-x-4") : (distanceClass ?? "-translate-x-4");

  const hiddenClass = `opacity-0 ${hidden}`;
  const visibleClass = "opacity-100 translate-x-0";

  const stateClass = isVisible ? visibleClass : hiddenClass;

  return `${baseTransition} ${stateClass}`;
}
