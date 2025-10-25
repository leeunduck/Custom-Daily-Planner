import type { ButtonHTMLAttributes } from "react";

/** 모든 버튼 공통 HTML 속성 + 공용 옵션의 바탕 */
export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean; // <button> 대신 <a>/<Link> 등으로 대체
  className?: string; // 필요 시 tailwind 덧입히기
}

/** 화면에서 실제로 쓰는 공용 옵션(현재는 Hero 기준) */
export type ButtonIntent = "primary";

/** 공용 Button 프롭 — 화면에서 쓰는 건 이 세 가지(+asChild/className) */
export interface ButtonProps extends BaseButtonProps {
  intent?: ButtonIntent; // 색/톤: outline(요구안) | primary(선택)
  glow?: boolean; // 글로우 그림자 on/off (기본 false)
  pill?: boolean; // 캡슐형 on/off (기본 true)
}

/**
 * 확장 가이드:
 * - 공통 규칙(ButtonProps)은 유지하고, 새 버튼만의 옵션은 별도 타입으로 "덧붙인다".
 *   예) FeatureButtonProps extends ButtonProps { tone?: "neutral" | "success"; ... }
 * - 스타일은 /lib/variants/button.feature.ts에 cva로 추가.
 */
