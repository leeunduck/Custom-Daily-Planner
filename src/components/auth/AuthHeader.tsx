import { AppLogo } from "@/shared/AppLogo";
import type { AuthCommonProps } from "@/types/auth";

export function AuthHeader({ children }: AuthCommonProps) {
  return (
    <header className="flex flex-col items-center text-center gap-3">
      <AppLogo />
      <div>{children}</div>
    </header>
  );
}
