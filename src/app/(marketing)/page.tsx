"use client";

import { SignupGroupButton } from "@/components/SiginupGroupButton";
import { Button } from "@/shared/button";
import { FeatureButton } from "@/shared/FeatureButton";
import { Icon } from "@/shared/Icon";
import { Input } from "@/shared/input";
import { SelectModuleCard } from "@/shared/SelectModuleCard";
import { SpecialFeatureCard } from "@/shared/SpecialFeatureCard";
import { InputStatus } from "@/types/input";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<InputStatus>("default");

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      {/* Hero CTA */}
      <div className="flex gap-3">
        <Button preset="hero" pill>
          <span className="inline-flex items-center gap-4">
            <Icon name="monitor" />
            <span>Desktop</span>
          </span>
        </Button>
        <Button preset="hero" pill>
          <span className="inline-flex items-center gap-4">
            <Icon name="laptop" />
            <span>Mac</span>
          </span>
        </Button>
        <Button preset="hero" pill>
          <span className="inline-flex items-center gap-4">
            <Icon name="smartphone" />
            <span>iOS</span>
          </span>
        </Button>
      </div>

      <FeatureButton
        icon={<Icon name="calendar" size={19} />}
        title="일간"
        description="오늘의 일정과 할 일을 한눈에"
      />

      <SpecialFeatureCard
        icon={<Icon name="calendar" size={23} />}
        title="스마트 스케줄링"
        description="AI가 추천하는 최적의 일정 배치로 효율성을 극대화하세요."
      />

      <Button preset="auth" color="black">
        로그인 하기
      </Button>

      <section className="space-y-2">
        <h2 className="t-18-b">에러 상태</h2>
        <div className="space-y-1">
          <label htmlFor="email" className="t-14-m text-muted-foreground">
            이메일
          </label>

          {/** status: "default" | "error" */}
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            status={status} // ✅ cva와 1:1
            placeholder="이메일을 입력하세요"
            aria-describedby={status === "error" ? "email-error" : undefined}
            onFocus={() => setStatus("default")}
          />

          {status === "error" && (
            <p id="email-error" className="t-12-m text-destructive">
              이메일 형식을 확인하세요.
            </p>
          )}

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={() => setStatus((v: InputStatus) => (v === "error" ? "default" : "error"))}
              className="rounded-md border px-3 py-1 text-sm"
            >
              에러 토글
            </button>
            <button
              type="button"
              onClick={() => {
                setEmail("");
                setStatus("default");
              }}
              className="rounded-md border px-3 py-1 text-sm"
            >
              값 초기화
            </button>
          </div>
        </div>
      </section>

      <SignupGroupButton />

      <SelectModuleCard
        kind="module" // "module" | "design"
        title="일간 플래너"
        subtitle="Daily Intelligence"
        description="하루를 체계적으로 관리하세요"
        imageSrc="/images/daily-planner.png"
        onClick={() => console.log("일간 플래너 클릭")}
      />

      <SelectModuleCard
        kind="design" // "module" | "design"
        title="일간 플래너"
        subtitle="Daily Intelligence"
        subtitleState="noSelect"
        description="하루를 체계적으로 관리하세요"
        imageSrc="/images/daily-planner.png"
        onClick={() => console.log("일간 플래너 클릭")}
      />
    </div>
  );
}
