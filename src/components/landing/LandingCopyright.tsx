export function LandingCopyright() {
  const year = new Date().getFullYear();
  return (
    <p className="text-center text-sm text-[var(--color-gray-500)]">
      © {year} MyPlanMate. All rights reserved.
    </p>
  );
}
