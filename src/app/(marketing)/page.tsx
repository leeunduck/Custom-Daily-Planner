import { makePageMetadata } from "@/seo/metadata";
import { Button } from "@/shared/button";
import { FeatureGroupButton } from "@/shared/feature-group-button";
import { SpecialFeatureCard } from "@/shared/SpecialFeatureCard";
import { Calendar, Laptop, Monitor, Smartphone } from "lucide-react";

export const metadata = makePageMetadata({
  title: "PlanMate — 맞춤형 데일리 플래너",
  description: "원하는 모듈을 조합해 나만의 플래너를 만드는 PlanMate 랜딩 페이지",
  canonical: "/",
});

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      {/* Hero CTA */}
      <div className="flex gap-3">
        <Button preset="hero" pill>
          <span className="inline-flex items-center gap-2">
            <Monitor className="h-7 w-7" />
            <span>Desktop</span>
          </span>
        </Button>
        <Button preset="hero" pill>
          <span className="inline-flex items-center gap-2">
            <Laptop className="h-7 w-7" />
            <span>Mac</span>
          </span>
        </Button>
        <Button preset="hero" pill>
          <span className="inline-flex items-center gap-2">
            <Smartphone className="h-7 w-7" />
            <span>iOS</span>
          </span>
        </Button>
      </div>

      <FeatureGroupButton
        icon={<Calendar className="h-7 w-7" />}
        title="일간"
        description="오늘의 일정과 할 일을 한눈에"
      />

      <SpecialFeatureCard
        icon={<Calendar className="h-9 w-9" />}
        title="스마트 스케줄링"
        description="AI가 추천하는 최적의 일정 배치로 효율성을 극대화하세요."
      />
    </div>
  );
}
