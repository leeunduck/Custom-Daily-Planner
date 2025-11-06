"use client";

import { LandingFeatureText } from "@/components/landing/LandingFeatureText";
import { LandingLayoutPreview } from "@/components/landing/LandingLayoutPreview";
import { cn } from "@/lib/utils";
import type { LandingFeaturesSection2Props } from "@/types/landing";

export function LandingFeaturesSection2({ className }: LandingFeaturesSection2Props) {
  return (
    <section
      id="landing-features2"
      aria-labelledby="landing-features2-title"
      className={cn(
        "grid gap-20",
        "md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:gap-35",
        className,
      )}
    >
      <LandingFeatureText className="md:order-2" />
      <LandingLayoutPreview className="md:order-1" />
    </section>
  );
}
