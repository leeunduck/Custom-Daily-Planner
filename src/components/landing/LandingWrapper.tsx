import { cn } from "@/lib/utils";
import { LandingWrapperProps } from "@/types/landing";

export function LandingWrapper({ children, className }: LandingWrapperProps) {
  return (
    <div className={cn("min-h-screen flex flex-col bg-background text-foreground", className)}>
      {children}
    </div>
  );
}
