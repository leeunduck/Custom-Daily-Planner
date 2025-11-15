import type { AuthCommonProps } from "@/types/auth";

export function Title({ children }: AuthCommonProps) {
  return (
    <h1 id="auth-signup-title" className="t-24-b text-[var(--color-gray-900)]">
      {children}
    </h1>
  );
}

export function SubTitle({ children }: AuthCommonProps) {
  return <p className="t-14-m text-[var(--color-gray-600)]">{children}</p>;
}
