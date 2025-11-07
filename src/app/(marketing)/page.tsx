import { LandingFeaturesSection2 } from "@/components/landing/LandingFeatureSection2";
import { LandingFeaturesSection1 } from "@/components/landing/LandingFeaturesSection1";
import { LandingFullPageWrapper } from "@/components/landing/LandingFullPageWrapper";
import { LandingHeroSection } from "@/components/landing/LandingHeroSection";
import { LandingSpecialFeaturesSection } from "@/components/landing/LandingSpecialFeaturesSection";

export const revalidate = 21600;

export default function Home() {
  return (
    <LandingFullPageWrapper>
      <LandingHeroSection className="scroll-section" />

      <LandingFeaturesSection1 className="scroll-section" />

      <LandingFeaturesSection2 className="scroll-section" />

      <LandingSpecialFeaturesSection className="scroll-section" />
    </LandingFullPageWrapper>
  );
}
