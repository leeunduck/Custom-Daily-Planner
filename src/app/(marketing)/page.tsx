import { LandingFeaturesSection2 } from "@/components/landing/LandingFeatureSection2";
import { LandingFeaturesSection1 } from "@/components/landing/LandingFeaturesSection1";
import { LandingHeroSection } from "@/components/landing/LandingHeroSection";

export const revalidate = 21600;

export default function Home() {
  return (
    <>
      <LandingHeroSection />
      <LandingFeaturesSection1 />
      <LandingFeaturesSection2 />
    </>
  );
}
