import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Home() {
  const compact = false;
  return (
    <main className={cn("p-8 space-y-8", compact && "p-6 space-y-6")}>
      <section className="space-y-2">
        <label htmlFor="email" className="text-[#2e2e2e] text-sm font-medium">
          이메일
        </label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </section>
      <section className="space-x-2">
        <Button>버튼 테스트</Button>
        <Button variant="pill">아웃라인</Button>
      </section>
    </main>
  );
}
