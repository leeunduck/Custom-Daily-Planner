import { UseInViewOptions, UseInViewResult } from "@/types/inView";
import { useEffect, useRef, useState } from "react";

export function useInView(options: UseInViewOptions = {}): UseInViewResult {
  const { threshold = 0.2, rootMargin = "0px", once = true } = options;

  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsInView(false);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}
