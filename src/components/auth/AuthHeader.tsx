import { AppLogo } from "@/shared/AppLogo";
import type { AuthCommonProps } from "@/types/auth";

export function AuthHeader({ children }: AuthCommonProps) {
  return (
    <header className="flex flex-col items-center text-center gap-2">
      <AppLogo />
      <div className="space-y-3">{children}</div>
    </header>
  );
}
