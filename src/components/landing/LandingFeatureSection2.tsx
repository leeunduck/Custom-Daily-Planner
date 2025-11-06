"use client";

import { LandingFeatureText } from "@/components/landing/LandingFeatureText";
import { LandingLayoutPreview } from "@/components/landing/LandingLayoutPreview";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import type { LandingFeaturesSection2Props } from "@/types/landing";

export function LandingFeaturesSection2({ className }: LandingFeaturesSection2Props) {
  const { ref, isInView } = useInView({
    threshold: 0.5,
    once: true,
  });
  return (
    <section
      id="landing-features2"
      aria-labelledby="landing-features2-title"
      ref={ref}
      className={cn(
        "grid gap-20",
        "md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:gap-35",
        "transition-all duration-700 ease-out",
        isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
        className,
      )}
    >
      <LandingFeatureText className="md:order-2" />
      <LandingLayoutPreview className="md:order-1" />
    </section>
  );
}
