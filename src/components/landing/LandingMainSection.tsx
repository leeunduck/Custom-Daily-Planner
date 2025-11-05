import { cn } from "@/lib/utils";
import { LandingMainSectionProps } from "@/types/landing";

export function LandingMainSection({ children, className }: LandingMainSectionProps) {
  return (
    <main
      id="landing-main"
      className={cn("mx-auto w-full max-w-[128rem] px-6 mt-70", "space-y-[10rem]", className)}
    >
      {children}
    </main>
  );
}
