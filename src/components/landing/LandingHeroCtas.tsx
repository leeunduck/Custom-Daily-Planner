import { cn } from "@/lib/utils";
import { Button } from "@/shared/button";
import { Icon } from "@/shared/Icon";
import Link from "next/link";

export function LandingHeroCtas() {
  return (
    <div className={cn("flex items-center flex-col gap-8 mt-10", "md:flex-row md:gap-12 md:mt-20")}>
      <Link href="/login">
        <Button preset="hero" pill className="animate-bounce md:animate-bounce">
          <span className="inline-flex items-center gap-4">
            <Icon name="monitor" />
            <span>Desktop</span>
          </span>
        </Button>
      </Link>
      <Link href="/login">
        <Button preset="hero" pill>
          <span className="inline-flex items-center gap-4">
            <Icon name="laptop" />
            <span>Mac</span>
          </span>
        </Button>
      </Link>
      <Link href="/login">
        <Button preset="hero" pill>
          <span className="inline-flex items-center gap-4">
            <Icon name="smartphone" />
            <span>iOS</span>
          </span>
        </Button>
      </Link>
    </div>
  );
}
