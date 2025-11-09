import type * as React from "react";

/** Feature 버튼 사이즈 스케일 (Button preset과 동일) */
export type FeatureSize = "sm" | "md";

/** 아이콘 박스 라운드 스케일 */
export type IconRadius = "sm" | "md" | "lg" | "xl" | "2xl";

/** 네이티브 버튼 프롭(불필요/충돌 키 제거) */
type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  // 이 컴포넌트가 children을 자체 구성하므로 차단
  | "children"
  // Button(feature)에서 금지되는 color와 충돌 → 제거
  | "color"
  // className은 별도로 재정의
  | "className"
>;

/** 내부 조합에서 사용하지 말아야 할 키를 미리 차단(컴파일 타임 오류) */
type DisallowedPresetKeys = {
  preset?: never;
};

/** FeatureGroupButton 전용 프롭 (콘텐츠/구성 전담) */
export interface FeatureGroupButtonProps extends NativeButtonProps, DisallowedPresetKeys {
  /** 아이콘 (react-lucide 등 그대로 전달) */
  icon?: React.ReactNode;
  /** 제목(필수) */
  title: string;
  /** 보조 설명(선택) */
  description?: string;
  /** Feature 버튼 사이즈 (Button preset과 동일) */
  size?: FeatureSize;
  /** 아이콘 박스 곡률(테마 변수 매핑) */
  iconRadius?: IconRadius;
  /** 유틸 클래스 */
  className?: string;
}
