import { cn } from "@/lib/utils";
import { LandingMainSectionProps } from "@/types/landing";

export function LandingMainSection({ children, className }: LandingMainSectionProps) {
  return (
    <main
      id="landing-main"
      className={cn(
        "mx-auto w-full max-w-[128rem] px-6 mt-30",
        "space-y-[25rem]",
        "md:mt-45 lg:mt-70 md:space-y-[50rem]",
        className,
      )}
    >
      {children}
    </main>
  );
}
