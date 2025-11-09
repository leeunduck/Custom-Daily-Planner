import { cn } from "@/lib/utils";
import { Button } from "@/shared/button";
import { Icon } from "@/shared/Icon";
import Link from "next/link";

export function LandingHeroCtas() {
  return (
    <div className={cn("flex items-center flex-col gap-6 mt-10", "md:flex-row md:gap-12 md:mt-20")}>
      <Link href="/login">
        <Button
          preset="hero"
          size="sm"
          className={cn("animate-bounce", "md:t-18-m md:px-[3rem] md:h-[5.4rem]")}
        >
          <span className="inline-flex items-center gap-4">
            <Icon name="monitor" className="h-6 w-6 md:h-9 md:w-9" />
            <span>Desktop</span>
          </span>
        </Button>
      </Link>
      <Link href="/login">
        <Button preset="hero" size="sm" className="md:t-18-m md:px-[3rem] md:h-[5.4rem]">
          <span className="inline-flex items-center gap-4">
            <Icon name="laptop" className="h-6 w-6 md:h-9 md:w-9" />
            <span>Mac</span>
          </span>
        </Button>
      </Link>
      <Link href="/login">
        <Button preset="hero" size="sm" className="md:t-18-m md:px-[3rem] md:h-[5.4rem]">
          <span className="inline-flex items-center gap-4">
            <Icon name="smartphone" className="h-6 w-6 md:h-9 md:w-9" />
            <span>iOS</span>
          </span>
        </Button>
      </Link>
    </div>
  );
}
