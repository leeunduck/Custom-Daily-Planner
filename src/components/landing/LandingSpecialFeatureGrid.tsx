"use client";

import { SPECIAL_FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  specialCardVariants,
  specialGridVariants,
  viewportOnce25,
} from "@/lib/variants/motion.landing";
import { Icon } from "@/shared/Icon";
import { SpecialFeatureCard } from "@/shared/SpecialFeatureCard";
import { motion } from "framer-motion";

export function LandingSpecialFeatureGrid({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-8",
        className,
      )}
      variants={specialGridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce25}
    >
      {SPECIAL_FEATURES.map((feature) => (
        <motion.div key={feature.title} variants={specialCardVariants}>
          <SpecialFeatureCard
            icon={<Icon name={feature.iconName} size={28} />}
            title={feature.title}
            description={feature.description}
            className="transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
