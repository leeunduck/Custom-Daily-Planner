import { useCurrentYear } from "@/hooks/useCurrentYear";

export function LandingCopyright() {
  const year = useCurrentYear();

  return (
    <p className="text-center text-sm text-[var(--color-gray-500)]">
      © {year} MyPlanMate. All rights reserved.
    </p>
  );
}
