import { cn } from "@/lib/utils";

export function LandingHeroTitle() {
  return (
    <header className="space-y-8">
      <h1
        id="landing-hero-title"
        className={cn("t-40-b leading-tight text-[var(--color-gray-900)]", "md:t-58-b")}
      >
        나만의 데일리 플래너
        <br />
        PlanMate
      </h1>
      <p className={cn("t-14-m text-[var(--color-gray-600)]", "md:t-18-m")}>
        원하는 기능만 골라 쓰는 맞춤형 일정 관리 서비스입니다.
      </p>
    </header>
  );
}
