"use client";

import { LandingSpecialFeatureGrid } from "@/components/landing/LandingSpecialFeatureGrid";
import { cn } from "@/lib/utils";
import { fadeInUp, headerTransition, viewportOnce30 } from "@/lib/variants/motion.landing";
import type { LandingSpecialFeaturesSectionProps } from "@/types/landing";
import { motion } from "framer-motion";

export function LandingSpecialFeaturesSection({ className }: LandingSpecialFeaturesSectionProps) {
  return (
    <section
      id="landing-special-features"
      aria-labelledby="landing-special-features-title"
      className={cn("bg-[var(--color-gray-50)] py-24 md:py-32", className)}
    >
      <div className="container space-y-12 md:space-y-16">
        <motion.header
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce30}
          transition={headerTransition}
          className={cn("space-y-3 text-center transition-all duration-1000 ease-out")}
        >
          <h2
            id="landing-special-features-title"
            className="t-26-b md:t-40-b text-[var(--color-gray-900)]"
          >
            PlanMate의 특별한 기능들
          </h2>
          <p className="t-12-m md:t-16-m text-[var(--color-gray-600)]">
            당신의 생산성을 높이는 스마트한 도구들
          </p>
        </motion.header>

        <LandingSpecialFeatureGrid />
      </div>
    </section>
  );
}
