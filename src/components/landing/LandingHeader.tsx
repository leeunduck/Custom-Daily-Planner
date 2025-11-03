import { cn } from "@/lib/utils";
import { LandingNavBar } from "./LandingNavBar";

export function LandingHeader() {
  return (
    <header className={cn("w-full")} role="banner">
      <LandingNavBar />
    </header>
  );
}
