"use client";

import { LandingFeatureText } from "@/components/landing/LandingFeatureText";
import { LandingLayoutPreview } from "@/components/landing/LandingLayoutPreview";
import { cn } from "@/lib/utils";
import { fadeInFromLeft, sectionTransition, viewportOnce35 } from "@/lib/variants/motion.landing";
import type { LandingFeaturesSection2Props } from "@/types/landing";
import { motion } from "framer-motion";

export function LandingFeaturesSection2({ className }: LandingFeaturesSection2Props) {
  return (
    <motion.section
      id="landing-features2"
      aria-labelledby="landing-features2-title"
      className={cn(
        "grid gap-20",
        "md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:gap-35",
        "transition-all duration-1000 ease-out",
        className,
      )}
      variants={fadeInFromLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce35}
      transition={sectionTransition}
    >
      <LandingFeatureText className="md:order-2" />
      <LandingLayoutPreview className="md:order-1" />
    </motion.section>
  );
}
