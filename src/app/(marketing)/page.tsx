import { makePageMetadata } from "@/seo/metadata";
import { Button } from "@/shared/button";
import { Laptop, Monitor, Smartphone } from "lucide-react";

export const metadata = makePageMetadata({
  title: "PlanMate — 맞춤형 데일리 플래너",
  description: "원하는 모듈을 조합해 나만의 플래너를 만드는 PlanMate 랜딩 페이지",
  canonical: "/",
});

export default function Home() {
  return (
    <div className="flex justify-center m-50">
      <div className="flex gap-13">
        <Button intent="primary" pill>
          <span className="inline-flex items-center gap-2">
            <Monitor className="h-7 w-7" />
            <span>Desktop</span>
          </span>
        </Button>

        <Button intent="primary" pill>
          <span className="inline-flex items-center gap-2">
            <Laptop className="h-7 w-7" />
            <span>Mac</span>
          </span>
        </Button>

        <Button intent="primary" pill>
          <span className="inline-flex items-center gap-2">
            <Smartphone className="h-7 w-7" />
            <span>iOS</span>
          </span>
        </Button>
      </div>
    </div>
  );
}
