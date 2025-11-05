import { cn } from "@/lib/utils";
import { Button } from "@/shared/button";
import { Icon } from "@/shared/Icon";
import Link from "next/link";

export function LandingHeroCtas() {
  return (
    <div
      className={cn("flex flex-col gap-12 mt-20", "md:flex-row md:items-center md:gap-8 md:mt-10")}
    >
      <Link href="/login">
        <Button preset="hero" pill>
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
