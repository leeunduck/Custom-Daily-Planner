import { cn } from "@/lib/utils";
import * as React from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // 크기/레이아웃
        "h-12 w-full min-w-0 rounded-md px-3 py-2 text-sm outline-none transition-colors",
        // 기본 텍스트/배경
        "bg-white text-[#111827]",
        // 기본 테두리(1px, 회색)
        "border border-[var(--color-gray-300)]",
        // 플레이스홀더
        "placeholder:text-[#737373]",
        // ✅ 포커스(활성화): 테두리 두께↑(2px) + 색상 #111827
        "focus-visible:border-2 focus-visible:border-[#111827]",
        // 에러(접근성): aria-invalid=true → 테두리 #dc2626
        "aria-invalid:border-[#dc2626]",
        // 비활성
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // file input 기본값(필요 시)
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
