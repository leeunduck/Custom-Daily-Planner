import type * as React from "react";

/** FeatureGroupButton 전용 프롭 (콘텐츠/구성 전담) */
export type FeatureGroupButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  icon?: React.ReactNode; // react-lucide 아이콘 그대로
  title: string; // 제목(필수)
  description?: string; // 보조 설명(선택)
  radius?: "sm" | "md" | "lg" | "xl" | "2xl"; // 바깥 곡률(테마 변수 매핑)
  iconRadius?: "sm" | "md" | "lg" | "xl" | "2xl"; // 아이콘 박스 곡률(테마 변수 매핑)
  className?: string;
};
