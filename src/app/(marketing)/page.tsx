import { LandingHeroSection } from "@/components/landing/LandingHeroSection";

export const revalidate = 21600;

export default function Home() {
  return (
    <>
      <LandingHeroSection />
    </>
  );
}
