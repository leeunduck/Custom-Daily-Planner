import { LandingHeroAnimation } from "@/components/landing/LandingHeroAnimation";
import { LandingHeroCtas } from "@/components/landing/LandingHeroCtas";
import { LandingHeroTitle } from "@/components/landing/LandingHeroTitle";
import { cn } from "@/lib/utils";
import { LandingHeroSectionProps } from "@/types/landing";

export function LandingHeroSection({ className }: LandingHeroSectionProps) {
  return (
    <section
      id="landing-hero"
      aria-labelledby="landing-hero-title"
      className={cn(
        "grid gap-10",
        "md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center",
        className,
      )}
    >
      <div className="space-y-8">
        <LandingHeroTitle />
        <LandingHeroCtas />
      </div>
      <LandingHeroAnimation />
    </section>
  );
}
