export type InputStatus = "default" | "error";

/** 스타일 상태 Props */
export interface InputStateProps {
  /** 인풋 상태 — 기본(default) 또는 에러(error) */
  status?: InputStatus;
}

/** 최종 컴포넌트 Props */
export type InputProps = InputStateProps;
