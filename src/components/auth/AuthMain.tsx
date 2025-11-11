import type { AuthCommonProps } from "@/types/auth";

export function AuthMain({ children }: AuthCommonProps) {
  return (
    <main className="w-full" aria-label="인증 본문">
      {children}
    </main>
  );
}
