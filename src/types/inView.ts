import { RefObject } from "react";

export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export interface UseInViewResult {
  ref: RefObject<HTMLDivElement | null>;
  isInView: boolean;
}
